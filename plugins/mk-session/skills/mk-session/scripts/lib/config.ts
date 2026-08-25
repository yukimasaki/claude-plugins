/**
 * 設定の 3 層解決（設計判断 D7）。
 *
 * 既定値 < `.claude/mk-session.json` < コマンド引数 の順に上書きする。
 * 壊れた設定は既定値へ黙って倒さず、その場で Error にする（黙って別の値で動くと
 * 「設定したのに効いていない」が発見できないため）。
 */
import { DEFAULT_BRANCH_TEMPLATE } from "./branch-name.ts";

export type WorktreeConfig = {
  /** "auto" | "none" | 委譲先の skill 名 */
  delegate: string;
  /** worktree を作るパスのテンプレート */
  path: string;
  /** ブランチ名のテンプレート */
  branch: string;
  /** メインクローンから symlink する env ファイル */
  env: string[];
  /** 依存インストールコマンド。null ならロックファイルから推定する */
  install: string | null;
};

export type AgentConfig = {
  /** 起動するコマンド（既定は claude） */
  command: string;
  /** agmsg の agent type */
  agmsgType: string;
  /** 起動時に渡す引数 */
  launchArgs: string[];
  /**
   * セッション表示名を渡すフラグ（claude の `-n`）。
   * 対応しないエージェントでは null にすると省略される。
   */
  sessionNameFlag: string | null;
};

/** team 名がどの層で決まったか（設計判断 D1） */
export type TeamSource = "default" | "file" | "cli";

export type ResolvedConfig = {
  worktree: WorktreeConfig;
  agent: AgentConfig;
  /** team 名のテンプレート */
  team: string;
  /**
   * team 名の出どころ。`cli` = `--team` での明示指定 = Epic 相乗り、と見なす。
   * 解決後の文字列だけでは、リポジトリ既定を変えただけの `file` 由来と区別できない。
   */
  teamSource: TeamSource;
  /** 疎通確認の待ち時間（秒） */
  handshakeTimeoutSec: number;
};

export type CliOverrides = {
  team?: string;
  agent?: string;
  agmsgType?: string;
  delegate?: string;
  /** true のとき --dangerously-skip-permissions を足す */
  yolo?: boolean;
  handshakeTimeoutSec?: number;
};

export const BYPASS_PERMISSIONS_FLAG = "--dangerously-skip-permissions";

/**
 * 権限確認を飛ばすフラグはエージェントごとに違う。
 * 未知のコマンドに claude のフラグを付けると起動そのものが失敗するため、
 * 分かるものだけを持ち、それ以外は呼び出し側に明示させる。
 */
export const BYPASS_FLAG_BY_COMMAND: Record<string, string> = {
  claude: BYPASS_PERMISSIONS_FLAG,
  codex: "--dangerously-bypass-approvals-and-sandbox",
};

/** agent コマンド → agmsg の type。未知のコマンドは呼び出し側に明示させる */
export const AGMSG_TYPE_BY_COMMAND: Record<string, string> = {
  claude: "claude-code",
  codex: "codex",
  gemini: "gemini",
  copilot: "copilot",
  opencode: "opencode",
  antigravity: "antigravity",
};

export const DEFAULT_CONFIG: ResolvedConfig = {
  worktree: {
    delegate: "auto",
    path: "../{repo}-{issue}",
    branch: DEFAULT_BRANCH_TEMPLATE,
    env: [".env.local"],
    install: null,
  },
  agent: {
    command: "claude",
    agmsgType: "claude-code",
    launchArgs: ["--model", "default"],
    sessionNameFlag: "-n",
  },
  team: "{repo}-{issue}",
  teamSource: "default",
  handshakeTimeoutSec: 90,
};

/**
 * 設定ファイル（パース済み JSON）と CLI 引数を既定値へ重ねる。
 *
 * @param fileConfig `.claude/mk-session.json` の中身。未配置なら undefined
 */
export function resolveConfig(
  fileConfig?: unknown,
  cli: CliOverrides = {},
): ResolvedConfig {
  const file = asObject(fileConfig, "mk-session.json");
  const fileWorktree = asObject(file.worktree, "worktree");
  const fileAgent = asObject(file.agent, "agent");

  const command = cli.agent ?? asString(fileAgent.command, "agent.command") ??
    DEFAULT_CONFIG.agent.command;

  const agmsgType = cli.agmsgType ??
    (cli.agent ? agmsgTypeFor(cli.agent) : undefined) ??
    asString(fileAgent.agmsgType, "agent.agmsgType") ??
    agmsgTypeFor(command);

  // 既定の launchArgs / sessionNameFlag は claude 固有（`--model default` / `-n`）。
  // 別のエージェントに差し替えたときにそのまま付けると起動に失敗するので、
  // 設定ファイルで明示されていない限り引数なしで起動する。
  const isDefaultCommand = basename(command) === DEFAULT_CONFIG.agent.command;
  const launchArgs = asStringArray(fileAgent.launchArgs, "agent.launchArgs") ??
    (isDefaultCommand ? DEFAULT_CONFIG.agent.launchArgs : []);

  const fileTeam = asString(file.team, "team");
  const team = cli.team ?? fileTeam ?? DEFAULT_CONFIG.team;
  const teamSource: TeamSource = cli.team !== undefined
    ? "cli"
    : fileTeam !== undefined
    ? "file"
    : "default";

  return {
    worktree: {
      delegate: cli.delegate ??
        asString(fileWorktree.delegate, "worktree.delegate") ??
        DEFAULT_CONFIG.worktree.delegate,
      path: asString(fileWorktree.path, "worktree.path") ??
        DEFAULT_CONFIG.worktree.path,
      branch: asString(fileWorktree.branch, "worktree.branch") ??
        DEFAULT_CONFIG.worktree.branch,
      env: asStringArray(fileWorktree.env, "worktree.env") ??
        DEFAULT_CONFIG.worktree.env,
      install: asString(fileWorktree.install, "worktree.install") ??
        DEFAULT_CONFIG.worktree.install,
    },
    agent: {
      command,
      agmsgType,
      launchArgs: cli.yolo ? withBypassFlag(launchArgs, command) : launchArgs,
      sessionNameFlag: sessionNameFlag(fileAgent, isDefaultCommand),
    },
    team,
    teamSource,
    handshakeTimeoutSec: cli.handshakeTimeoutSec ??
      asPositiveNumber(file.handshakeTimeoutSec, "handshakeTimeoutSec") ??
      DEFAULT_CONFIG.handshakeTimeoutSec,
  };
}

/** 未知のコマンドは agmsg の type を推定できないので、そのままコマンド名を返す */
export function agmsgTypeFor(command: string): string {
  return AGMSG_TYPE_BY_COMMAND[basename(command)] ?? basename(command);
}

function basename(command: string): string {
  return command.split("/").pop() || command;
}

/**
 * 権限確認を飛ばすフラグを 1 度だけ足す（設計判断 D8）。
 *
 * フラグ名が分からないエージェントでは、当てずっぽうで付けると起動が壊れるため
 * 設定ファイルへの明示を求めてエラーにする。
 */
export function withBypassFlag(args: string[], command = "claude"): string[] {
  const flag = BYPASS_FLAG_BY_COMMAND[basename(command)];
  if (!flag) {
    throw new Error(
      `${command} の権限確認を飛ばす引数が分かりません。` +
        "agent.launchArgs に直接書いてください",
    );
  }
  return args.includes(flag) ? args : [...args, flag];
}

/** `{repo}` `{issue}` `{slug}` `{type}` `{branch}` を差し込む */
export function renderTemplate(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) => {
    const value = vars[key];
    return value === undefined ? whole : String(value);
  });
}

/** ロックファイルから依存インストールコマンドを推定する */
export function detectInstallCommand(entries: string[]): string | null {
  const files = new Set(entries);
  if (files.has("bun.lock") || files.has("bun.lockb")) return "bun install";
  if (files.has("pnpm-lock.yaml")) return "pnpm install";
  if (files.has("yarn.lock")) return "yarn install";
  if (files.has("package-lock.json")) return "npm install";
  if (files.has("package.json")) return "npm install";
  return null;
}

/** `null` を「フラグ不要」の意思表示として扱うため、未指定と区別する */
function sessionNameFlag(
  fileAgent: Record<string, unknown>,
  isDefaultCommand: boolean,
): string | null {
  if (!("sessionNameFlag" in fileAgent)) {
    return isDefaultCommand ? DEFAULT_CONFIG.agent.sessionNameFlag : null;
  }
  const value = fileAgent.sessionNameFlag;
  if (value === null) return null;
  if (typeof value !== "string") {
    throw new Error("agent.sessionNameFlag は文字列か null である必要があります");
  }
  return value;
}

function asObject(value: unknown, label: string): Record<string, unknown> {
  if (value === undefined || value === null) return {};
  if (typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label} はオブジェクトである必要があります`);
  }
  return value as Record<string, unknown>;
}

function asString(value: unknown, label: string): string | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "string") {
    throw new Error(`${label} は文字列である必要があります`);
  }
  return value;
}

function asStringArray(value: unknown, label: string): string[] | undefined {
  if (value === undefined || value === null) return undefined;
  if (!Array.isArray(value) || value.some((v) => typeof v !== "string")) {
    throw new Error(`${label} は文字列の配列である必要があります`);
  }
  return value as string[];
}

/**
 * 0 や負値を通すと待ち時間が即座に尽き、正常なセットアップでも
 * 「疎通確認がタイムアウトしました」で終わってしまう。
 */
function asPositiveNumber(value: unknown, label: string): number | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error(`${label} は数値である必要があります`);
  }
  if (value <= 0) {
    throw new Error(`${label} は正の数である必要があります`);
  }
  return value;
}

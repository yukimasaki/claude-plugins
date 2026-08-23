/**
 * コマンド引数のパース。
 *
 * `/mk-session 123 --team acme-3691 --yolo` の形と、
 * `/mk-session cleanup 123` の 2 モードを受ける。
 */
import type { CliOverrides } from "./config.ts";

export type ParsedArgs = {
  mode: "setup" | "cleanup";
  /** setup は 1 件、cleanup は複数指定できる */
  issues: number[];
  /** `--branch` の明示指定 */
  branch?: string;
  /** herdr の workspace id。未指定なら環境変数から解決する */
  workspace?: string;
  /** worktree のパス（attach / cleanup で使う） */
  path?: string;
  /** Issue タイトル。セッション表示名に使う */
  title?: string;
  /** 親（呼び出し側）の agmsg 名。既定は lead */
  lead?: string;
  /** 子に渡す本題。既定は Issue の取得と着手 */
  task?: string;
  /** 実際の副作用を起こさず、実行予定のコマンドだけを出す */
  dryRun: boolean;
  overrides: CliOverrides;
};

const CLEANUP_ALIASES = new Set(["cleanup", "clean", "rm", "remove"]);

/** 値を取るフラグ（`--key=value` と `--key value` の両方を受ける） */
const VALUE_FLAGS: Record<string, keyof ParsedArgs | keyof CliOverrides> = {
  "--branch": "branch",
  "--team": "team",
  "--agent": "agent",
  "--agmsg-type": "agmsgType",
  "--delegate": "delegate",
  "--workspace": "workspace",
  "--path": "path",
  "--title": "title",
  "--lead": "lead",
  "--task": "task",
  "--timeout": "handshakeTimeoutSec",
};

export function parseArgs(argv: string[]): ParsedArgs {
  const tokens = [...argv];
  const parsed: ParsedArgs = {
    mode: "setup",
    issues: [],
    dryRun: false,
    overrides: {},
  };

  if (tokens.length > 0 && CLEANUP_ALIASES.has(tokens[0])) {
    parsed.mode = "cleanup";
    tokens.shift();
  }

  while (tokens.length > 0) {
    const token = tokens.shift() as string;

    if (token === "--yolo") {
      parsed.overrides.yolo = true;
      continue;
    }
    if (token === "--dry-run") {
      parsed.dryRun = true;
      continue;
    }

    if (token.startsWith("--")) {
      const [flag, inlineValue] = splitFlag(token);
      const target = VALUE_FLAGS[flag];
      if (!target) {
        throw new Error(`未知のオプションです: ${flag}`);
      }
      const value = inlineValue ?? tokens.shift();
      // `--branch=` のように空値を渡されたときに黙って既定値へ倒すと、
      // 「指定したのに効いていない」が発見できない
      if (value === undefined || value === "" || value.startsWith("--")) {
        throw new Error(`${flag} には値が必要です`);
      }
      assign(parsed, target, value, flag);
      continue;
    }

    parsed.issues.push(parseIssueNumber(token));
  }

  if (parsed.issues.length === 0) {
    throw new Error("Issue 番号を指定してください（例: /mk-session 123）");
  }
  if (parsed.mode === "setup" && parsed.issues.length > 1) {
    throw new Error(
      "セットアップは 1 件ずつ実行してください（複数指定は cleanup のみ）",
    );
  }

  return parsed;
}

/** `#123` `123` を数値にする。それ以外は入力ミスとして弾く */
export function parseIssueNumber(token: string): number {
  const normalized = token.replace(/^#/, "");
  if (!/^\d+$/.test(normalized)) {
    throw new Error(`Issue 番号として解釈できません: ${token}`);
  }
  return Number(normalized);
}

function splitFlag(token: string): [string, string | undefined] {
  const index = token.indexOf("=");
  if (index === -1) return [token, undefined];
  return [token.slice(0, index), token.slice(index + 1)];
}

function assign(
  parsed: ParsedArgs,
  target: string,
  value: string,
  flag: string,
): void {
  if (target === "branch") {
    parsed.branch = value;
    return;
  }
  if (target === "workspace" || target === "path" || target === "title" ||
      target === "lead" || target === "task") {
    (parsed as Record<string, unknown>)[target] = value;
    return;
  }
  if (target === "handshakeTimeoutSec") {
    const seconds = Number(value);
    if (!Number.isFinite(seconds) || seconds <= 0) {
      throw new Error(`${flag} には正の秒数を指定してください: ${value}`);
    }
    parsed.overrides.handshakeTimeoutSec = seconds;
    return;
  }
  (parsed.overrides as Record<string, unknown>)[target] = value;
}

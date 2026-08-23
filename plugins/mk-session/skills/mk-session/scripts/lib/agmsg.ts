/**
 * agmsg（エージェント間メッセージ）のラッパ。
 *
 * agmsg は CLI ではなく skill 同梱のシェルスクリプト群として配布されるため、
 * scripts ディレクトリを探して直接叩く。
 */
import { existsSync } from "node:fs";
import path from "node:path";
import os from "node:os";
import { run, type RunOptions } from "./exec.ts";

/** 探索順。環境変数 AGMSG_HOME があれば最優先 */
export function agmsgScriptsDirCandidates(
  env: NodeJS.ProcessEnv = process.env,
  home = os.homedir(),
): string[] {
  const candidates: string[] = [];
  if (env.AGMSG_HOME) candidates.push(path.join(env.AGMSG_HOME, "scripts"));
  candidates.push(path.join(home, ".agents", "skills", "agmsg", "scripts"));
  candidates.push(
    path.join(home, ".claude", "skills", "agmsg", "scripts"),
  );
  return candidates;
}

/** agmsg が導入されていなければ null（該当段をスキップする / 設計判断 D4） */
export function findAgmsgScriptsDir(
  env: NodeJS.ProcessEnv = process.env,
  home = os.homedir(),
): string | null {
  for (const dir of agmsgScriptsDirCandidates(env, home)) {
    if (existsSync(path.join(dir, "send.sh"))) return dir;
  }
  return null;
}

export type AgmsgContext = {
  scriptsDir: string;
  team: string;
};

export function joinTeam(
  ctx: AgmsgContext,
  agentId: string,
  agentType: string,
  projectPath: string,
  options: RunOptions = {},
) {
  return run(
    path.join(ctx.scriptsDir, "join.sh"),
    [ctx.team, agentId, agentType, projectPath],
    options,
  );
}

/**
 * 受信モードを monitor にする。
 *
 * 新しい worktree には `.claude/settings.local.json` が無く、delivery が off の
 * ままだと送っても届かない。親から先回りして設定しておく。
 */
export function setDeliveryMonitor(
  scriptsDir: string,
  agentType: string,
  projectPath: string,
  options: RunOptions = {},
) {
  return run(
    path.join(scriptsDir, "delivery.sh"),
    ["set", "monitor", agentType, projectPath],
    options,
  );
}

export function sendMessage(
  ctx: AgmsgContext,
  from: string,
  to: string,
  body: string,
  options: RunOptions = {},
) {
  return run(
    path.join(ctx.scriptsDir, "send.sh"),
    [ctx.team, from, to, body],
    options,
  );
}

export function readHistory(
  ctx: AgmsgContext,
  agentId: string,
  limit = 20,
  options: RunOptions = {},
): string {
  const result = run(
    path.join(ctx.scriptsDir, "history.sh"),
    [ctx.team, agentId, String(limit)],
    { ...options, dryRun: false },
  );
  return result.stdout;
}

export function leaveTeam(
  ctx: AgmsgContext,
  agentId: string,
  options: RunOptions = {},
) {
  return run(
    path.join(ctx.scriptsDir, "leave.sh"),
    [ctx.team, agentId],
    options,
  );
}

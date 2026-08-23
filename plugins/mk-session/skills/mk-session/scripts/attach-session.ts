#!/usr/bin/env bun
/**
 * セッション段（設計判断 D1 / D4 / D5 / D6）。
 *
 * タブ作成 → エージェント起動 → 余った空ペインの始末 → team join →
 * 受信モードの設定 → 疎通確認 までを 1 本で通す。途中で止めると
 * 「タブはあるのに指示が届かない」状態が生まれるため、段を分けない。
 */
import path from "node:path";
import {
  findAgmsgScriptsDir,
  joinTeam,
  readHistory,
  sendMessage,
  setDeliveryMonitor,
  type AgmsgContext,
} from "./lib/agmsg.ts";
import { parseArgs } from "./lib/cli.ts";
import { renderTemplate, resolveConfig } from "./lib/config.ts";
import { hasCommand } from "./lib/exec.ts";
import {
  buildHandshakeToken,
  buildKickoffPrompt,
  buildProbeMessage,
  hasHandshakeReply,
  parseHistory,
} from "./lib/handshake.ts";
import {
  closePane,
  createTab,
  listPanes,
  paneRun,
  startAgent,
} from "./lib/herdr.ts";
import { getRepoName, getRepoRoot, loadConfigFile } from "./lib/repo.ts";

const parsed = parseArgs(process.argv.slice(2));
const issue = parsed.issues[0];
const worktreePath = parsed.path;
if (!worktreePath) {
  fail("--path に worktree のパスを渡してください");
}

const repoRoot = getRepoRoot();
const repoName = getRepoName(repoRoot);
const config = resolveConfig(loadConfigFile(repoRoot), parsed.overrides);
const dryRun = parsed.dryRun;
const team = renderTemplate(config.team, { repo: repoName, issue });
const lead = parsed.lead ?? process.env.MK_SESSION_LEAD ?? "lead";
// 親（このスクリプトを呼んでいる側）のエージェント種別。claude 以外から呼ぶ場合に上書きする
const leadType = process.env.MK_SESSION_LEAD_TYPE ?? "claude-code";

// --- 前提ツールの確認（未導入なら該当段をスキップして正常終了する） ---
if (!hasCommand("herdr")) {
  finish(3, {
    status: "skipped",
    reason: "herdr が未導入のため、タブ作成とエージェント起動をスキップしました",
  });
}

const workspace = parsed.workspace ?? process.env.HERDR_WORKSPACE_ID;
if (!workspace) {
  finish(3, {
    status: "skipped",
    reason:
      "herdr の workspace id が分かりません（--workspace か HERDR_WORKSPACE_ID を指定してください）",
  });
}

// --- タブとエージェント ---
const tab = createTab(
  { workspace, cwd: worktreePath, label: String(issue) },
  { cwd: repoRoot, dryRun },
);

const agmsgScriptsDir = findAgmsgScriptsDir();
const readyToken = buildHandshakeToken(issue, `ready-${stamp()}`);
const probeToken = buildHandshakeToken(issue, `probe-${stamp()}`);

const kickoff = agmsgScriptsDir
  ? buildKickoffPrompt({
    issue,
    team,
    lead,
    readyToken,
    agmsgScriptsDir,
    task: parsed.task ??
      (parsed.title
        ? `#${issue}（${parsed.title}）を取得して着手して`
        : undefined),
  })
  : parsed.task ?? `#${issue} を取得して着手して`;

const sessionName = parsed.title ? `${issue} ${parsed.title}` : String(issue);
const argv = [
  config.agent.command,
  ...config.agent.launchArgs,
  ...(config.agent.sessionNameFlag ? [config.agent.sessionNameFlag, sessionName] : []),
  kickoff,
];

// agent start は既存 pane を使わず split するため、タブ作成時の空シェルが余る。
// 閉じてよいのは「起動前から居た pane」だけ。起動直後の pane list は agent の
// 登録が間に合わず、エージェントの pane まで空と見えることがある（タブごと消える）。
const rootPanes = dryRun
  ? []
  : listPanes(workspace)
    .filter((pane) => pane.tab_id === tab.tabId)
    .map((pane) => pane.pane_id);

startAgent(
  { name: `issue${issue}`, tabId: tab.tabId, workspace, cwd: worktreePath, argv },
  { cwd: repoRoot, dryRun },
);

const agentPane = dryRun
  ? "(dry-run)"
  : await waitForAgentPane(workspace, tab.tabId, rootPanes, 20);

if (agentPane === "(unknown)") {
  // エージェントの pane が現れないまま root pane を閉じるとタブごと消える。
  // 何が起きたか見えるように、残したまま失敗として返す。
  finish(2, {
    status: "agent-not-started",
    reason:
      `エージェントの pane が現れませんでした（${config.agent.command} の起動を確認してください）`,
    tabId: tab.tabId,
    team,
  });
}

for (const paneId of rootPanes) closePane(paneId, { dryRun });

// --- agmsg（team join → 受信モード → 疎通確認） ---
if (!agmsgScriptsDir) {
  finish(3, {
    status: "skipped",
    reason: "agmsg が未導入のため、team join と疎通確認をスキップしました",
    tabId: tab.tabId,
    paneId: agentPane,
  });
}

const ctx: AgmsgContext = { scriptsDir: agmsgScriptsDir, team };
joinTeam(ctx, lead, leadType, repoRoot, { dryRun });
joinTeam(ctx, String(issue), config.agent.agmsgType, worktreePath, { dryRun });
setDeliveryMonitor(agmsgScriptsDir, config.agent.agmsgType, worktreePath, {
  dryRun,
});

if (dryRun) {
  finish(0, {
    status: "dry-run",
    tabId: tab.tabId,
    paneId: agentPane,
    team,
    lead,
  });
}

// 1. 子の初期化完了（ready）を待つ
const ready = await waitFor(readyToken, config.handshakeTimeoutSec);
if (!ready) {
  // ここに来る時点で agentPane は判明している（未検出なら上で exit 2 済み）。
  // 起動プロンプトが流れていない可能性があるので 1 度だけ流し込みに落とす
  paneRun(agentPane, `/agmsg actas ${issue}`);
  paneRun(agentPane, "/agmsg mode monitor");
  await waitFor(readyToken, Math.min(30, config.handshakeTimeoutSec));
}

// 2. 親 → 子 → 親 の往復を確かめる（送信成功は届いた証拠にならない）
sendMessage(
  ctx,
  lead,
  String(issue),
  buildProbeMessage({ issue, team, lead, token: probeToken, agmsgScriptsDir }),
);
const roundTrip = await waitFor(probeToken, config.handshakeTimeoutSec);

if (!roundTrip) {
  finish(2, {
    status: "handshake-failed",
    reason:
      `疎通確認がタイムアウトしました（${config.handshakeTimeoutSec} 秒）。作ったものは残してあります`,
    tabId: tab.tabId,
    paneId: agentPane,
    team,
    lead,
    cleanup: `/mk-session cleanup ${issue}`,
  });
}

finish(0, {
  status: "ok",
  tabId: tab.tabId,
  paneId: agentPane,
  team,
  lead,
  worktreePath,
  issue,
});

/** agent start が split した pane が現れるまで待つ（起動前から居た pane は除く） */
async function waitForAgentPane(
  workspaceId: string,
  tabId: string,
  knownPanes: string[],
  timeoutSec: number,
): Promise<string> {
  const deadline = Date.now() + timeoutSec * 1000;
  while (Date.now() < deadline) {
    const found = listPanes(workspaceId).find(
      (pane) =>
        pane.tab_id === tabId && !knownPanes.includes(pane.pane_id),
    );
    if (found) return found.pane_id;
    await sleep(1000);
  }
  return "(unknown)";
}

/** 子からの返信に指定トークンが現れるまで待つ */
async function waitFor(token: string, timeoutSec: number): Promise<boolean> {
  const deadline = Date.now() + timeoutSec * 1000;
  while (Date.now() < deadline) {
    const entries = parseHistory(readHistory(ctx, String(issue), 30));
    if (hasHandshakeReply(entries, { from: String(issue), to: lead, token })) {
      return true;
    }
    await sleep(2000);
  }
  return false;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function stamp(): string {
  return Math.random().toString(36).slice(2, 8);
}

function finish(code: number, payload: Record<string, unknown>): never {
  console.log(`MK_SESSION_RESULT=${JSON.stringify(payload)}`);
  process.exit(code);
}

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

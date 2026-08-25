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
import { hasCommand, type RunResult } from "./lib/exec.ts";
import {
  buildHandshakeToken,
  buildKickoffPrompt,
  buildLeadDeclaration,
  buildProbeMessage,
  hasHandshakeReply,
  parseHistory,
  type LeadRole,
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
// リーダー役の所在（設計判断 D1 / D5）。`--lead-mode` が自動判定より優先される。
// 自動判定は「`--team` での明示指定があったか」だけを見る。指定があれば Epic への
// 相乗りなので統括セッションがリーダーのまま、無ければ単体 Issue なので子へ移譲する。
const leadRole: LeadRole = parsed.leadMode === "delegate"
  ? "delegated"
  : parsed.leadMode === "keep"
  ? "kept"
  : config.teamSource === "cli"
  ? "kept"
  : "delegated";
const parentCanExit = leadRole === "delegated";

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

const task = parsed.task ??
  (parsed.title
    ? `#${issue}（${parsed.title}）を取得して着手して`
    : `#${issue} を取得して着手して`);

// agmsg が無いと 4 手順（actas / monitor / ready / probe 返信）は組めないが、
// 役割の宣言だけは agmsg と関係なく渡せる。ここで素の task に落とすと、
// 縮退時だけ黙って旧挙動（呼び出し元がリーダーのまま）へ戻ってしまう。
const kickoff = agmsgScriptsDir
  ? buildKickoffPrompt({
    issue,
    team,
    lead,
    readyToken,
    agmsgScriptsDir,
    task,
    leadRole,
  })
  : leadRole === "delegated"
  ? `${buildLeadDeclaration({ issue, lead })}\n\nそのあと本題に入って: ${task}`
  : task;

const sessionName = parsed.title ? `${issue} ${parsed.title}` : String(issue);
const argv = [
  config.agent.command,
  ...config.agent.launchArgs,
  ...(config.agent.sessionNameFlag ? [config.agent.sessionNameFlag, sessionName] : []),
  kickoff,
];

// --- agmsg の登録は起動より先に済ませる ---
// 子は 1 ターン目に send.sh で ready を返す。send.sh は team に未登録の
// from/to を拒否するため、起動後に join すると最初の ready が落ちる。
// delivery.sh の SessionStart hook も、子のセッションが始まる前に書いておく。
if (agmsgScriptsDir) {
  const joinCtx: AgmsgContext = { scriptsDir: agmsgScriptsDir, team };
  requireAgmsg(
    joinTeam(joinCtx, lead, leadType, repoRoot, { dryRun }),
    "join.sh（親）",
  );
  requireAgmsg(
    joinTeam(joinCtx, String(issue), config.agent.agmsgType, worktreePath, {
      dryRun,
    }),
    "join.sh（子）",
  );
  requireAgmsg(
    setDeliveryMonitor(agmsgScriptsDir, config.agent.agmsgType, worktreePath, {
      dryRun,
    }),
    "delivery.sh set monitor",
  );
}

// agent start は既存 pane を使わず split するため、タブ作成時の空シェルが余る。
// 閉じてよいのは「起動前から居た pane」だけ。起動直後の pane list は agent の
// 登録が間に合わず、エージェントの pane まで空と見えることがある（タブごと消える）。
// tab create 直後の pane list はまだ空のことがあるので、少し待って掴む。
// 空のまま進むと root pane 自体を「エージェントの pane」と誤認する。
const rootPanes = dryRun
  ? []
  : await waitForRootPanes(workspace, tab.tabId, 10);

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

// --- agmsg（疎通確認） ---
if (!agmsgScriptsDir) {
  // 役割宣言は起動プロンプトに入っているので leadRole はそのまま返す。
  // ただし agmsg が無い = 子からの相談・報告を受け取る経路が無いので、
  // 「閉じてよい」とは言わない（parentCanExit は false）。
  finish(3, {
    status: "skipped",
    reason: leadRole === "delegated"
      ? "agmsg が未導入のため、team join と疎通確認をスキップしました（リーダー役は子に移していますが、相談・報告の経路がありません。呼び出し元は閉じずに残してください）"
      : "agmsg が未導入のため、team join と疎通確認をスキップしました",
    tabId: tab.tabId,
    paneId: agentPane,
    leadRole,
    parentCanExit: false,
  });
}

const ctx: AgmsgContext = { scriptsDir: agmsgScriptsDir, team };

if (dryRun) {
  finish(0, {
    status: "dry-run",
    tabId: tab.tabId,
    paneId: agentPane,
    team,
    lead,
    leadRole,
    parentCanExit,
  });
}

// 1. 子の初期化完了（ready）を待つ
const ready = await waitFor(readyToken, config.handshakeTimeoutSec);
if (!ready) {
  // 起動プロンプトが流れていない可能性があるので 1 度だけ流し込みに落とす。
  // ただし root pane を 1 つも掴めていないときは agentPane が root（素のシェル）
  // である可能性があり、そこへ打つとスラッシュコマンドがシェルに流れる。
  if (rootPanes.length > 0) {
    paneRun(agentPane, `/agmsg actas ${issue}`);
    paneRun(agentPane, "/agmsg mode monitor");
    await waitFor(readyToken, Math.min(30, config.handshakeTimeoutSec));
  }
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
  // 子は既に役割宣言込みの起動プロンプトを受け取っている。ここで leadRole を落とすと
  // 呼び出し元が「まだ誰もリーダーではない」と誤認して自分の worktree（別ブランチ）で
  // 実装を始めてしまう。役割は伝えたうえで、終了してよいとは言わない。
  finish(2, {
    status: "handshake-failed",
    reason:
      `疎通確認がタイムアウトしました（${config.handshakeTimeoutSec} 秒）。作ったものは残してあります`,
    tabId: tab.tabId,
    paneId: agentPane,
    team,
    lead,
    leadRole,
    parentCanExit: false,
    cleanup: `/mk-session cleanup ${issue}`,
  });
}

finish(0, {
  status: "ok",
  tabId: tab.tabId,
  paneId: agentPane,
  team,
  lead,
  leadRole,
  parentCanExit,
  worktreePath,
  issue,
});

/**
 * agmsg のセットアップは失敗しても exit 0 の run() で呼ぶため、握り潰すと
 * 90 秒後に「疎通確認がタイムアウト」としてしか現れない（例: 未知の agent type を
 * join.sh が拒否したケース）。原因が見える形でその場で止める。
 */
function requireAgmsg(result: RunResult, label: string): void {
  if (result.skipped || result.status === 0) return;
  finish(2, {
    status: "agmsg-setup-failed",
    reason: `${label} が失敗しました (exit ${result.status}): ${
      result.stderr || result.stdout
    }`,
    tabId: tab.tabId,
    team,
    lead,
    cleanup: `/mk-session cleanup ${issue}`,
  });
}

/** tab create 直後の pane が pane list に現れるまで待つ */
async function waitForRootPanes(
  workspaceId: string,
  tabId: string,
  timeoutSec: number,
): Promise<string[]> {
  const deadline = Date.now() + timeoutSec * 1000;
  for (;;) {
    const panes = listPanes(workspaceId)
      .filter((pane) => pane.tab_id === tabId)
      .map((pane) => pane.pane_id);
    if (panes.length > 0 || Date.now() >= deadline) return panes;
    await sleep(500);
  }
}

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

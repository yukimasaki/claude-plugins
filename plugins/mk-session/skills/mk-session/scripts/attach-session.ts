#!/usr/bin/env bun
/**
 * セッション段（設計判断 D1 / D4 / D5 / D6）。
 *
 * 既定は「タブ作成 → エージェント起動 → 余った空ペインの始末」まで。
 * 起動したセッションは Issue を読み込んで要約したところで止まり、指示を待つ。
 *
 * `--orchestrate` を付けたときだけ、続けて team join → 受信モードの設定 →
 * 疎通確認 まで通す。統括セッションと各セッションが必ずメッセージを
 * やり取りできる状態にするのがこのモードの目的なので、agmsg が使えなければ
 * タブを作る前に止める。
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
  buildProbeMessage,
  buildStandbyPrompt,
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
// オーケストレーションモード（設計判断 D1 / D5）。
// 既定では agmsg に触れない。統括が要るときだけ明示的に立ち上げる。
const orchestrate = parsed.orchestrate;
const mode = orchestrate ? "orchestrate" : "standby";

// --- 前提ツールの確認（未導入なら該当段をスキップして正常終了する） ---
if (!hasCommand("herdr")) {
  finish(3, {
    status: "skipped",
    mode,
    reason: "herdr が未導入のため、タブ作成とエージェント起動をスキップしました",
  });
}

const workspace = parsed.workspace ?? process.env.HERDR_WORKSPACE_ID;
if (!workspace) {
  finish(3, {
    status: "skipped",
    mode,
    reason:
      "herdr の workspace id が分かりません（--workspace か HERDR_WORKSPACE_ID を指定してください）",
  });
}

// --- agmsg（オーケストレーションモードの前提） ---
// 疎通できない統括は成立しないので、タブを作る前に止める。作ってから落とすと
// 片付けが要るうえ、指示の届かないタブが残る。
const agmsgScriptsDir = orchestrate ? findAgmsgScriptsDir() : undefined;
if (orchestrate && !agmsgScriptsDir) {
  finish(2, {
    status: "agmsg-missing",
    mode,
    reason:
      "agmsg が見つかりません。--orchestrate は統括セッションとの疎通が前提なので、" +
      "agmsg を導入するか --orchestrate を外して実行してください",
  });
}

// --- タブとエージェント ---
const tab = createTab(
  { workspace, cwd: worktreePath, label: String(issue) },
  { cwd: repoRoot, dryRun },
);

const readyToken = buildHandshakeToken(issue, `ready-${stamp()}`);
const probeToken = buildHandshakeToken(issue, `probe-${stamp()}`);

const orchestrateTask = parsed.task ??
  (parsed.title
    ? `#${issue}（${parsed.title}）を取得して着手して`
    : `#${issue} を取得して着手して`);

const kickoff = agmsgScriptsDir
  ? buildKickoffPrompt({
    issue,
    team,
    lead,
    readyToken,
    agmsgScriptsDir,
    task: orchestrateTask,
  })
  : buildStandbyPrompt({ issue, title: parsed.title, task: parsed.task });

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
    mode,
    reason:
      `エージェントの pane が現れませんでした（${config.agent.command} の起動を確認してください）`,
    tabId: tab.tabId,
    team,
  });
}

for (const paneId of rootPanes) closePane(paneId, { dryRun });

// --- 既定はここまで。起動したセッションは Issue を読んで指示を待つ ---
if (!agmsgScriptsDir) {
  finish(0, {
    status: dryRun ? "dry-run" : "ok",
    mode,
    tabId: tab.tabId,
    paneId: agentPane,
    worktreePath,
    issue,
  });
}

const ctx: AgmsgContext = { scriptsDir: agmsgScriptsDir, team };

if (dryRun) {
  finish(0, {
    status: "dry-run",
    mode,
    tabId: tab.tabId,
    paneId: agentPane,
    team,
    lead,
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
  // タブとエージェントは生きているので、成功にはしないが残して原因を見せる。
  finish(2, {
    status: "handshake-failed",
    mode,
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
  mode,
  tabId: tab.tabId,
  paneId: agentPane,
  team,
  lead,
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
    mode,
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

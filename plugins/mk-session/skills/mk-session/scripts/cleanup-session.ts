#!/usr/bin/env bun
/**
 * 後片付け（設計判断 D9）。
 *
 * セッション層（herdr タブ / agmsg の team 登録）だけをこのスクリプトが畳む。
 * worktree とブランチの削除は、作る側と同じく既存手順へ委譲する
 * （SKILL.md が委譲判定の結果を見て mk-wktree cleanup を呼ぶ）。
 */
import {
  findAgmsgScriptsDir,
  leaveTeam,
  type AgmsgContext,
} from "./lib/agmsg.ts";
import { parseArgs } from "./lib/cli.ts";
import { renderTemplate, resolveConfig } from "./lib/config.ts";
import { hasCommand, run } from "./lib/exec.ts";
import { listPanes, parseHerdrResult } from "./lib/herdr.ts";
import { getRepoName, getRepoRoot, loadConfigFile } from "./lib/repo.ts";
import {
  parseWorktreePaths,
  selectTabsToClose,
  type TabCandidate,
} from "./lib/tabs.ts";
import path from "node:path";

const parsed = parseArgs(process.argv.slice(2));
if (parsed.mode !== "cleanup") {
  console.error("cleanup モードで呼んでください（例: cleanup 53）");
  process.exit(1);
}

const repoRoot = getRepoRoot();
const repoName = getRepoName(repoRoot);
const config = resolveConfig(loadConfigFile(repoRoot), parsed.overrides);
const dryRun = parsed.dryRun;
const lead = parsed.lead ?? process.env.MK_SESSION_LEAD ?? "lead";
const agmsgScriptsDir = findAgmsgScriptsDir();
const herdrAvailable = hasCommand("herdr");
// 作る側は --workspace / HERDR_WORKSPACE_ID に作る。同じ workspace を見ないと
// 「閉じたつもりでタブが残る」「別 workspace の同名ラベルを閉じる」が起きる。
const workspace = parsed.workspace ?? process.env.HERDR_WORKSPACE_ID;
// team テンプレートが Issue 単位のときだけ、親の登録も畳んでよい。
// --team で既存 team に相乗りした場合は他の Issue がまだ使っている。
const teamIsPerIssue = config.team.includes("{issue}");
const registeredWorktrees = listRegisteredWorktrees();

const results = parsed.issues.map((issue) => {
  const team = renderTemplate(config.team, { repo: repoName, issue });
  const tabs = herdrAvailable
    ? closeTabsFor(issue)
    : { closed: [], skipped: [] };
  let leftTeam = false;

  if (agmsgScriptsDir) {
    const ctx: AgmsgContext = { scriptsDir: agmsgScriptsDir, team };
    const left = leaveTeam(ctx, String(issue), { dryRun });
    leftTeam = !left.skipped && left.status === 0;
    if (teamIsPerIssue) {
      leaveTeam(ctx, lead, { dryRun });
    }
  }

  return {
    issue,
    team,
    dryRun,
    closedTabs: tabs.closed,
    // ラベルは一致したが自リポジトリのものと確認できず、閉じなかったタブ
    skippedTabs: tabs.skipped,
    leftTeam,
    herdrAvailable,
    workspace: workspace ?? null,
    agmsgAvailable: agmsgScriptsDir !== null,
  };
});

console.log(
  `MK_SESSION_RESULT=${
    JSON.stringify({ status: "ok", mode: "cleanup", results })
  }`,
);

/**
 * Issue 番号ラベルのタブのうち、自リポジトリのものだけを閉じる。
 *
 * ラベルは Issue 番号だけなので、同じ workspace に別リポジトリの同じ番号の
 * セッションがあるとラベルだけでは区別できない。タブ一覧は cwd を返さないため、
 * pane 一覧の cwd から所属を確かめる。
 */
function closeTabsFor(issue: number): { closed: string[]; skipped: string[] } {
  const list = run(
    "herdr",
    workspace ? ["tab", "list", "--workspace", workspace] : ["tab", "list"],
    {},
  );
  if (list.status !== 0) return { closed: [], skipped: [] };
  let tabs: TabCandidate[] = [];
  try {
    const result = parseHerdrResult(list.stdout);
    tabs = (result.tabs as TabCandidate[] | undefined) ?? [];
  } catch {
    return { closed: [], skipped: [] };
  }

  const selection = selectTabsToClose({
    issue,
    tabs,
    panes: listPanes(workspace),
    ownedPaths: ownedPathsFor(issue),
  });
  for (const tabId of selection.close) {
    run("herdr", ["tab", "close", tabId], { dryRun });
  }
  return { closed: selection.close, skipped: selection.skipped };
}

/** このリポジトリのものと言えるパス（登録済みの worktree と、設定上の作成先） */
function ownedPathsFor(issue: number): string[] {
  const paths = [...registeredWorktrees];
  // worktree を先に消してから cleanup を呼ぶ場合、登録一覧には残っていない。
  // 設定から作られたはずのパスも候補に入れる（{branch} は解決できないので除く）
  if (!config.worktree.path.includes("{branch}")) {
    paths.push(
      path.resolve(
        repoRoot,
        renderTemplate(config.worktree.path, { repo: repoName, issue }),
      ),
    );
  }
  return paths;
}

function listRegisteredWorktrees(): string[] {
  const result = run("git", ["worktree", "list", "--porcelain"], {
    cwd: repoRoot,
  });
  if (result.status !== 0) return [repoRoot];
  const paths = parseWorktreePaths(result.stdout);
  return paths.length > 0 ? paths : [repoRoot];
}

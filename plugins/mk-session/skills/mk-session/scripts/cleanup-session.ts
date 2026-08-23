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
import { getRepoName, getRepoRoot, loadConfigFile } from "./lib/repo.ts";

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

const results = parsed.issues.map((issue) => {
  const team = renderTemplate(config.team, { repo: repoName, issue });
  const closedTabs = herdrAvailable ? closeTabsFor(issue) : [];
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
    closedTabs,
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

/** ラベルが Issue 番号のタブを閉じる。ラベル運用は mk-session が作るときの規約 */
function closeTabsFor(issue: number): string[] {
  const list = run(
    "herdr",
    workspace ? ["tab", "list", "--workspace", workspace] : ["tab", "list"],
    {},
  );
  if (list.status !== 0) return [];
  let tabs: Array<{ tab_id: string; label?: string }> = [];
  try {
    const result = JSON.parse(list.stdout.trim().split("\n").pop() ?? "{}") as {
      result?: { tabs?: Array<{ tab_id: string; label?: string }> };
    };
    tabs = result.result?.tabs ?? [];
  } catch {
    return [];
  }

  const targets = tabs.filter((tab) => tab.label === String(issue));
  for (const tab of targets) {
    run("herdr", ["tab", "close", tab.tab_id], { dryRun });
  }
  return targets.map((tab) => tab.tab_id);
}

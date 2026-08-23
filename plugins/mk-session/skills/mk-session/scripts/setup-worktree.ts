#!/usr/bin/env bun
/**
 * worktree 段（設計判断 D3 / D9）。
 *
 * 委譲判定までをこのスクリプトが行い、既存手順があるリポジトリでは
 * 何も作らずに `action: "delegate"` を返す（SKILL.md がその skill を呼ぶ）。
 * 既存手順が無いリポジトリでは、この場で worktree を作って env を張り、
 * 依存をインストールする。
 */
import { existsSync, mkdirSync, readdirSync, symlinkSync } from "node:fs";
import path from "node:path";
import {
  buildBranchName,
} from "./lib/branch-name.ts";
import { parseArgs } from "./lib/cli.ts";
import {
  detectInstallCommand,
  renderTemplate,
  resolveConfig,
} from "./lib/config.ts";
import { resolveDelegate } from "./lib/delegate.ts";
import { run, runShell } from "./lib/exec.ts";
import {
  fetchIssue,
  getDefaultBranch,
  getRepoName,
  getRepoRoot,
  loadConfigFile,
  makeSkillExists,
} from "./lib/repo.ts";

const parsed = parseArgs(process.argv.slice(2));
if (parsed.mode !== "setup") {
  fail("cleanup は scripts/cleanup-session.ts を使ってください");
}

const issue = parsed.issues[0];
const repoRoot = getRepoRoot();
const repoName = getRepoName(repoRoot);
const config = resolveConfig(loadConfigFile(repoRoot), parsed.overrides);
const dryRun = parsed.dryRun;

const decision = resolveDelegate({
  setting: config.worktree.delegate,
  skillExists: makeSkillExists(repoRoot),
});

const issueInfo = fetchIssue(issue, repoRoot);
const branch = buildBranchName({
  issue,
  title: issueInfo.title,
  explicit: parsed.branch,
  template: config.worktree.branch,
});
const team = renderTemplate(config.team, { repo: repoName, issue });

if (decision.mode === "skill") {
  log(`worktree 段は ${decision.skillName} に委譲します（${decision.reason}）`);
  emit({
    action: "delegate",
    skillName: decision.skillName,
    reason: decision.reason,
    issue,
    issueTitle: issueInfo.title,
    issueState: issueInfo.state,
    branch,
    team,
    repoRoot,
    repoName,
    config,
  });
  process.exit(0);
}

log(`worktree を内蔵手順で作成します（${decision.reason}）`);

if (issueInfo.unavailable) {
  log("gh から Issue を取得できませんでした。ブランチ名は番号のみで作ります");
} else if (issueInfo.state && issueInfo.state.toUpperCase() !== "OPEN") {
  log(`注意: Issue #${issue} は ${issueInfo.state} です`);
}

const defaultBranch = getDefaultBranch(repoRoot);
const worktreePath = path.resolve(
  repoRoot,
  renderTemplate(config.worktree.path, { repo: repoName, issue, branch }),
);

// 破壊的操作になり得るので、既にあるものは上書きしない（設計判断 D9）
if (existsSync(worktreePath)) {
  fail(
    `worktree の作成先が既に存在します: ${worktreePath}\n` +
      `別の場所に作るか、/mk-session cleanup ${issue} で片付けてから再実行してください`,
  );
}
if (isRegisteredWorktree(worktreePath)) {
  fail(
    `同じパスが worktree として登録されています: ${worktreePath}\n` +
      `git worktree prune を実行してから再実行してください`,
  );
}
if (branchExists(branch)) {
  fail(
    `ブランチが既に存在します: ${branch}\n` +
      `--branch で別名を指定するか、既存ブランチを整理してから再実行してください`,
  );
}

run("git", ["fetch", "origin", defaultBranch], {
  cwd: repoRoot,
  dryRun,
  check: !dryRun,
});
run(
  "git",
  [
    "worktree",
    "add",
    "--no-track",
    worktreePath,
    "-b",
    branch,
    `origin/${defaultBranch}`,
  ],
  { cwd: repoRoot, dryRun, check: !dryRun },
);

const envLinked: string[] = [];
for (const entry of config.worktree.env) {
  const source = path.join(repoRoot, entry);
  if (!existsSync(source)) continue;
  const target = path.join(worktreePath, entry);
  if (dryRun) {
    log(`ln -s ${source} ${target}`);
    envLinked.push(entry);
    continue;
  }
  mkdirSync(path.dirname(target), { recursive: true });
  if (!existsSync(target)) symlinkSync(source, target);
  envLinked.push(entry);
}

const installCommand = config.worktree.install ??
  detectInstallCommand(dryRun ? readdirSyncSafe(repoRoot) : readdirSyncSafe(worktreePath));
let installed = false;
if (installCommand) {
  const result = runShell(installCommand, { cwd: worktreePath, dryRun });
  installed = !result.skipped && result.status === 0;
  if (!installed && !result.skipped) {
    log(`依存インストールが失敗しました: ${installCommand}`);
  }
} else {
  log("依存インストールのコマンドを特定できませんでした（スキップ）");
}

emit({
  action: "created",
  dryRun,
  issue,
  issueTitle: issueInfo.title,
  issueState: issueInfo.state,
  branch,
  team,
  path: worktreePath,
  defaultBranch,
  envLinked,
  installCommand,
  installed,
  repoRoot,
  repoName,
  config,
});

function isRegisteredWorktree(target: string): boolean {
  const result = run("git", ["worktree", "list", "--porcelain"], {
    cwd: repoRoot,
  });
  return result.stdout
    .split("\n")
    .some((line) => line.startsWith("worktree ") && line.slice(9) === target);
}

function branchExists(name: string): boolean {
  const result = run(
    "git",
    ["rev-parse", "--verify", "--quiet", `refs/heads/${name}`],
    { cwd: repoRoot },
  );
  return result.status === 0;
}

function readdirSyncSafe(dir: string): string[] {
  try {
    return readdirSync(dir);
  } catch {
    return [];
  }
}

function log(message: string): void {
  console.log(message);
}

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

function emit(payload: Record<string, unknown>): void {
  console.log(`MK_SESSION_RESULT=${JSON.stringify(payload)}`);
}

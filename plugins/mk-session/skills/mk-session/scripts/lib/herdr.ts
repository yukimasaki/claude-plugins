/**
 * herdr CLI のラッパ。
 *
 * herdr は `{"id":"cli:tab:create","result":{...}}` の JSON を 1 行で返す。
 */
import { run, type RunOptions } from "./exec.ts";

export type HerdrPane = {
  pane_id: string;
  tab_id: string;
  workspace_id: string;
  agent?: string;
  label?: string;
  cwd?: string;
};

/** herdr の 1 行 JSON から result を取り出す */
export function parseHerdrResult(stdout: string): Record<string, unknown> {
  const line = stdout.trim().split("\n").filter(Boolean).pop();
  if (!line) throw new Error("herdr の応答が空です");
  let parsed: unknown;
  try {
    parsed = JSON.parse(line);
  } catch {
    throw new Error(`herdr の応答を JSON として読めません: ${line}`);
  }
  const result = (parsed as { result?: unknown }).result;
  if (!result || typeof result !== "object") {
    throw new Error(`herdr の応答に result がありません: ${line}`);
  }
  return result as Record<string, unknown>;
}

/** tab create の応答から tab_id を取り出す */
export function extractTabId(stdout: string): string {
  const result = parseHerdrResult(stdout);
  const direct = result.tab_id;
  if (typeof direct === "string") return direct;
  const tab = result.tab as { tab_id?: unknown } | undefined;
  if (tab && typeof tab.tab_id === "string") return tab.tab_id;
  throw new Error(`tab_id を取得できません: ${stdout.trim()}`);
}

export function parsePanes(stdout: string): HerdrPane[] {
  const result = parseHerdrResult(stdout);
  const panes = result.panes;
  if (!Array.isArray(panes)) return [];
  return panes as HerdrPane[];
}

export function createTab(
  args: { workspace: string; cwd: string; label: string },
  options: RunOptions = {},
): { tabId: string; command: string } {
  const result = run(
    "herdr",
    [
      "tab",
      "create",
      "--workspace",
      args.workspace,
      "--cwd",
      args.cwd,
      "--label",
      args.label,
      "--no-focus",
    ],
    { ...options, check: !options.dryRun },
  );
  if (result.skipped) return { tabId: "(dry-run)", command: result.command };
  return { tabId: extractTabId(result.stdout), command: result.command };
}

export function startAgent(
  args: {
    name: string;
    tabId: string;
    workspace: string;
    cwd: string;
    argv: string[];
  },
  options: RunOptions = {},
): { command: string } {
  const result = run(
    "herdr",
    [
      "agent",
      "start",
      args.name,
      "--tab",
      args.tabId,
      "--workspace",
      args.workspace,
      "--cwd",
      args.cwd,
      "--no-focus",
      "--",
      ...args.argv,
    ],
    { ...options, check: !options.dryRun },
  );
  return { command: result.command };
}

export function listPanes(
  workspace: string | undefined,
  options: RunOptions = {},
): HerdrPane[] {
  const result = run(
    "herdr",
    workspace ? ["pane", "list", "--workspace", workspace] : ["pane", "list"],
    { ...options, dryRun: false },
  );
  if (result.status !== 0) return [];
  return parsePanes(result.stdout);
}

export function closePane(paneId: string, options: RunOptions = {}): void {
  run("herdr", ["pane", "close", paneId], options);
}

/** `pane run` はテキストと Enter を atomic に送る（agent send は Enter を送らない） */
export function paneRun(
  paneId: string,
  text: string,
  options: RunOptions = {},
): void {
  run("herdr", ["pane", "run", paneId, text], options);
}

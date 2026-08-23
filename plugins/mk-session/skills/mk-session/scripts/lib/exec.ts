/**
 * 外部コマンド（git / gh / herdr / agmsg）を叩くための薄いラッパ。
 *
 * 純ロジックは lib/ の他ファイルに置き、ここは副作用だけを引き受ける。
 * dry-run のときは実行せず、実行予定のコマンドを返す。
 */
import { spawnSync } from "node:child_process";

export type RunOptions = {
  cwd?: string;
  /** true なら実行せず、コマンド行だけを返す */
  dryRun?: boolean;
  /** 失敗時に例外を投げる（既定 false） */
  check?: boolean;
  env?: NodeJS.ProcessEnv;
};

export type RunResult = {
  command: string;
  status: number;
  stdout: string;
  stderr: string;
  skipped: boolean;
};

export function run(
  command: string,
  args: string[],
  options: RunOptions = {},
): RunResult {
  const line = formatCommand(command, args);

  if (options.dryRun) {
    console.log(`[dry-run] ${line}`);
    return { command: line, status: 0, stdout: "", stderr: "", skipped: true };
  }

  const result = spawnSync(command, args, {
    cwd: options.cwd,
    env: options.env ?? process.env,
    encoding: "utf8",
  });

  if (result.error) {
    if (options.check) throw result.error;
    return {
      command: line,
      status: 127,
      stdout: "",
      stderr: String(result.error.message),
      skipped: false,
    };
  }

  const status = result.status ?? 1;
  if (options.check && status !== 0) {
    throw new Error(
      `コマンドが失敗しました (exit ${status}): ${line}\n${result.stderr ?? ""}`,
    );
  }

  return {
    command: line,
    status,
    stdout: (result.stdout ?? "").trim(),
    stderr: (result.stderr ?? "").trim(),
    skipped: false,
  };
}

/** シェル文字列としてそのまま実行する（設定ファイルの install コマンド用） */
export function runShell(
  commandLine: string,
  options: RunOptions = {},
): RunResult {
  if (options.dryRun) {
    console.log(`[dry-run] ${commandLine}`);
    return {
      command: commandLine,
      status: 0,
      stdout: "",
      stderr: "",
      skipped: true,
    };
  }
  const result = spawnSync(commandLine, {
    cwd: options.cwd,
    env: options.env ?? process.env,
    encoding: "utf8",
    shell: true,
  });
  const status = result.status ?? 1;
  if (options.check && status !== 0) {
    throw new Error(
      `コマンドが失敗しました (exit ${status}): ${commandLine}\n${
        result.stderr ?? ""
      }`,
    );
  }
  return {
    command: commandLine,
    status,
    stdout: (result.stdout ?? "").trim(),
    stderr: (result.stderr ?? "").trim(),
    skipped: false,
  };
}

/** コマンドが PATH にあるか。前提ツール未導入の段をスキップする判定に使う（設計判断 D4） */
export function hasCommand(command: string): boolean {
  const result = spawnSync("command", ["-v", command], {
    encoding: "utf8",
    shell: true,
  });
  return (result.status ?? 1) === 0;
}

export function formatCommand(command: string, args: string[]): string {
  return [command, ...args.map(quoteIfNeeded)].join(" ");
}

function quoteIfNeeded(arg: string): string {
  return /^[\w@%+=:,./-]+$/.test(arg) ? arg : `'${arg.replace(/'/g, "'\\''")}'`;
}

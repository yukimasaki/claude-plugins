import { describe, expect, it } from "vitest";
import {
  BYPASS_PERMISSIONS_FLAG,
  DEFAULT_CONFIG,
  agmsgTypeFor,
  detectInstallCommand,
  renderTemplate,
  resolveConfig,
} from "./config.ts";

describe("resolveConfig", () => {
  it("設定ファイル未配置なら既定値で解決する", () => {
    expect(resolveConfig()).toEqual(DEFAULT_CONFIG);
  });

  it("設定ファイルの値が既定値を上書きする", () => {
    const resolved = resolveConfig({
      worktree: { delegate: "none", install: "uv sync", env: [".env", ".env.local"] },
      team: "acme-{issue}",
    });
    expect(resolved.worktree.delegate).toBe("none");
    expect(resolved.worktree.install).toBe("uv sync");
    expect(resolved.worktree.env).toEqual([".env", ".env.local"]);
    expect(resolved.team).toBe("acme-{issue}");
    // 触れていない項目は既定値のまま
    expect(resolved.worktree.path).toBe(DEFAULT_CONFIG.worktree.path);
  });

  it("コマンド引数が設定ファイルを上書きする", () => {
    const resolved = resolveConfig(
      { team: "from-file-{issue}", agent: { command: "claude" } },
      { team: "acme-3691", agent: "codex" },
    );
    expect(resolved.team).toBe("acme-3691");
    expect(resolved.agent.command).toBe("codex");
  });

  it("--agent 指定時は agmsg の type も追従する", () => {
    expect(resolveConfig(undefined, { agent: "codex" }).agent.agmsgType).toBe(
      "codex",
    );
    expect(resolveConfig(undefined, { agent: "claude" }).agent.agmsgType).toBe(
      "claude-code",
    );
  });

  it("claude 以外に差し替えたら claude 固有の既定引数を当てない", () => {
    const resolved = resolveConfig(undefined, { agent: "codex" });
    expect(resolved.agent.launchArgs).toEqual([]);
    expect(resolved.agent.sessionNameFlag).toBeNull();
  });

  it("claude 以外でも設定ファイルの明示指定は尊重する", () => {
    const resolved = resolveConfig(
      { agent: { command: "codex", launchArgs: ["exec"], sessionNameFlag: "--name" } },
    );
    expect(resolved.agent.launchArgs).toEqual(["exec"]);
    expect(resolved.agent.sessionNameFlag).toBe("--name");
  });

  it("--yolo はエージェントごとのフラグを足す", () => {
    expect(
      resolveConfig(undefined, { agent: "codex", yolo: true }).agent.launchArgs,
    ).toEqual(["--dangerously-bypass-approvals-and-sandbox"]);
  });

  it("--yolo のフラグが分からないエージェントはエラーにする", () => {
    expect(() => resolveConfig(undefined, { agent: "my-agent", yolo: true }))
      .toThrow(/launchArgs/);
  });

  it("既定では権限確認を飛ばす引数が付かない", () => {
    expect(resolveConfig().agent.launchArgs).not.toContain(
      BYPASS_PERMISSIONS_FLAG,
    );
  });

  it("--yolo のときだけ権限確認を飛ばす引数が付く", () => {
    expect(resolveConfig(undefined, { yolo: true }).agent.launchArgs).toContain(
      BYPASS_PERMISSIONS_FLAG,
    );
  });

  it("設定ファイルで既に指定されていれば --yolo で二重に付かない", () => {
    const resolved = resolveConfig(
      { agent: { launchArgs: [BYPASS_PERMISSIONS_FLAG] } },
      { yolo: true },
    );
    expect(resolved.agent.launchArgs).toEqual([BYPASS_PERMISSIONS_FLAG]);
  });

  it("型の違う設定は既定値へ倒さずエラーにする", () => {
    expect(() => resolveConfig({ worktree: { env: ".env.local" } })).toThrow(
      /worktree.env/,
    );
    expect(() => resolveConfig({ handshakeTimeoutSec: "90" })).toThrow(
      /handshakeTimeoutSec/,
    );
    expect(() => resolveConfig({ agent: [] })).toThrow(/agent/);
  });
});

describe("agmsgTypeFor", () => {
  it("既知のコマンドを agmsg の type に対応させる", () => {
    expect(agmsgTypeFor("claude")).toBe("claude-code");
    expect(agmsgTypeFor("/usr/local/bin/claude")).toBe("claude-code");
  });

  it("未知のコマンドはコマンド名をそのまま返す", () => {
    expect(agmsgTypeFor("my-agent")).toBe("my-agent");
  });
});

describe("renderTemplate", () => {
  it("既知の変数を差し込む", () => {
    expect(
      renderTemplate("../{repo}-{issue}", { repo: "claude-plugins", issue: 53 }),
    ).toBe("../claude-plugins-53");
  });

  it("未知の変数はそのまま残す", () => {
    expect(renderTemplate("{repo}-{unknown}", { repo: "x" })).toBe(
      "x-{unknown}",
    );
  });
});

describe("detectInstallCommand", () => {
  it("ロックファイルからコマンドを決める", () => {
    expect(detectInstallCommand(["bun.lock", "package.json"])).toBe(
      "bun install",
    );
    expect(detectInstallCommand(["pnpm-lock.yaml"])).toBe("pnpm install");
    expect(detectInstallCommand(["yarn.lock"])).toBe("yarn install");
    expect(detectInstallCommand(["package-lock.json"])).toBe("npm install");
    expect(detectInstallCommand(["package.json"])).toBe("npm install");
  });

  it("Node プロジェクトでなければ null", () => {
    expect(detectInstallCommand(["pyproject.toml", "README.md"])).toBeNull();
  });
});

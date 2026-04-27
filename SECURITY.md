# Security Policy

## Supported Versions

Only the latest release of this marketplace and its plugins is actively supported.

| Version | Supported |
|---|:-:|
| Latest (`main` branch) | Yes |
| Older releases | No |

## Reporting a Vulnerability

**Please do not open a public issue for security vulnerabilities.**

Use GitHub's Private Vulnerability Reporting:

→ [**Report a vulnerability**](https://github.com/yukimasaki/claude-plugins/security/advisories/new)

You should receive an initial response within 7 days. Once the vulnerability is verified, the maintainer will work on a fix and coordinate the disclosure timeline with you.

## Scope

This policy covers:

- Code in this repository (`plugins/**`, scripts, build tooling)
- The marketplace manifest (`.claude-plugin/marketplace.json`)
- Plugin manifests (`plugins/*/.claude-plugin/plugin.json`)

This policy does **not** cover:

- Vulnerabilities in upstream design references under `plugins/design-director/skills/design-director/references/design-md/` — these are sourced from external projects; please report them to the original projects.
- Vulnerabilities in Claude Code itself — please report those to [Anthropic](https://docs.anthropic.com/en/docs/claude-code).

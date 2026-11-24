---
name: antigravity-claude-style
description: Install, sync, or verify the Claude Code Desktop style pack (theme CSS, Anthropic/Noto fonts, Clawd pixel mascot, turn navigator, and sound cues) on top of antigravity-codex-theme for Google Antigravity.
---

# Agent Operations Guide: antigravity-claude-style

Follow this guide when the user asks you to install or update **`antigravity-claude-style`** on this machine.

## Prerequisites
- **Node.js `>= 22.13.0`**
- **Google Antigravity** installed
- **`git`** (to clone `https://github.com/yutong8209/antigravity-claude-style.git`)

## One-Step Installation Workflow

1. Clone this repository into a temporary or scratch folder (e.g. `~/.gemini/antigravity/scratch/antigravity-claude-style` or `/tmp/antigravity-claude-style`):
   ```bash
   git clone --depth=1 https://github.com/yutong8209/antigravity-claude-style.git
   cd antigravity-claude-style
   ```

2. Run the installer:
   ```bash
   node install.mjs install
   ```
   What this does automatically:
   - Installs upstream `nkjDSLcvanv/antigravity-codex-theme` to `~/.gemini/antigravity/codex-theme` if not already present (leaving `core/` clean so upstream updates continue to work).
   - Copies bundled fonts (`AnthropicSansWebText.ttf`, `AnthropicSerifWebText.ttf`, `AnthropicMonoWeb.ttf`, `NotoSansSC[wght].ttf`) into the OS font directory (`~/Library/Fonts` on macOS, `~/.local/share/fonts` on Linux, `%LOCALAPPDATA%\Microsoft\Windows\Fonts` on Windows).
   - Syncs `user/{custom.css, custom.js, config.json, i18n.override.json}` into `~/.gemini/antigravity/codex-theme/user/` (backing up any existing modified `custom.css` / `custom.js`).
   - Runs `node --disable-warning=ExperimentalWarning ~/.gemini/antigravity/codex-theme/install.mjs verify`.

3. Verify the result:
   - Run `node --disable-warning=ExperimentalWarning ~/.gemini/antigravity/codex-theme/install.mjs doctor`.
   - Confirm `ok === true`, `liveWindow.state.hasStyle === true`, `liveWindow.state.hasUserStyle === true`, `modules.customCss === true`, and `modules.customJs === true`.

## Important Rule for Antigravity Self-Relaunch
If `verify` or `doctor` reports `"cdpStatus": "missing_opt_in_flag"`:
- **NEVER run `relaunch --force` from inside Antigravity itself** — it would terminate your own host window mid-turn.
- Instead, tell the user the style pack is installed and ask them to **quit and reopen Antigravity once** after this turn finishes (the background daemon's cold-start relay will automatically attach `--remote-debugging-port=0`), or run `node ~/.gemini/antigravity/codex-theme/install.mjs relaunch` from an external terminal.

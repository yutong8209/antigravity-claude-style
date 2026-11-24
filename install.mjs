#!/usr/bin/env node
/**
 * antigravity-claude-style · One-Click Claude Code Desktop Style Installer
 *
 * Installs upstream antigravity-codex-theme (if absent), installs bundled fonts,
 * syncs user/{custom.css, custom.js, config.json} into ~/.gemini/antigravity/codex-theme/user/,
 * and verifies live CDP injection.
 *
 * Usage:
 *   node install.mjs [install] [--sync-config] [--skip-fonts]
 *   node install.mjs export
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UPSTREAM_REPO = 'https://github.com/nkjDSLcvanv/antigravity-codex-theme.git';
const CODEX_THEME_DIR = path.join(os.homedir(), '.gemini', 'antigravity', 'codex-theme');
const CODEX_USER_DIR = path.join(CODEX_THEME_DIR, 'user');
const CODEX_INSTALLER = path.join(CODEX_THEME_DIR, 'install.mjs');

const args = process.argv.slice(2);
const cmd = args.find((a) => !a.startsWith('-')) || 'install';
const hasFlag = (f) => args.includes(f);

function runOrThrow(command, cmdArgs, cwd = __dirname) {
  const res = spawnSync(command, cmdArgs, { cwd, stdio: 'inherit' });
  if (res.status !== 0) {
    throw new Error(`Command failed (${res.status}): ${command} ${cmdArgs.join(' ')}`);
  }
}

function checkNodeVersion() {
  const [maj, min] = process.versions.node.split('.').map(Number);
  if (maj < 22 || (maj === 22 && min < 13)) {
    throw new Error(`Node.js >= 22.13.0 is required (current: ${process.versions.node}).`);
  }
}

function filesEqual(a, b) {
  if (!fs.existsSync(a) || !fs.existsSync(b)) return false;
  const bufA = fs.readFileSync(a);
  const bufB = fs.readFileSync(b);
  return bufA.equals(bufB);
}

function ensureCodexThemeInstalled() {
  if (fs.existsSync(CODEX_INSTALLER)) {
    console.log('[1/4] Found existing antigravity-codex-theme at:', CODEX_THEME_DIR);
    return;
  }
  console.log('[1/4] Installing upstream antigravity-codex-theme...');
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ag-codex-theme-'));
  try {
    runOrThrow('git', ['clone', '--depth=1', UPSTREAM_REPO, tmpDir], os.tmpdir());
    runOrThrow(process.execPath, ['install.mjs', 'install'], tmpDir);
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

function resolveFontDir() {
  if (process.platform === 'darwin') return path.join(os.homedir(), 'Library', 'Fonts');
  if (process.platform === 'linux') return path.join(os.homedir(), '.local', 'share', 'fonts');
  if (process.platform === 'win32') {
    const localAppData = process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local');
    return path.join(localAppData, 'Microsoft', 'Windows', 'Fonts');
  }
  return null;
}

function installFonts() {
  if (hasFlag('--skip-fonts')) {
    console.log('[2/4] Skipping font installation (--skip-fonts).');
    return;
  }
  const srcFontsDir = path.join(__dirname, 'fonts');
  const destDir = resolveFontDir();
  if (!fs.existsSync(srcFontsDir) || !destDir) return;

  fs.mkdirSync(destDir, { recursive: true });
  let installed = 0;
  for (const name of fs.readdirSync(srcFontsDir)) {
    if (!/\.(ttf|otf|woff2?)$/i.test(name)) continue;
    const src = path.join(srcFontsDir, name);
    const dst = path.join(destDir, name);
    if (!filesEqual(src, dst)) {
      fs.copyFileSync(src, dst);
      installed += 1;
    }
  }
  if (process.platform === 'linux' && installed > 0) {
    spawnSync('fc-cache', ['-f', destDir], { stdio: 'ignore' });
  }
  console.log(`[2/4] Fonts synced to ${destDir} (${installed} updated).`);
}

function syncUserFiles() {
  const srcUserDir = path.join(__dirname, 'user');
  const syncConfig = hasFlag('--sync-config');
  fs.mkdirSync(CODEX_USER_DIR, { recursive: true });

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  for (const file of ['custom.css', 'custom.js']) {
    const src = path.join(srcUserDir, file);
    const dst = path.join(CODEX_USER_DIR, file);
    if (!fs.existsSync(src)) continue;
    if (fs.existsSync(dst) && !filesEqual(src, dst)) {
      const bak = `${dst}.bak-${stamp}`;
      fs.copyFileSync(dst, bak);
    }
    fs.copyFileSync(src, dst);
  }

  const i18nSrc = path.join(srcUserDir, 'i18n.override.json');
  const i18nDst = path.join(CODEX_USER_DIR, 'i18n.override.json');
  if (fs.existsSync(i18nSrc) && (syncConfig || !fs.existsSync(i18nDst))) {
    fs.copyFileSync(i18nSrc, i18nDst);
  }

  const cfgSrc = path.join(srcUserDir, 'config.json');
  const cfgDst = path.join(CODEX_USER_DIR, 'config.json');
  if (syncConfig || !fs.existsSync(cfgDst)) {
    fs.copyFileSync(cfgSrc, cfgDst);
  } else {
    try {
      const cfg = JSON.parse(fs.readFileSync(cfgDst, 'utf8'));
      cfg.enabled = true;
      cfg.modules = Object.assign({}, cfg.modules, {
        theme: true,
        customCss: true,
        customJs: true
      });
      fs.writeFileSync(cfgDst, JSON.stringify(cfg, null, 2) + '\n', 'utf8');
    } catch {
      fs.copyFileSync(cfgSrc, cfgDst);
    }
  }
  console.log('[3/4] Synced user theme files to:', CODEX_USER_DIR);
}

function verifyLive() {
  console.log('[4/4] Verifying live injection...');
  const res = spawnSync(
    process.execPath,
    ['--disable-warning=ExperimentalWarning', CODEX_INSTALLER, 'verify'],
    { cwd: CODEX_THEME_DIR, encoding: 'utf8' }
  );
  if (res.stdout) process.stdout.write(res.stdout);
  if (res.stderr) process.stderr.write(res.stderr);

  if (res.status !== 0) {
    console.log('\n[Hint] If Antigravity was launched without CDP debugging port, run:');
    console.log(`  node "${CODEX_INSTALLER}" relaunch`);
  }
}

function exportFromLocal() {
  const srcUserDir = path.join(__dirname, 'user');
  fs.mkdirSync(srcUserDir, { recursive: true });
  for (const file of ['custom.css', 'custom.js', 'config.json', 'i18n.override.json']) {
    const src = path.join(CODEX_USER_DIR, file);
    const dst = path.join(srcUserDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dst);
      console.log('Exported:', file);
    }
  }
}

function main() {
  checkNodeVersion();
  if (cmd === 'export') {
    exportFromLocal();
    return;
  }
  if (cmd !== 'install') {
    console.log('Usage: node install.mjs [install|export] [--sync-config] [--skip-fonts]');
    process.exit(1);
  }
  ensureCodexThemeInstalled();
  installFonts();
  syncUserFiles();
  verifyLive();
}

main();

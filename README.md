# antigravity-claude-style

在 [antigravity-codex-theme](https://github.com/nkjDSLcvanv/antigravity-codex-theme) 之上叠加的 **Claude Code Desktop** 风格与交互配置包（移植自 [dsh-claude-style](https://github.com/Nwflower/dsh-claude-style)）。

因为所有修改都放在 `codex-theme/user/` 目录下，**完全不影响上游 `codex-theme` 正常更新**，也不会篡改 Antigravity 安装包。

## 包含特性

- **Claude 昼夜配色与陶土橙主题色**：浅色暖白（`#ffffff` / `#fafafa`）+ 深色暖炭灰（`#191919` / `#1f1f1f`），主色、发送按钮、聚焦边框与用量圆点统一为 `#d97757`。
- **Anthropic 字体排印**：界面使用 `Anthropic Sans Web Text`，对话正文与标题使用 `Anthropic Serif Web Text`，代码与模型标签使用 `Anthropic Mono Web`；内置符号兜底与 `Noto Sans SC` 中文回退。
- **Markdown 细节对齐**：行内代码 `calc(1em - 1px)` + `1px` 细边框胶囊、代码块 `12px` 圆角、`0.5px` 分割线、最大 `820px` 阅读宽度、流式柔顺渐显与输入区上方渐隐遮罩。
- **Clawd 像素小螃蟹**：挂载在主输入框右上角，基于 WAAPI 合成线程动画；联动生成/思考/完成/等待/报错/休眠状态，支持左右戳、4 连击挠痒与拖拽互动。
- **右侧轮次快速导航条**：2 轮以上对话自动出现，悬浮展开每轮摘要并支持平滑跳转。
- **Web Audio 提示音**：Agent 运行 3 秒以上完成或等待响应时播放轻提示音。

## 新电脑一键安装

> 前置要求：Node.js >= 22.13.0，已安装 Google Antigravity。

```bash
git clone https://github.com/yutong8209/antigravity-claude-style.git
cd antigravity-claude-style
node install.mjs install
```

如果新电脑上的 Antigravity 之前是在无调试端口状态下启动的，运行一次：

```bash
node ~/.gemini/antigravity/codex-theme/install.mjs relaunch
```

### 常用参数

- `node install.mjs install --sync-config`：同时用仓库里的 `user/config.json` 覆盖本地配置（默认保留现有 `config.json` 里的 `sshHosts` 等个人配置，仅确保开启 `customCss`/`customJs`）。
- `node install.mjs install --skip-fonts`：跳过字体安装。
- `node install.mjs export`：把本地 `~/.gemini/antigravity/codex-theme/user/` 的最新改动导出回仓库，方便提交推送到 GitHub。

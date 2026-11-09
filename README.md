<div align="center">

# 🌐 机场life (ji-chang-tui-jian.life)
### 全球 42 家网络加速与机场专线测速评测实验室 · SEO/GEO 高转化矩阵站

[![Astro](https://img.shields.io/badge/Astro-7.0+-BC52EE.svg?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Ready-F38020.svg?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](./LICENSE)

<p align="center">
  <b>专注于科学上网、企业跨境专线（IEPL/IPLC）、大模型（ChatGPT/Claude）与 4K 流媒体解锁的真实数据测评基准平台。</b>
</p>

[🌐 访问线上站点](https://ji-chang-tui-jian.life/) • [📊 42家机场品牌库](https://ji-chang-tui-jian.life/airports/) • [🏆 2026推荐天梯榜](https://ji-chang-tui-jian.life/rankings/) • [📖 技术文档与架构](./README.md#系统架构与模块)

</div>

---

## 📖 项目简介 (Overview)

**机场life (`ji-chang-tui-jian.life`)** 是一个面向出海业务、跨境电商、极客开发者和海量科学上网用户的下一代静态加速导航与测评矩阵平台。

项目基于 **Astro 7 纯静态架构（SSG）** 构建，杜绝冗余客户端 JS，全站 89+ 页面在 Cloudflare 全球边缘 CDN 上实现亚秒级瞬时首屏加载。整站以 **Google / Bing 技术 SEO** 与 **GEO（生成式 AI 引擎）** 规范为底层设计基准，配备了权威的实验室评测标准、可视化的 JSON-LD 结构化数据、防跑路预警系统与多端订阅分流指南。

---

## ✨ 核心特性 (Key Features)

### 1. 🏢 全网 42 家机场多维实测矩阵
- **真实数据驱动**：深度收录包括 **光速云 (Guangsu Cloud)**、暮光加速、飞猫云、微风网络、大佬云、星岛梦等在内的 42 家主流品牌。
- **透明底账**：每家机场均具备独立评测页（`/airports/[slug]/`），标注协议支持（VLESS/Reality/Hysteria2/Trojan）、线路等级（IEPL/IPLC/BGP）、起步资费与专属优惠码（如光速云 `AMM`）。
- **实测跑分可视化**：配套真实晚高峰（20:30-22:30）测速图与流媒体解锁截图。

### 2. 🏛️ 五大万字级核心知识专题 (Pillar & Spoke)
- **🎯 选购指南专题 (`/recommendations/`)**：包含高端 IEPL 专线、平价性价比、不限时按量付费、流媒体与外贸独享专线四大细分场景。
- **🌐 免费节点实时池 (`/free-nodes/`)**：提供实时社区节点聚合、Clash Verge Rev / Sing-box 一键转换指南与节点安全审计。
- **🎁 免费试用与退款保障 (`/free-trial/`)**：全网 0 元免绑卡白嫖清单、10 分钟晚高峰极限压测 SOP 与 24 小时无理由退款维权指南。
- **🚨 跑路预警与避坑指南 (`/warning/`)**：建立资金链断裂预警指标、行业跑路黑名单底账与跨境充值维权指南。
- **💡 机场常见问答 FAQ (`/faq/`)**：涵盖协议原理（VLESS vs Trojan）、客户端配置、支付防封锁与大模型报错排查。

### 3. 🔍 顶尖技术 SEO 与 GEO 搜索引擎标准
- **Canonical 与 Sitemap 绝对同步**：全站严格统一 `trailingSlash: "always"`，Sitemap 与 Canonical 100% 吻合，消灭重定向损耗。
- **结构化数据 (JSON-LD)**：全站页面自动输出符合 Schema.org 标准的 `WebSite`、`Organization`、`Review`、`Product`、`BreadcrumbList` 与 `FAQPage`。
- **可视化权威指标**：评测页 DOM 渲染真实的 NOC 实验室评分卡片，杜绝 Google “隐藏富摘要（Hidden Rich Snippets）”违规风险。
- **多引擎蜘蛛友好**：`robots.txt` 专门对 `Googlebot`、`bingbot`、`Baiduspider` 与 `yisouspider`（神马搜索）声明放行。

### 4. 🎨 极致纯净的设计规范 (Design System)
- **OKLCH 语义化设计 Token**：严格遵循语义化设计变量，零硬编码 Hex/RGB，零 Tailwind 调色盘污染，支持亮色/深色模式无缝瞬切（Zero FOUC）。
- **极速高性能**：静态 Pagefind 本地离线全站搜索、字体 Latin 子集预加载、极低 CLS（累积布局偏移）。

---

## 📂 目录结构 (Directory Structure)

```text
ji-chang-tui-jian.life/
├── public/                      # 静态资源 (Favicon, 测速图, 品牌Logo)
│   ├── assets/speedtests/       # 42家机场实测跑分与解锁图
│   └── favicon.svg
├── src/
│   ├── components/              # 核心 UI 组件与布局单元
│   │   ├── airports/            # 评分卡片、测速图片查看器
│   │   ├── layout/              # 响应式导航栏、页脚、深色切换
│   │   └── seo/                 # SEO Head、JSON-LD 结构化数据
│   ├── config/                  # 全局站点与品牌配置
│   │   ├── site.config.ts       # 站点元数据、域名、站长验证配置
│   │   └── nav.config.ts        # 全站导航体系配置
│   ├── data/                    # 42家机场品牌数据库与专题数据源
│   │   ├── airports.ts          # 42家机场完整数据集合 (资费/协议/测速)
│   │   └── topics/              # 选购/免费试用/跑路预警/免费节点数据
│   ├── layouts/                 # 页面级布局模版 (Base/Marketing/Blog)
│   ├── pages/                   # 路由定义 (Astro File-based Routing)
│   │   ├── airports/            # 品牌库与 [slug] 详情评测页
│   │   ├── free-nodes/          # 免费节点专题与 spoke 子页
│   │   ├── free-trial/          # 免费试用专题与 spoke 子页
│   │   ├── recommendations/     # 选购指南专题与 spoke 子页
│   │   ├── warning/             # 跑路预警专题与 spoke 子页
│   │   ├── faq/                 # 问答中心
│   │   ├── rankings/            # 推荐排行榜天梯页
│   │   ├── robots.txt.ts        # 动态合规 robots.txt 生成端点
│   │   └── sitemap.xml.ts       # 搜索引擎标准 XML Sitemap 生成端点
│   └── styles/                  # OKLCH 规范全局 CSS 与设计变量
├── astro.config.ts              # Astro、Starlight、Sitemap 核心配置
└── package.json                 # 依赖配置与工程构建脚本
```

---

## 🚀 本地开发与快速上手 (Quick Start)

### 环境要求
- **Node.js**: `v20.0.0` 或更高（推荐 Node 22 / 24）
- **包管理器**: `pnpm` (推荐 `pnpm@8.15.0+`)

### 1. 克隆并安装依赖
```bash
git clone https://github.com/zlzlzl98698-dev/ji-chang-tui-jian.life.git
cd ji-chang-tui-jian.life
pnpm install
```

### 2. 启动本地开发服务
```bash
pnpm dev
```
打开浏览器访问 `http://localhost:4321` 即可体验实时热更新。

### 3. 运行本地验证与测试
```bash
# 运行单元测试 (Vitest)
pnpm test

# 运行代码检查与全站设计规范自审 (ESLint + Stylelint + check:kpis)
pnpm run lint

# 生产环境静态编译打包
pnpm run build

# 预览本地生产构建结果
pnpm preview
```

---

## ☁️ 部署到 Cloudflare Pages (Deployment)

本项目专为 **Cloudflare Pages** 深度优化，无需服务器维护，开箱即用：

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，进入 **Workers & Pages** &rarr; **Create application** &rarr; **Pages**。
2. 绑定 GitHub 仓库：`zlzlzl98698-dev/ji-chang-tui-jian.life`。
3. 构建配置项：
   - **Framework preset**: `Astro`
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
4. 环境变量（可选配置，用于自动化站点验证）：
   - `SITE_URL`: `https://ji-chang-tui-jian.life`
   - `GOOGLE_SITE_VERIFICATION`: `[你的谷歌验证码]`
   - `BING_SITE_VERIFICATION`: `[你的必应验证码]`
   - `SHENMA_SITE_VERIFICATION`: `[你的神马验证码]`
   - `BAIDU_SITE_VERIFICATION`: `[你的百度验证码]`
5. 点击 **Save and Deploy**，即可在几十秒内完成全球多节点部署。

---

## 🔒 生产运营守则 (Operational Discipline)

> [!IMPORTANT]
> 本项目已完成上线前的技术 SEO 初始化与 URL 语义定型：
> - **不可随意更改现有 Slug**：严禁随意批量重命名或删除已发布的目录与文章 slug。
> - **严格使用设计 Token**：新增页面时样式必须采用语义变量（如 `var(--primary)`、`bg-card`、`text-destructive`），禁止硬编码颜色。
> - **商业链接规范**：所有外链跳转商业推广地址均强制包裹 `target="_blank" rel="nofollow sponsored noopener"`。

---

## 📄 开源许可证 (License)

本项目基于 [MIT License](./LICENSE) 协议开源。

---

<div align="center">
  <b>机场life · 专线节点实测与科学上网评测指南</b><br>
  Built with ❤️ by 机场life 评测团队
</div>

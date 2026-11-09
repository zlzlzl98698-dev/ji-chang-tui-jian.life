export interface ClientItem {
  name: string;
  category: "Windows" | "Android" | "iOS" | "macOS" | "Linux" | "OpenWrt";
  badge: string;
  description: string;
  protocols: string[];
  features: string[];
  downloadHint: string;
  isRecommended: boolean;
}

export const clientsData: ClientItem[] = [
  // Windows
  {
    name: "Clash Verge Rev",
    category: "Windows",
    badge: "主流首选",
    description: "基于 Mihomo (Clash.Meta) 内核，界面现代优雅，支持智能分流规则、TUN 全局虚拟网卡模式与订阅自动更新，是 Windows 端目前最受好评的代理客户端。",
    protocols: ["Shadowsocks", "VLESS", "Trojan", "Hysteria2", "TUIC"],
    features: ["TUN 模式接管系统全局流量", "可视化节点测速与延迟图", "自定义分流规则与策略组", "支持深色模式与中文界面"],
    downloadHint: "可直接前往 GitHub Release 下载 x64 安装包或绿色便携版",
    isRecommended: true
  },
  {
    name: "v2rayN",
    category: "Windows",
    badge: "多协议神器",
    description: "Windows 平台资历最深厚的网络工具之一，支持 Xray、sing-box 等多种底层核心，适合需要精细调节节点参数的高阶用户。",
    protocols: ["VMess", "VLESS", "Shadowsocks", "Trojan", "SOCKS5"],
    features: ["支持批量测速与可用性验证", "多核心自由切换", "支持通过路由规则精细分流"],
    downloadHint: "建议下载包含 Core 核心的完整发布包",
    isRecommended: false
  },
  {
    name: "FlClash",
    category: "Windows",
    badge: "轻量极简",
    description: "采用 Flutter 开发的高颜值跨平台客户端，内存占用低，启动迅速，操作逻辑极其适合入门用户。",
    protocols: ["Shadowsocks", "VLESS", "Trojan"],
    features: ["轻量开箱即用", "界面清新简约", "多平台统一交互体验"],
    downloadHint: "支持 Windows / Android / macOS 多端跨平台一致使用",
    isRecommended: false
  },

  // Android
  {
    name: "v2rayNG",
    category: "Android",
    badge: "安卓首选",
    description: "安卓端下载量最大、兼容性最强的主流代理客户端。配置简单直观，一键扫码或粘贴订阅链接即可载入所有节点。",
    protocols: ["VLESS", "VMess", "Shadowsocks", "Trojan"],
    features: ["分应用代理（绕过指定 APP）", "支持扫码极速导入节点", "电量与流量消耗低"],
    downloadHint: "在 GitHub 官方仓库获取最新 APK 安装包",
    isRecommended: true
  },
  {
    name: "FlClash (Android)",
    category: "Android",
    badge: "高颜值推荐",
    description: "基于 Mihomo 内核的跨平台移动客户端，UI 质感极佳，策略组切换与节点管理逻辑顺畅。",
    protocols: ["Shadowsocks", "VLESS", "Trojan"],
    features: ["现代卡片式设计", "支持多订阅合并与规则重写"],
    downloadHint: "直接下载对应 CPU 架构（通常为 arm64-v8a）的 APK",
    isRecommended: false
  },
  {
    name: "Hiddify",
    category: "Android",
    badge: "全能多协议",
    description: "跨平台且面向国际化用户的多协议工具，支持自动优选节点与全协议自适应导入。",
    protocols: ["VLESS", "Trojan", "Shadowsocks", "Wireguard"],
    features: ["一键多协议解析", "自动节点延迟探测与故障切换"],
    downloadHint: "在官方 GitHub Releases 页面下载安装",
    isRecommended: false
  },

  // iOS
  {
    name: "Shadowrocket (小火箭)",
    category: "iOS",
    badge: "iOS 必备",
    description: "iOS 平台最知名的规则代理客户端。功能全面且稳定，支持节点扫码、链接导入、场景配置与分流，深受海外与跨境用户信赖。",
    protocols: ["Shadowsocks", "VLESS", "VMess", "Trojan", "Hysteria2"],
    features: ["支持扫码和一键导入节点订阅", "按域名/地理位置智能规则分流", "原生快捷指令与小组件支持"],
    downloadHint: "需使用非国区 Apple ID 前往 App Store 购买下载",
    isRecommended: true
  },
  {
    name: "Stash",
    category: "iOS",
    badge: "iOS Clash 完美替代",
    description: "iOS 平台上的 Clash 优质实现，支持完整的 Clash 规则格式、覆写（Override）功能与 HTTP/HTTPS 抓包调试。",
    protocols: ["Shadowsocks", "VLESS", "Trojan", "Snell"],
    features: ["原生支持 Clash YAML 配置格式", "按需连接与策略组面板"],
    downloadHint: "需在海外区 App Store 获取",
    isRecommended: false
  },
  {
    name: "Surge 5",
    category: "iOS",
    badge: "专业级网络利器",
    description: "面向网络工程师与极客的高级代理与抓包利器，提供毫秒级请求日志排查与强大的网络层控制能力。",
    protocols: ["Shadowsocks", "Trojan", "Snell", "VLESS"],
    features: ["高精度网络诊断与流量仪表盘", "JavaScript 脚本扩展与重写能力"],
    downloadHint: "在海外 App Store 下载，按授权周期内购解锁",
    isRecommended: false
  },

  // macOS
  {
    name: "Clash Verge Rev (Mac)",
    category: "macOS",
    badge: "Mac 强烈推荐",
    description: "macOS 平台目前最稳定且维护活跃的图形客户端，完美兼容 Apple Silicon (M1/M2/M3/M4) 与 Intel 架构。",
    protocols: ["Shadowsocks", "VLESS", "Trojan", "Hysteria2"],
    features: ["菜单栏极速启停与节点切换", "TUN 增强模式接管系统所有应用流量", "支持系统原汁原味的暗黑模式"],
    downloadHint: "下载对应芯片类型的 DMG 镜像（arm64 对应 M 系列芯片）",
    isRecommended: true
  },
  {
    name: "Surge Mac",
    category: "macOS",
    badge: "专业旗舰",
    description: "Mac 端顶级网络增强利器，具备极佳的稳定性和系统集成度，支持将 Mac 设为局域网软网关。",
    protocols: ["Shadowsocks", "Trojan", "Snell", "VLESS"],
    features: ["网关接管局域网所有设备流量", "极致的低功耗与无缝系统代理"],
    downloadHint: "前往 Surge 官网下载安装并激活授权",
    isRecommended: false
  },

  // Linux & OpenWrt
  {
    name: "v2rayA",
    category: "Linux",
    badge: "Linux 首选",
    description: "基于 Web UI 控制的通用代理客户端，非常适合家庭 Linux 服务器、NAS 或无桌面环境的工控机。",
    protocols: ["VLESS", "VMess", "Shadowsocks", "Trojan"],
    features: ["通过浏览器管理节点与分流规则", "开机自启并提供透明代理网关"],
    downloadHint: "可通过 APT/YUM 包管理器或 Docker 极速部署",
    isRecommended: true
  },
  {
    name: "OpenClash",
    category: "OpenWrt",
    badge: "软路由标配",
    description: "运行在 OpenWrt 软路由系统上的 Mihomo/Clash 客户端，实现局域网所有设备（电视、手机、Switch 等）全自动分流加速。",
    protocols: ["Shadowsocks", "VLESS", "Trojan", "Hysteria2"],
    features: ["全屋设备无需单独安装客户端", "Fake-IP 与 DNS 智能防污染", "多种运行模式可选"],
    downloadHint: "在 OpenWrt 路由器后台上传 IPK 依赖包安装",
    isRecommended: true
  }
];

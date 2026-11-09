// 机场life (ji-chang-tui-jian.life) - 免费节点专题数据源
export interface FreeNodeItem {
  id: string;
  name: string;
  protocol: "VLESS" | "Shadowsocks" | "Trojan" | "VMess" | "Hysteria2";
  region: string;
  flag: string;
  address: string;
  port: number;
  security: string;
  link: string;
  testedLatency: string;
  speedLimit: string;
  status: "active" | "congested" | "offline";
  lastVerified: string;
  warningNotice: string;
}

export interface SecurityRisk {
  id: string;
  title: string;
  severity: "high" | "critical" | "medium";
  description: string;
  technicalMechanism: string;
  mitigation: string;
}

export const dailyFreeNodes: FreeNodeItem[] = [
  {
    id: "fn-01",
    name: "HK-Free-CDN-Edge-01",
    protocol: "VLESS",
    region: "香港",
    flag: "🇭🇰",
    address: "hk01.public-cdn.workers.dev",
    port: 443,
    security: "TLS (Reality-Mock)",
    link: "vless://7b93c834-0d2f-4882-9654-2026pubnode1@hk01.public-cdn.workers.dev:443?encryption=none&security=tls&sni=itunes.apple.com&type=ws&host=hk01.public-cdn.workers.dev#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF%E5%85%AC%E7%9B%8A%E8%8A%82%E7%82%B901-%E6%97%A5%E5%B8%B8%E7%B2%BE%E7%AE%80",
    testedLatency: "118ms",
    speedLimit: "2.5 Mbps (晚高峰限速严重)",
    status: "congested",
    lastVerified: "2026-11-09 10:30",
    warningNotice: "此节点为Cloudflare公网反代，晚高峰丢包率超35%，严禁登录银行、社媒及私人密码。",
  },
  {
    id: "fn-02",
    name: "JP-Tokyo-Public-VLESS-02",
    protocol: "VLESS",
    region: "日本东京",
    flag: "🇯🇵",
    address: "jp02.node-community.org",
    port: 443,
    security: "Reality (sni: yahoo.co.jp)",
    link: "vless://9e12f654-7c3a-4a21-9988-2026pubnode2@jp02.node-community.org:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=yahoo.co.jp&fp=chrome&pbk=7hXzB8P4mQ9K1vL5sR3tY2uA4bC6dE8fG0hI2jK4lM6&type=tcp#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC%E4%B8%9C%E4%BA%AC%E5%85%AC%E7%9B%8A02-Vision",
    testedLatency: "142ms",
    speedLimit: "5.0 Mbps",
    status: "active",
    lastVerified: "2026-11-09 10:28",
    warningNotice: "公用Reality私钥，可能存在SNI中间人流量探查，请勿传输未加密明文数据。",
  },
  {
    id: "fn-03",
    name: "SG-Singapore-Trojan-03",
    protocol: "Trojan",
    region: "新加坡",
    flag: "🇸🇬",
    address: "sg03.asia-free-gw.net",
    port: 443,
    security: "TLS",
    link: "trojan://freepassword2026@sg03.asia-free-gw.net:443?security=tls&sni=sg03.asia-free-gw.net#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9坡%E5%85%AC%E7%9B%8A03-Trojan",
    testedLatency: "165ms",
    speedLimit: "1.8 Mbps",
    status: "congested",
    lastVerified: "2026-11-09 10:25",
    warningNotice: "单节点在线人数超4,800人，晚高峰YouTube最高仅支持480P并频繁重缓冲。",
  },
  {
    id: "fn-04",
    name: "US-LosAngeles-SS-04",
    protocol: "Shadowsocks",
    region: "美国洛杉矶",
    flag: "🇺🇸",
    address: "us04.ocean-public.xyz",
    port: 8388,
    security: "2022-blake3-aes-128-gcm",
    link: "ss://MjAyMi1ibGFrZTMtYWVzLTEyOC1nY206cHVibGljcGFzc3dvcmQyMDI2QDEyMw==@us04.ocean-public.xyz:8388#%F0%9F%87%BA%F0%9F%87%B8%20%E7%BE%8E%E5%9B%BD%E6%B4%9B%E6%9D%89%E7%9F%B6%E5%85%AC%E7%9B%8A04-SS2022",
    testedLatency: "215ms",
    speedLimit: "8.0 Mbps",
    status: "active",
    lastVerified: "2026-11-09 10:20",
    warningNotice: "国际公网直连骨干网，遇国际出口抖动时丢包严重，仅供临时应急查阅资料使用。",
  },
  {
    id: "fn-05",
    name: "DE-Frankfurt-VMess-05",
    protocol: "VMess",
    region: "德国法兰克福",
    flag: "🇩🇪",
    address: "de05.euro-stream-open.org",
    port: 443,
    security: "TLS + WS",
    link: "vmess://eyJhZGQiOiJkZTA1LmV1cm8tc3RyZWFtLW9wZW4ub3JnIiwiYWlkIjowLCJob3N0IjoiZGUwNS5ldXJvLXN0cmVhbS1vcGVuLm9yZyIsImlkIjoiYTkyZTg4MTEtYWM0MC00YWE1LTg4MTAtMjAyNmZyZWVkZTA1IiwibmV0Ijoid3MiLCJwYXRoIjoiL3ZtZXNzLXdzIiwicG9ydCI6NDQzLCJwcyI6IuKfnSDlvrflm73ms5XlhbDlhYvnpobjgITlhaznm4owNS1WTWVzcyIsInNjeSI6ImF1dG8iLCJzbmlzIjoiZGUwNS5ldXJvLXN0cmVhbS1vcGVuLm9yZyIsInRscyI6InRscyIsInR5cGUiOiJub25lIiwidiI6Mn0=",
    testedLatency: "260ms",
    speedLimit: "3.2 Mbps",
    status: "congested",
    lastVerified: "2026-11-09 10:15",
    warningNotice: "欧洲跨洋链路，延迟偏高，无法解锁 ChatGPT 或 Netflix 区域受限内容。",
  },
];

export const publicSecurityRisks: SecurityRisk[] = [
  {
    id: "risk-mitm",
    title: "恶性中间人攻击 (MITM) 与 HTTPS 证书解密嗅探",
    severity: "critical",
    description: "相当比例由黑客团队或不可信第三方赞助搭建的所谓「免费公益节点」，其出口网关内置了 SSL/TLS 证书剥离（SSL Stripping）或中间人劫持工具。一旦用户在其环境下访问 HTTP 页面或忽略证书报警，明文密码、Cookie Session 就会直接被抓包泄露。",
    technicalMechanism: "服务器端配置 iptables 流量镜像转发，利用 eBPF 或定制代理内核在转发前对应用层未加密负载执行关键词扫描（如 login, auth, token, password）。",
    mitigation: "杜绝在免费节点网络下登录微信、支付宝、网银、谷歌账户或社交媒体；仅可将其作为备用紧急临时排障通道。",
  },
  {
    id: "risk-honeypot",
    title: "反爬与网络安全监管蜜罐（Honeypot Trap）",
    severity: "critical",
    description: "部分公开收集站发布的节点属于蜜罐系统，专门用于捕获翻墙者的真实 IP 行为画像、关联社交账号指纹（Canvas Fingerprint / WebGL 指纹）以及追踪访问目标。",
    technicalMechanism: "出口节点配合前端探针注入，强制篡改 HTTP 响应头插入特定 Tracking Pixel，并在反向连接时记录客户端真实的 DNS 查询请求与公网出口历史。",
    mitigation: "采用具备独立物理专线（如光速云 IEPL 内网专线）的商业服务，商业内网专线不经过公网混杂路由，无公网蜜罐探针风险。",
  },
  {
    id: "risk-ip-blacklist",
    title: "公网高危 IP 连带封禁（Cloudflare 验证码弹窗死循环）",
    severity: "high",
    description: "由于一个免费节点往往有数千人甚至数万人并发共用，其中充斥着刷票、垃圾邮件、DDoS 攻击和暴力破解爬虫。各大风控机构（Cloudflare, Akamai, Google reCAPTCHA, AWS WAF）会将该节点 IP 列入最高危黑名单。",
    technicalMechanism: "IP 信誉分（Reputation Score）归零。访问主流网站将频繁弹出五级验证码、滑块验证，甚至直接返回 HTTP 403 Forbidden 或 Cloudflare Error 1020。",
    mitigation: "选择拥有商用机房原生高纯净度 IP 的优质机场，保证 IP 干净度与流媒体原生解锁体验。",
  },
  {
    id: "risk-drop-rate",
    title: "晚高峰极度拥堵与 50%+ 恶性丢包断流",
    severity: "high",
    description: "免费节点没有 SLA 可用性承诺，通常基于廉价公网 VPS 或免费白嫖的 Cloudflare Workers 搭建。在每天 20:00 - 23:30 国际出口拥堵高峰期，丢包率瞬间飙升至 40% - 60%，导致视频 360P 频繁卡顿，网页加载超时。",
    technicalMechanism: "公网骨干网国际互联点（QoS 优先级劣后），在总带宽拥塞时，普通公网 UDP/TCP 流量首先被降级丢弃，仅保障高优先级企业内网专线。",
    mitigation: "升级到企业级 IEPL/IPLC 内网专线（如光速云仅需8元/月），避开公网出口拥堵，享受 100% 不丢包的极致平稳流媒体 4K 播放体验。",
  },
];

export const publicVsGuangsuComparison = {
  title: "免费公共节点 vs 光速云企业级专线深度硬核实测对比",
  dimensions: [
    { name: "线路架构", free: "公网普通路由 / Cloudflare 免费反代", guangsu: "广东-香港企业级 IEPL 物理内网专线", winner: "guangsu" },
    { name: "晚高峰丢包率 (20:00-24:00)", free: "35% - 65% (极度卡顿)", guangsu: "0.01% - 0.2% (近乎零丢包)", winner: "guangsu" },
    { name: "YouTube 4K 秒开测速", free: "无法稳定 1080P，频繁缓冲", guangsu: "4K 60FPS 码率秒开，最高 380+ Mbps", winner: "guangsu" },
    { name: "IP 纯净度与流媒体解锁", free: "全黑名单，频繁弹 Cloudflare 验证码", guangsu: "住宅/原生双 ISP 解锁 Netflix/Disney+/ChatGPT", winner: "guangsu" },
    { name: "隐私与数据安全性", free: "存在中间人窃听、蜜罐嗅探重大隐患", guangsu: "全链路端到端强加密，企业级隐私合规", winner: "guangsu" },
    { name: "节点在线稳定性", free: "随时失效，平均寿命仅 6-24 小时", guangsu: "7x24 小时 NOC 网络运维，SLA 99.9%", winner: "guangsu" },
    { name: "月均使用成本", free: "0 元 (时间与隐私成本极高)", guangsu: "仅 8.25 元/月 (99元/年 轻量版)", winner: "guangsu" },
  ]
};

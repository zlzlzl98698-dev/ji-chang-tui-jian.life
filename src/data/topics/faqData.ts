// 机场life (ji-chang-tui-jian.life) - 机场 FAQ 深度全景知识库
export interface FAQItem {
  id: string;
  category: "protocols" | "clients" | "billing" | "ai-streaming";
  categoryName: string;
  question: string;
  shortAnswer: string;
  fullAnswer: string;
  actionSteps?: string[];
  recommendedAirportSlug?: string;
  tags: string[];
}

export const faqCategories = [
  { id: "protocols", name: "协议与网络底层", description: "VLESS-Reality、Shadowsocks、Hysteria2、Trojan 深度对比与选择指南" },
  { id: "clients", name: "客户端与系统配置", description: "Clash Verge Rev、Sing-box、Shadowrocket、Surge 常见报错与内核故障排障" },
  { id: "billing", name: "套餐与购买避坑", description: "按量计费 vs 周期套餐、防封换域名、退款争议与付款安全" },
  { id: "ai-streaming", name: "AI 与流媒体解锁", description: "ChatGPT Access Denied、Claude 封号、Netflix / Disney+ 区域限制破解" },
] as const;

export const comprehensiveFaqs: FAQItem[] = [
  // 协议篇
  {
    id: "proto-reality-vs-ss",
    category: "protocols",
    categoryName: "协议与网络底层",
    question: "VLESS-Reality 与传统 Shadowsocks 协议相比，到底好在哪里？为什么 2026 年推荐优先选 Reality？",
    shortAnswer: "VLESS-Reality 消除了传统代理服务端的特征证书指纹，借用大厂合规域名的 TLS 证书伪装，彻底解决了 GFW 针对 TLS 握手的主动探测与封锁问题。",
    fullAnswer: "传统的 Shadowsocks 在遭遇深度包检测 (DPI) 时，其密文熵值特征与特定 padding 特征已被防火墙机器学习模型识别，公网直连极易发生端口阻断。而 VLESS-Reality 采用服务端借用公网真实合规大厂站点（例如苹果 iTunes、微软、雅虎等）的 TLS 证书机制，在中间人探测时将真实请求转发至目标大厂，使审查设备完全无法区分是正常 HTTPS 浏览还是代理流量，抗封锁能力目前处于公网协议顶峰。",
    actionSteps: [
      "如果使用公网直连节点，优先选择支持 VLESS-Reality 或 TUIC/Hysteria2 的机场。",
      "如果是企业 IEPL/IPLC 内网专线（如光速云），数据根本不经过公网 GFW 审查，Shadowsocks 2022 反而延迟更低、加解密开销最小，是专线上的最优解。",
    ],
    recommendedAirportSlug: "guangsu",
    tags: ["VLESS", "Reality", "Shadowsocks", "协议对比", "防封锁"],
  },
  {
    id: "proto-hysteria2-udp-qos",
    category: "protocols",
    categoryName: "协议与网络底层",
    question: "Hysteria 2 / TUIC 协议虽然速度飞快，但在国内部分省份为什么会突然断流或断网？",
    shortAnswer: "Hysteria 2 基于 UDP 协议（QUIC），而国内部分省份运营商（尤其是中国移动和部分地市电信）在晚高峰对未知公网 UDP 流量实行单向限速甚至严重 QoS 阻断。",
    fullAnswer: "Hysteria 2 的核心优势在于其暴力拥塞控制算法，能够在高丢包公网线路上抢占带宽。然而，国内网络安全监管对 UDP 协议极其敏感。当运营商机房检测到持续高带宽的未知加密 UDP 流量时，会直接触发省级 BRAS 路由器的 UDP QoS 策略，将单连接带宽压制到 128Kbps 以下甚至丢包率拉升至 90%。因此，在 UDP 被严重管制的地区，基于 TCP 伪装的 Reality 或基于专线的 IEPL 是更稳定的方案。",
    actionSteps: [
      "检查客户端日志是否频繁提示 `timeout: context deadline exceeded` 或 `read udp: i/o timeout`。",
      "在客户端配置中尝试开启端口跳跃（Port Hopping）功能规避单端口限速。",
      "若依然频繁断流，建议立即切换为专线机场（如光速云企业专线），从根本上避免公网运营商 UDP 限速。",
    ],
    tags: ["Hysteria2", "TUIC", "UDP限速", "QoS", "运营商阻断"],
  },
  {
    id: "proto-iplc-vs-iepl",
    category: "protocols",
    categoryName: "协议与网络底层",
    question: "IPLC 与 IEPL 专线有什么本质区别？为什么专业用户更推荐原生 IEPL 专线？",
    shortAnswer: "IPLC 是国际私有租用线路（点对点物理裸纤/SDH），IEPL 是基于以太网的国际以太网专线。IEPL 具备更灵活的以太网封装、更高的链路透明度与更低的端到端抖动。",
    fullAnswer: "两者在翻墙体验上都属于『端内直连、不经 GFW』的高端线路。区别在于物理层与承载技术：IPLC 采用传统电信 SDH/SONET 物理层架构，固定带宽颗粒度较硬；而 IEPL 采用二层以太网虚拟化技术，支持多点组网与动态流量调度。在实际体验中，IEPL 能提供更低的抖动方差与更优异的晚高峰突发承载力。光速云采用的即为高规格企业级 IEPL 跨境专线，晚高峰丢包稳定控制在 0.1% 以内。",
    actionSteps: [
      "购买专线机场时，认准正规机房 SLA 保障，警惕小作坊将普通 BGP 隧道中转包装为『假 IPLC』虚标价格。",
      "通过 TraceRoute 路由追踪工具检测入口：专线通常国内就近接入深圳/上海骨干内网，公网无后续跨洋跳数。",
    ],
    recommendedAirportSlug: "guangsu",
    tags: ["IPLC", "IEPL", "专线对比", "跨境网络", "低延迟"],
  },

  // 客户端篇
  {
    id: "client-clash-mixed-port",
    category: "clients",
    categoryName: "客户端与系统配置",
    question: "Clash Verge Rev 导入订阅后显示更新成功，但打开网页依然提示『无法连接代理服务器』或 Error 10054？",
    shortAnswer: "通常是由于本地系统代理端口冲突、TUN 虚拟网卡未正确安装驱动，或 Windows 网络防火墙拦截了 Clash 内核。",
    fullAnswer: "排查此问题的标准 SOP 步骤：第一步，检查 Clash 右下角状态栏的 Mixed Port（混合端口，通常是 7897 或 7890）是否与本地其他软件（如迅雷、开发工具代理）冲突；第二步，如果开启了系统代理仍无法上网，请进入 Windows 设置 -> 网络和 Internet -> 代理，查看『手动设置代理』的 IP 是否为 127.0.0.1 且端口与 Clash 一致；第三步，对于游戏或全流量加速，请关闭系统代理并安装启用 TUN 虚拟网卡模式（需管理员权限运行）。",
    actionSteps: [
      "以管理员身份运行 Clash Verge Rev 客户端。",
      "进入设置（Settings）-> 服务模式（Service Mode），点击安装并启动。",
      "开启 TUN 模式开关，此时系统所有流量将通过内核虚拟网卡直接路由，无视端口冲突。",
    ],
    tags: ["Clash", "Clash Verge", "TUN模式", "端口冲突", "无法上网"],
  },
  {
    id: "client-singbox-config-error",
    category: "clients",
    categoryName: "客户端与系统配置",
    question: "Sing-box 导入订阅报错 `inbound/tun: configure tun interface: access denied` 是什么原因？",
    shortAnswer: "Sing-box 在启用 TUN 驱动时缺少 Windows/macOS 操作系统的系统管理员原生提权权限。",
    fullAnswer: "Sing-box 的内核设计追求极致轻量与高吞吐，因此没有像旧版客户端那样在后台长期驻留降权服务进程。当配置文件中定义了 `inbound: tun` 时，内核需要直接在宿主机网络栈创建虚拟网络适配器（Wintun / Utun）。如果没有给 Sing-box 提供 Administrator 权限，操作系统驱动接口将直接拒绝调用。",
    actionSteps: [
      "Windows 用户：右键单击 `sing-box.exe` 或前端客户端快捷方式，选择『以管理员身份运行』。",
      "macOS 用户：在首次启动弹窗中允许系统网络扩展（System Network Extension）或在终端中以 `sudo` 运行。",
    ],
    tags: ["Sing-box", "TUN", "管理员权限", "报错排障"],
  },
  {
    id: "client-ios-shadowrocket-vs-surge",
    category: "clients",
    categoryName: "客户端与系统配置",
    question: "iOS 平台上 Shadowrocket（小火箭）、Loon、Surge 应该怎么选？有必要花几百元买 Surge 吗？",
    shortAnswer: "90% 普通用户选择 2.99 美元的 Shadowrocket 或 5.99 美元的 Loon 即可满足极速与流媒体解锁；Surge（49.99 美元起）仅适合有深度网络协议抓包、企业级脚本断点调试及高端软路由网关需求的用户。",
    fullAnswer: "Shadowrocket 是 iOS 上历史最悠久、更新最勤奋且性价比最高的客户端，全面支持 Shadowsocks、VLESS-Reality、Hysteria2、Trojan、WireGuard 等所有主流协议，规则分流完善。Surge 则定位专业级 Web 开发者调试工具，UI 极度优雅、内存开销极小且具备强大的网络抓包与重写引擎，但对于仅用来观看 Netflix/YouTube、访问 ChatGPT 的日常翻墙用户而言，其数百元的使用门槛属于性能过剩。",
    actionSteps: [
      "新手与大众用户：美区 Apple ID 购买 Shadowrocket ($2.99)。",
      "追求精美 UI 与自动化分流脚本：购买 Loon ($5.99)。",
      "专业网络工程师与 Mac/iOS 重度联动的专业极客：升级 Surge。",
    ],
    tags: ["iOS客户端", "Shadowrocket", "Surge", "Loon", "选购建议"],
  },

  // 资费与账户篇
  {
    id: "billing-annual-vs-monthly",
    category: "billing",
    categoryName: "资费与账户避坑",
    question: "为什么老手普遍建议机场『尽量月付，最多季付』？年付打折到底能不能买？",
    shortAnswer: "由于跨境网络受到严厉的政策监管与高昂的机房链路成本波动，小作坊机场年付卷款跑路的概率极高。只有经过数年沉淀、运营体量巨大、具有企业资质认证的头部品牌才建议考虑优惠年付。",
    fullAnswer: "机场行业的进入门槛极低，一台 VPS 配一个开源面板即可开门接客。大量投机者推出『29元/年 1000G』的超低价年付套餐，目的就是迅速吸筹资金池；一旦遇到国内敏感时期机房查封或被同行 DDoS 勒索，运维成本骤增时这些小站会毫不犹豫选择关站跑路。正规的高端专线（如光速云）之所以提供 99元/年（折合8元/月）的轻量版，是因为其拥有稳定自建的深港 IEPL 骨干网，规模化摊薄了成本，并提供长期服务承诺。",
    actionSteps: [
      "新接触一家机场时，务必先购买月付体验一个完整的晚高峰（20:00-23:00）。",
      "对于不知名小机场、开业时间不满 1 年的站点，坚决不碰年付或不限时套餐。",
      "选择已在《机场品牌库》中核验建站 3 年以上、拥有专属 Telegram 活跃群组的品牌。",
    ],
    recommendedAirportSlug: "guangsu",
    tags: ["月付", "年付陷阱", "跑路防范", "资费周期"],
  },
  {
    id: "billing-pay-safety",
    category: "billing",
    categoryName: "资费与账户避坑",
    question: "在机场官网付款时，使用支付宝/微信付款安全吗？会不会被银行或监管查封账户？",
    shortAnswer: "只要机场接入的是正规第三方企业聚合免签或海外聚合支付网关（显示为普通电商购物消费如『网络技术服务』），普通消费者的付款记录属于常规商户交易，极度安全。",
    fullAnswer: "正规商业机场（如光速云等）接入的第三方支付公司均采用合规商户抬头做资金分账，银行账单流水显示为『某某科技服务』或『数字商城商品』，不涉及任何违法敏感标签。需要警惕的是极少数小作坊要求用户直接扫码转账到个人微信/支付宝账户（个人收款码），这种方式一旦对方账户被风控，付款人也可能遭遇关联审查。因此，务必在正规商户支付页面完成下单。",
    actionSteps: [
      "认准正规带收银台系统的机场，不要向任何 Telegram 私聊客服发送个人转账红包。",
      "有条件的用户可优先使用 USDT (TRC-20) 加密货币支付，实现 100% 匿名无痕购买。",
    ],
    tags: ["支付安全", "支付宝", "USDT", "风控避坑"],
  },

  // AI 与流媒体篇
  {
    id: "ai-chatgpt-access-denied",
    category: "ai-streaming",
    categoryName: "AI 与流媒体解锁",
    question: "访问 OpenAI / ChatGPT 提示 `Access Denied 1020` 或 `Your IP is blocked` 怎么彻底解决？",
    shortAnswer: "这是由于你当前连接的节点 IP 属于万人共用的机房数据中心（Data Center IP），被 Cloudflare 识别为高危爬虫或多账号批量注册恶意源。",
    fullAnswer: "OpenAI 部署了极度严苛的 IP 风险评分模型。普通的公网机房 IP（如搬瓦工、Oracle、AWS、Linode 等广播 IP）基本全量处于 OpenAI 封禁段中。要彻底秒开 ChatGPT 并避免账户被封禁，必须使用具有『住宅家宽 IP（Residential IP）』或『双 ISP 属性商用带宽』的优质节点。光速云专线针对美区、日区配置了原生住宅级清洗网关，全量原生解锁 ChatGPT-4o、Claude 3.5 Sonnet 与 Sora，零验证码直连。",
    actionSteps: [
      "在客户端分流规则中，将 `OpenAI.list` 规则单独指定给解锁标记为『原生/住宅』的节点。",
      "清理浏览器中 `chatgpt.com` 与 `openai.com` 的 Cookie 与 LocalStorage 缓存。",
      "开启浏览器的无痕/隐身模式重新访问。",
      "选用光速云标注了【ChatGPT/Claude 解锁】的专线节点，一键稳定登入。",
    ],
    recommendedAirportSlug: "guangsu",
    tags: ["ChatGPT", "OpenAI", "Access Denied", "IP封禁", "原生解锁"],
  },
  {
    id: "ai-netflix-original-only",
    category: "ai-streaming",
    categoryName: "AI 与流媒体解锁",
    question: "Netflix 为什么只能看到自制剧（Netflix Originals），搜不到当地版权剧（如《绝命毒师》《甄嬛传》）？",
    shortAnswer: "这表明 Netflix 已检测到你使用的是代理服务器，降级为『仅提供非版权限制的自制剧』保护模式，俗称『未原生解锁』。",
    fullAnswer: "Netflix 会实时比对 MaxMind、IP2Location 数据库以及全局并发观影连接数。当一个节点 IP 被判定为代理服务器（Proxy/VPN）时，Netflix 不会直接报错拦截，而是静默隐藏所有受地域版权限制的剧集，仅展示全球通用的自制剧。要解锁当地完整的影视库，机场必须配置了针对 Netflix 的原生 IP 欺骗伪装（DNS 分流劫持或住宅家庭代理落地）。",
    actionSteps: [
      "进入《42家机场品牌库》筛选支持『Netflix 完整解锁』的高级机场。",
      "查看评测页中的《全网流媒体解锁实时监测矩阵》，优先选择光速云、WgetCloud 等持有原生双 ISP 机房的品牌。",
    ],
    recommendedAirportSlug: "guangsu",
    tags: ["Netflix", "流媒体解锁", "自制剧限制", "原生IP"],
  },
];

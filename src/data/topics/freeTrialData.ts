// 机场life (ji-chang-tui-jian.life) - 免费试用与退款保障全景盘点数据源
export interface TrialAirportItem {
  id: string;
  name: string;
  slug: string;
  trialType: "0元免绑卡试用" | "1元体验试用" | "24小时无理由退款" | "7天退款保障";
  trialTraffic: string;
  trialPeriod: string;
  claimCondition: string;
  lineQuality: string;
  supportClients: string[];
  affLink: string;
  coupon?: string;
  verdict: string;
}

export const trialAirportsList: TrialAirportItem[] = [
  {
    id: "trial-guangsu",
    name: "光速云 (Guangsu Cloud)",
    slug: "guangsu",
    trialType: "24小时无理由退款",
    trialTraffic: "全规格 IEPL 专线流量",
    trialPeriod: "24 小时体验",
    claimCondition: "轻量年付仅需 99 元 (折合 8.25 元/月)，首日不满意直接工单全额退回",
    lineQuality: "广东-香港企业级 IEPL 物理专线，4K 秒开，零晚高峰丢包",
    supportClients: ["Clash", "Sing-box", "Shadowrocket", "Surge", "Quantumult X"],
    affLink: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    coupon: "AMM",
    verdict: "全网第一推荐！极低试错门槛，真正的内网物理专线，晚高峰 4K 丝滑无压力。",
  },
  {
    id: "trial-sogo",
    name: "SogoCloud (搜云加速)",
    slug: "sogo",
    trialType: "1元体验试用",
    trialTraffic: "5 GB 专线流量",
    trialPeriod: "24 小时",
    claimCondition: "注册后购买『1元体验包』即可激活",
    lineQuality: "BGP 隧道中转，多节点可用",
    supportClients: ["Clash", "Shadowrocket"],
    affLink: "https://ji-chang-tui-jian.life/airports/sogo",
    verdict: "适合临时测试线路与流媒体解锁状态，试用流量较小，测试完毕建议转正式套餐。",
  },
  {
    id: "trial-flyingbird",
    name: "飞鸟云 (FlyingBird)",
    slug: "flyingbird",
    trialType: "0元免绑卡试用",
    trialTraffic: "2 GB 免费流量",
    trialPeriod: "1 小时",
    claimCondition: "注册需绑定 Telegram 机器人验证，防止滥用批量白嫖",
    lineQuality: "普通公网中转线路，限速 10Mbps",
    supportClients: ["Clash", "Sing-box"],
    affLink: "https://ji-chang-tui-jian.life/airports/flyingbird",
    verdict: "零门槛白嫖，但由于公网限速明显且时间极短，仅能验证本地能否正常建立连接。",
  },
  {
    id: "trial-wgetcloud",
    name: "WgetCloud (原差速云)",
    slug: "wgetcloud",
    trialType: "7天退款保障",
    trialTraffic: "按实际扣除后退还",
    trialPeriod: "7 天试用保障期",
    claimCondition: "高端企业级 BGP/IEPL 专线，购买月付后按使用比例保障退换",
    lineQuality: "自建机房专线，高端纯净 IP，SLA 99.9%",
    supportClients: ["Clash", "Shadowrocket", "Surge", "Loon"],
    affLink: "https://ji-chang-tui-jian.life/airports/wgetcloud",
    verdict: "老牌高端专线标杆，适合对稳定性要求苛刻的外贸企业与跨境工程师。",
  },
];

export const tenMinutePeakTestChecklist = {
  title: "新用户 10 分钟极限压测指南：买前验货防踩坑 SOP",
  executionTime: "黄金测试窗口：每天晚上 20:30 - 22:30 (全天公网国际骨干网最拥堵的晚高峰时段)",
  steps: [
    {
      step: 1,
      name: "本地多线程 Ping 与连续 100 次丢包率测试 (Packet Loss Test)",
      tool: "MTR / PingPlotter / 客户端内置批量测延迟",
      standard: "连续 Ping 香港入口节点 100 次。合格标准：丢包率 < 1%，延迟波动抖动方差 < 10ms。若丢包率超过 10%，说明机房严重超售，直接退款放弃。",
    },
    {
      step: 2,
      name: "YouTube 4K 60FPS 极速缓冲压测 (Connection Speed Benchmark)",
      tool: "Chrome 打开 YouTube 搜索『4K HDR 60fps Costa Rica』，按 F12 或右键开启『详细统计信息 (Stats for nerds)』",
      standard: "观察 Connection Speed 数值。优质专线（如光速云）在 5 秒内突破 120,000 Kbps (120 Mbps)，缓冲健康度 (Buffer Health) 保持在 30 秒以上；若卡在 15,000 Kbps 且经常 Loading 转圈，说明带宽严重限速。",
    },
    {
      step: 3,
      name: "流媒体与大模型原生双 ISP 属性检测 (IP Cleanliness Audit)",
      tool: "访问 https://ipinfo.io 检查 IP 类型，并打开 ChatGPT / Netflix 测试",
      standard: "Type 必须显示为 `isp` 或 `hosting`（带原生住宅双 ISP 最优）；无弹出 Cloudflare 5 秒人机验证盾，ChatGPT-4o 能正常输入提问即为原生优质 IP。",
    },
    {
      step: 4,
      name: "全线路突发可用性与容灾切换测试 (Failover Verification)",
      tool: "客户端随意切换日本、新加坡、美国节点",
      standard: "各备用核心节点连接成功率必须达到 100%，无大面积 Red Timeout。",
    },
  ]
};

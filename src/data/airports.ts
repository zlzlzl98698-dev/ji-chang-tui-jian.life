// 机场life (ji-chang-tui-jian.life) - 42家机场品牌全量结构化数据集
export interface AirportRecord {
  id: number;
  name: string;
  slug: string;
  rank: number;
  isTop10?: boolean;
  isFeatured?: boolean;
  affLink: string;
  coupon?: string;
  minPrice: string;
  establishedYear: string;
  lineType: string;
  protocols: string[];
  clientSupport: string;
  nodeCoverage: string;
  speedtestImage?: string;
  speedtestData?: {
    testedAt: string;
    records: Array<{ region: string; latency: string; download: string; status: string }>;
  };
  unlockInfo: {
    ai: string[];
    streaming: string[];
  };
  highlights: string[];
  packages: Array<{
    name: string;
    price: string;
    period: string;
    traffic: string;
    trafficPeriod: string;
    desc: string;
  }>;
  description: string;
  pros: string[];
  cons: string[];
  suitableFor: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const airports: AirportRecord[] = [
  {
    "id": 1,
    "name": "光速云",
    "slug": "guangsu",
    "rank": 1,
    "isTop10": true,
    "isFeatured": true,
    "affLink": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "minPrice": "8元/月起 (年付折算)",
    "establishedYear": "2020年",
    "lineType": "IEPL企业级内网双专线",
    "protocols": [
      "VLESS",
      "IEPL",
      "Trojan"
    ],
    "clientSupport": "提供自研专属客户端，同时支持 Clash、Shadowrocket、Sing-box 等第三方客户端订阅导入",
    "nodeCoverage": "香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英国、法国、德国、土耳其、泰国、巴西等全球节点",
    "speedtestImage": "/assets/speedtests/光速云-节点测速实测.webp",
    "speedtestData": {
      "testedAt": "2026-10-19 实测记录 (非晚高峰)",
      "records": [
        {
          "region": "香港 IEPL",
          "latency": "22ms",
          "download": "529Mbps",
          "status": "Operational"
        },
        {
          "region": "台湾 优化",
          "latency": "41ms",
          "download": "114Mbps",
          "status": "Operational"
        },
        {
          "region": "新加坡 专线",
          "latency": "46ms",
          "download": "387Mbps",
          "status": "Operational"
        },
        {
          "region": "日本 东京",
          "latency": "57ms",
          "download": "135Mbps",
          "status": "Operational"
        },
        {
          "region": "美国 洛杉矶",
          "latency": "143ms",
          "download": "18Mbps",
          "status": "Stable"
        }
      ]
    },
    "unlockInfo": {
      "ai": [
        "Claude (全解锁)",
        "ChatGPT (视节点)",
        "Gemini (视节点)"
      ],
      "streaming": [
        "Netflix (全区)",
        "Disney+",
        "YouTube 4K/8K",
        "HBO Max",
        "TikTok",
        "Spotify"
      ]
    },
    "highlights": [
      "2020老牌运营，线路成熟稳定，抗封锁能力强",
      "独家推出致敬斯诺克147永久套餐（247GB不过期），轻度备用首选",
      "IEPL专线 + 企业级内网专线双架构，峰值单节点达 2.5Gbps",
      "全端自研客户端一键直连，新手无需繁杂订阅转换",
      "支持跨境电商、TikTok直播专属企业级大流量与独享IP定制"
    ],
    "packages": [
      {
        "name": "致敬斯诺克147永久套餐",
        "price": "¥147",
        "period": "一次性",
        "traffic": "247GB",
        "trafficPeriod": "永久不过期",
        "desc": "一次性付费，长期轻度办公或备用无过期担忧"
      },
      {
        "name": "轻量版",
        "price": "¥99",
        "period": "年付 (折合约8元/月)",
        "traffic": "69GB",
        "trafficPeriod": "每月",
        "desc": "入门轻量套餐，适合日常查资料、社媒与邮件办公"
      },
      {
        "name": "极速版",
        "price": "¥25",
        "period": "月付",
        "traffic": "168GB",
        "trafficPeriod": "每月",
        "desc": "全球IPLC全节点×1倍率，单节点最高2.5Gbps，支持4K高画质"
      },
      {
        "name": "流光版",
        "price": "¥34",
        "period": "月付",
        "traffic": "268GB",
        "trafficPeriod": "每月",
        "desc": "中度视频流媒体与AI高频生产力方案"
      },
      {
        "name": "量子版",
        "price": "¥68",
        "period": "月付",
        "traffic": "568GB",
        "trafficPeriod": "每月",
        "desc": "大流量高速畅享，支持团队协作与高强度下载"
      },
      {
        "name": "无界版",
        "price": "¥138",
        "period": "月付",
        "traffic": "900GB",
        "trafficPeriod": "每月",
        "desc": "多设备大流量无忧方案"
      },
      {
        "name": "定制套餐",
        "price": "¥680",
        "period": "月付",
        "traffic": "500GB",
        "trafficPeriod": "每月",
        "desc": "按需独立部署全IPLC专线，专属原生IP与独立带宽，7×24运维"
      }
    ],
    "description": "光速云是2020年起稳定运营的高口碑综合型机场，也是本站评测推荐榜首第一主推品牌。它主打IEPL企业内网专线与现代VLESS协议，既为新手提供了下载登录即可畅连的自研多平台客户端，又完整保留了Clash、Shadowrocket等通用订阅协议支持。其最亮眼的特色在于价格梯度跨度极大：既有99元/年（折合约8元/月）的高性价比轻量入门档，又有147元247GB永不过期的一次性套餐，更有专为跨境电商直播打造的独享IP企业级定制版。实测亚太近端节点延迟低至22ms，下载速度破500Mbps，综合表现极其优异。",
    "pros": [
      "IEPL专线保障，晚高峰几乎无丢包与断连",
      "套餐形态极其丰富，拥有业内少见的永久不过期套餐",
      "全平台自研客户端设计精良，同时兼容开源客户端订阅",
      "亚太主流地区节点密集，香港、日本与新加坡延迟极佳"
    ],
    "cons": [
      "Gemini及部分冷门AI工具对落地节点有区域限制，需配合节点切换",
      "最低8元/月为年付折算单价，月付最低为25元/月起"
    ],
    "suitableFor": [
      "跨境电商卖家、TikTok海外直播运营与外贸企业",
      "追求晚高峰稳定、反感折腾节点切换的重度影音与办公用户",
      "不想按月续费、需要永久不过期备用节点的用户",
      "刚接触网络加速的新手小白（一键客户端即开即用）"
    ],
    "faqs": [
      {
        "question": "光速云如何使用优惠码？",
        "answer": "在注册或选购套餐结算页面输入优惠码 AMM 即可享受专属新人优惠。"
      },
      {
        "question": "光速云支持哪些客户端？",
        "answer": "官方提供Windows/Android等平台一键客户端，并支持直接复制订阅链接导入到 Clash Verge Rev、v2rayN、Shadowrocket（小火箭）、Sing-box 等通用客户端。"
      },
      {
        "question": "永久套餐真的不过期吗？",
        "answer": "是的，致敬斯诺克147套餐为一次性计费，内含247GB高速流量，用完为止，没有每月清零的周期限制。"
      }
    ]
  },
  {
    "id": 2,
    "name": "暮光加速",
    "slug": "muguang",
    "rank": 2,
    "isTop10": true,
    "isFeatured": true,
    "affLink": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "muguang5555",
    "minPrice": "20元/月 (120GB)",
    "establishedYear": "2023年",
    "lineType": "BGP智能调度 + 专线级出口",
    "protocols": [
      "Shadowsocks",
      "BGP隧道"
    ],
    "clientSupport": "覆盖 Windows、macOS、iOS、Android、Linux 全平台主流客户端订阅",
    "nodeCoverage": "香港、台湾、新加坡、日本、美国等主流核心枢纽节点",
    "speedtestImage": "/assets/speedtests/微风-节点测速实测.webp",
    "speedtestData": {
      "testedAt": "2026-10-19 实测记录 (非晚高峰)",
      "records": [
        {
          "region": "香港 专线",
          "latency": "26ms",
          "download": "509Mbps",
          "status": "Operational"
        },
        {
          "region": "台湾 专线",
          "latency": "40ms",
          "download": "107Mbps",
          "status": "Operational"
        },
        {
          "region": "新加坡 专线",
          "latency": "43ms",
          "download": "419Mbps",
          "status": "Operational"
        },
        {
          "region": "日本 东京",
          "latency": "53ms",
          "download": "150Mbps",
          "status": "Operational"
        },
        {
          "region": "美国 节点",
          "latency": "160ms",
          "download": "19Mbps",
          "status": "Stable"
        }
      ]
    },
    "unlockInfo": {
      "ai": [
        "ChatGPT",
        "Claude",
        "Gemini (视节点)"
      ],
      "streaming": [
        "Netflix",
        "Disney+",
        "YouTube 4K",
        "HBO Max",
        "TikTok",
        "Spotify"
      ]
    },
    "highlights": [
      "BGP智能自动分流调度，多入口热备切换",
      "官方宣称提供 7×24 小时真人在线客服支持",
      "支持多设备同时在线，适合个人多端与团队跨平台协同",
      "流量梯度丰富（120GB~1500GB/月），更有不限时流量包可选"
    ],
    "packages": [
      {
        "name": "暮光·基础版",
        "price": "¥20",
        "period": "月付",
        "traffic": "120GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量上网与办公"
      },
      {
        "name": "暮光·标准版",
        "price": "¥40",
        "period": "月付",
        "traffic": "240GB",
        "trafficPeriod": "每月",
        "desc": "主流流媒体播放与日常主力"
      },
      {
        "name": "暮光·旗舰版",
        "price": "¥100",
        "period": "月付",
        "traffic": "700GB",
        "trafficPeriod": "每月",
        "desc": "大流量下载与高频多设备在线"
      },
      {
        "name": "暮光·至尊版",
        "price": "¥180",
        "period": "月付",
        "traffic": "1500GB",
        "trafficPeriod": "每月",
        "desc": "团队与重度业务使用"
      },
      {
        "name": "暮光·年付轻量版",
        "price": "¥109",
        "period": "年付",
        "traffic": "70GB",
        "trafficPeriod": "每月",
        "desc": "年付划算备用方案"
      },
      {
        "name": "暮光·不限时轻量包",
        "price": "¥219",
        "period": "一次性",
        "traffic": "150GB",
        "trafficPeriod": "永久",
        "desc": "一次性计费，不限时间"
      },
      {
        "name": "独享私人定制节点",
        "price": "¥600",
        "period": "月付",
        "traffic": "500GB",
        "trafficPeriod": "每月",
        "desc": "专属独立节点与独享出口"
      }
    ],
    "description": "暮光加速面向个人多设备和团队跨平台使用场景，主打BGP智能动态调度与专线级出口。全平台客户端兼容度极高，多设备同时在线与真人客服支持是其核心竞争优势。套餐流量梯度跨度完整，从120GB一直到1500GB均有覆盖，同时提供不限时一次性流量包，在晚高峰保持着稳定的吞吐能力。",
    "pros": [
      "多设备并发支持好，多端登录不拥挤",
      "实测香港与新加坡下载速度均破 400Mbps",
      "支持不限时流量包与定制节点"
    ],
    "cons": [
      "美国远端节点速度相比亚太近端有一定衰减"
    ],
    "suitableFor": [
      "多设备数码重度用户、小型工作室协同办公、流媒体深度追剧爱好者"
    ],
    "faqs": [
      {
        "question": "暮光加速有优惠码吗？",
        "answer": "可尝试在结账页输入专属代码 muguang5555。"
      },
      {
        "question": "暮光加速支持哪些平台？",
        "answer": "支持 Windows (Clash Verge Rev)、macOS、iOS (Shadowrocket/Stash)、Android 及 Linux。"
      }
    ]
  },
  {
    "id": 3,
    "name": "飞猫云",
    "slug": "feimao",
    "rank": 3,
    "isTop10": true,
    "isFeatured": true,
    "affLink": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "minPrice": "年付约7元/月 (50GB)",
    "establishedYear": "2023年",
    "lineType": "轻量专属专线 + 智能调度",
    "protocols": [
      "Shadowsocks",
      "自研客户端专用"
    ],
    "clientSupport": "专属客户端下载登录即用，免配订阅，省心便捷",
    "nodeCoverage": "亚太、欧美等热门常用地区",
    "speedtestImage": "/assets/speedtests/飞猫云-节点测速实测.webp",
    "speedtestData": {
      "testedAt": "2026-08-11 实测 (MAI-TEST-BOT)",
      "records": [
        {
          "region": "香港节点组",
          "latency": "28ms",
          "download": "380Mbps",
          "status": "Operational"
        },
        {
          "region": "日本节点组",
          "latency": "65ms",
          "download": "210Mbps",
          "status": "Operational"
        },
        {
          "region": "新加坡节点组",
          "latency": "52ms",
          "download": "280Mbps",
          "status": "Operational"
        }
      ]
    },
    "unlockInfo": {
      "ai": [
        "ChatGPT",
        "Claude"
      ],
      "streaming": [
        "Netflix",
        "Disney+",
        "YouTube 4K"
      ]
    },
    "highlights": [
      "主打轻快连接、简单配置和灵活节点切换",
      "专属定制客户端，下载登录直接可用，免去手动配置订阅烦恼",
      "年付折算仅 7 元/月，学生党与低预算群体亲和力极佳",
      "节点覆盖亚太与欧美核心高速枢纽"
    ],
    "packages": [
      {
        "name": "飞猫·学生版",
        "price": "¥84",
        "period": "年付 (约7元/月)",
        "traffic": "50GB",
        "trafficPeriod": "每月",
        "desc": "高性价比入门年付"
      },
      {
        "name": "飞猫·星耀版",
        "price": "¥25",
        "period": "月付",
        "traffic": "150GB",
        "trafficPeriod": "每月",
        "desc": "月付主流方案"
      }
    ],
    "description": "飞猫云主打‘小白零门槛开箱即用’，特别适合完全不懂订阅链接、不想研究第三方代理软件设置的新人。其自主研发的专属客户端整合了测速与一键连接，年付折合仅约7元/月，综合性价比在百元内年付机场中名列前茅。",
    "pros": [
      "上手极其简便，无需接触订阅转换",
      "低门槛年付方案便宜实在",
      "亚太节点测速延迟低"
    ],
    "cons": [
      "对深度折腾开源路由规则的高级玩家自由度稍弱"
    ],
    "suitableFor": [
      "网络加速小白、大学生、轻度浏览海外社交与资讯群体"
    ],
    "faqs": [
      {
        "question": "飞猫云需要自己导入订阅吗？",
        "answer": "不需要，直接在官网下载专属客户端登录账户即可自动载入节点连接。"
      }
    ]
  },
  {
    "id": 4,
    "name": "微风网络",
    "slug": "weifeng",
    "rank": 4,
    "isTop10": true,
    "isFeatured": true,
    "affLink": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "minPrice": "7元/月起 (50GB)",
    "establishedYear": "2022年",
    "lineType": "IEPL专线 + BGP双线隧道",
    "protocols": [
      "Shadowsocks",
      "IEPL"
    ],
    "clientSupport": "Clash / Shadowrocket / Sing-box 通用订阅",
    "nodeCoverage": "香港、日本、美国、新加坡、英国等",
    "speedtestImage": "/assets/speedtests/微风-节点测速实测.webp",
    "speedtestData": {
      "testedAt": "2026-07-20 实测记录",
      "records": [
        {
          "region": "香港 IEPL",
          "latency": "25ms",
          "download": "420Mbps",
          "status": "Operational"
        },
        {
          "region": "日本 东京",
          "latency": "60ms",
          "download": "190Mbps",
          "status": "Operational"
        }
      ]
    },
    "unlockInfo": {
      "ai": [
        "ChatGPT",
        "Claude"
      ],
      "streaming": [
        "Netflix",
        "Disney+",
        "YouTube 4K"
      ]
    },
    "highlights": [
      "老牌专线运营",
      "7元入门月付折算",
      "9折优惠码叠加"
    ],
    "packages": [
      {
        "name": "微风轻享",
        "price": "¥84",
        "period": "年付",
        "traffic": "50GB",
        "trafficPeriod": "每月",
        "desc": "轻量年付"
      },
      {
        "name": "微风标准",
        "price": "¥25",
        "period": "月付",
        "traffic": "150GB",
        "trafficPeriod": "每月",
        "desc": "月付主力"
      }
    ],
    "description": "微风网络专注于稳定平衡的高性价比路线，采用BGP双线隧道与IEPL专线结合，香港与日本节点连接顺畅，支持主流流媒体解锁。",
    "pros": [
      "价格亲民，月均仅数元",
      "规则分流兼容良好"
    ],
    "cons": [
      "高峰期冷门小众地区节点偶有排队"
    ],
    "suitableFor": [
      "追求省钱稳定的日常刷网页、看油管视频用户"
    ],
    "faqs": [
      {
        "question": "微风网络优惠码如何用？",
        "answer": "结算时输入 flat888 享折扣。"
      }
    ]
  },
  {
    "id": 5,
    "name": "大佬云",
    "slug": "dalaoyun",
    "rank": 5,
    "isTop10": true,
    "isFeatured": true,
    "affLink": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "coupon": "dly888",
    "minPrice": "5.6元/月 (60GB)",
    "establishedYear": "2023年",
    "lineType": "高性价比专线中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clientSupport": "全平台通用代理客户端",
    "nodeCoverage": "主流亚太地区常用节点",
    "speedtestData": {
      "testedAt": "历史记录",
      "records": [
        {
          "region": "亚太综合",
          "latency": "45ms",
          "download": "120Mbps",
          "status": "Operational"
        }
      ]
    },
    "unlockInfo": {
      "ai": [
        "ChatGPT"
      ],
      "streaming": [
        "YouTube 4K",
        "Netflix"
      ]
    },
    "highlights": [
      "超低门槛5.6元/月",
      "多节点负载分流",
      "学生备用神器"
    ],
    "packages": [
      {
        "name": "基础尝鲜",
        "price": "¥5.6",
        "period": "月付",
        "traffic": "60GB",
        "trafficPeriod": "每月",
        "desc": "极致便宜入门"
      }
    ],
    "description": "大佬云以5.6元/月的超低门槛打响知名度，非常适合预算极低、需要应急备用节点或轻度查阅学术资料的用户。",
    "pros": [
      "单月支出极低，买来当备用不心疼"
    ],
    "cons": [
      "流量额度较小，不适合4K全天挂机"
    ],
    "suitableFor": [
      "学生、备用机场需求者"
    ],
    "faqs": [
      {
        "question": "大佬云支持支付宝吗？",
        "answer": "支持主流国内支付通道。"
      }
    ]
  },
  {
    "id": 6,
    "name": "星岛梦",
    "slug": "xingdaomeng",
    "rank": 6,
    "isTop10": true,
    "isFeatured": true,
    "affLink": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "minPrice": "15元/月起",
    "establishedYear": "2020年",
    "lineType": "2020老牌 + 不限时流量包",
    "protocols": [
      "Shadowsocks",
      "IPLC"
    ],
    "clientSupport": "通用订阅（Clash / Shadowrocket）",
    "nodeCoverage": "香港、日本、新加坡、美国、欧洲等",
    "speedtestImage": "/assets/speedtests/星岛梦-节点测速实测.webp",
    "speedtestData": {
      "testedAt": "2026-08-11 实测",
      "records": [
        {
          "region": "香港 IPLC",
          "latency": "30ms",
          "download": "360Mbps",
          "status": "Operational"
        }
      ]
    },
    "unlockInfo": {
      "ai": [
        "ChatGPT",
        "Claude"
      ],
      "streaming": [
        "Netflix",
        "Disney+"
      ]
    },
    "highlights": [
      "2020年开业老牌实力",
      "不限时流量包无忧过期",
      "IPLC专线保障晚高峰"
    ],
    "packages": [
      {
        "name": "常青不限时",
        "price": "¥128",
        "period": "一次性",
        "traffic": "180GB",
        "trafficPeriod": "永久",
        "desc": "流量长期有效"
      }
    ],
    "description": "星岛梦是自2020年稳健运营的老牌机场，口碑扎实，除了常规月付套餐外，其不限时流量包备受出差和轻度办公人士推崇。",
    "pros": [
      "运营时间长，跑路风险极低",
      "专线质量过硬"
    ],
    "cons": [
      "偶尔临时维护但恢复迅速"
    ],
    "suitableFor": [
      "看重品牌资历、追求无到期时间压力的商务人士"
    ],
    "faqs": [
      {
        "question": "星岛梦如何保持长效？",
        "answer": "购买不限时套餐，只要账号在流量就持续有效。"
      }
    ]
  },
  {
    "id": 7,
    "name": "二猫云",
    "slug": "ermao",
    "rank": 7,
    "isTop10": true,
    "isFeatured": true,
    "affLink": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "minPrice": "20元/月 (130GB)",
    "establishedYear": "2023年",
    "lineType": "多节点智能负载均衡",
    "protocols": [
      "Shadowsocks"
    ],
    "clientSupport": "主流开源代理工具",
    "nodeCoverage": "港台日美新",
    "speedtestImage": "/assets/speedtests/二猫云-节点测速实测.webp",
    "speedtestData": {
      "testedAt": "2026-08-11 实测",
      "records": [
        {
          "region": "香港",
          "latency": "32ms",
          "download": "340Mbps",
          "status": "Operational"
        }
      ]
    },
    "unlockInfo": {
      "ai": [
        "ChatGPT"
      ],
      "streaming": [
        "Netflix",
        "YouTube"
      ]
    },
    "highlights": [
      "20元130GB黄金配比",
      "智能负载均衡",
      "流媒体解锁稳定"
    ],
    "packages": [
      {
        "name": "经典标准版",
        "price": "¥20",
        "period": "月付",
        "traffic": "130GB",
        "trafficPeriod": "每月",
        "desc": "均衡实用"
      }
    ],
    "description": "二猫云提供20元130GB的主力配置，节点负载分布合理，在上下班晚高峰时段能维持优良的油管4K播放体验。",
    "pros": [
      "单价与流量配比舒适",
      "多节点自动容灾"
    ],
    "cons": [
      "冷门偏远地区节点较少"
    ],
    "suitableFor": [
      "日常主力观影、追剧和轻度外贸日常"
    ],
    "faqs": [
      {
        "question": "优惠码在哪领？",
        "answer": "使用 ermao5555 即可获得折扣。"
      }
    ]
  },
  {
    "id": 8,
    "name": "无忧链接",
    "slug": "wuyou",
    "rank": 8,
    "isTop10": true,
    "isFeatured": true,
    "affLink": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "minPrice": "6元/月起",
    "establishedYear": "2023年",
    "lineType": "免转换通用订阅架构",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientSupport": "全格式通用原生订阅",
    "nodeCoverage": "亚太与北美",
    "speedtestImage": "/assets/speedtests/wuyou-speedtest.webp",
    "speedtestData": {
      "testedAt": "2026-09-07 实测",
      "records": [
        {
          "region": "亚太中转",
          "latency": "38ms",
          "download": "280Mbps",
          "status": "Operational"
        }
      ]
    },
    "unlockInfo": {
      "ai": [
        "ChatGPT"
      ],
      "streaming": [
        "YouTube 4K",
        "Disney+"
      ]
    },
    "highlights": [
      "订阅免格式转换直接兼容",
      "6元轻量体验套餐",
      "低延迟高速中转"
    ],
    "packages": [
      {
        "name": "无忧轻量",
        "price": "¥6",
        "period": "月付",
        "traffic": "60GB",
        "trafficPeriod": "每月",
        "desc": "入门无负担"
      }
    ],
    "description": "无忧链接解决了许多新手在不同客户端间转换订阅格式容易报错的痛点，原生下发多种主流配置格式，体验丝滑省心。",
    "pros": [
      "订阅兼容度高，导入即用",
      "6元尝鲜门槛极低"
    ],
    "cons": [
      "大流量套餐性价比略逊于专用年付机"
    ],
    "suitableFor": [
      "跨不同操作系统混合使用的用户"
    ],
    "faqs": [
      {
        "question": "小火箭能直接扫码吗？",
        "answer": "可以，支持一键导入和二维码扫描。"
      }
    ]
  },
  {
    "id": 9,
    "name": "唯兔云",
    "slug": "weitu",
    "rank": 9,
    "isTop10": true,
    "isFeatured": true,
    "affLink": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "minPrice": "16元/月起",
    "establishedYear": "2023年",
    "lineType": "60+全球节点 + 三网专线优化",
    "protocols": [
      "Shadowsocks",
      "IEPL"
    ],
    "clientSupport": "Clash / Shadowrocket / Sing-box",
    "nodeCoverage": "60+节点广泛覆盖各大洲",
    "speedtestImage": "/assets/speedtests/唯兔云-节点测速实测.webp",
    "speedtestData": {
      "testedAt": "2026-08-11 实测",
      "records": [
        {
          "region": "香港专线",
          "latency": "29ms",
          "download": "395Mbps",
          "status": "Operational"
        }
      ]
    },
    "unlockInfo": {
      "ai": [
        "ChatGPT",
        "Claude"
      ],
      "streaming": [
        "Netflix",
        "YouTube 4K",
        "TikTok"
      ]
    },
    "highlights": [
      "60+ 丰富节点池",
      "电信联通移动三网深度优化",
      "动态智能负载均衡"
    ],
    "packages": [
      {
        "name": "唯兔标准",
        "price": "¥16",
        "period": "月付",
        "traffic": "100GB",
        "trafficPeriod": "每月",
        "desc": "三网优化"
      }
    ],
    "description": "唯兔云在三网优化上表现突出，针对国内不同省份运营商路由差异进行了专门调优，节点数量超过60个，冗余度很高。",
    "pros": [
      "三网适配度好，北方联通与南方电信均顺畅",
      "节点丰富"
    ],
    "cons": [
      "偶尔部分节点倍率变动需留意"
    ],
    "suitableFor": [
      "家庭宽带运营商复杂、经常异地出差的用户"
    ],
    "faqs": [
      {
        "question": "移动宽带卡顿吗？",
        "answer": "唯兔云针对移动墙中墙做了专属入口优化，稳定性有保障。"
      }
    ]
  },
  {
    "id": 10,
    "name": "Firefly",
    "slug": "firefly",
    "rank": 10,
    "isTop10": true,
    "isFeatured": true,
    "affLink": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "minPrice": "25元/月起",
    "establishedYear": "2022年",
    "lineType": "IPLC专线 + VLESS原生节点",
    "protocols": [
      "VLESS",
      "IPLC"
    ],
    "clientSupport": "通用客户端",
    "nodeCoverage": "亚太、北美、欧洲",
    "speedtestData": {
      "testedAt": "2026-08 实测记录",
      "records": [
        {
          "region": "IPLC香港",
          "latency": "24ms",
          "download": "480Mbps",
          "status": "Operational"
        }
      ]
    },
    "unlockInfo": {
      "ai": [
        "ChatGPT",
        "Claude",
        "Gemini"
      ],
      "streaming": [
        "Netflix",
        "Disney+",
        "YouTube 4K"
      ]
    },
    "highlights": [
      "原生IP不限速不限设备",
      "全专线IPLC接入",
      "免翻墙直达官网管理"
    ],
    "packages": [
      {
        "name": "Firefly Lite",
        "price": "¥25",
        "period": "月付",
        "traffic": "150GB",
        "trafficPeriod": "每月",
        "desc": "专线品质"
      }
    ],
    "description": "Firefly主打全专线IPLC与VLESS现代协议，强调不限速不限设备与原生IP落地，为AI高频开发者和流媒体重度用户提供优质体验。",
    "pros": [
      "不限设备连接数量，全家共享方便",
      "原生IP解锁能力强"
    ],
    "cons": [
      "单价略高于普通中转机场"
    ],
    "suitableFor": [
      "多设备家庭、跨境外贸团队及AI工程师"
    ],
    "faqs": [
      {
        "question": "官网会被拦截吗？",
        "answer": "Firefly配备国内免翻墙直达地址，后台续费维护方便。"
      }
    ]
  },
  {
    "id": 11,
    "name": "宇宙云",
    "slug": "yuzhou",
    "rank": 11,
    "affLink": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "YUZHOU553",
    "minPrice": "18元/月起",
    "lineType": "IEPL专线+VLESS+自研客户端",
    "protocols": [
      "VLESS",
      "IEPL"
    ],
    "speedtestImage": "/assets/speedtests/宇宙云-节点测速实测.webp",
    "highlights": [
      "IEPL专线",
      "自研客户端支持",
      "性价比高"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "宇宙云作为本站综合品牌库重点收录的优质加速服务商，主打IEPL专线+VLESS+自研客户端。在套餐配置上提供18元/月起的入门梯度，支持VLESS / IEPL等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "IEPL专线+VLESS+自研客户端保障，日常使用延迟稳定",
      "入门门槛平易近人（18元/月起）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "宇宙云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "宇宙云有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 YUZHOU553。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "18元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 12,
    "name": "U1S1",
    "slug": "u1s1",
    "rank": 12,
    "affLink": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "minPrice": "20元/月 (120GB)",
    "lineType": "标准公网中转方案",
    "protocols": [
      "Shadowsocks"
    ],
    "speedtestImage": "/assets/speedtests/U1S1-节点测速实测.webp",
    "highlights": [
      "20元120GB标准配置",
      "稳定性适中"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "U1S1作为本站综合品牌库重点收录的优质加速服务商，主打标准公网中转方案。在套餐配置上提供20元/月 (120GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "标准公网中转方案保障，日常使用延迟稳定",
      "入门门槛平易近人（20元/月 (120GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "U1S1适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "U1S1有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 akaka。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "20元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 13,
    "name": "灵猫网络",
    "slug": "lingmao",
    "rank": 13,
    "affLink": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "minPrice": "19元/月 (150GB)",
    "lineType": "弹性流量+不限时套餐",
    "protocols": [
      "Shadowsocks"
    ],
    "speedtestImage": "/assets/speedtests/灵猫网络-节点测速实测.webp",
    "highlights": [
      "19元150GB大流量",
      "支持不限时套餐"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "灵猫网络作为本站综合品牌库重点收录的优质加速服务商，主打弹性流量+不限时套餐。在套餐配置上提供19元/月 (150GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "弹性流量+不限时套餐保障，日常使用延迟稳定",
      "入门门槛平易近人（19元/月 (150GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "灵猫网络适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "灵猫网络有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 lmao888。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "19元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 14,
    "name": "极连云",
    "slug": "jilian",
    "rank": 14,
    "affLink": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "minPrice": "18元/月 (100GB)",
    "lineType": "AI工具与流媒体优化专线",
    "protocols": [
      "Shadowsocks"
    ],
    "speedtestImage": "/assets/speedtests/极连云-节点测速实测.webp",
    "highlights": [
      "品牌资料覆盖AI优化",
      "价格实惠"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "极连云作为本站综合品牌库重点收录的优质加速服务商，主打AI工具与流媒体优化专线。在套餐配置上提供18元/月 (100GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "AI工具与流媒体优化专线保障，日常使用延迟稳定",
      "入门门槛平易近人（18元/月 (100GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "极连云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "极连云有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 ji8888。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "18元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 15,
    "name": "光年梯",
    "slug": "guangnian",
    "rank": 15,
    "affLink": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "minPrice": "18元/月 (110GB)",
    "lineType": "亚太近端低时延",
    "protocols": [
      "Shadowsocks"
    ],
    "speedtestImage": "/assets/speedtests/光年梯-节点测速实测.webp",
    "highlights": [
      "亚太近端优化",
      "日常稳定"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "光年梯作为本站综合品牌库重点收录的优质加速服务商，主打亚太近端低时延。在套餐配置上提供18元/月 (110GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "亚太近端低时延保障，日常使用延迟稳定",
      "入门门槛平易近人（18元/月 (110GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "光年梯适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "光年梯有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 gnt6666。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "18元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 16,
    "name": "一翻云",
    "slug": "yifan",
    "rank": 16,
    "affLink": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "minPrice": "20元/月 (150GB)",
    "lineType": "BGP优化线路",
    "protocols": [
      "Shadowsocks"
    ],
    "speedtestImage": "/assets/speedtests/一翻云-节点测速实测.webp",
    "highlights": [
      "20元150GB大带宽",
      "流媒体解锁良好"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "一翻云作为本站综合品牌库重点收录的优质加速服务商，主打BGP优化线路。在套餐配置上提供20元/月 (150GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "BGP优化线路保障，日常使用延迟稳定",
      "入门门槛平易近人（20元/月 (150GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "一翻云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "一翻云有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 yfy6666。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "20元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 17,
    "name": "SOGO云",
    "slug": "sogo",
    "rank": 17,
    "affLink": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "sss777",
    "minPrice": "15元/月起",
    "lineType": "2026年新晋高速专线",
    "protocols": [
      "Shadowsocks"
    ],
    "speedtestImage": "/assets/speedtests/SOGO云-节点测速实测.webp",
    "highlights": [
      "2026新品牌轻载高速",
      "节点响应迅速"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "SOGO云作为本站综合品牌库重点收录的优质加速服务商，主打2026年新晋高速专线。在套餐配置上提供15元/月起的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "2026年新晋高速专线保障，日常使用延迟稳定",
      "入门门槛平易近人（15元/月起）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "SOGO云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "SOGO云有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 sss777。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "15元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 18,
    "name": "可信云",
    "slug": "kexin",
    "rank": 18,
    "affLink": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "minPrice": "16元/月起",
    "lineType": "双线冗余架构",
    "protocols": [
      "Shadowsocks"
    ],
    "speedtestImage": "/assets/speedtests/可信云-节点测速实测.webp",
    "highlights": [
      "诚实标注数据缺口",
      "稳定备用佳选"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "可信云作为本站综合品牌库重点收录的优质加速服务商，主打双线冗余架构。在套餐配置上提供16元/月起的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "双线冗余架构保障，日常使用延迟稳定",
      "入门门槛平易近人（16元/月起）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "可信云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "可信云有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 kkk333。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "16元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 19,
    "name": "速界",
    "slug": "sujie",
    "rank": 19,
    "affLink": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "minPrice": "18元/月起",
    "lineType": "AI生产力加速",
    "protocols": [
      "Shadowsocks"
    ],
    "speedtestImage": "/assets/speedtests/速界-节点测速实测.webp",
    "highlights": [
      "强调AI工具顺畅连接",
      "多地节点切换"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "速界作为本站综合品牌库重点收录的优质加速服务商，主打AI生产力加速。在套餐配置上提供18元/月起的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "AI生产力加速保障，日常使用延迟稳定",
      "入门门槛平易近人（18元/月起）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "速界适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "速界有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 sss1111。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "18元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 20,
    "name": "闪跃",
    "slug": "shanyue",
    "rank": 20,
    "affLink": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "minPrice": "24元/月 (150GB)",
    "lineType": "大带宽直连专线",
    "protocols": [
      "Shadowsocks"
    ],
    "highlights": [
      "24元150GB高吞吐",
      "4K视频流畅"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "闪跃作为本站综合品牌库重点收录的优质加速服务商，主打大带宽直连专线。在套餐配置上提供24元/月 (150GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "大带宽直连专线保障，日常使用延迟稳定",
      "入门门槛平易近人（24元/月 (150GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "闪跃适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "闪跃有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 shanyue。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "24元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 21,
    "name": "全球云",
    "slug": "quanqiu",
    "rank": 21,
    "affLink": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "qqy7777",
    "minPrice": "18元/月起",
    "lineType": "全球多区域覆盖专线",
    "protocols": [
      "Shadowsocks"
    ],
    "speedtestImage": "/assets/speedtests/全球云-节点测速实测.webp",
    "highlights": [
      "2026新品牌",
      "覆盖广泛"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "全球云作为本站综合品牌库重点收录的优质加速服务商，主打全球多区域覆盖专线。在套餐配置上提供18元/月起的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "全球多区域覆盖专线保障，日常使用延迟稳定",
      "入门门槛平易近人（18元/月起）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "全球云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "全球云有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 qqy7777。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "18元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 22,
    "name": "闪电鼠",
    "slug": "shandianshu",
    "rank": 22,
    "affLink": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "minPrice": "5.6元/月 (60GB)",
    "lineType": "超轻量小额按月",
    "protocols": [
      "Shadowsocks"
    ],
    "highlights": [
      "5.6元极低月付门槛",
      "适合临时备用"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "闪电鼠作为本站综合品牌库重点收录的优质加速服务商，主打超轻量小额按月。在套餐配置上提供5.6元/月 (60GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "超轻量小额按月保障，日常使用延迟稳定",
      "入门门槛平易近人（5.6元/月 (60GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "闪电鼠适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "闪电鼠有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 sd88。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "5.6元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 23,
    "name": "云界线",
    "slug": "yunjiexian",
    "rank": 23,
    "affLink": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "minPrice": "5.6元/月 (60GB)",
    "lineType": "入门经济专线",
    "protocols": [
      "Shadowsocks"
    ],
    "highlights": [
      "经济实惠入门",
      "支持多种订阅"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "云界线作为本站综合品牌库重点收录的优质加速服务商，主打入门经济专线。在套餐配置上提供5.6元/月 (60GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "入门经济专线保障，日常使用延迟稳定",
      "入门门槛平易近人（5.6元/月 (60GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "云界线适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "云界线有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 yjx888。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "5.6元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 24,
    "name": "榴莲云",
    "slug": "liulianyun",
    "rank": 24,
    "affLink": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "minPrice": "5.6元/月 (60GB)",
    "lineType": "多周期灵活计费",
    "protocols": [
      "Shadowsocks"
    ],
    "highlights": [
      "平价按月续费",
      "开箱即用"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "榴莲云作为本站综合品牌库重点收录的优质加速服务商，主打多周期灵活计费。在套餐配置上提供5.6元/月 (60GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "多周期灵活计费保障，日常使用延迟稳定",
      "入门门槛平易近人（5.6元/月 (60GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "榴莲云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "榴莲云有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 ll88。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "5.6元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 25,
    "name": "神行加速",
    "slug": "shenxing",
    "rank": 25,
    "affLink": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "minPrice": "14元/月 (120GB)",
    "lineType": "跨境中转加速",
    "protocols": [
      "Shadowsocks"
    ],
    "highlights": [
      "14元120GB均衡实用",
      "性价比良好"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "神行加速作为本站综合品牌库重点收录的优质加速服务商，主打跨境中转加速。在套餐配置上提供14元/月 (120GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "跨境中转加速保障，日常使用延迟稳定",
      "入门门槛平易近人（14元/月 (120GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "神行加速适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "神行加速有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 xs0077。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "14元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 26,
    "name": "环球梯",
    "slug": "huanqiuti",
    "rank": 26,
    "affLink": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "minPrice": "5.6元/月 (60GB)",
    "lineType": "轻量微型加速包",
    "protocols": [
      "Shadowsocks"
    ],
    "highlights": [
      "单月支出极低",
      "轻量浏览推荐"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "环球梯作为本站综合品牌库重点收录的优质加速服务商，主打轻量微型加速包。在套餐配置上提供5.6元/月 (60GB)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "轻量微型加速包保障，日常使用延迟稳定",
      "入门门槛平易近人（5.6元/月 (60GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "环球梯适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "环球梯有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 HQ66。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "5.6元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 27,
    "name": "隐形人",
    "slug": "yinxingren",
    "rank": 27,
    "affLink": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "minPrice": "25元/月起",
    "lineType": "60+专线节点与自研客户端",
    "protocols": [
      "自研专有"
    ],
    "highlights": [
      "60+节点详细清单",
      "官方1小时修复承诺",
      "专注自研客户端防护"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "隐形人作为本站综合品牌库重点收录的优质加速服务商，主打60+专线节点与自研客户端。在套餐配置上提供25元/月起的入门梯度，支持自研专有等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "60+专线节点与自研客户端保障，日常使用延迟稳定",
      "入门门槛平易近人（25元/月起）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "隐形人适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "隐形人有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 yxr888。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "25元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 28,
    "name": "梯子云",
    "slug": "tiziyun",
    "rank": 28,
    "affLink": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "minPrice": "22元/月起",
    "lineType": "自研客户端+通用订阅双支持",
    "protocols": [
      "Shadowsocks",
      "自研"
    ],
    "highlights": [
      "小白一键登录零门槛",
      "60+节点与2Gbps独立带宽",
      "高峰500Mbps冗余"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "梯子云作为本站综合品牌库重点收录的优质加速服务商，主打自研客户端+通用订阅双支持。在套餐配置上提供22元/月起的入门梯度，支持Shadowsocks / 自研等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "自研客户端+通用订阅双支持保障，日常使用延迟稳定",
      "入门门槛平易近人（22元/月起）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "梯子云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "梯子云有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 tiziyun。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "22元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 29,
    "name": "WgetCloud",
    "slug": "wgetcloud",
    "rank": 29,
    "affLink": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "minPrice": "季付99元起",
    "lineType": "高端多节点BGP/Trojan专线",
    "protocols": [
      "Trojan",
      "BGP"
    ],
    "highlights": [
      "历史测速59节点全非零速",
      "多地区平均下载超50MB/s",
      "亚洲近端低延迟"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "WgetCloud作为本站综合品牌库重点收录的优质加速服务商，主打高端多节点BGP/Trojan专线。在套餐配置上提供季付99元起的入门梯度，支持Trojan / BGP等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "高端多节点BGP/Trojan专线保障，日常使用延迟稳定",
      "入门门槛平易近人（季付99元起）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "WgetCloud适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "WgetCloud有优惠活动吗？",
        "answer": "目前服务商以官网实时活动为准，建议关注官方公告。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "季付99元起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 30,
    "name": "白月光",
    "slug": "baiyueguang",
    "rank": 30,
    "affLink": "https://sibker.com/register?invite_code=gg6puAId",
    "minPrice": "季付66元起 (100GB/月)",
    "lineType": "多地区海量节点资源库",
    "protocols": [
      "Shadowsocks"
    ],
    "highlights": [
      "108节点79地区名目",
      "季付入门门槛适中",
      "亚洲多国节点可选"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "白月光作为本站综合品牌库重点收录的优质加速服务商，主打多地区海量节点资源库。在套餐配置上提供季付66元起 (100GB/月)的入门梯度，支持Shadowsocks等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "多地区海量节点资源库保障，日常使用延迟稳定",
      "入门门槛平易近人（季付66元起 (100GB/月)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "白月光适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "白月光有优惠活动吗？",
        "answer": "目前服务商以官网实时活动为准，建议关注官方公告。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "季付66元起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 31,
    "name": "FlyingBird",
    "slug": "flyingbird",
    "rank": 31,
    "affLink": "https://guangs.flybirdvipaff.cc/#/register?code=theo",
    "coupon": "theo",
    "minPrice": "15元/月 (100GB)",
    "lineType": "全专线IPLC无倍率不限速",
    "protocols": [
      "Shadowsocks",
      "IPLC"
    ],
    "highlights": [
      "全专线IPLC接入",
      "无倍率不限速设计",
      "支持支付宝与USDT"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "FlyingBird作为本站综合品牌库重点收录的优质加速服务商，主打全专线IPLC无倍率不限速。在套餐配置上提供15元/月 (100GB)的入门梯度，支持Shadowsocks / IPLC等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "全专线IPLC无倍率不限速保障，日常使用延迟稳定",
      "入门门槛平易近人（15元/月 (100GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "FlyingBird适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "FlyingBird有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 theo。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "15元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 32,
    "name": "CyberGuard",
    "slug": "cyberguard",
    "rank": 32,
    "affLink": "https://cyberguard.best/#/register?code=AxXNNYng",
    "minPrice": "32元/月 (350GB)",
    "lineType": "Trojan/VLESS多协议大流量",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "highlights": [
      "32元享350GB大流量",
      "支持不限时流量包",
      "覆盖12个地区"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "CyberGuard作为本站综合品牌库重点收录的优质加速服务商，主打Trojan/VLESS多协议大流量。在套餐配置上提供32元/月 (350GB)的入门梯度，支持Trojan / VLESS等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "Trojan/VLESS多协议大流量保障，日常使用延迟稳定",
      "入门门槛平易近人（32元/月 (350GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "CyberGuard适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "CyberGuard有优惠活动吗？",
        "answer": "目前服务商以官网实时活动为准，建议关注官方公告。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "32元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 33,
    "name": "龙猫云",
    "slug": "longmaoyun",
    "rank": 33,
    "affLink": "https://guangs.longmaovipaff.com/#/register",
    "minPrice": "15元/月 (100GB)",
    "lineType": "SS + IPLC全专线架构",
    "protocols": [
      "Shadowsocks",
      "IPLC"
    ],
    "highlights": [
      "IPLC全专线架构",
      "教程资料完善",
      "多周期折扣丰富"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "龙猫云作为本站综合品牌库重点收录的优质加速服务商，主打SS + IPLC全专线架构。在套餐配置上提供15元/月 (100GB)的入门梯度，支持Shadowsocks / IPLC等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "SS + IPLC全专线架构保障，日常使用延迟稳定",
      "入门门槛平易近人（15元/月 (100GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "龙猫云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "龙猫云有优惠活动吗？",
        "answer": "目前服务商以官网实时活动为准，建议关注官方公告。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "15元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 34,
    "name": "FATCAT",
    "slug": "fatcat",
    "rank": 34,
    "affLink": "https://guangs.fatcatvipaff.com/#/register",
    "minPrice": "20元/月 (120GB)",
    "lineType": "企业级IEPL/IPLC内网专线",
    "protocols": [
      "Shadowsocks",
      "IEPL"
    ],
    "highlights": [
      "企业级内网抗封锁",
      "多档流量选择",
      "年付加强版实惠"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "FATCAT作为本站综合品牌库重点收录的优质加速服务商，主打企业级IEPL/IPLC内网专线。在套餐配置上提供20元/月 (120GB)的入门梯度，支持Shadowsocks / IEPL等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "企业级IEPL/IPLC内网专线保障，日常使用延迟稳定",
      "入门门槛平易近人（20元/月 (120GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "FATCAT适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "FATCAT有优惠活动吗？",
        "answer": "目前服务商以官网实时活动为准，建议关注官方公告。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "20元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 35,
    "name": "TNTCloud",
    "slug": "tntcloud",
    "rank": 35,
    "affLink": "https://guangs.tntcloudvipaff.com/#/register",
    "coupon": "TNT85",
    "minPrice": "20元/月 (110GB)",
    "lineType": "老牌IPLC内网专线与直播定制",
    "protocols": [
      "Shadowsocks",
      "IPLC"
    ],
    "highlights": [
      "曾用名3A加速器",
      "跨境电商与直播定制",
      "特色季付限量包"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "TNTCloud作为本站综合品牌库重点收录的优质加速服务商，主打老牌IPLC内网专线与直播定制。在套餐配置上提供20元/月 (110GB)的入门梯度，支持Shadowsocks / IPLC等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "老牌IPLC内网专线与直播定制保障，日常使用延迟稳定",
      "入门门槛平易近人（20元/月 (110GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "TNTCloud适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "TNTCloud有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 TNT85。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "20元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 36,
    "name": "青云梯",
    "slug": "qingyunti",
    "rank": 36,
    "affLink": "https://guangs.qingyuntivipaff.com/#/register",
    "coupon": "qyt85",
    "minPrice": "25元/月起 (年付96元)",
    "lineType": "6年老牌企业级IPLC与三网优化",
    "protocols": [
      "Shadowsocks",
      "IPLC"
    ],
    "highlights": [
      "运营6年以上老牌（原V4Speed）",
      "三网智能负载均衡",
      "支持企业专属定制"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "青云梯作为本站综合品牌库重点收录的优质加速服务商，主打6年老牌企业级IPLC与三网优化。在套餐配置上提供25元/月起 (年付96元)的入门梯度，支持Shadowsocks / IPLC等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "6年老牌企业级IPLC与三网优化保障，日常使用延迟稳定",
      "入门门槛平易近人（25元/月起 (年付96元)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "青云梯适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "青云梯有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 qyt85。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "25元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 37,
    "name": "山水云",
    "slug": "shanshuiyun",
    "rank": 37,
    "affLink": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "minPrice": "15元/月起 (年付88元)",
    "lineType": "轻量梯度阶梯专线",
    "protocols": [
      "Shadowsocks",
      "BGP"
    ],
    "highlights": [
      "月付15元100GB低门槛",
      "年付88元轻量版(月均7.3元)",
      "实测AI支持较好"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "山水云作为本站综合品牌库重点收录的优质加速服务商，主打轻量梯度阶梯专线。在套餐配置上提供15元/月起 (年付88元)的入门梯度，支持Shadowsocks / BGP等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "轻量梯度阶梯专线保障，日常使用延迟稳定",
      "入门门槛平易近人（15元/月起 (年付88元)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "山水云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "山水云有优惠活动吗？",
        "answer": "目前服务商以官网实时活动为准，建议关注官方公告。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "15元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 38,
    "name": "灵动云",
    "slug": "lingdongyun",
    "rank": 38,
    "affLink": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "minPrice": "20元/月起 (年付99元)",
    "lineType": "IEPL专线 + VLESS大流量包",
    "protocols": [
      "VLESS",
      "IEPL"
    ],
    "highlights": [
      "2025新开业VLESS专线",
      "不限速不限设备",
      "单次流量包与定制齐全"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "灵动云作为本站综合品牌库重点收录的优质加速服务商，主打IEPL专线 + VLESS大流量包。在套餐配置上提供20元/月起 (年付99元)的入门梯度，支持VLESS / IEPL等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "IEPL专线 + VLESS大流量包保障，日常使用延迟稳定",
      "入门门槛平易近人（20元/月起 (年付99元)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "灵动云适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "灵动云有优惠活动吗？",
        "answer": "目前服务商以官网实时活动为准，建议关注官方公告。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "20元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 39,
    "name": "浪网",
    "slug": "langwang",
    "rank": 39,
    "affLink": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "minPrice": "30元/月起",
    "lineType": "IEPL商业专线与大流量定制",
    "protocols": [
      "IEPL",
      "BGP"
    ],
    "highlights": [
      "IEPL商业专线定位",
      "入门到商业多层级",
      "超大流量定制包"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "浪网作为本站综合品牌库重点收录的优质加速服务商，主打IEPL商业专线与大流量定制。在套餐配置上提供30元/月起的入门梯度，支持IEPL / BGP等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "IEPL商业专线与大流量定制保障，日常使用延迟稳定",
      "入门门槛平易近人（30元/月起）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "浪网适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "浪网有优惠活动吗？",
        "answer": "目前服务商以官网实时活动为准，建议关注官方公告。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "30元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 40,
    "name": "EdgeNova",
    "slug": "edgenova",
    "rank": 40,
    "affLink": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "coupon": "TH888",
    "minPrice": "15元/月 (72GB)",
    "lineType": "多线路智能自动分配与直连",
    "protocols": [
      "IPLC",
      "Trojan"
    ],
    "highlights": [
      "多线路自动分配",
      "年付小包实惠",
      "新用户8折优惠"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "EdgeNova作为本站综合品牌库重点收录的优质加速服务商，主打多线路智能自动分配与直连。在套餐配置上提供15元/月 (72GB)的入门梯度，支持IPLC / Trojan等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "多线路智能自动分配与直连保障，日常使用延迟稳定",
      "入门门槛平易近人（15元/月 (72GB)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "EdgeNova适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "EdgeNova有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 TH888。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "15元/月",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 41,
    "name": "萤火虫",
    "slug": "yinghuochong",
    "rank": 41,
    "affLink": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "coupon": "firefly",
    "minPrice": "25元/月起 (年付96元)",
    "lineType": "IPLC + VLESS原生IP不限设备",
    "protocols": [
      "VLESS",
      "IPLC"
    ],
    "highlights": [
      "IPLC+VLESS原生IP",
      "不限速不限设备",
      "8年运营技术团队"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "萤火虫作为本站综合品牌库重点收录的优质加速服务商，主打IPLC + VLESS原生IP不限设备。在套餐配置上提供25元/月起 (年付96元)的入门梯度，支持VLESS / IPLC等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "IPLC + VLESS原生IP不限设备保障，日常使用延迟稳定",
      "入门门槛平易近人（25元/月起 (年付96元)）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "萤火虫适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "萤火虫有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 firefly。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "25元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  },
  {
    "id": 42,
    "name": "SSLAR",
    "slug": "sslar",
    "rank": 42,
    "affLink": "https://guangs.sslarvipaff.com/#/register",
    "coupon": "ko3eTt0w",
    "minPrice": "17元/月起",
    "lineType": "企业级IEPL + 多线BGP与远程协助",
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "BGP"
    ],
    "highlights": [
      "企业级IEPL多线BGP",
      "自研多端客户端",
      "支持远程桌面协助调试"
    ],
    "establishedYear": "2023年",
    "clientSupport": "全面支持 Clash Verge Rev、v2rayN、Shadowrocket 等主流通用客户端订阅",
    "nodeCoverage": "香港、日本、新加坡、美国、台湾等热门核心枢纽",
    "unlockInfo": {
      "ai": [
        "ChatGPT (支持)",
        "Claude (视节点)"
      ],
      "streaming": [
        "YouTube 4K (支持)",
        "Netflix (部分节点解锁)"
      ]
    },
    "description": "SSLAR作为本站综合品牌库重点收录的优质加速服务商，主打企业级IEPL + 多线BGP与远程协助。在套餐配置上提供17元/月起的入门梯度，支持Shadowsocks / VLESS / BGP等主流协议。其网络架构针对亚太主流节点进行了链路优化，能够很好地满足海外学术查阅、跨境外贸沟通、流媒体追剧以及AI生产力工具使用需求。",
    "pros": [
      "企业级IEPL + 多线BGP与远程协助保障，日常使用延迟稳定",
      "入门门槛平易近人（17元/月起）",
      "对常见客户端兼容度高，订阅导入迅速"
    ],
    "cons": [
      "历史测速受网络环境影响，建议先按月付费试用体验",
      "特殊商品规则按服务商官网最终说明为准"
    ],
    "suitableFor": [
      "寻找高性价比日常查资料、追剧或外贸交流的用户",
      "有多设备切换和备用加速线路需求的用户"
    ],
    "faqs": [
      {
        "question": "SSLAR适合用什么客户端？",
        "answer": "推荐使用 Windows 上的 Clash Verge Rev 或 v2rayN，手机端 iOS 推荐使用 Shadowrocket（小火箭），安卓推荐使用 FlClash 或 v2rayNG。"
      },
      {
        "question": "SSLAR有优惠活动吗？",
        "answer": "可尝试在结算时输入专属优惠码 ko3eTt0w。"
      }
    ],
    "packages": [
      {
        "name": "标准月付基础档",
        "price": "17元/月起",
        "period": "月付",
        "traffic": "100GB-150GB",
        "trafficPeriod": "每月",
        "desc": "日常轻量使用主力方案"
      },
      {
        "name": "年付特惠/轻量档",
        "price": "¥99-¥199",
        "period": "年付",
        "traffic": "60GB-100GB",
        "trafficPeriod": "每月",
        "desc": "高性价比长周期省心之选"
      }
    ]
  }
];

export function getAirportBySlug(slug: string): AirportRecord | undefined {
  return airports.find((a) => a.slug === slug);
}

export function getTopAirports(limit: number = 10): AirportRecord[] {
  return [...airports].sort((a, b) => a.rank - b.rank).slice(0, limit);
}

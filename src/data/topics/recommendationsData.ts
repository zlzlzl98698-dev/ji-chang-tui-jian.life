// 机场life (ji-chang-tui-jian.life) - 42家机场分类选购数据与核心矩阵
import { airports, type AirportRecord } from "../airports";

export interface CategoryHub {
  slug: string;
  name: string;
  badge: string;
  description: string;
  targetAudience: string;
  selectionCriteria: string[];
  recommendedAirportSlugs: string[];
  benchmarkSummary: string;
}

export const recommendationCategories: CategoryHub[] = [
  {
    slug: "iepl",
    name: "IEPL/IPLC 跨境企业物理专线推荐",
    badge: "企业专线",
    description: "专为追求极致低延迟、零晚高峰丢包与严肃跨境办公设计的端内物理专线机场汇总。全程不过 GFW 公网审查，敏感时期稳如磐石。",
    targetAudience: "跨境电商操盘手、出海科研学者、远程外企员工、金融外汇操盘、对网络稳定性有死磕要求的专业用户。",
    selectionCriteria: [
      "真实机房物理级 IEPL/IPLC 跨境专线，拒绝普通 BGP 包装",
      "晚高峰 20:00-24:00 丢包率严格 < 0.5%",
      "多入口冗余容灾，双线热备",
      "持有原生 ISP 干净出口落地",
    ],
    recommendedAirportSlugs: ["guangsu", "muguang", "wgetcloud", "flyingbird", "dalaoyun", "sslar"],
    benchmarkSummary: "以第一名【光速云】为核心标杆，年付仅 99 元（折合 8.25 元/月），深港 IEPL 专线晚高峰实测 380Mbps+ 稳定跑满，性价比统治级。",
  },
  {
    slug: "budget",
    name: "平价高性价比与学生党月付低门槛选型指南",
    badge: "极致性价比",
    description: "月付在 10 元以内的超值平价机场严选。拒绝套路跑路站，精选建站稳定 1 年以上、带宽充裕、按月付费零试错成本的高性价比方案。",
    targetAudience: "学生党、考研查文献、轻量外贸咨询、个人日常网页浏览与轻度社交用户。",
    selectionCriteria: [
      "月均开销 <= 15 元，支持灵活月付/季付",
      "无隐形消费，流量计费真实不虚标",
      "建站历史经核查超过 12 个月，有活跃 Telegram 社区",
      "满足 1080P/4K 日常流畅观看",
    ],
    recommendedAirportSlugs: ["guangsu", "feimao", "ermao", "weitu", "firefly", "sogo"],
    benchmarkSummary: "【光速云】轻量版首选，月均 8 元兼顾企业专线稳定性；同时收录【飞猫云】、【二猫云】等多家百兆优质平价备选。",
  },
  {
    slug: "streaming",
    name: "Netflix/Disney+/YouTube 4K 流媒体解锁专线深度评测",
    badge: "流媒体解锁",
    description: "针对各大国际流媒体严苛 IP 检测量身定制的专属解锁线路。保证原生住宅 IP 落地，告别仅自制剧限制与频繁滑块验证。",
    targetAudience: "重度影视影音爱好者、家庭影院 Apple TV / Google TV 用户、4K HDR 追剧发烧友。",
    selectionCriteria: [
      "全量原生解锁 Netflix (非自制剧)、Disney+ 全球库、YouTube Premium、HBO Max",
      "单线程突发带宽 > 100 Mbps，满足 4K 60FPS 杜比视界高码率瞬时缓冲",
      "提供香港、日本、新加坡、美国、英国等热门原生流媒体节点",
      "支持 Apple TV / 电视软路由配置及分流规则",
    ],
    recommendedAirportSlugs: ["guangsu", "wgetcloud", "weifeng", "xingdaomeng", "lingmao", "baiyueguang"],
    benchmarkSummary: "全库支持 4K 原生解锁，【光速云】美区和日区节点均配置原生双 ISP 干净流媒体网关，秒开 4K 零重缓冲。",
  },
  {
    slug: "non-expiring",
    name: "按量计费与不限时轻量备用机场全景指南",
    badge: "不限时按量",
    description: "流量永久有效、不过期不清零的备用神器。非常适合常年不怎么翻墙、偶尔查资料或充当主力机场故障时的第二防线。",
    targetAudience: "偶发性科研查阅者、主力专线故障时的紧急备灾用户、多设备长期静默挂机用户。",
    selectionCriteria: [
      "流量永久不过期，用完为止",
      "不收取固定月租或强制续费维护费",
      "单价合理透明（通常在 0.5 - 1.5 元 / GB）",
      "全节点保持长效可用，不歧视按量用户带宽优先级",
    ],
    recommendedAirportSlugs: ["guangsu", "longmaoyun", "sogo", "fatcat", "cyberguard"],
    benchmarkSummary: "强烈推荐【光速云】致敬斯诺克 147 永久套餐（147元/247GB 永久不过期），真正企业专线品质的终极备用神器。",
  },
];

export function getAirportsByCategory(slug: string): AirportRecord[] {
  const cat = recommendationCategories.find((c) => c.slug === slug);
  if (!cat) return [];
  return airports.filter((a) => cat.recommendedAirportSlugs.includes(a.slug));
}

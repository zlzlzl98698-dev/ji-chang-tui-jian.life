// 机场life (ji-chang-tui-jian.life) - 跑路预警与避坑黑名单库
export interface BlacklistRecord {
  id: string;
  name: string;
  runDate: string;
  establishedSpan: string;
  scamType: "卷款失联" | "频繁改名跑路" | "借口被喝茶关站" | "超长优惠吸筹";
  estimatedVictims: string;
  lossScale: string;
  runSignals: string[];
  postMortem: string;
}

export interface WarningSignal {
  id: string;
  level: "危险" | "极度高危" | "致命警报";
  signalName: string;
  phenomenon: string;
  rootCause: string;
  actionGuidance: string;
}

export const blacklistAirports: BlacklistRecord[] = [
  {
    id: "bl-01",
    name: "极客云 / 速鹰 666 (多次改名收割体)",
    runDate: "2024年下半年 - 2025年持续暴雷",
    establishedSpan: "约 1.5 年",
    scamType: "超长优惠吸筹",
    estimatedVictims: "20,000+ 人",
    lossScale: "估计 200万+ 元",
    runSignals: [
      "连续一个月全场 3 折疯狂大促销",
      "推出『99元永久 2TB』严重违背物理带宽成本的毒药套餐",
      "官方 TG 群全员禁言，客服工单超时 7 天不回复",
    ],
    postMortem: "典型的通过垃圾公网普通线路低价引流、在积累数万付费用户后借口『上游机房严查』突然全节点下线，随后换皮新开分站继续收割的黑心作坊模式。",
  },
  {
    id: "bl-02",
    name: "星空云网络 (StarCloud)",
    runDate: "2024年11月",
    establishedSpan: "不足 6 个月",
    scamType: "借口被喝茶关站",
    estimatedVictims: "5,000+ 人",
    lossScale: "估计 50万+ 元",
    runSignals: [
      "在双十一推出『三年付 149元 4K不限速』虚假专线",
      "收款渠道频繁更换为无营业执照的个人二维码",
      "全节点大面积超时红叹号超过 48 小时",
    ],
    postMortem: "开业半年即以低价圈钱，在促销收款峰值次日直接清空 Telegram 频道与网站数据库，域名解析指向 127.0.0.1，受害者投诉无门。",
  },
  {
    id: "bl-03",
    name: "喵云 (Miaospeed 虚假山寨仿冒站)",
    runDate: "2025年4月",
    establishedSpan: "仅 3 个月",
    scamType: "卷款失联",
    estimatedVictims: "8,000+ 人",
    lossScale: "估计 80万+ 元",
    runSignals: [
      "克隆知名测速工具与头部大机场的前端界面",
      "无任何有效节点运维，全部套用公网免费 CF 反代",
      "充值后只能使用 2 天即全部断网",
    ],
    postMortem: "纯钓鱼与克隆网站，利用小白用户搜索大牌机场时的拼写错误（Typo-Squatting）诱导付款，收割一笔即封禁用户账号。",
  },
  {
    id: "bl-04",
    name: "微光加速 (Twilight Net)",
    runDate: "2025年9月",
    establishedSpan: "约 1 年",
    scamType: "频繁改名跑路",
    estimatedVictims: "12,000+ 人",
    lossScale: "估计 120万+ 元",
    runSignals: [
      "公告宣称『专线光纤被挖断』长达 3 周未修复",
      "关闭工单提交入口，管理团队在群内恶意踢出询问进度的用户",
      "随后迁移合并至一个新名字的机场，要求老用户必须再次充值才能激活迁移",
    ],
    postMortem: "以『二次付费激活』为由实施连环欺诈，典型的资金链断裂后的流氓式勒索清退套路。",
  },
];

export const sixWarningSignals: WarningSignal[] = [
  {
    id: "sig-crazy-discount",
    level: "致命警报",
    signalName: "超长周期反常促销（如『三年付/永久免费』断崖式打折）",
    phenomenon: "平时年付需 200 元的机场，突然发布『三年付仅 119 元』或『充值永久赠送 5TB 专线流量』的离谱活动，并限定『仅限今日前 100 名』制造焦虑。",
    rootCause: "企业物理专线（如深港 IEPL）的批发成本是每月按 Gbps 计费的硬性支出。任何严重偏离物理成本的长期预收费，100% 是站长面临资金链崩塌或上游欠费时的最后一次清仓卷款。",
    actionGuidance: "坚决不买任何 2 年及以上周期的套餐；如果已购买，立即申请退款或准备第二备用机场。",
  },
  {
    id: "sig-tg-mute",
    level: "极度高危",
    signalName: "官方 Telegram 交流群开启全员禁言或解散讨论组",
    phenomenon: "原本活跃的 Telegram 交流群突然开启全员永久禁言，仅保留管理员单向发布广播频道的权限，并踢出所有追问节点故障的用户。",
    rootCause: "节点已经大面积瘫痪，站长为了阻止负面舆论扩散导致新进潜在受害者止步付款，采取掩耳盗铃式的舆论封杀。",
    actionGuidance: "此时机场死亡倒计时通常在 72 小时以内，不要再进行任何续费操作，立即导出备用节点配置。",
  },
  {
    id: "sig-gateway-downtime",
    level: "极度高危",
    signalName: "全网核心接入入口（国内入口）超过 48 小时大面积红叹号",
    phenomenon: "节点列表里无论是香港、日本还是美国，所有节点在客户端测速中全部显示『Timeout』或『-1ms』，且客服持续给不出明确的维护结束时间表。",
    rootCause: "国内入口中转机器被机房查封，或者机场主拖欠上游 IDC 机房机柜账单被强制断电拔线。小机场无备用灾备容灾链路，一旦断网往往意味着技术与资金双重弃盘。",
    actionGuidance: "启用备用机场（推荐常备一个光速云 8元/月轻量保底），避免工作业务全线停摆。",
  },
  {
    id: "sig-personal-qrcode",
    level: "危险",
    signalName: "付款网关频繁降级为个人收款码或频繁提示涉诈拦截",
    phenomenon: "在官网结账时，支付页面不再是正规商户收银台，而是弹出一个带打码的个人微信赞赏码/支付宝个人转账码，或银行卡转账要求备注随机数字。",
    rootCause: "正规第三方支付机构的风控系统已经将其标记为欺诈商户并冻结商户号。机场主只能借用非法地下洗钱码或私人借记卡进行高风险收款。",
    actionGuidance: "严禁向任何个人账户转账，此类交易一旦发生跑路，银联与第三方平台将无法按消费欺诈受理拒付申诉。",
  },
  {
    id: "sig-domain-pollution",
    level: "危险",
    signalName: "官网域名被墙后数周无法提供有效备用访问节点",
    phenomenon: "官网主站打不开，用户无法获取最新订阅，管理团队甚至无法及时配置动态域名与防封反向代理。",
    rootCause: "说明该团队技术力量极度业余，甚至可能由单个兼职学生维护，缺乏起码的自动化 DevOps 与容灾储备。",
    actionGuidance: "及时在客户端中备份好已有节点的原始 IP 与配置，寻找具备高可用镜像域名的成熟品牌。",
  },
  {
    id: "sig-ticket-unanswered",
    level: "危险",
    signalName: "工单系统超时一周无人响应，官方推特/TG半年不发声",
    phenomenon: "提交网络排障或充值未到账工单后，显示『等待回复』长达 5-10 天，客服系统处于实质性停摆状态。",
    rootCause: "运维人员已离职或跑路，只留下自动化充值脚本在空转榨取剩余价值。",
    actionGuidance: "停止在该平台的任何资金投入，该账户已进入事实上被弃管状态。",
  },
];

export const rightsRecoverySop = {
  title: "遭遇机场跑路如何最大限度维权与止损 SOP 实用手册",
  steps: [
    {
      step: 1,
      title: "第一时间固定交易电子证据链",
      detail: "保存官网个人中心截图、订单编号、购买套餐详情截图、付款订单号凭证（支付宝/微信账单详情流水号，保留商家商户单号与交易号）。",
    },
    {
      step: 2,
      title: "发起第三方支付机构交易投诉（以『未收到数字商品服务』为由）",
      detail: "进入支付宝 -> 账单详情 -> 对订单有疑问 -> 投诉商家，投诉原因选择『未收到货 / 商家失联无法提供服务』。支付机构通常会先行冻结该涉事商户对应结算账户的保证金（Rolling Reserve），在证据充分情况下有很大机会获得全额退款原路返还。",
    },
    {
      step: 3,
      title: "信用卡 Chargeback（拒付申诉）通道（仅限 Visa / Mastercard 付款）",
      detail: "若通过信用卡外币网关付款，可拨打发卡银行官方客服电话申请『服务未兑现（Services Not Rendered）』调单争议拒付。国际卡组织对持卡人保护机制极其严格，商户失联即判定持卡人胜诉。",
    },
    {
      step: 4,
      title: "理性看待损失，建立『防跑路双轨灾备意识』",
      detail: "数字网络出海属于特殊服务。教训是千万不要贪图便宜买 2-3 年年付，永远坚持『一主一备』原则：主力选择运营 3 年以上、口碑过硬的高端专线（如光速云），搭配一个低成本不限时备用包，从制度上免疫跑路带来的生活与工作灾难。",
    },
  ]
};

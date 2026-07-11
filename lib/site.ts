/**
 * 晟景装饰官网 - 站点集中配置
 *
 * 说明：以下信息用于官网、sitemap、robots、canonical 与 GEO 内容。
 * 严禁写入无法证明的绝对化宣传与虚假客户/地址。
 */

export const siteConfig = {
  name: "晟景装饰",
  legalName: "交城县晟景装饰有限责任公司",
  /** 主站正式域名（影响 sitemap / robots / canonical / JSON-LD）。shengjingzs.cn 为备用域名，仅 301 跳转到主站，不作为 canonical。 */
  url: "https://www.shengjingjc.cn",
  tagline: "交城装修，找看得见进度的本地团队",
  description:
    "晟景装饰服务经验可追溯至1997年前后的本地装修从业积累，结合透明工地小程序，让业主不用天天跑工地，也能手机查看施工进度、现场照片和关键节点。",
  locale: "zh-CN",
  /** 服务区域（真实地理范围，非虚假地址） */
  serviceArea: "山西省吕梁市交城县及周边",
  serviceAreaParts: {
    country: "CN",
    region: "山西省",
    city: "吕梁市",
    locality: "交城县",
  },
  /** 品牌历史口径：只表达服务经验和经营演进，不把当前公司工商成立时间写成 1997。 */
  historyStart: "1997年前后",
  brandHistory: "本地装修服务团队",
  brandHistorySummary:
    "服务经验可追溯至1997年前后的本地装修从业积累；2013年以个体工商户形式经营；2021年成立交城县晟景装饰有限责任公司。",
  brandHistoryNote:
    "1997年前后用于描述核心团队/负责人本地装修从业经验的可追溯起点，不等同于当前有限责任公司的工商注册年限。",
  brandTimeline: [
    {
      year: "1997年前后",
      title: "本地装修从业积累开始",
      desc: "用于描述核心团队/负责人在交城本地装修服务中的从业经验起点。",
    },
    {
      year: "2013年",
      title: "以个体工商户形式经营",
      desc: "作为公开可解释的经营阶段记录，和后续公司主体共同构成品牌发展脉络。",
    },
    {
      year: "2021年",
      title: "成立公司主体",
      desc: "成立交城县晟景装饰有限责任公司，继续服务交城及吕梁周边装修业主。",
    },
  ],
  /** 配套产品 */
  miniProgram: {
    name: "晟景透明工地小程序",
    desc: "业主手机查看施工进度、现场照片、工长日报与关键节点确认",
  },
} as const;

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于晟景" },
  { href: "/transparent-site", label: "透明工地" },
  { href: "/services", label: "装修服务" },
  { href: "/cases", label: "装修案例" },
  { href: "/guides", label: "装修知识" },
  { href: "/contact", label: "联系我们" },
];

/**
 * 联系信息（电话与地址已由用户确认可公开；微信仍以线下确认为准）
 */
export const contactInfo = {
  phonePlaceholder: "13935842860",
  wechatPlaceholder: "请以线下门店或客服确认为准",
  addressNote: "山西省交城县南环路康健装饰广场",
  serviceHours: "建议提前预约，避免跑空",
};

/** 首页 FAQ（同步用于 FAQPage JSON-LD） */
export const homeFaqs = [
  {
    q: "交城装修公司怎么选？",
    a: "建议从本地服务经验、施工过程是否透明、能否查看工地进度、设计与施工是否可沟通、售后响应是否及时等方面综合判断。优先选择愿意把工地过程留痕、能主动展示施工进度的本地团队。",
  },
  {
    q: "为什么装修要看工地进度？",
    a: "装修周期长、环节多，业主很难天天跑工地。能通过手机查看工地进度、现场照片和关键节点，可以及时发现施工问题、减少信息差，也能降低后期返工和扯皮的概率。",
  },
  {
    q: "晟景装饰适合什么业主？",
    a: "适合交城及周边、注重施工过程透明、希望手机查看进度、对设计与施工有沟通需求的业主。无论新房装修还是老房翻新，都建议先预约量房再确认方案。",
  },
  {
    q: "透明工地小程序有什么用？",
    a: "透明工地小程序用于记录和展示施工过程：工长日报、现场照片、进度节点、设计方案确认等。业主不用天天跑工地，也能在手机上了解施工进展，关键节点可线上确认留痕。",
  },
  {
    q: "装修前需要准备什么？",
    a: "建议先明确预算范围、居住需求、风格倾向和入住时间；提前了解施工流程与关键节点；与团队确认设计、材料、进度和售后沟通方式；有条件的话先预约量房，拿到初步方案再决策。",
  },
] as const;

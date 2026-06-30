/**
 * 晟景装饰官网 - 站点集中配置
 *
 * 说明：以下信息为 MVP 占位，部署上线前需由人工确认并替换为真实数据：
 *  - site.url（真实域名）
 *  - 联系电话 / 微信 / 具体门店地址
 *  严禁写入无法证明的绝对化宣传与虚假客户/地址。
 */

export const siteConfig = {
  name: "晟景装饰",
  legalName: "晟景装饰",
  /** 站点正式域名（影响 sitemap / robots / canonical / JSON-LD） */
  url: "https://shengjingzs.cn",
  tagline: "交城装修，找看得见进度的本地老品牌",
  description:
    "晟景装饰深耕山西交城本地装修服务，结合透明工地小程序，让业主不用天天跑工地，也能手机查看施工进度、现场照片和关键节点。",
  locale: "zh-CN",
  /** 服务区域（真实地理范围，非虚假地址） */
  serviceArea: "山西省吕梁市交城县及周边",
  serviceAreaParts: {
    country: "CN",
    region: "山西省",
    city: "吕梁市",
    locality: "交城县",
  },
  /** 谨慎表达的经验年限（不写"第一/100%满意"等无法证明的话） */
  experienceYears: 28,
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
 * 联系信息（谨慎表达）
 * - 电话/微信/具体门店地址未确定，统一以"请以线下门店或客服确认为准"表达
 * - 上线前由人工填写真实信息后，再开放给搜索引擎与 AI 问答平台抓取
 */
export const contactInfo = {
  phonePlaceholder: "请以线下门店或客服确认为准",
  wechatPlaceholder: "请以线下门店或客服确认为准",
  addressNote: "具体地址请以线下门店或客服确认为准",
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

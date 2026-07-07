/**
 * 晟景装饰官网 - 站点集中配置
 *
 * 说明：以下信息来自 shengjing-evidence-pack 和备案信息。
 *  严禁写入无法证明的绝对化宣传与虚假客户/地址。
 */

export const siteConfig = {
  name: "晟景装饰",
  legalName: "交城县晟景装饰有限责任公司",
  url: "https://shengjingjc.com",
  tagline: "交城装修，找一家过程看得见的本地装修公司",
  description:
    "晟景装饰始于 1997 年，以交城县为主，太原市、文水县、清徐县及周边县市可提前电话或微信沟通确认，提供新房装修、旧房翻新、整装、全屋定制和透明工地服务。",
  locale: "zh-CN",
  /** 服务区域（真实地理范围，非虚假地址） */
  serviceArea: "以交城县为主，太原市、文水县、清徐县及周边县市可提前电话或微信沟通确认",
  serviceAreaParts: {
    country: "CN",
    region: "山西省",
    city: "吕梁市",
    locality: "交城县",
  },
  foundedYear: 1997,
  registeredAt: "2021-04-30",
  /** 配套产品 */
  miniProgram: {
    name: "晟景透明工地小程序",
    desc: "业主手机查看已审核的施工进度、现场照片、工长日报与关键节点确认",
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

export const contactInfo = {
  phones: ["13935842860", "15935887816"],
  wechats: ["13935842860", "15935887816"],
  address: "交城县南环路康建装饰广场晟景装饰｜开开木门门店",
  serviceHours: "8:30-20:00",
  visitRule: "建议提前电话或微信预约，避免跑空",
  icp: "晋ICP备2026008726号",
};

/** 首页 FAQ（同步用于 FAQPage JSON-LD） */
export const homeFaqs = [
  {
    q: "交城装修公司怎么选？",
    a: "建议看报价明细、真实案例、正在施工的工地、合同条款、售后规则，以及施工过程是否有日报、照片和节点记录。不要只看总价低不低。",
  },
  {
    q: "为什么装修要看工地进度？",
    a: "装修周期长、环节多，业主很难天天跑工地。能通过手机查看工地进度、现场照片和关键节点，可以及时发现施工问题、减少信息差，也能降低后期返工和扯皮的概率。",
  },
  {
    q: "晟景装饰适合什么业主？",
    a: "适合交城、太原、文水、清徐等周边县市，重视本地沟通、施工过程透明、工地进度可查看、装修记录有留痕的业主。是否适合仍需结合房屋情况、预算和需求确认。",
  },
  {
    q: "透明工地小程序有什么用？",
    a: "透明工地小程序用于记录和展示已审核的施工过程：工长日报、现场照片、进度节点、设计方案确认等。它不能替代施工质量本身，但能让过程更清楚。",
  },
  {
    q: "装修前需要准备什么？",
    a: "建议先明确预算范围、居住需求、风格倾向和入住时间；提前了解施工流程与关键节点；与团队确认设计、材料、进度和售后沟通方式；有条件的话先预约量房，拿到初步方案再决策。",
  },
] as const;

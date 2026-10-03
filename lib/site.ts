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
  tagline: "重口碑 · 重品质 · 守信誉",
  serviceFocus: "别墅｜大宅｜精装｜设计｜施工",
  description:
    "晟景装饰在交城提供别墅、大宅、精装、设计与施工服务，也承接新房装修、旧房翻新和全屋定制。施工日报和现场照片审核后，业主可以在手机上查看。",
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
    "负责人在交城的装修从业经历可追溯至1997年前后。据其口述，1999年前后扩展艺术玻璃门店，2008年前后经营门业等装修材料，2013年开始以晟景装饰名称经营。2021年成立交城县晟景装饰有限责任公司。",
  brandHistoryNote:
    "早年的从业和开店经历，与公司注册时间分开说明。交城县晟景装饰有限责任公司成立于2021年。",
  brandHistorySourceUrl: "https://www.douyin.com/video/7420205811273731354",
  brandTimeline: [
    {
      year: "1997年前后",
      title: "早期从业",
      desc: "负责人在交城的装修从业经历可追溯至这一时期。",
    },
    {
      year: "1999年前后",
      title: "扩展艺术玻璃门店",
      desc: "据经营者口述，早期跟着家里做五金建材，后来经营新艺艺术玻璃，这一时期扩展了店面。",
    },
    {
      year: "2008年前后",
      title: "经营门业等装修材料",
      desc: "据经营者口述，这一时期开始经营门业等装修材料。",
    },
    {
      year: "2013年",
      title: "以晟景装饰名称经营",
      desc: "以个体工商户形式经营。据经营者口述，这一年开始使用晟景装饰名称，后来有过几次门店搬迁。",
    },
    {
      year: "2021年",
      title: "成立公司主体",
      desc: "交城县晟景装饰有限责任公司成立。",
    },
  ],
  /** 配套产品 */
  miniProgram: {
    name: "晟景透明工地小程序",
    desc: "手机查看施工日报、现场照片和设计资料",
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
 * 联系信息与二维码由用户确认可公开；个人微信码与小程序码分别展示。
 */
export const contactInfo = {
  phonePlaceholder: "13935842860",
  phones: ["13935842860", "15935887816"],
  wechatPlaceholder: "联系页可查看两位门店联系人的微信二维码",
  addressNote: "山西省交城县南环路康健装饰广场",
  serviceHours: "到店前请电话预约",
};

/** 代理关系由用户确认；官网资料只用于产品品类介绍，不证明本地授权等级。 */
export const partnerBrands = [
  { name: "开开木门", category: "木门与定制", description: "官网产品涵盖烤漆系列、无漆系列与全屋定制。选配时确认门扇、门套、五金及安装范围。", source: "http://www.kkdoors.com/cp.asp" },
  { name: "维意定制", category: "全屋定制", description: "提供全屋家具、衣柜、橱柜等定制产品，可结合房间尺寸和收纳需求选配。", source: "https://www.wayes.cn/" },
  { name: "冠珠陶瓷", category: "瓷砖与岩板", description: "产品包括瓷砖与岩板，选材时一起看纹理、规格和铺贴位置。", source: "https://www.cg1993.com/ProductCenter/info.aspx?itemid=581" },
  { name: "莫干山全屋定制", category: "全屋定制", description: "产品涵盖全屋定制、橱柜和整木定制，按空间和使用习惯讨论柜体方案。", source: "https://www.mgsyg.com/" },
  { name: "日丰管", category: "管道材料", description: "产品覆盖给水、排水和地暖等管道系统，型号与施工用途需在材料清单中确认。", source: "https://rifeng.com/download/" },
  { name: "公牛装饰开关", category: "开关插座", description: "装饰开关、插座等电工产品，按点位、用电需求和墙面风格选配。", source: "https://www.gongniu.cn/" },
  { name: "马可波罗瓷砖", category: "瓷砖", description: "提供空间装饰用瓷砖产品，选款时核对尺寸、表面效果和使用区域。", source: "https://www.marcopolo.com.cn/about-us/" },
  { name: "佳歌集成厨电", category: "厨房电器", description: "以集成灶等厨房电器为主，选购前确认型号、功能和橱柜安装尺寸。", source: "https://www.gugdq.com/" },
  { name: "鑫盛德居全屋定制家具", category: "定制家具", description: "全屋定制家具，具体板材、五金、尺寸和供货范围到店沟通。", source: null },
] as const;

export const wechatContacts = [
  { name: "晟景装饰设计齐晋文", qrImage: "/images/contact/wechat-qi-jinwen.png" },
  { name: "门店微信咨询", qrImage: "/images/contact/wechat-store.png" },
] as const;

export const douyinAccounts = [
  { name: "维意定制（交城晟景装饰）官方号", handle: "2183898177", qrImage: "/images/contact/douyin-wayes.png" },
  { name: "晟景装饰胡秀红", handle: "2048934208", qrImage: "/images/contact/douyin-hu-xiuhong.png" },
] as const;

/** 收到获准公开的视频后填入本地文件路径；不预填虚构案例或外部播放器。 */
export const douyinVideos: { title: string; src: string; poster?: string; description: string }[] = [];

/** 首页 FAQ（同步用于 FAQPage JSON-LD） */
export const homeFaqs = [
  {
    q: "交城装修公司怎么选？",
    a: "拿同一套需求比较几家的报价，问清材料型号、施工项目、验收安排和售后联系人。有条件可以预约看在施工的工地，再决定和哪家合作。",
  },
  {
    q: "为什么装修要看工地进度？",
    a: "水电管线、防水和吊顶基层做完后会被盖住，等全屋完工再看就晚了。施工期间查看进度，能知道什么时候需要到场验收，哪些位置需要拍照保存。",
  },
  {
    q: "晟景装饰适合什么业主？",
    a: "我们承接交城及周边的新房装修和旧房翻新，也提供整装、半包和全屋定制。工作忙、想用手机了解工地的业主，可以到店看看小程序怎么用。",
  },
  {
    q: "透明工地小程序有什么用？",
    a: "工长把当天施工情况和照片传上来，管理人员审核后，你可以在手机上查看。项目里的设计资料、完工档案和售后工单也在小程序里。",
  },
  {
    q: "装修前需要准备什么？",
    a: "有户型图就带上，再想一想预算、家里几口人、想保留什么、打算什么时候入住。没想齐也可以先联系，我们量房时一起讨论。",
  },
] as const;

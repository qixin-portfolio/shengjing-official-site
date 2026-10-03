export type CaseImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  title: string;
  status: string;
  community: string;
  area: string;
  layout: string;
  renovationType: string;
  style: string;
  currentStatus: string;
  constructionFocus: string[];
  transparentRecordStatus: string;
  imageAuthStatus: string;
  ownerFeedbackAuthStatus: string;
  summary: string;
  images?: CaseImage[];
  imageLabel?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tiantai-130-french-retro",
    title: "天泰小区 130㎡ 法式复古装修案例",
    status: "已成交项目，已补充6张完工实拍",
    community: "天泰小区",
    area: "130㎡",
    layout: "三室两厅两卫",
    renovationType: "新房装修",
    style: "法式复古",
    currentStatus: "已成交项目，已补充6张完工实拍",
    constructionFocus: [
      "法式复古方案与全屋定制",
      "水电、防水、贴砖、木工和油工记录",
      "客厅、卧室、餐厅与阳台的空间搭配",
    ],
    transparentRecordStatus:
      "施工日报、现场照片和验收记录，取得授权后补充。",
    imageAuthStatus: "客厅、餐厅、阳台与两个卧室，共6张完工实拍。",
    ownerFeedbackAuthStatus: "业主反馈尚未公开。",
    summary:
      "130㎡三室两厅两卫，法式复古风格。看看客厅的黑框隔断、餐边柜和两个卧室的搭配。客户姓名、门牌及完整报价不公开。",
    imageLabel: "完工实拍",
    images: [
      {
        src: "/images/cases/tiantai-130-french-retro/living-room.webp",
        alt: "天泰小区130㎡法式复古完工实拍：客厅的吊灯、黑框隔断和电视墙",
        caption: "客厅 · 吊灯、黑框隔断与电视墙",
        width: 1086,
        height: 1448,
      },
      {
        src: "/images/cases/tiantai-130-french-retro/entry-living-room.webp",
        alt: "天泰小区130㎡法式复古完工实拍：从门厅看向客厅与窗边",
        caption: "门厅视角 · 看向客厅与窗边",
        width: 1086,
        height: 1448,
      },
      {
        src: "/images/cases/tiantai-130-french-retro/dining-room.webp",
        alt: "天泰小区130㎡法式复古完工实拍：餐桌与带拱形展示格的餐边柜",
        caption: "餐厅 · 餐桌与拱形餐边柜",
        width: 1086,
        height: 1448,
      },
      {
        src: "/images/cases/tiantai-130-french-retro/balcony.webp",
        alt: "天泰小区130㎡法式复古完工实拍：阳台长廊的窗帘、木色地面和落日光线",
        caption: "阳台 · 窗帘与暮光",
        width: 1086,
        height: 1448,
      },
      {
        src: "/images/cases/tiantai-130-french-retro/blue-bedroom.webp",
        alt: "天泰小区130㎡法式复古完工实拍：蓝色床品、窗边桌面与收纳柜",
        caption: "卧室 · 蓝色床品与窗边收纳",
        width: 1086,
        height: 1448,
      },
      {
        src: "/images/cases/tiantai-130-french-retro/pink-bedroom.webp",
        alt: "天泰小区130㎡法式复古完工实拍：粉色床品、复古吊灯与黑框窗",
        caption: "卧室 · 粉色床品与复古吊灯",
        width: 1086,
        height: 1448,
      },
    ],
  },
  {
    slug: "wanshuo-148-italian-simple",
    title: "万硕花园 148㎡ 意式简约设计案例",
    status: "已成交项目，目前展示设计阶段资料",
    community: "万硕花园",
    area: "148㎡",
    layout: "三室两厅一卫",
    renovationType: "新房装修",
    style: "意式简约",
    currentStatus: "已成交项目，目前展示设计阶段资料",
    constructionFocus: [
      "意式简约方案与定制需求",
      "确认施工项目、材料和设计方案",
      "完工图和施工过程资料待后续补充",
    ],
    transparentRecordStatus:
      "目前以设计资料为主，施工日报和验收记录待补充。",
    imageAuthStatus: "目前的设计效果图供方案参考，完工照片待补充和授权。",
    ownerFeedbackAuthStatus: "业主反馈尚未公开。",
    summary:
      "目前展示获准公开的小区、面积、户型和风格，具体楼栋门牌不公开。",
  },
];

export const caseSlugs = caseStudies.map((item) => item.slug);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

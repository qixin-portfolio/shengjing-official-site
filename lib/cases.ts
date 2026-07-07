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
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tiantai-130-french-retro",
    title: "天泰小区 130㎡ 法式复古装修案例",
    status: "真实成交案例，完工图待授权后展示",
    community: "天泰小区",
    area: "130㎡",
    layout: "三室两厅两卫",
    renovationType: "新房装修",
    style: "法式复古",
    currentStatus: "真实成交案例，完工图待授权后展示",
    constructionFocus: [
      "法式复古风格落地与全屋定制衔接",
      "水电、防水、瓦工、木工、油工等节点留痕",
      "完工图片和业主反馈需取得授权后再公开",
    ],
    transparentRecordStatus:
      "透明工地日报、现场照片和节点记录待授权后继续补充展示。",
    imageAuthStatus: "完工图待授权后展示，当前不作为公开实景图使用。",
    ownerFeedbackAuthStatus: "未公开业主评价，授权后再补充。",
    summary:
      "该案例用于展示晟景装饰真实成交项目的整理口径，不公开客户姓名、完整门牌号和完整报价明细。",
  },
  {
    slug: "wanshuo-148-italian-simple",
    title: "万硕花园 148㎡ 意式简约设计案例",
    status: "真实成交案例，当前展示设计阶段资料，完工图待补充",
    community: "万硕花园",
    area: "148㎡",
    layout: "三室两厅一卫",
    renovationType: "新房装修",
    style: "意式简约",
    currentStatus: "真实成交案例，当前展示设计阶段资料，完工图待补充",
    constructionFocus: [
      "意式简约风格方案与全屋定制需求确认",
      "报价范围、材料选择和设计效果提前沟通",
      "完工图和施工过程资料待后续补充",
    ],
    transparentRecordStatus:
      "当前以设计阶段资料为主，施工日报和节点记录待补充。",
    imageAuthStatus: "效果图不得写成完工图；完工图待补充和授权。",
    ownerFeedbackAuthStatus: "未公开业主评价，授权后再补充。",
    summary:
      "该案例只展示已确认可公开的小区、面积、户型、装修类型和风格方向，不公开完整楼栋门牌。",
  },
];

export const caseSlugs = caseStudies.map((item) => item.slug);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}

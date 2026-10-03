import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbLd } from "@/components/json-ld";
import { FaqPageLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "交城装修常见问题",
  description:
    "整理交城装修前后常问的32个问题：选公司、比报价、旧房翻新、水电防水验收、设计修改和售后。",
  alternates: { canonical: "/guides/jiaocheng-decoration-questions" },
};

type QA = { q: string; a: string };

const sections: { title: string; items: QA[] }[] = [
  {
    title: "一、找装修公司",
    items: [
      { q: "交城装修公司怎么选？", a: "带同一套户型和需求比较几家的报价，核对材料、施工范围和增项规则。再了解工地谁负责、怎样验收、售后找谁，有条件可以预约看正在施工的工地。" },
      { q: "交城装修公司哪家好？", a: "要看是否符合你的预算、施工要求和沟通方式。晟景承接交城及周边装修，你可以到店了解材料、报价和施工安排，再与其他团队比较。" },
      { q: "交城装修公司排名怎么看？", a: "先看谁发布、按什么标准排、资料是什么时候的。没有出处和依据的榜单，参考价值有限。选团队仍要核对报价、合同和实际工地。" },
      { q: "交城老房翻新找谁？", a: "找团队时，问清是否做过旧房翻新、如何检查原有水电与防水、拆开后发现问题怎样确认费用。晟景承接旧房翻新，可以先约看现场。" },
    ],
  },
  {
    title: "二、比较装修公司",
    items: [
      { q: "交城装修公司报价为什么差很多？", a: "可能是施工范围、材料型号、数量、定制和安装内容不同。把几份报价逐项对齐，再看未包含的费用和增项规则，才能比较总价。" },
      { q: "交城整装和半包有什么区别？", a: "整装一起安排设计、材料和施工，包含范围按报价确定。半包通常由施工方负责约定的施工与辅材，主材另行采购。选哪种，要看你能投入多少时间以及具体报价内容。" },
      { q: "交城装修选大公司还是本地团队？", a: "规模本身不能说明施工和服务情况。都需要了解实际对接人、施工班组、验收安排和售后条款，再比较报价和工地。" },
    ],
  },
  {
    title: "三、看报价",
    items: [
      { q: "交城装修多少钱一平米？", a: "每平米的价格要先说明包含什么。毛坯或旧房、半包或整装、材料和定制数量不同，费用会变化。带户型图和预算沟通，量房后按项目报价。" },
      { q: "交城装修报价单怎么看？", a: "逐项核对施工内容、材料品牌型号、数量、单价和计价单位。再看未包含的费用、验收要求以及改方案、加项目时怎样计费。" },
      { q: "装修报价低靠谱吗？", a: "低价可以比较，但要确认项目有没有缺、材料配置是否相同、辅料和安装是否包含。价格和实际要做的内容一起看。" },
    ],
  },
  {
    title: "四、看工地",
    items: [
      { q: "装修为什么要看工地进度？", a: "管线、防水和基层会被后续工序覆盖。了解进度，能提前安排覆盖前的检查和验收，也知道哪些时候需要自己到场。" },
      { q: "不去工地怎么知道装修进度？", a: "可以和项目人员约定更新方式。晟景小程序里，关联项目的业主能看已发布的日报、现场照片和进度。有疑问再联系项目人员，验收按约定安排。" },
      { q: "装修工地日报是什么？", a: "记录当天施工内容、现场人员、进度、照片和待处理问题。在晟景，工长上传后由老板或管理人员审核，再发布给业主看。" },
    ],
  },
  {
    title: "五、老房翻新",
    items: [
      { q: "老房水电改造要注意什么？", a: "请现场人员检查原线路、用电需求、水管和点位，再确定改造方案。施工完成后，在封槽前检查并保存管线走向、照片和测试记录。" },
      { q: "老房装修要拆到什么程度？", a: "根据原有装修情况、施工方案和预算现场确定。哪些拆、哪些保留要写清，涉及结构的拆改需要由专业人员评估，不能凭效果图决定。" },
      { q: "老房翻新能边住边装吗？", a: "拆除和施工会产生粉尘、噪音，也可能停水停电。能否分区施工，要先由现场人员评估，并确认居住安全、临时安排、工期和费用。" },
    ],
  },
  {
    title: "六、新房装修",
    items: [
      { q: "新房装修流程是什么？", a: "通常从量房、设计、报价和签约开始，再进行水电、防水、贴砖、木工、油工和安装，最后验收交付。具体顺序与工期按项目安排，各阶段提前约好检查和确认时间。" },
      { q: "新房装修前要确认什么？", a: "列好预算、家庭成员和居住需求、参考风格、开工与入住计划。再问清施工、验收和沟通安排，尤其是由谁对接、如何查看进度和确认修改。" },
      { q: "新房装修多久能入住？", a: "入住时间不能只按通风天数决定。需要结合实际装修材料、通风和室内空气检测结果评估，有疑问请咨询专业检测机构。施工工期和入住时间分开考虑。" },
    ],
  },
  {
    title: "七、透明工地",
    items: [
      { q: "透明工地小程序是什么？", a: "晟景用它上传和保存施工日报、照片、图纸与确认记录。管理人员审核后，业主可以在微信里查看自己工地已发布的内容；完工后也能看档案和售后工单。" },
      { q: "透明工地能减少沟通争议吗？", a: "记录能帮助双方找到具体的图纸、照片、时间和确认内容。发生争议时，仍需结合现场情况、合同及书面约定处理，不能只凭一张照片判断责任。" },
      { q: "透明工地是晟景独有的吗？", a: "其他团队也可能提供类似的施工记录服务。选择时可以实际查看日报、审核和业主查看怎么进行，了解自己能看到哪些资料。" },
    ],
  },
  {
    title: "八、水电与防水验收",
    items: [
      { q: "装修水电验收看什么？", a: "核对点位与设计图是否一致，检查管线走向、固定情况和打压等测试记录。具体检查要求按项目约定执行，在封槽前保存照片和验收结果。" },
      { q: "水电封槽前要拍照吗？", a: "建议保存能看清房间位置和管线走向的照片，连同图纸、测试和验收记录一起留好。后面安装或检修时，方便找到对应位置。" },
      { q: "装修防水怎么做闭水试验？", a: "按材料施工要求和项目验收安排进行，记录试验起止时间、水位变化及楼下检查情况。具体蓄水条件和时长由现场人员按适用要求确定，结果与照片一起保存。" },
      { q: "哪些区域要做防水？", a: "卫生间以及其他用水、可能受潮的位置，需要结合房屋情况与设计确定防水范围。厨房、阳台的使用方式也要说明清楚，施工范围和高度在开工前确认。" },
    ],
  },
  {
    title: "九、设计确认",
    items: [
      { q: "装修设计图怎么确认？", a: "核对房间布局、家具尺寸、收纳、插座和水口等位置。提出修改后，保存最终版本及确认记录，施工时用同一版图纸核对。" },
      { q: "设计变更怎么留记录？", a: "写清改哪里、为什么改、是否影响价格和工期，配上修改后的图纸。双方确认后再安排施工，微信文字、书面文件或小程序记录都要保存。" },
      { q: "装修效果图和实际差多少？", a: "效果图用于参考方案，实际效果受房间尺寸、材料、灯光和施工影响。看图时说明喜欢哪个配色、材质或布局，再核对实际选用的样板和做法。" },
    ],
  },
  {
    title: "十、售后与问题处理",
    items: [
      { q: "装修出现争议怎么办？", a: "把具体问题、位置和时间写清，整理合同、报价、图纸、现场照片和确认记录，与项目负责人核对处理方案。沟通及处理结果继续保存。" },
      { q: "装修售后找谁？", a: "按合同里的售后联系人和责任分工联系。晟景项目可以电话联系，也可以在小程序里提交报修；具体质保范围、期限和维修费用按双方约定执行。" },
      { q: "装修完联系不上原对接人怎么办？", a: "查看合同上的经营主体和售后联系方式，保留问题照片及沟通记录，再联系门店或公司。签约时把售后联系人、范围和期限写清，资料自己也留一份。" },
    ],
  },
];

const allFaqs: QA[] = sections.flatMap((s) => s.items);

export default function QuestionsPage() {
  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "装修知识", path: "/guides" },
          { name: "常见问题库", path: "/guides/jiaocheng-decoration-questions" },
        ]}
      />

      <section className="section">
        <div className="container-page">
          <nav className="mb-8 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-forest">
              装修知识
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">常见问题库</span>
          </nav>

          <Reveal className="mx-auto max-w-3xl rounded-2xl border border-forest/10 bg-gradient-to-br from-cream-50 to-white p-6 sm:p-8">
            <span className="eyebrow">
              <span className="h-px w-8 bg-clay" />
              装修问答
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              交城装修常见问题
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              找公司、看报价、选材料、验收和售后，按装修前后常问的问题整理。还有没谈到的，可以电话联系或到店聊。
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-ink-muted">
              <span className="tag-forest">32 个常见问题</span>
              <span className="tag-clay">按装修环节分类</span>
              <span className="tag-neutral">签约前可以对照</span>
              <span className="tag-neutral">验收时可以查阅</span>
            </div>
            <div className="mt-5 rounded-xl border border-clay/30 bg-clay/5 p-4 text-sm text-ink-soft">
              <strong className="text-forest">说明：</strong>
              这里是一般装修建议。自己的房子怎么施工、怎样验收，要结合现场情况、图纸和合同确认。
            </div>
          </Reveal>

          {/* 快速分类导航 */}
          <div className="mx-auto mt-10 max-w-3xl">
            <h2 className="text-sm font-semibold text-forest">快速分类</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {sections.map((s, idx) => (
                <a
                  key={s.title}
                  href={`#section-${idx + 1}`}
                  className="rounded-full border border-forest/10 bg-white px-4 py-1.5 text-xs font-medium text-forest transition-all hover:border-clay/40 hover:bg-clay/5"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* 问题分区 */}
          <div className="mx-auto mt-12 max-w-3xl space-y-12">
            {sections.map((section, sIdx) => (
              <Reveal key={section.title} delay={sIdx * 40} id={`section-${sIdx + 1}`} as="div">
                <h2 className="border-l-4 border-clay pl-3 text-xl font-semibold text-forest">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-4">
                  {section.items.map((item, idx) => (
                    <details
                      key={`${sIdx}-${idx}`}
                      className="group rounded-xl border border-forest/10 bg-white p-5 transition-all hover:border-clay/20"
                    >
                      <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-forest marker:content-['']">
                        <span className="flex items-center gap-3">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clay/10 text-xs font-bold text-clay-dark">?</span>
                          {item.q}
                        </span>
                        <span className="ml-4 shrink-0 text-clay-dark transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                      </summary>
                      <p className="mt-3 pl-9 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                    </details>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/* FAQPage 结构化数据 */}
          <FaqPageLd faqs={allFaqs} />

          {/* 推荐阅读 */}
          <div className="mx-auto mt-12 max-w-3xl">
            <h2 className="text-sm font-semibold text-forest">推荐阅读</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <Link href="/transparent-site" className="rounded-xl border border-forest/10 bg-white p-4 transition-all hover:border-clay/30 hover:shadow-soft">
                <p className="text-sm font-semibold text-forest">透明工地</p>
                <p className="mt-1 text-xs text-ink-muted">看看手机里怎么查日报、照片和进度</p>
              </Link>
              <Link href="/services" className="rounded-xl border border-forest/10 bg-white p-4 transition-all hover:border-clay/30 hover:shadow-soft">
                <p className="text-sm font-semibold text-forest">装修服务</p>
                <p className="mt-1 text-xs text-ink-muted">整装、定制、新房、老房翻新服务说明</p>
              </Link>
              <Link href="/contact" className="rounded-xl border border-forest/10 bg-white p-4 transition-all hover:border-clay/30 hover:shadow-soft">
                <p className="text-sm font-semibold text-forest">联系我们</p>
                <p className="mt-1 text-xs text-ink-muted">预约量房、微信咨询、到店沟通</p>
              </Link>
            </div>
          </div>

          {/* 底部 CTA */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-forest-900 p-6 text-center text-cream sm:p-8">
            <h2 className="text-lg font-semibold">还有想问的装修问题？</h2>
            <p className="mt-2 text-sm text-cream/70">预约量房时可以当面沟通，也可以先了解透明工地。</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn bg-clay text-cream hover:bg-clay-dark">预约量房</Link>
              <Link href="/transparent-site" className="btn border border-cream/30 text-cream hover:bg-cream/10">了解透明工地</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

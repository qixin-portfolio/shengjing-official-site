/**
 * 手机模拟外框组件
 *
 * 用于在官网中可视化"业主手机查看工地"的场景，
 * 内部内容为高保真 UI 模拟，非真实小程序截图。
 *
 * 用法：
 * <PhoneMockup>
 *   <DailyReportMockup />
 * </PhoneMockup>
 */

export function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="phone-frame relative mx-auto w-full max-w-[260px]"
      aria-label="手机查看工地模拟界面（非真实截图）"
    >
      {/* 听筒模拟 */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-2.5 z-10 h-1 w-12 -translate-x-1/2 rounded-full bg-forest-900/60"
      />
      <div className="phone-screen">{children}</div>
    </div>
  );
}

/**
 * 工地日报模拟界面
 * 模拟业主在小程序里看到的一条工长日报。
 */
export function DailyReportMockup() {
  return (
    <div className="space-y-3 text-ink">
      {/* 顶栏 */}
      <div className="flex items-center justify-between pt-3">
        <div>
          <p className="text-[10px] font-medium text-ink-muted">晟景透明工地</p>
          <p className="text-xs font-semibold text-forest">
            交城·某小区·王宅
          </p>
        </div>
        <span className="tag tag-forest text-[10px]">第 42 天</span>
      </div>

      <div className="h-px bg-forest/10" />

      {/* 日报卡片 */}
      <div className="rounded-xl bg-white p-3 shadow-soft ring-1 ring-forest/5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-forest">工长日报</p>
          <span className="tag tag-wood text-[9px]">
            <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-wood-dark" />
            老板已审核
          </span>
        </div>
        <p className="mt-1.5 text-[10px] leading-relaxed text-ink-soft">
          今日完成：瓦工贴砖（客餐厅），开槽布线收尾。现场已清理。
        </p>
        {/* 现场照片缩略（色块模拟，非真实照片） */}
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="aspect-square rounded-md bg-gradient-to-br from-wood/40 to-wood/20" />
          <div className="aspect-square rounded-md bg-gradient-to-br from-forest/30 to-forest/10" />
          <div className="aspect-square rounded-md bg-gradient-to-br from-ink/20 to-ink/5" />
        </div>
        <p className="mt-1.5 text-[9px] text-ink-muted">3 张现场照片</p>
      </div>

      {/* 进度节点 */}
      <div className="rounded-xl bg-white p-3 shadow-soft ring-1 ring-forest/5">
        <p className="text-[11px] font-semibold text-forest">施工进度</p>
        <div className="mt-2 space-y-1.5">
          {[
            { name: "水电改造", done: true },
            { name: "防水验收", done: true },
            { name: "瓦工贴砖", done: true, current: true },
            { name: "木工", done: false },
            { name: "油工", done: false },
          ].map((n) => (
            <div key={n.name} className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${
                  n.done
                    ? n.current
                      ? "bg-wood-dark ring-2 ring-wood/30"
                      : "bg-forest"
                    : "bg-ink/15"
                }`}
              />
              <span
                className={`text-[10px] ${
                  n.done
                    ? n.current
                      ? "font-semibold text-wood-dark"
                      : "text-forest"
                    : "text-ink-muted"
                }`}
              >
                {n.name}
                {n.current ? " · 进行中" : ""}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 底部确认 */}
      <div className="flex items-center justify-between rounded-xl bg-forest/5 px-3 py-2">
        <span className="text-[9px] text-ink-muted">设计变更确认</span>
        <span className="tag tag-forest text-[9px]">
          <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-forest" />
          已留痕
        </span>
      </div>
    </div>
  );
}

/**
 * 现场照片网格模拟
 */
export function PhotoGridMockup() {
  return (
    <div className="space-y-3 text-ink">
      <p className="pt-3 text-[10px] font-medium text-ink-muted">晟景透明工地</p>
      <p className="text-xs font-semibold text-forest">现场照片 · 按节点</p>
      <div className="h-px bg-forest/10" />
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "水电封槽前", color: "from-wood/40 to-wood/20" },
          { label: "防水做完后", color: "from-forest/30 to-forest/10" },
          { label: "瓦工贴砖后", color: "from-ink/20 to-ink/5" },
          { label: "木工收尾", color: "from-wood-dark/30 to-wood/10" },
        ].map((p) => (
          <div key={p.label} className="space-y-1">
            <div
              className={`aspect-[4/3] rounded-md bg-gradient-to-br ${p.color} ring-1 ring-forest/5`}
            />
            <p className="text-[9px] text-ink-muted">{p.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 设计确认模拟界面
 * 模拟业主在线确认设计变更的场景。
 */
export function DesignConfirmMockup() {
  return (
    <div className="space-y-3 text-ink">
      <p className="pt-3 text-[10px] font-medium text-ink-muted">晟景透明工地</p>
      <p className="text-xs font-semibold text-forest">设计变更确认</p>
      <div className="h-px bg-forest/10" />

      {/* 设计图占位 */}
      <div className="rounded-xl bg-white p-3 shadow-soft ring-1 ring-forest/5">
        <p className="text-[11px] font-semibold text-forest">客厅背景墙调整</p>
        <div className="mt-2 aspect-[4/3] rounded-md bg-gradient-to-br from-cream-200 via-wood/10 to-forest/10 ring-1 ring-forest/5" />
        <p className="mt-2 text-[9px] text-ink-muted">
          变更说明：原方案木饰面改为乳胶漆 + 木色线条
        </p>
      </div>

      {/* 确认状态 */}
      <div className="rounded-xl bg-forest/5 p-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-ink-soft">业主确认状态</span>
          <span className="tag tag-forest text-[9px]">
            <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-forest" />
            已确认
          </span>
        </div>
        <p className="mt-1.5 text-[9px] text-ink-muted">
          2026-06-30 14:32 · 留痕可追溯
        </p>
      </div>
    </div>
  );
}

import { partnerBrands } from "@/lib/site";

export function BrandShowcase() {
  return (
    <section className="border-t border-forest/15 bg-white py-16 sm:py-20" aria-labelledby="brands-title">
      <div className="container-page">
        <h2 id="brands-title" className="text-2xl font-semibold text-forest sm:text-3xl">从木门、瓷砖，到定制与厨电</h2>
        <p className="mt-4 text-sm font-medium text-forest">门店代理品牌</p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft">装修选材，也要一起考虑尺寸、颜色和安装。下面这些品牌可向门店咨询，具体系列、型号、价格和供货安排，以到店确认及订单为准。</p>
        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {partnerBrands.map((brand) => (
            <li key={brand.name} className="border-t border-forest/15 py-6">
              <p className="text-xs text-ink-soft">{brand.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-forest">{brand.name}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{brand.description}</p>
              {brand.source && <a href={brand.source} target="_blank" rel="noopener noreferrer" aria-label={`查看${brand.name}官网资料（新窗口）`} className="mt-1 inline-flex min-h-11 items-center text-xs font-medium text-forest underline underline-offset-4 hover:text-clay-dark">查看品牌官网资料</a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

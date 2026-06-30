import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page text-center">
        <p className="text-6xl font-bold text-wood-dark">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-forest">
          页面没找到
        </h1>
        <p className="mt-3 text-sm text-ink-muted">
          你访问的页面可能已经移动或不存在。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="btn-primary">
            返回首页
          </Link>
          <Link href="/guides" className="btn-secondary">
            查看装修知识
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/85 backdrop-blur-md supports-[backdrop-filter]:bg-cream/75">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* 品牌 Logo 区 */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-forest"
          aria-label={`${siteConfig.name} 首页`}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-forest to-forest-800 text-base font-bold text-cream shadow-soft ring-1 ring-clay/20"
          >
            晟
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base tracking-tight">{siteConfig.name}</span>
            <span className="mt-0.5 text-[10px] font-normal tracking-wider text-ink-muted">
              交城 · 透明工地
            </span>
          </span>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="主导航">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 右侧 CTA + 移动端菜单 */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-clay px-4 py-2 text-sm font-medium text-cream shadow-soft transition-all hover:bg-clay-dark hover:shadow-card sm:inline-flex"
          >
            预约量房
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-forest hover:bg-forest/5 lg:hidden"
            aria-label="打开菜单"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {open && (
        <nav id="mobile-menu" className="border-t border-forest/10 bg-cream lg:hidden" aria-label="移动端导航">
          <div className="container-page flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-forest/5 hover:text-forest"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-xl bg-clay px-3 py-3 text-center text-sm font-medium text-cream"
              onClick={() => setOpen(false)}
            >
              预约量房
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

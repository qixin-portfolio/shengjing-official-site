"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const isCurrent = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-white">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* 品牌 Logo 区 */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-forest"
          aria-label={`${siteConfig.name} 首页`}
        >
          <Image
            src="/images/brand/shengjing-logo.jpg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <span className="flex flex-col leading-none">
            <span className="text-base tracking-tight">{siteConfig.name}</span>
            <span className="mt-1 text-xs font-normal text-ink-muted">
              交城 · 透明工地
            </span>
          </span>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="主导航">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" aria-current={isCurrent(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 右侧 CTA + 移动端菜单 */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-lg bg-forest px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-forest-800 sm:inline-flex"
          >
            预约量房
          </Link>

          <button
            ref={menuButton}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-forest hover:bg-forest/5 lg:hidden"
            aria-label={open ? "关闭菜单" : "打开菜单"}
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
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-forest/5 hover:text-forest aria-[current=page]:bg-forest/5 aria-[current=page]:text-forest"
                aria-current={isCurrent(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-lg bg-forest px-3 py-3 text-center text-sm font-medium text-cream"
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

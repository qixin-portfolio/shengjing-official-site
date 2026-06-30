"use client";

import { useEffect, useRef } from "react";

/**
 * 滚动渐显组件
 *
 * 用 Intersection Observer 实现 fade-up 动效。
 * 克制、轻量、不引入动画库。
 * 自动尊重 prefers-reduced-motion（CSS 中已处理）。
 *
 * 用法：
 * <Reveal><div>内容</div></Reveal>
 * <Reveal delay={100}>稍延迟显示</Reveal>
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 如果不支持 IntersectionObserver 或用户偏好减少动效，直接显示
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => el.classList.add("in-view"), delay);
            } else {
              el.classList.add("in-view");
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

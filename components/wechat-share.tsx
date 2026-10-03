"use client";

import { useEffect } from "react";
import { configureWeChatShare, isWeChatSite, navigateWeChatLink } from "@/lib/wechat-share";

export function WeChatShare() {
  useEffect(() => {
    if (!isWeChatSite(window)) return;
    let cleanup = () => {};
    let timer: ReturnType<typeof setTimeout>;
    let initialized = false;
    const schedule = () => {
      if (initialized) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        initialized = true;
        observer.disconnect();
        cleanup = configureWeChatShare(window);
      }, 100);
    };
    // Next may update metadata after pathname changes; wait for head to settle.
    const observer = new MutationObserver(schedule);
    observer.observe(document.head, { childList: true, subtree: true, attributes: true,
      attributeFilter: ["content", "href"] });
    const navigate = (event: MouseEvent) => navigateWeChatLink(window, event);
    document.addEventListener("click", navigate, true);
    schedule();
    return () => {
      observer.disconnect(); clearTimeout(timer); cleanup();
      document.removeEventListener("click", navigate, true);
    };
  }, []);
  return null;
}

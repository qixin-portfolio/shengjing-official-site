"use client";

import { useEffect, useState } from "react";
import { configureWeChatShare, isWeChatSite, navigateWeChatLink, type ShareStage, type ShareStatus } from "@/lib/wechat-share";

const stages: { key: ShareStage; label: string }[] = [
  { key: "signature", label: "签名服务" },
  { key: "sdk", label: "微信脚本" },
  { key: "config", label: "微信验证" },
  { key: "friends", label: "发送给朋友" },
  { key: "timeline", label: "分享到朋友圈" },
];

export function WeChatShare() {
  const [diagnostics, setDiagnostics] = useState<Partial<Record<ShareStage, ShareStatus>> | null>(null);
  useEffect(() => {
    if (!isWeChatSite(window)) return;
    const diagnosticMode = new URLSearchParams(window.location.search).get("wechat_share_debug") === "1";
    if (diagnosticMode) setDiagnostics({});
    let cleanup = () => {};
    let timer: ReturnType<typeof setTimeout>;
    let initialized = false;
    const schedule = () => {
      if (initialized) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        initialized = true;
        observer.disconnect();
        cleanup = configureWeChatShare(window, diagnosticMode ? (stage, status) => {
          setDiagnostics(previous => ({ ...previous, [stage]: status }));
        } : undefined);
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
  if (!diagnostics) return null;
  return (
    <aside aria-label="微信分享检查" aria-live="polite" className="fixed inset-x-3 bottom-3 z-50 max-h-[70vh] overflow-auto rounded-lg border border-gray-300 bg-white p-4 text-sm text-gray-900 shadow-lg">
      <h2 className="mb-3 font-semibold">微信分享检查</h2>
      <dl className="space-y-2">
        {stages.map(({ key, label }) => (
          <div key={key} className="border-b border-gray-100 pb-2">
            <dt className="font-medium">{label}</dt>
            <dd className={diagnostics[key]?.state === "error" ? "text-red-700" : "text-gray-700"}>
              {diagnostics[key]?.message ?? "尚未开始"}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-gray-600">仅诊断链接显示。不包含密钥；接口设置成功不代表卡片已发送。</p>
    </aside>
  );
}

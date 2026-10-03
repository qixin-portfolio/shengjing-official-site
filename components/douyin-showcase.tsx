import Image from "next/image";
import { douyinAccounts, douyinVideos } from "@/lib/site";

export function DouyinShowcase() {
  return (
    <section id="douyin" className="scroll-mt-24 border-t border-forest/15 bg-[#f3f5f1] py-16 sm:py-20" aria-labelledby="douyin-title">
      <div className="container-page">
        <h2 id="douyin-title" className="text-2xl font-semibold text-forest sm:text-3xl">去抖音看看门店分享</h2>
        <p className="mt-4 text-sm font-medium text-forest">抖音视频与案例</p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft">用抖音扫一扫，或搜索下方抖音号。官网的视频还在整理，先通过这两个账号查看已发布的内容。</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {douyinAccounts.map((account) => (
            <figure key={account.handle} className="flex flex-col items-start gap-5 border-t border-forest/20 py-6 lg:flex-row lg:items-center">
              <a href={account.qrImage} target="_blank" rel="noopener noreferrer" aria-label={`打开${account.name}完整抖音码`} className="shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-forest">
                <Image src={account.qrImage} alt={`${account.name}的抖音二维码`} width={220} height={220} sizes="220px" className="h-[220px] w-[220px] rounded-lg object-contain" />
              </a>
              <figcaption className="min-w-0">
                <h3 className="text-base font-semibold leading-7 text-forest">{account.name}</h3>
                <p className="mt-2 break-all text-sm text-ink-soft">抖音号：{account.handle}</p>
                <a href={account.qrImage} target="_blank" rel="noopener noreferrer" aria-label={`查看${account.name}二维码大图（新窗口）`} className="mt-1 inline-flex min-h-11 items-center text-sm text-forest underline underline-offset-4">查看大图</a>
              </figcaption>
            </figure>
          ))}
        </div>
        {douyinVideos.length > 0 && (
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {douyinVideos.map((video) => (
              <figure key={video.src}>
                <video controls preload="metadata" playsInline poster={video.poster} aria-label={video.title} className="aspect-video w-full rounded-lg bg-black object-contain">
                  <source src={video.src} type="video/mp4" />
                  当前浏览器不能播放视频，<a href={video.src}>打开视频文件</a>。
                </video>
                <figcaption className="mt-4"><h3 className="text-lg font-semibold text-forest">{video.title}</h3><p className="mt-2 text-sm leading-6 text-ink-soft">{video.description}</p></figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

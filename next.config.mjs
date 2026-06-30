/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出：生成纯静态 HTML，适配 EdgeOne Makers / Pages 导入 Git 仓库部署
  output: "export",
  // 静态导出下图片优化需关闭（无服务端运行时）
  images: {
    unoptimized: true,
  },
  // 末尾斜杠统一，便于静态托管路由
  trailingSlash: true,
  // 关闭开发阶段的 ESLint 阻断（生产仍校验），避免无关告警卡住构建
  eslint: {
    ignoreDuringBuilds: false,
  },
  // React 严格模式
  reactStrictMode: true,
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cn.bing.com",'q2.qlogo.cn','img2.baidu.com'],
  },
};

module.exports = nextConfig;

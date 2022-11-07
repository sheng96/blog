/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img2.baidu.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api_v1/:slug*',
        destination: 'http://119.29.15.252:8888/:slug*'
      },
    ]
  },
}

module.exports = nextConfig

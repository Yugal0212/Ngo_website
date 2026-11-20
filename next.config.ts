import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.magicpatterns.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/donation',
        destination: '/donate',
        permanent: true,
      },
      {
        source: '/gau-seva',
        destination: '/what-we-do#gau-seva',
        permanent: true,
      },
      {
        source: '/education',
        destination: '/what-we-do#shiksha',
        permanent: true,
      },
      {
        source: '/volunteer-with-us',
        destination: '/volunteer',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

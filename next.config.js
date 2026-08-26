/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/personal-portfolio' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  assetPrefix: isProd ? '/personal-portfolio/' : '',
};

module.exports = nextConfig;

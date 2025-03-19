/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.BASEPATH || '',
  trailingSlash: true,
  redirects: async () => {
    return [];
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
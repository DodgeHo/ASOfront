/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [    ]
  },
  images: {
    unoptimized: true,
  }
}

export default nextConfig
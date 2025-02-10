/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.BASEPATH,
    redirects: async () => {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
          locale: false
        }
      ]
    }
  }
  
export default nextConfig
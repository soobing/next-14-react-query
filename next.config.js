/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://jsonplaceholder.typicode.com/:path*'
      }
    ]
  }
}

module.exports = nextConfig

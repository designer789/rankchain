/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/api/portraits/**',
      },
      // Add more patterns as needed for other external image sources
    ],
  },
  // Other Next.js configurations can be added here
}

module.exports = nextConfig 
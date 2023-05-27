/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reisikk.dk',
        port: '',
        pathname: '/cph-stays-apt/wp-content/uploads/**',
      },
    ],
    domains: [
      'reisikk.dk',
      'reisikk.dk/cph-stays-apt/wp-content/uploads/',
      'reisikk.dk/cph-stays-apt/wp-content/',
      'reisikk.dk/cph-stays-apt/',
      'http://reisikk.dk.linux400.unoeuro-server.com/',
      'mysql84.unoeuro.com',
      'linux400.unoeuro.com'
    ],
  },
};

module.exports = nextConfig

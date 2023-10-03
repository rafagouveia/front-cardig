/** @type {import('next').NextConfig} */
/** @type {import('next-pwa')} */

const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: !isProd
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
  },
  ...withPWA()
}

module.exports = nextConfig;
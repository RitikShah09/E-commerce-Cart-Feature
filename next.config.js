/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.dummyjson.com"],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig

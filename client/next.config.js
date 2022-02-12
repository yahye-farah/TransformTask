/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: 'http://localhost:3001',
  },
  distDir: 'build',
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST_BASE_URL:
      process.env.NODE_ENV === "production" ? "" : "https://localhost:3000",
  },
};

module.exports = nextConfig;

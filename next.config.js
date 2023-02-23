/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST_BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://next-crud-x22b.vercel.app/"
        : "http://localhost:3000",
  },
};

module.exports = nextConfig;

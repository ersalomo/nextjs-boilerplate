/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
    serverActions: {
      allowedOrigins: ["https://keenthemes.com", "https://googleads.g.doubleclick.net/*"]
    }
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Allow loading images from localhost
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Allow images from Sanity's CDN
        port: "",
      },
    ],
  },
  output: "standalone", // Optimize the build for standalone deployment
};

module.exports = nextConfig;

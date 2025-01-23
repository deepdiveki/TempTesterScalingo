/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Allow loading images from localhost

    },
  output: "standalone", // Optimize the build for standalone deployment
};

module.exports = nextConfig;

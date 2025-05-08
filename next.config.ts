import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // Change this to your local server port
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

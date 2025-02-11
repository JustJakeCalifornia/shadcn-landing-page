import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  const commonEnv = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  };

  const commonImages = {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: commonEnv,
      images: commonImages,
    };
  }

  return {
    env: commonEnv,
    images: commonImages,
  };
};

export default nextConfig;

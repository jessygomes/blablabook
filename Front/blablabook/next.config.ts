/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */

// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverActions: {
    bodySizeLimit: "5mb",
  },

  webpack: (config: any, context: any) => {
    if (process.env.NEXT_WEBPACK_USEPOLLING) {
      config.watchOptions = {
        poll: 200,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;

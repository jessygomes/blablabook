// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */

// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [new URL('https://covers.openlibrary.org/b/id/**')],
  },
  webpack: (config, context) => {
    if(process.env.NEXT_WEBPACK_USEPOLLING) {
      config.watchOptions = {
        poll: 200,
        aggregateTimeout: 300
      }
    }
    return config
  },
}

module.exports = nextConfig
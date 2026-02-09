import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  ...(isVercel
    ? {}
    : {
        output: "export",
        basePath: "/todo",
      }),
};

export default nextConfig;

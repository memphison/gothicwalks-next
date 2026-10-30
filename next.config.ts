
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/jonita",
        destination: "/care?g=jonita",
        permanent: false,
      },
      {
        source: "/grem",
        destination: "/care?g=grem",
        permanent: false,
      },
      {
        source: "/leroy",
        destination: "/care?g=leroy",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

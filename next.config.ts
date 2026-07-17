import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Both CDNs already serve optimized, sized assets (Unsplash `auto=format`,
    // Wikimedia width buckets). Serving them directly avoids proxying every
    // image through the Next server.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

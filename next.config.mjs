/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Must be set to 'export' for static builds
  images: {
    unoptimized: true, // Required for static exports on GitHub Pages
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
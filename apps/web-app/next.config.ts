import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  output: 'export', // for static export, should disable on local development
  reactStrictMode: true,
  trailingSlash: true,
  transpilePackages: ['@collexworld/ui'],
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-avatar'],
  },
  images: {
    unoptimized: true,
  },
};

export default withBundleAnalyzer(nextConfig);

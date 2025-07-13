import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkgfm from "remark-gfm";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    optimizePackageImports: ['@mui/icons-material', '@mui/material']
  }
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkgfm],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig);

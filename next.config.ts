import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkgfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkgfm],
    rehypePlugins: [rehypeHighlight],
  },
})

export default withMDX(nextConfig);

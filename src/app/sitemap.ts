import { getBlogPosts } from '@/app/blog/utils';

export const baseUrl = 'https://kreivi.github.io';

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.data.slug}`,
    lastModified: post.data.modified ? post.data.modified : post.data.created,
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}

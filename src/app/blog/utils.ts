import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { AuthorMetadata, getAuthorsByNames } from "../_author/utils";
import { getTagsByNames, TagMetadata } from "../_tag/utils";
import { compileMDX, getMDXFiles, readMDXFile } from "@/lib/markdownUtils";
import { ComponentType } from "react";


const blogsDirectory = path.join(process.cwd(), "content", "blog");

const blogsCache = Array<BlogPost>();

export type BlogPost = {
    data: BlogPostMetadata;
    content: string;
}

export type RenderedBlogPost = {
    data: BlogPostMetadata;
    Content: ComponentType;
}

export type BlogPostMetadata = {
    slug: string;
    title: string;
    authors: AuthorMetadata[];
    created: Date;
    modified?: Date;
    overview: string;
    tags: TagMetadata[];
};

function matterDataToBlogPostMetadata(matterData: any, filePath: string): BlogPostMetadata {
    return {
        slug: path.basename(filePath, path.extname(filePath)),
        title: matterData.title,
        authors: getAuthorsByNames(matterData.authors),
        created: new Date(matterData.created),
        modified: matterData.modified ? new Date(matterData.modified) : undefined,
        overview: matterData.overview,
        tags: getTagsByNames(matterData.tags),
    };
}

export function getBlogBySlug(slug: string): BlogPost | null {
    const filePath = path.join(blogsDirectory, `${slug}.mdx`);
    const matterResult = readMDXFile(filePath);
    return {
        data: matterDataToBlogPostMetadata(matterResult.data, filePath),
        content: matterResult.content,
    }
}

export async function getRenderedBlogBySlug(slug: string): Promise<RenderedBlogPost | null> {
    const blogPost = getBlogBySlug(slug);
    if (!blogPost) return null;
    
    const Content = await compileMDX(blogPost.content);
    
    return {
        data: blogPost.data,
        Content
    };
}

export function getBlogPosts(): BlogPost[] {
    // if (blogsCache && blogsCache.length > 0) {
    //     return blogsCache;
    // }
    // Read all markdown files
    const files = getMDXFiles(blogsDirectory);
    const posts = files.map(file => {
        const fullPath = path.join(blogsDirectory, file);
        const matterResult = readMDXFile(fullPath);
        return {
            data: matterDataToBlogPostMetadata(matterResult.data, fullPath),
            content: matterResult.content,
        } as BlogPost;
    });

    // Sort posts by date
    const sortedPosts = posts.sort((a, b) => b.data.created.getTime() - a.data.created.getTime());
    blogsCache.push(...sortedPosts);
    return sortedPosts;
}


import fs from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';
import { ComponentType } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/mdx-components';
import remarkGfm from 'remark-gfm';


/** Returns all .mdx files in a directory */
export function getMDXFiles(directory: string): string[] {
    if (!fs.existsSync(directory)) {
        return [];
    }
    return fs.readdirSync(directory).filter(file => file.endsWith('.mdx'));
}

/** Reads an MDX file from file and returns it as GrayMatterFile */
export function readMDXFile(filePath: string): GrayMatterFile<string> {
    let rawContent = '';
    if (fs.existsSync(filePath)) {
        rawContent = fs.readFileSync(filePath, 'utf-8');
    }
    return matter(rawContent);
}

// Function to create a component for MDX content using next-mdx-remote
export async function compileMDX(source: string): Promise<ComponentType> {
    // Create a component that renders MDX content with same custom components NextJS uses
    const MDXContent = () => {
        return (
            <MDXRemote
                source={source}
                components={useMDXComponents({})}
                options={{
                    mdxOptions: {
                        remarkPlugins: [remarkGfm],
                        rehypePlugins: [],
                    },
                }}
            />
        );
    };

    return MDXContent;
}

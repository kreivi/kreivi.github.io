import path from "path";
import matter from "gray-matter";
import { getMDXFiles, readMDXFile } from "@/lib/markdownUtils";

const tagsDirectory = path.join(process.cwd(), "content", "meta", "tag");

export type TagMetadata = {
    name: string;
};

export function getTags(): TagMetadata[] {
    const files = getMDXFiles(tagsDirectory);
    const tags = files.map(file => {
        const fullPath = path.join(tagsDirectory, file);
        const matterResult = matter(readMDXFile(fullPath));
        const matterData = matterResult.data as {
            name: string;
        };
        return matterData;
    });
    return tags;
}

export function getTagByName(name: string): TagMetadata | undefined {
    return getTags().find(tag => tag.name === name);
}

export function getTagsByNames(names: string[]): TagMetadata[] {
    return getTags().filter(tag => names.includes(tag.name));
}
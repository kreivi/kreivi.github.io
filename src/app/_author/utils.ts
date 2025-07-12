import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getMDXFiles, readMDXFile } from "@/lib/markdownUtils";

const authorsDirectory = path.join(process.cwd(), "content", "meta", "author");

export type AuthorMetadata = {
    name: string;
    firstName?: string;
    lastName?: string;
    bio?: string;
    image?: string;
}

export function getAuthors(): AuthorMetadata[] {
    const files = getMDXFiles(authorsDirectory);
    const authors = files.map(file => {
        const fullPath = path.join(authorsDirectory, file);
        const matterResult = readMDXFile(fullPath);
        const matterData = matterResult.data as {
            name: string;
            firstName?: string;
            lastName?: string;
            bio?: string;
            image?: string;
        };
        matterData.image = matterData.image ? new URL(matterData.image, `file://${fullPath}`).toString() : undefined;
        return matterData;
    });
    return authors;
}

export function getAuthorByName(name: string): AuthorMetadata | undefined {
    return getAuthors().find(author => author.name === name);
}

export function getAuthorsByNames(names: string[]): AuthorMetadata[] {
    return getAuthors().filter(author => names.includes(author.name));
}
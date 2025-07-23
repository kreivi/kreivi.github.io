import React from "react";
import { List, Divider } from "@mui/material";
import BlogPostListItem, { BlogPostFrontmatter } from "../BlogPostListItem";
import { graphql, useStaticQuery } from "gatsby";

type BlogPostEntry = {
    id: string;
    name: string;
    overview: string;
    authors: string[];
    tags: string[];
    created: string;
    modified?: string;
    slug: string;
}

export default function BlogPostList() {
    const {
        allBlog: { nodes },
    } = useStaticQuery(graphql`
    query allBlogsQuery {
      allBlog(
        sort: { created: DESC }
      ) {
        nodes {
          id
          name
          overview
          authors
          tags
          created
          modified
          slug
        }
      }
    }
  `);

    return (
        <List>
            {nodes.map((node: BlogPostEntry) => (
                <React.Fragment key={node.id}>
                    <BlogPostListItem 
                        id={node.id}
                        name={node.name}
                        overview={node.overview}
                        authors={node.authors}
                        tags={node.tags}
                        created={node.created}
                        modified={node.modified}
                        slug={node.slug}
                    />
                    <Divider component="li" />
                </React.Fragment>
            ))}
        </List>
    );
}
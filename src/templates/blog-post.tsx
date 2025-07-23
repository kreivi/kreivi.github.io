import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/Layout";
import { Box, Chip, Divider, Paper, Tooltip, Typography } from "@mui/material";
import DateComponent from "../components/Date";


interface BlogPostTemplateProps {
  data: {
    blog: {
      id: string;
      name: string;
      image: string;
      slug: string;
      created: string;
      modified: string;
      overview: string;
      authors: string[];
      tags: string[];
      authorNodes: Array<{
        id: string;
        name: string;
        slug: string;
      }>;
      tagNodes: Array<{
        id: string;
        name: string;
        slug: string;
      }>;
      mdx: {
        id: string;
        frontmatter: {
          name: string;
          image: string;
          created: string;
          modified: string;
          overview: string;
          authors: string[];
          tags: string[];
        };
      };
    };
  };
  children: React.ReactNode;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data, children }) => {
  const { blog } = data;

  return (
    <Layout>
      <article>

        <Box component="header" sx={{ borderLeft: 4, borderRight: 4, borderRadius: 0, borderColor: 'primary.main', paddingX: 2, marginTop: 3, paddingBottom: 2 }}>
          <Typography variant="h1">{blog.name}</Typography>
          <Divider variant="fullWidth" sx={{ marginY: 1 }} />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
              <Typography variant="caption">Created:</Typography>
              <DateComponent dateString={blog.created} />
            </Box>
            {blog.modified && (
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Typography variant="caption" sx={{ fontStyle: 'italic' }}>Modified:</Typography>
                <DateComponent dateString={blog.modified} />
              </Box>
            )}
          </Box>
          <Typography variant="subtitle1">{blog.overview}</Typography>
          {blog.image && (
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
              <img
                src={`/${blog.image}`}
                alt={blog.name}
                style={{ width: 'auto', height: '200px'}}
              />
            </Box>
          )}
        </Box>
        <Paper component="main" elevation={3} sx={{ borderRadius: 0, padding: 2 }}>
          <MDXProvider>
            {children}
          </MDXProvider>
        </Paper>
        <Box component="footer" sx={{ borderLeft: 4, borderRight: 4, borderRadius: 0, borderColor: 'primary.main', padding: 2, marginBottom: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography variant="h6" component="h1">Authors:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {blog.authorNodes.map((author) => (
                <Tooltip key={author.id} title={author.name}>
                  <Chip sx={{ backgroundColor: "primary.main", color: "inherit", alignSelf: "center" }} label={author.name} size="medium" />
                </Tooltip>
              ))}
            </Box>
          </Box>
          <Divider variant="fullWidth" sx={{ marginY: 1 }} />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography variant="caption">Tags:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {blog.tagNodes.map((tag) => (
                <Chip key={tag.id} label={tag.name} size="small" />
              ))}
            </Box>
          </Box>
        </Box>

      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($id: String!) {
    blog(id: { eq: $id }) {
      id
      name
      image
      slug
      created
      modified
      overview
      authors
      tags
      authorNodes {
        id
        name
        slug
      }
      tagNodes {
        id
        name
        slug
      }
      mdx {
        id
        frontmatter {
          name
          image
          created
          modified
          overview
          authors
          tags
        }
      }
    }
  }
`;

export default BlogPostTemplate;

export const Head = ({ data }: { data: BlogPostTemplateProps['data'] }) => {
  const { blog } = data;
  return (
    <>
      <title>{blog.name}</title>
      <meta name="description" content={blog.overview} />
      <meta property="og:title" content={blog.name} />
      <meta property="og:description" content={blog.overview} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://kreivi.github.io/blog/${blog.slug}`} />
      <meta property="twitter:card" content="summary_large_image" />
      {blog.image && <meta property="og:image" content={`https://kreivi.github.io/assets/images/${blog.image}`} />}
      <link rel="canonical" href={`https://kreivi.github.io/blog/${blog.slug}`} />
    </>
  );
}

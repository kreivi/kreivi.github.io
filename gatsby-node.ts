import slugify from "@sindresorhus/slugify";
import path from "path";
import type { CreateNodeArgs, CreateSchemaCustomizationArgs, CreatePagesArgs } from "gatsby";


export const onCreateNode = ({ node, actions, createNodeId, createContentDigest }: CreateNodeArgs) => {
  const { createNodeField, createNode } = actions
  
  if (node.internal.type === `Mdx`) {
    const frontmatter = node.frontmatter as any;
    
    createNodeField({
      node,
      name: `slug`,
      value: `/${slugify(frontmatter.name)}`
    })

    // Determine the type based on file path
    const filePath = node.internal.contentFilePath || (node as any).fileAbsolutePath;
    const relativePath = path.relative(process.cwd(), filePath as string);
    
    if (relativePath.startsWith('content/blogs/')) {
      // Create Blog node
      const blogSlug = `/blog/${slugify(frontmatter.name)}`;
      
      const blogNode = {
        id: createNodeId(`Blog-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Blog',
          contentDigest: createContentDigest({
            name: frontmatter.name,
            image: frontmatter.image,
            authors: frontmatter.authors,
            created: frontmatter.created,
            modified: frontmatter.modified,
            overview: frontmatter.overview,
            tags: frontmatter.tags,
            slug: blogSlug,
            mdxId: node.id
          })
        },
        name: frontmatter.name,
        image: frontmatter.image,
        authors: frontmatter.authors || [],
        created: frontmatter.created,
        modified: frontmatter.modified,
        overview: frontmatter.overview,
        tags: frontmatter.tags || [],
        slug: blogSlug,
        mdx: node.id
      }
      createNode(blogNode)
    } else if (relativePath.startsWith('content/meta/authors/')) {
      // Create Author node
      const authorNode = {
        id: createNodeId(`Author-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Author',
          contentDigest: createContentDigest({
            name: frontmatter.name,
            firstName: frontmatter.firstName,
            lastName: frontmatter.lastName,
            bio: frontmatter.bio,
            image: frontmatter.image,
            slug: `/${slugify(frontmatter.name)}`,
            mdxId: node.id
          })
        },
        name: frontmatter.name,
        firstName: frontmatter.firstName,
        lastName: frontmatter.lastName,
        bio: frontmatter.bio,
        image: frontmatter.image,
        slug: `/${slugify(frontmatter.name)}`,
        mdx: node.id
      }
      createNode(authorNode)
    } else if (relativePath.startsWith('content/meta/tags/')) {
      // Create Tag node
      const tagNode = {
        id: createNodeId(`Tag-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'Tag',
          contentDigest: createContentDigest({
            name: frontmatter.name,
            slug: `/${slugify(frontmatter.name)}`,
            mdxId: node.id
          })
        },
        name: frontmatter.name,
        slug: `/${slugify(frontmatter.name)}`,
        mdx: node.id
      }
      createNode(tagNode)
    }
  }
}

export const createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
  const { createTypes } = actions

  const typeDefs = `
    type Blog implements Node {
      id: ID!
      name: String!
      authors: [String!]!
      created: Date @dateformat
      modified: Date @dateformat
      image: String
      overview: String
      tags: [String!]!
      slug: String!
      mdx: Mdx @link(by: "id")
      authorNodes: [Author] @link(by: "name", from: "authors")
      tagNodes: [Tag] @link(by: "name", from: "tags")
    }

    type Author implements Node {
      id: ID!
      name: String!
      firstName: String
      lastName: String
      image: String
      bio: String
      slug: String!
      mdx: Mdx @link(by: "id")
      blogs: [Blog] @link(by: "authors", from: "name")
    }

    type Tag implements Node {
      id: ID!
      name: String!
      slug: String!
      mdx: Mdx @link(by: "id")
      blogs: [Blog] @link(by: "tags", from: "name")
    }
  `

  createTypes(typeDefs)
}

export const createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
  const { createPage } = actions

  // Query for blog posts using the new Blog node type
  const blogResult = await graphql(`
    query getAllBlogs {
      allBlog {
        nodes {
          id
          slug
          name
          mdx {
            id
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (blogResult.errors) {
    reporter.panicOnBuild('Error loading Blog result', blogResult.errors)
  }

  // Create blog post pages
  const blogs = (blogResult.data as any).allBlog.nodes
  blogs.forEach((blog: any) => {
    createPage({
      path: blog.slug,
      // Use the blog post template
      component: `${__dirname}/src/templates/blog-post.tsx?__contentFilePath=${blog.mdx.internal.contentFilePath}`,
      context: { 
        id: blog.id,
        mdxId: blog.mdx.id
      },
    })
  })

  // Query for authors
  const authorResult = await graphql(`
    query getAllAuthors {
      allAuthor {
        nodes {
          id
          slug
          name
        }
      }
    }
  `)

  if (authorResult.errors) {
    reporter.panicOnBuild('Error loading Author result', authorResult.errors)
  }

  // Create author pages (if needed)
  // const authors = authorResult.data.allAuthor.nodes
  // authors.forEach(author => {
  //   createPage({
  //     path: `/authors${author.slug}`,
  //     component: path.resolve(`./src/templates/author.tsx`),
  //     context: { id: author.id },
  //   })
  // })

  // Query for tags
  const tagResult = await graphql(`
    query getAllTags {
      allTag {
        nodes {
          id
          slug
          name
        }
      }
    }
  `)

  if (tagResult.errors) {
    reporter.panicOnBuild('Error loading Tag result', tagResult.errors)
  }

  // Create tag pages (if needed)
  // const tags = tagResult.data.allTag.nodes
  // tags.forEach(tag => {
  //   createPage({
  //     path: `/tags${tag.slug}`,
  //     component: path.resolve(`./src/templates/tag.tsx`),
  //     context: { id: tag.id },
  //   })
  // })
}
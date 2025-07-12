import { getBlogBySlug, getBlogPosts, getRenderedBlogBySlug } from "@/app/blog/utils"
import { baseUrl } from "@/app/sitemap";
import { Box, Container, Divider, Paper, Typography, Chip } from "@mui/material";

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = await getRenderedBlogBySlug(slug);
    if (!blog) {
        return <Typography color="error">Blog post not found</Typography>;
    }

    const { Content } = blog;

    return (
        <Container maxWidth="lg">
            <Box color="inherit" sx={{ borderLeft: 4, borderRight: 4, borderColor: 'primary.main', paddingX: 2 }}>
                <Typography variant="h1">{blog.data.title}</Typography>
                <Typography variant="h6" color="textSecondary">
                    {blog.data.overview}
                </Typography>
                <Box display={"flex"} flexDirection="row" justifyContent="flex-end" alignItems="center" marginY={2}>
                    <Typography variant="subtitle1" color="textSecondary" justifySelf={"flex-end"} sx={{ marginX: 1}}>
                        {new Date(blog.data.created).toLocaleDateString()}
                    </Typography>
                    {blog.data.authors.map((author, index) => (
                        <Chip key={author.name} label={author.name} size="small" color="primary" />
                    ))}
                </Box>
                <Box display="flex" flexWrap="wrap" justifyContent="flex-end" marginY={1}>
                    {blog.data.tags.map((tag, index) => (
                        <Chip key={tag.name} label={tag.name} size="small" sx={{ marginRight: 1, marginBottom: 1 }} />
                    ))}
                </Box>
                <Divider sx={{ marginY: 2 }} />
            </Box>
            <Paper elevation={3} sx={{ paddingX: 6, paddingY: 3 }}>
                <div className="blog-content">
                    <Content />
                </div>
            </Paper>
        </Container>
    )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);
    if (!blog) {
        return {};
    }
    const ogImage = `${baseUrl}/og?title=${encodeURIComponent(blog.data.title)}`;
    return {
        title: blog.data.title,
        description: blog.data.overview,
        openGraph: {
            title: blog.data.title,
            description: blog.data.overview,
            type: 'article',
            publishedTime: blog.data.created.toISOString(),
            url: `${baseUrl}/blog/${blog.data.slug}`,
            images: [ogImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.data.title,
            description: blog.data.overview,
            images: [ogImage],
        },
    }
}

export async function generateStaticParams() {
    const blogs = getBlogPosts();
    return blogs.map(blog => ({
        slug: blog.data.slug,
    }));
}

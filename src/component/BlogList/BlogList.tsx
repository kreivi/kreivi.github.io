import { getBlogPosts } from "@/app/blog/utils";
import { Divider, List, Typography } from "@mui/material";
import BlogListItem from "../BlogListItem";

export default function BlogsList() {
    const allBlogs = getBlogPosts();
    if (!allBlogs || allBlogs.length === 0) {
        return <Typography variant="h6" component="p" align="center">No blogs available.</Typography>;
    }
    return (
        <List>
            {allBlogs.map((blog) => (
                <div key={blog.data.slug}>
                    <BlogListItem key={blog.data.title} blog={blog.data} />
                    <Divider component="li" />
                </div>
            ))}
        </List>
    );
}

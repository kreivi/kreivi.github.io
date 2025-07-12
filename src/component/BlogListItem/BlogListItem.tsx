import { BlogPostMetadata } from "@/app/blog/utils";
import { Avatar, Chip, Grid, ListItem, ListItemButton, ListItemText, Tooltip, Typography } from "@mui/material";

interface BlogListItemProps {
    blog: BlogPostMetadata;
}

export default function BlogListItem({ blog }: BlogListItemProps) {
    return (
        <ListItem sx={{ backgroundColor: "background.paper", marginY: 1, }}>
            <ListItemButton component="a" href={`/blog/${blog.slug}`}>
                <Grid container direction={"column"} sx={{ width: "100%" }}>
                    <Grid>
                        <Typography variant="h3">
                            {blog.title}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography color="textSecondary">
                            {blog.overview}
                        </Typography>
                    </Grid>
                    <Grid container spacing={1} direction={"row"} justifyContent="flex-end" size={12}>
                        {blog.tags.map((tag, index) => (
                            <Chip key={tag.name} label={tag.name} size="small"/>
                        ))}
                        <Typography variant="body2" color="textSecondary" alignSelf="center">
                            <Tooltip title={new Date(blog.created).toLocaleString()}>
                                <span>{new Date(blog.created).toLocaleDateString()}</span>
                            </Tooltip>
                        </Typography>
                        {blog.authors.map((author, index) => (
                           <Tooltip key={author.name} title={author.name}>
                               <Avatar sx={{ backgroundColor: "primary.main", width: 24, height: 24, fontSize: 12, alignSelf: "center" }}>{author.name.charAt(0).toUpperCase()}</Avatar>
                           </Tooltip>
                        ))}
                    </Grid>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
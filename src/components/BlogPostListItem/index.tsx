import React from "react";
import { ListItem, ListItemButton, Grid, Typography, Chip, Tooltip, Avatar } from "@mui/material";
import DateComponent from "../Date";

export type BlogPostFrontmatter = {
    name: string;
    overview: string;
    authors: string[];
    tags: string[];
    created: string;
    modified?: string;
    slug: string;
}

type BlogPostListItemProps = {
    id: string;
    name: string;
    overview: string;
    authors: string[];
    tags: string[];
    created: string;
    modified?: string;
    slug: string;
};

export default function BlogPostListItem({
    id,
    name,
    overview,
    authors,
    tags,
    created,
    modified,
    slug
}: BlogPostListItemProps) {
    return (
        <ListItem sx={{ backgroundColor: "background.paper", marginY: 1, }}>
            <ListItemButton component="a" href={slug}>
                <Grid container direction={"column"} sx={{ width: "100%" }}>
                    <Grid>
                        <Typography variant="h3">
                            {name}
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography color="textSecondary">
                            {overview}
                        </Typography>
                    </Grid>
                    <Grid container spacing={1} direction={"row"} justifyContent="flex-end" size={12}>
                        {tags.map((tag) => (
                            <Chip key={tag} label={tag} size="small" />
                        ))}
                        <DateComponent dateString={created} />
                        {authors.map((author) => (
                            <Tooltip key={author} title={author}>
                                <Avatar sx={{ backgroundColor: "primary.main", width: 24, height: 24, fontSize: 12, alignSelf: "center" }}>{author.charAt(0).toUpperCase()}</Avatar>
                            </Tooltip>
                        ))}
                    </Grid>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
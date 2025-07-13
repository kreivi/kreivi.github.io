'use client';
import { Mastodon } from "mdi-material-ui";
import { IconButton, Link, Tooltip } from "@mui/material";

export default function MastodonLink() {
    return (
        <Tooltip title="Mastodon">
            <IconButton
                component={Link}
                href="https://mastodon.gamedev.place/@kreivi"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="Mastodon"
                size="large"
            >
                <Mastodon />
            </IconButton>
        </Tooltip>
    )
};
'use client';
import { YouTube } from "@mui/icons-material";
import { IconButton, Link, Tooltip } from "@mui/material";

export default function YouTubeLink() {
    return (
        <Tooltip title="YouTube">
            <IconButton
                component={Link}
                href="https://www.youtube.com/channel/UCnBgkNXb-9QKU7a4xyc4pHw/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="YouTube"
                size="large"
            >
                <YouTube />
            </IconButton>
        </Tooltip>
    )
};
import { GitHub } from "@mui/icons-material";
import { IconButton, Link, Tooltip } from "@mui/material";

export default function GithubLink() {
    return (
        <Tooltip title="GitHub">
            <IconButton
                component={Link}
                href="https://github.com/kreivi"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                aria-label="GitHub"
                size="large"
            >
                <GitHub />
            </IconButton>
        </Tooltip>
    )
};
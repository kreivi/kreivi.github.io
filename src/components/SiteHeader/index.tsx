import React from "react";
import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import ColorSchemeToggle from "../ColorSchemeToggle";
import { HomeFilled } from "@mui/icons-material";

export default function SiteHeader() {
    return (
        <AppBar color="inherit" component="header" position="fixed">
                <Toolbar disableGutters sx={{ paddingX: 6 }}>
                    <Link color="primary" variant="h4" noWrap href="/" sx={{ textDecoration: "none" }}><HomeFilled /></Link>
                    <Typography
                        component="h1"
                        variant="h6"
                        noWrap
                        flexGrow={1}
                        textTransform={'uppercase'}
                        sx={{ marginLeft: 2 }}>
                        Development blog
                    </Typography>
                    <Box component="nav" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }} />
                    <ColorSchemeToggle />
                </Toolbar>
        </AppBar>
    );

};
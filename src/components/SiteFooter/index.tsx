import React from "react";
import { AppBar, Typography, Container, Box } from "@mui/material";
import Social from "../Social";

export default function SiteFooter() {
    return (
        <AppBar color="inherit" component="footer" position="relative">
            <Box sx={{ px: 6 }}>
                <Social />
                <Typography gutterBottom>&copy; {new Date().getFullYear()} Severi Vidnäs</Typography>
            </Box>
        </AppBar>
    )
};
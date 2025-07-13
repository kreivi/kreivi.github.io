import { AppBar, Typography, Box } from "@mui/material";
import Social from "@/component/Social";

export default function SiteFooter() {
    return (
        <AppBar color="inherit" component="footer" position="relative">
            <Box sx={{ paddingY: 2, paddingX: 6}}>
                <Social />
                <Typography>&copy; {new Date().getFullYear()} Severi Vidnäs</Typography>
            </Box>
        </AppBar>
    )
};
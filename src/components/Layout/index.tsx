import { Container, Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

import Header from "../SiteHeader";
import Footer from "../SiteFooter";


/**
 * Root layout of the site.
 * @param props component properties
 * @returns Layout element
 */
export default function Layout({ children }: PropsWithChildren) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header />
            <Container
                maxWidth="lg"
                component="main"
                sx={{
                    justifyContent: "center",
                    marginTop: 8,
                    marginBottom: 2,
                    flexGrow: 1,
                }}

            >
                {children}
            </Container>
            <Footer />
        </Box>
    );
};

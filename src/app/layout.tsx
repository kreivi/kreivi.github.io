import SiteFooter from "@/component/SiteFooter";
import SiteHeader from "@/component/SiteHeader";
import { Box, CssBaseline, InitColorSchemeScript } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Open_Sans, Space_Mono } from "next/font/google";
import { baseUrl } from "./sitemap";
import theme from './theme';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Development Blog',
    template: '%s | Development Blog',
  },
  icons: {
    icon: '/icon.png',
  },
  description: 'Development blog site.',
  openGraph: {
    title: 'Development Blog',
    description: 'Development blog site.',
    url: baseUrl,
    siteName: 'Development Blog',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} defaultMode="system">
            <InitColorSchemeScript attribute="class" defaultMode="system"/>
            <CssBaseline />
            <Box 
              sx={{ 
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <SiteHeader />
              <Box 
                component="main" 
                sx={{ 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  mt: 10,
                  mb: 10,
                }}
              >
                {children}
              </Box>
              <SiteFooter />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}


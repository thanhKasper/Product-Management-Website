import "./globals.css";
import { Providers } from "./providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "L&F",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}

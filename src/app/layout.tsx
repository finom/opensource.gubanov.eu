import "@fontsource/raleway/400.css";
import "@fontsource/raleway/900.css";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.author, url: site.authorUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.title,
    title: site.title,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.title, type: "image/png" }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

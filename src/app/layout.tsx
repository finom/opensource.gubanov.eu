import "@fontsource/raleway/400.css";
import "@fontsource/raleway/900.css";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { getStats } from "@/lib/stats";

export async function generateMetadata(): Promise<Metadata> {
  const { totalStars, totalDownloads } = await getStats();
  // LinkedIn and others cache an image by its URL; a new URL for new numbers makes them fetch it again.
  const image = `/og.png?v=${totalStars}-${totalDownloads}`;
  return {
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
      images: [{ url: image, width: 1200, height: 630, alt: site.title, type: "image/png" }],
    },
    twitter: { card: "summary_large_image", title: site.title, description: site.description, images: [image] },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

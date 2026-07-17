import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3004";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", base).toString();

  return {
    metadataBase: base,
    title: {
      default: "Madan Park — Five Rooms, One History",
      template: "%s",
    },
    description:
      "Five audience-specific portfolio versions for Madan Park, spanning founder operations, creative technology, institutional modernization, writing, and inspectable AI systems.",
    applicationName: "Madan Park — Five Lenses",
    authors: [{ name: "Madan Chaolla Park", url: "https://github.com/MadanChaollaPark" }],
    creator: "Madan Chaolla Park",
    icons: {
      icon: [{ url: "/favicon.ico" }, { url: "/favicon.svg", type: "image/svg+xml" }],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      title: "Madan Park — Five Rooms, One History",
      description:
        "One history, rewritten for five audiences through five genuinely different portfolio worlds.",
      images: [{ url: socialImage, width: 1536, height: 1024, alt: "Madan Park — Five Rooms, One History" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Madan Park — Five Rooms, One History",
      description: "Five audience-specific portfolio worlds. One evidence-backed history.",
      images: [socialImage],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Madan Chaolla Park",
              alternateName: "Madan Park",
              url: "https://madanpark.com/",
              email: "mailto:chaollapark@gmail.com",
              sameAs: [
                "https://github.com/MadanChaollaPark",
                "https://www.linkedin.com/in/madanpark",
              ],
              knowsAbout: [
                "AI product systems",
                "European public affairs",
                "public data",
                "institutional archives",
                "agent runtimes",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

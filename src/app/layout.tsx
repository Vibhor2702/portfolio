import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-body",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibhor-portfolio.pages.dev"),
  title: "Vibhor Srivastava | ML Engineer & Full-Stack Builder",
  description:
     "Secure-Tech portfolio — Vibhor Srivastava builds ML systems, backend APIs, and full-stack products end-to-end.",
  applicationName: "Vibhor Srivastava Portfolio",
  keywords: [
    "Vibhor Srivastava",
    "ML Engineer",
    "Software Developer",
    "Full-Stack Builder",
    "Portfolio",
    "Next.js",
  ],
  authors: [{ name: "Vibhor Srivastava" }],
  creator: "Vibhor Srivastava",
  openGraph: {
    title: "Vibhor Srivastava | ML Engineer & Full-Stack Builder",
    description:
      "I build intelligent systems and ship products end-to-end.",
    type: "website",
    url: "https://vibhor-portfolio.pages.dev",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Vibhor Srivastava portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibhor Srivastava | ML Engineer & Full-Stack Builder",
    description:
      "I build intelligent systems and ship products end-to-end.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#080c10",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

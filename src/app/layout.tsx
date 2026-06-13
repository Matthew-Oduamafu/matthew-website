import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Matthew Oduamafu | Mechatronics Engineer & Tech Entrepreneur",
  description: "MSc Mechatronics Engineer, Software Architect, and Founder of Verdiq Ltd. Building AI-powered agricultural solutions to revolutionize farming across Africa. 4+ years in software engineering with expertise in robotics, IoT, and cloud systems.",
  keywords: [
    "Matthew Oduamafu",
    "Mechatronics Engineer",
    "Software Engineer",
    "Agritech",
    "Verdiq",
    "AI Agriculture",
    "IoT Farming",
    "Robotics",
    "Ghana Technology",
    "African Innovation",
    "Smart Farming",
    "Agricultural Technology",
    "Ashesi University",
    "KNUST",
    "Software Architecture"
  ],
  authors: [{ name: "Matthew Emmanuel Oduamafu" }],
  creator: "Matthew Emmanuel Oduamafu",
  openGraph: {
    type: "website",
    url: "https://matthewoduamafu.com/",
    title: "Matthew Oduamafu | Mechatronics Engineer & Tech Entrepreneur",
    description: "Building the future of agriculture through AI, robotics, and IoT. Founder of Verdiq Ltd, pioneering smart farming solutions across Africa.",
    images: [
      {
        url: "https://raw.githubusercontent.com/Matthew-Oduamafu/personal-website-1/refs/heads/main/img/Matthew_Headshot.png",
        width: 1200,
        height: 630,
        alt: "Matthew Oduamafu Portfolio Header",
      }
    ],
    siteName: "Matthew Oduamafu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Oduamafu | Mechatronics Engineer & Tech Entrepreneur",
    description: "Building the future of agriculture through AI, robotics, and IoT. Founder of Verdiq Ltd, pioneering smart farming solutions across Africa.",
    images: ["https://raw.githubusercontent.com/Matthew-Oduamafu/personal-website-1/refs/heads/main/img/Matthew_Headshot.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/favicon/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { rel: "icon", url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ]
  },
  manifest: "/favicon/manifest.json",
  other: {
    "msapplication-TileColor": "#2563eb",
    "msapplication-TileImage": "/favicon/ms-icon-144x144.png",
    "msapplication-config": "/favicon/browserconfig.xml",
    "theme-color": "#2563eb",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

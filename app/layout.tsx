import type { Metadata } from "next";
import CursorDot from "@/components/CursorDot";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://moh-portfolio-seven.vercel.app"),
  title: {
    default: "Muhammed Abdulwahab — AI Automation & Full-Stack Systems Builder",
    template: "%s · Muhammed Abdulwahab",
  },
  description:
    "Muhammed Abdulwahab designs and builds automation, AI integrations, and full-stack systems that turn manual business operations into working software.",
  openGraph: {
    title: "Muhammed Abdulwahab — AI Automation & Full-Stack Systems Builder",
    description: "I build systems that turn complex business processes into simple software.",
    type: "website",
    images: ["/og-cover.png"],
  },
};

export const viewport = {
  themeColor: "#e2461c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Inter:wght@400;500;600;650;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgress />
        <CursorDot />
        {children}
      </body>
    </html>
  );
}

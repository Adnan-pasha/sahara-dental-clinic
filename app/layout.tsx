import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { CtaStrip, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { buildMetadata } from "@/lib/seo";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "Sahara Dental Care",
  description:
    "Dental clinic in Doddaballapur offering braces, aligners, implants, root canal treatment, pediatric dentistry, TMJ care, and smile makeover planning.",
  path: "/"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <SiteHeader />
        {children}
        <CtaStrip />
        <SiteFooter />
      </body>
    </html>
  );
}

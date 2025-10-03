import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Xeven SaaS — AI-powered platform for smarter teamwork",
  description: "Xeven SaaS delivers AI-assisted workflows, seamless collaboration, and powerful analytics—empower your team to move faster, ship confidently, and scale.",
  keywords: ["xeven", "saas", "ai", "team collaboration", "workflow automation", "analytics", "pricing", "signup"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Xeven SaaS — AI-powered platform for smarter teamwork",
    description: "Xeven SaaS delivers AI-assisted workflows, seamless collaboration, and powerful analytics—empower your team to move faster, ship confidently, and scale.",
    type: "website",
    url: "/",
    siteName: "Xeven",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-x-1759396325412-c34a8567.jpg", width: 1200, height: 630, alt: "Xeven SaaS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xeven SaaS — AI-powered platform for smarter teamwork",
    description: "Xeven SaaS delivers AI-assisted workflows, seamless collaboration, and powerful analytics—empower your team to move faster, ship confidently, and scale.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32Sjpo9ZLWlVS5JxRw9EagJf0Fo/design-a-simple-high-contrast-logo-for-x-1759396325412-c34a8567.jpg" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
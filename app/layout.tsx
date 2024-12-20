import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Duy Tin dev",
  description: "Duy Tin's personal website",
  metadataBase: new URL("https://www.duytin.works/"),
  openGraph: {
    title: "Duy Tin Dev",
    description:
      "Explore Duy Tin's personal website with projects, blogs, and insights.",
    siteName: "Duy Tin Dev",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Duy Tin Dev Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}

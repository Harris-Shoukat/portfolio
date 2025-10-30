import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio of my work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

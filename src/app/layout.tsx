import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import SplashScreen from "./components/SplashScreen";

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
      <body>
        <SplashScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

"use client";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/footer/Footer";


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
        <Footer />
      </body>
    </html>
  );
}

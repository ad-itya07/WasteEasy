"use client";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "../globals.css";

import Navbar from "@/components/shared/Navbar";
import MobileNavbar from "@/components/shared/MobileNavbar";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on the client side
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-black min-h-screen m-auto`}
      >
        <Toaster position="top-left" />
        <NextTopLoader
          color="#008000"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          easing="ease"
          speed={200}
          zIndex={1600}
          showAtBottom={false}
        />

        <div className="flex flex-col h-screen overflow-hidden">
          {/* Navbar stays at the top */}
          {isMobile ? <MobileNavbar /> : <Navbar />}
          <main className="flex-1 h-full overflow-y-auto bg-gray-100">
            {children}
          </main>
        </div>
        {/* {isMobile ? <MobileNavbar /> : <Navbar />} */}
        {/* {children} */}
      </body>
    </html>
  );
}

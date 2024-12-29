import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import MobileNavbar from "@/components/shared/MobileNavbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Waste-ease",
    manifest: "/manifest.json",
    icons: { apple: "/wastelogo.png" },
    description: "Waste-ease for Simplified your Waste Management",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-white text-black min-h-screen m-auto`}>
                <Toaster position="top-left" />
                <NextTopLoader color="#008000" initialPosition={0.08} crawlSpeed={200} height={3} crawl={true} easing="ease" speed={200} zIndex={1600} showAtBottom={false} />

                {/* <div className="hidden md:block">
                    <Navbar />
                </div>

                <div className="block md:hidden">
                    <MobileNavbar />
                </div> */}
                {children}
            </body>
        </html>
    );
}

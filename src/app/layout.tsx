import type { ReactNode } from "react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Zentrix',
  description: 'Marketing Services',
  // 👇 ADD THIS SECTION
  icons: {
    icon: '/images/so.png', // Path to your logo
    shortcut: '/images/so.png',
    apple: '/images/so.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">

        {/* NAV MAGIC CURSOR */}
        <div id="nav-magic-cursor"></div>

        <Navbar />

        <main className="relative z-0">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}

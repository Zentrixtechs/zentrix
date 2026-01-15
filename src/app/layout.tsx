import type { ReactNode } from "react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

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

import type { ReactNode } from "react";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Home from "./page";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* {children} */}
        <Home />
        <Footer />
      </body>
    </html>
  );
}

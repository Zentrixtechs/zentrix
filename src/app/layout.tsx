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
        <Home />
        <Footer />
      </body>
    </html>
  );
}


//children automatically renders all routes so if we just add an children route its enough 

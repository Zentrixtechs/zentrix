"use client";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* ================= TOP BAR ================= */}
      <div className="bg-orange-50 text-sm px-4 md:px-8 py-2 flex justify-between items-center border-b border-orange-200">
        <span>Looking for Marketing Services?</span>
        <Link
          href="/contact"
          className="bg-orange-500 text-white px-4 py-1 rounded-md font-medium"
        >
          Visit →
        </Link>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="relative shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/so.png" alt="Zentrix" width={28} height={38} />
            <span className="text-2xl font-bold">Zentrix</span>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about-us">About Us</NavLink>

            {/* SERVICES MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all hover:after:w-full">
                Services
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="fixed left-0 top-[120px] z-50 w-full bg-white shadow-2xl border-t">
  <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-5 gap-10">

                    <MenuColumn title="Digital Marketing">
                      <MenuItem label="Digital Marketing" />
                      <MenuItem label="Lead Generation" />
                    </MenuColumn>

                    <MenuColumn title="Websites Development">
                      <MenuItem label="Logo Design" />
                      <MenuItem label="Business Website Development" />
                    </MenuColumn>

                    <MenuColumn title="SEO">
                      <MenuItem label="Search Engine Optimization" />
                      <MenuItem label="AI SEO Services" />
                      <MenuItem label="Local SEO" />
                    </MenuColumn>

                    <MenuColumn title="Ads">
                      <MenuItem label="Google Ads" />
                      <MenuItem label="Meta Ads" />
                    </MenuColumn>

                    <MenuColumn title="Development">
                      <MenuItem label="IT Consultation" />
                      <MenuItem label="Web Portals" />
                      <MenuItem label="App Development" />
                      <MenuItem label="UI / UX Design" />
                      <MenuItem label="ERP Solutions" />
                    </MenuColumn>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/catalog">Catalog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* ================= CTA BUTTONS (DESKTOP) ================= */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg text-white font-medium hover:opacity-90"
              style={{ backgroundColor: "#F45BFF" }}
            >
              Free Consultation
            </Link>
            <Link
              href="tel:+16124702664"
              className="px-5 py-2 rounded-lg text-white font-medium hover:opacity-90"
              style={{ backgroundColor: "#22D3EE" }}
            >
              +1 612-470-2664
            </Link>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white shadow-lg">
            <div className="flex flex-col px-6 py-5 space-y-4 font-medium">
              <MobileLink href="/">Home</MobileLink>
              <MobileLink href="/about-us">About Us</MobileLink>
              <MobileLink href="/services">Services</MobileLink>
              <MobileLink href="/pricing">Pricing</MobileLink>
              <MobileLink href="/catalog">Catalog</MobileLink>
              <MobileLink href="/contact">Contact</MobileLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ================= HELPERS ================= */

function NavLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children }: any) {
  return <Link href={href}>{children}</Link>;
}

function MenuColumn({ title, children }: any) {
  return (
    <div>
      <h4 className="font-semibold mb-4 border-b-4 border-green-600 inline-block">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function MenuItem({ label }: { label: string }) {
  return <li className="cursor-pointer hover:text-green-700">{label}</li>;
}

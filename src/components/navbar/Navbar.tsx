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
              <button className="flex items-center gap-1 relative nav-pink-underline">
                Services
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {/* Dropdown */}
              <div
                className={`
      fixed left-0 top-[120px] w-full bg-white shadow-2xl border-t
      transition-all duration-300
      ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-3"}
    `}
              >
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
            </div>


            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/catalog">Catalog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* ================= CTA BUTTONS (DESKTOP) ================= */}
          <div className="hidden md:flex items-center gap-4">
            {/* Free Consultation */}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg text-white font-medium transition-all duration-300 bg-gradient-to-r from-[#F028C2] to-[#ED2189] hover:opacity-95 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(240,40,194,0.45)]"
            >
              Free Consultation
            </Link>

            {/* Phone */}
            <Link
              href="tel:+16124702664"
              className="px-5 py-2 rounded-lg text-white font-medium transition-all duration-300 bg-gradient-to-r from-[#0BF1FA] to-[#2D96EB] hover:opacity-95 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(11,241,250,0.45)]"
            >
              +1&nbsp;612-470-2664
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

/* Pink underline for main nav links */
function NavLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="
        relative inline-block text-gray-700 font-medium
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0
        after:bg-gradient-to-r after:from-[#F028C2] after:to-[#ED2189]
        after:transition-all after:duration-300
        hover:text-gray-900 hover:after:w-full
      "
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children }: any) {
  return <Link href={href}>{children}</Link>;
}

/* Menu Column heading - pink underline like footer */
function MenuColumn({ title, children }: any) {
  return (
    <div>
      <h4 className="font-semibold mb-4 border-b-4 border-[#F028C2] inline-block">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

/* Sub-items - blue underline on hover */
function MenuItem({ label }: { label: string }) {
  return (
    <li
      className="
        relative inline-block cursor-pointer text-gray-600
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0
        after:bg-gradient-to-r after:from-[#0BF1FA] after:to-[#2D96EB]
        after:transition-all after:duration-300
        hover:text-gray-900 hover:after:w-full
      "
    >
      {label}
    </li>
  );
}

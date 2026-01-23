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

  // 🔥 MAGIC STATE (NEW)
  const [magicStyle, setMagicStyle] = useState({
    opacity: 0,
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* ================= TOP BAR ================= */}
      <div className="bg-white text-sm px-4 md:px-8 py-2 flex justify-between items-center border-b border-orange-200">
        <span>Looking for Marketing Services?</span>
        <Link
          href="/contact"
          className="bg-pink-500 text-white px-4 py-1 rounded-md font-medium"
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
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium relative">

            {/* 🔥 MAGIC HOVER BOX (NEW) */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute rounded-xl transition-all duration-300 ease-out p-[2px]"
                style={{
                  left: magicStyle.left,
                  top: magicStyle.top,
                  width: magicStyle.width,
                  height: magicStyle.height,
                  opacity: magicStyle.opacity,
                }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff2f92] to-[#00f0ff] blur-sm opacity-60" />
                <div className="relative w-full h-full rounded-xl bg-white/95 backdrop-blur-md shadow-lg" />
              </div>
            </div>

            <NavLink href="/" setMagicStyle={setMagicStyle}>Home</NavLink>
            <NavLink href="/about-us" setMagicStyle={setMagicStyle}>About Us</NavLink>

            {/* SERVICES MEGA MENU */}
            {/* ================= SERVICES MEGA MENU ================= */}
            {/* SERVICES MEGA MENU */}
            <div
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="relative"
            >
              {/* Services Button */}
              <Link
                href="/services"
                onMouseEnter={(e) => moveMagic(e, setMagicStyle)}
                onMouseLeave={() =>
                  setMagicStyle((p: any) => ({ ...p, opacity: 0 }))
                }
                className="flex items-center gap-1 relative z-20 px-4 py-2 rounded-xl cursor-pointer"
              >
                Services
                <ChevronDownIcon className="w-4 h-4" />
              </Link>


              {/* Mega Menu (FIXED to viewport) */}
              <div
                className={`
      fixed left-1/2 top-[110px] z-50
      -translate-x-1/2
      transition-all duration-200 ease-out
      ${servicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                  }
    `}
              >
                <div className="max-w-[1200px] w-[95vw] bg-white rounded-2xl shadow-2xl border px-10 py-8">
                  <div className="grid grid-cols-5 gap-x-14 items-start">

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
                      <MenuItem label="Custom Websites" />
                      <MenuItem label="App Development" />
                      <MenuItem label="UI / UX Design" />
                      <MenuItem label="ERP Solutions" />
                    </MenuColumn>

                  </div>
                </div>
              </div>
            </div>




            <NavLink href="/pricing" setMagicStyle={setMagicStyle}>Pricing</NavLink>
            <NavLink href="/catalog" setMagicStyle={setMagicStyle}>Catalog</NavLink>
            <NavLink href="/contact" setMagicStyle={setMagicStyle}>Contact</NavLink>
          </nav>

          {/* ================= CTA BUTTONS (DESKTOP) ================= */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg font-semibold text-white
bg-gradient-to-r from-[#ff2f92] to-[#00f0ff]"
            >
              Free Consultation
            </Link>

            <Link
              href="tel:+16124702664"
              className="px-5 py-2 rounded-lg font-semibold text-white
bg-gradient-to-r from-[#00f0ff] to-[#3b82f6]"

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

function NavLink({ href, children, setMagicStyle }: any) {
  return (
    <Link
      href={href}
      onMouseEnter={(e) => moveMagic(e, setMagicStyle)}
      onMouseLeave={() => setMagicStyle((p: any) => ({ ...p, opacity: 0 }))}
      className="relative z-10 px-4 py-2 rounded-xl hover:text-gray-900"
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
    <div className="flex flex-col gap-3">
      <h4
        className="
          font-semibold text-sm inline-block
          bg-gradient-to-r from-[#F028C2] to-[#2D96EB]
          bg-clip-text text-transparent
        "
      >
        {title}
      </h4>

      <ul className="space-y-2 text-sm text-gray-700">
        {children}
      </ul>
    </div>
  );
}


function MenuItem({ label }: { label: string }) {
  return (
    <Link href="/">
      <li className="cursor-pointer text-sm text-gray-700 py-1">
        <span
          className="
            relative inline-block
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-full
            after:origin-left after:scale-x-0
            after:bg-gradient-to-r after:from-[#ff2f92] after:to-[#00f0ff]
            after:transition-transform after:duration-300
            hover:after:scale-x-100
          "
        >
          {label}
        </span>
      </li>
    </Link>
  );
}


// 🔥 MAGIC MOVE FUNCTION (NEW)
function moveMagic(e: any, setMagicStyle: any) {
  const rect = e.currentTarget.getBoundingClientRect();
  const nav = e.currentTarget.closest("nav")!.getBoundingClientRect();

  setMagicStyle({
    opacity: 1,
    left: rect.left - nav.left,
    top: rect.top - nav.top,
    width: rect.width,
    height: rect.height,
  });
}

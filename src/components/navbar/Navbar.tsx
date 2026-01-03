"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* Top Bar */}
      <div className="bg-orange-50 text-sm px-6 py-2 flex justify-between">
        <span>Looking for Marketing Services?</span>
        <Link href="/contact" className="text-orange-600 font-medium">
          Visit →
        </Link>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Zentrix
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>

          {/* Services Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="font-medium">
              Services ▾
            </button>

            {open && (
              <div className="absolute left-[-300px] top-full mt-4 w-[900px] bg-white shadow-xl border p-8 grid grid-cols-4 gap-6">
                <MenuColumn title="Digital Marketing">
                  <MenuItem href="/services/digital-marketing" label="Digital Marketing" />
                  <MenuItem href="/services/lead-generation" label="Lead Generation" />
                </MenuColumn>

                <MenuColumn title="Web Development">
                  <MenuItem href="/services/logo-design" label="Logo Design" />
                  <MenuItem href="/services/business-website-development" label="Business Website Development" />
                </MenuColumn>

                <MenuColumn title="SEO">
                  <MenuItem href="/services/seo" label="SEO" />
                  <MenuItem href="/services/ai-seo" label="AI SEO" />
                  <MenuItem href="/services/local-seo" label="Local SEO" />
                </MenuColumn>

                <MenuColumn title="Ads">
                  <MenuItem href="/services/ads/google-ads" label="Google Ads" />
                  <MenuItem href="/services/ads/meta-ads" label="Meta Ads" />
                </MenuColumn>
              </div>
            )}
          </div>

          <Link href="/pricing">Pricing</Link>
          <Link href="/catalog">Catalog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

/* Helper components */

type MenuColumnProps = {
  title: string;
  children: React.ReactNode;
};

function MenuColumn({ title, children }: MenuColumnProps) {
  return (
    <div>
      <h4 className="font-semibold mb-3 border-b-2 border-green-700 inline-block">
        {title}
      </h4>
      <ul className="space-y-2 text-sm text-gray-700">{children}</ul>
    </div>
  );
}

function MenuItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-green-700">
        {label}
      </Link>
    </li>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import ZentrixLogo from "@/assets/images/logo-zentrix-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      setMessage("");

      // 🔹 Replace this with your API call later
      await new Promise((res) => setTimeout(res, 1200));

      setStatus("success");
      setMessage("Subscribed successfully 🎉");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0B0F19] to-[#05070D] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

        {/* BRAND */}
        <div className="lg:col-span-4 space-y-6">

          {/* LOGO – CLEAN (NO BOX) */}
          <div
            className="
    inline-flex items-center
    transition-transform duration-300
    hover:scale-105
    cursor-pointer
  "
          >
            <Image
              src={ZentrixLogo}
              alt="Zentrix Logo"
              priority
              className="h-24 md:h-28 w-auto object-contain"
            />
          </div>


          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Zentrix helps businesses scale faster with performance marketing,
            high-conversion websites, SEO, ads, and enterprise-grade digital
            solutions.
          </p>

{/* SOCIAL LINKS */}
<div className="flex items-center gap-4 pt-2">
  {[
    {
      icon: faWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/91XXXXXXXXXX",
      hoverColor: "hover:text-green-400",
    },
    {
      icon: faInstagram,
      label: "Instagram",
      href: "https://instagram.com",
      hoverColor: "hover:text-pink-400",
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: faXTwitter,
      label: "Twitter",
      href: "https://twitter.com",
      hoverColor: "hover:text-sky-400",
    },
  ].map((item) => (
    <Link
      key={item.label}
      href={item.href}
      target="_blank"
      aria-label={item.label}
      className={`
        w-11 h-11 flex items-center justify-center
        rounded-xl bg-white/5
        border border-white/10
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-white/10
        hover:border-[#22D3EE]/40
        hover:shadow-[0_0_12px_rgba(34,211,238,0.35)]
        ${item.hoverColor}
      `}
    >
      <FontAwesomeIcon icon={item.icon} className="text-lg" />
    </Link>
  ))}
</div>


        </div>

        {/* MARKETING */}
        <div className="lg:col-span-2">
          <h3 className="mb-6 font-semibold bg-gradient-to-r from-[#F45BFF] to-[#22D3EE] bg-clip-text text-transparent">
            Marketing
          </h3>
          <ul className="space-y-3 text-sm">
            {["SEO Services", "Google Ads", "Meta Ads", "Lead Generation", "AI SEO"].map(
              (item) => (
                <li key={item} className="hover:text-[#22D3EE] transition">
                  <Link href="#">{item}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* SERVICES */}
        <div className="lg:col-span-3">
          <h3 className="mb-6 font-semibold bg-gradient-to-r from-[#F45BFF] to-[#22D3EE] bg-clip-text text-transparent">
            Services
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Website Development",
              "App Development",
              "ERP Solutions",
              "UI / UX Design",
              "IT Consultation",
            ].map((item) => (
              <li key={item} className="hover:text-[#22D3EE] transition">
                <Link href="#">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="lg:col-span-3 space-y-5">
          <h3 className="font-semibold bg-gradient-to-r from-[#F45BFF] to-[#22D3EE] bg-clip-text text-transparent">
            Stay Updated
          </h3>

          <p className="text-sm text-gray-400">
            Get insights, updates, and marketing tips straight to your inbox.
          </p>

          <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-[#22D3EE]/40 transition">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              className="
                bg-transparent px-4 py-3 text-sm w-full
                text-white placeholder-gray-500 outline-none
              "
            />
            <button
              onClick={handleSubscribe}
              disabled={status === "loading"}
              className="
                bg-gradient-to-r from-[#F45BFF] to-[#22D3EE]
                px-6 text-black font-semibold
                transition
                hover:opacity-90
                disabled:opacity-50
              "
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </div>

          {message && (
            <p
              className={`text-sm ${status === "success" ? "text-green-400" : "text-red-400"
                }`}
            >
              {message}
            </p>
          )}

          <div className="text-sm text-gray-400 space-y-2 pt-2">
            <p>📍 India</p>
            <p>📞 +91 XXXXX XXXXX</p>
            <p>✉️ contact@zentrix.com</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Zentrix. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#22D3EE] transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#22D3EE] transition">
              Terms
            </Link>
            <Link href="#" className="hover:text-[#22D3EE] transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

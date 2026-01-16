"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Industry = {
  id: string;
  name: string;
  category: string;
  growth: string;
  description: string;
  stats: { label: string; value: string }[];
  specialties: string[];
  image: string;
  story: string;
};

const industries: Industry[] = [
  {
    id: "mens-health",
    name: "Men's Health Clinics",
    category: "Healthcare",
    growth: "80%",
    description:
      "Nshine SEO agency helps men’s health clinics increase patient bookings and build clinical authority. Improves search visibility, clearer service pages, and content that answers the questions patients ask, leading to more consultation requests.",
    stats: [
      { label: "Conversion Rate Growth", value: "3.5X" },
      { label: "Website traffic", value: "80%" },
      { label: "Lead Increase", value: "85%" },
      { label: "Organic Revenue", value: "2X" },
    ],
    specialties: [
      "Hormone Therapy",
      "Men's Wellness",
      "Specialized Care",
      "Performance Medicine",
    ],
    image: "/images/industry-mens-health.jpg",
    story:
      "More local patients started booking consultations after our content and on-site improvements.",
  },
  {
    id: "dentists",
    name: "Dentists",
    category: "Healthcare",
    growth: "75%",
    description:
      "SEO strategies designed for dental clinics to rank for local searches, improve Google Maps visibility, and drive appointment bookings.",
    stats: [
      { label: "Appointment Increase", value: "2.8X" },
      { label: "Local Visibility", value: "70%" },
      { label: "Lead Growth", value: "65%" },
      { label: "ROI", value: "3X" },
    ],
    specialties: ["Dental Implants", "Cosmetic Dentistry", "Oral Care"],
    image: "/images/industry-dentist.jpg",
    story:
      "Improved Google Maps presence helped clinics get consistent daily calls.",
  },
];

export default function IndustrySeoShowcase() {
  const [active, setActive] = useState<Industry>(industries[0]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <h2 className="text-3xl font-bold text-center mb-3">
          Explore How Nshine SEO Agency Helps Businesses Across Various Industries
        </h2>

        <p className="text-sm text-gray-600 text-center mb-12">
          Click any industry to see our SEO strategies, real-world case studies,
          and how we helped businesses boost traffic, rankings, and conversions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ================= LEFT LIST ================= */}
          <div className="space-y-3">
            <h4 className="font-semibold mb-2">Select an Industry</h4>

            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActive(ind)}
                className={`w-full flex justify-between items-center p-4 rounded-lg border text-left transition
                ${
                  active.id === ind.id
                    ? "border-[#265E52] bg-[#F2F7F6]"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div>
                  <p className="font-medium">{ind.name}</p>
                  <p className="text-xs text-gray-500">{ind.category}</p>
                </div>

                <span className="text-sm text-[#265E52] font-semibold">
                  {ind.growth} Growth
                </span>
              </button>
            ))}
          </div>

          {/* ================= RIGHT DETAILS ================= */}
          <div className="lg:col-span-2 bg-[#F8FBFA] rounded-xl shadow p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <Image
                src={active.image}
                alt={active.name}
                width={420}
                height={300}
                className="rounded-lg object-cover"
              />

              <div>
                <h3 className="text-xl font-bold mb-3">{active.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {active.description}
                </p>
              </div>
            </div>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {active.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-lg p-4 text-center shadow-sm"
                >
                  <p className="text-lg font-bold text-[#265E52]">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>

            {/* ================= SPECIALTIES ================= */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {active.specialties.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#E7F2EF] text-[#265E52] text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ================= STORY ================= */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <p className="text-sm italic text-gray-700">
                “{active.story}”
              </p>
            </div>

            {/* ================= CTA ================= */}
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-[#265E52] text-white px-5 py-3 rounded-md text-sm font-semibold"
              >
                Get Industry Audit →
              </Link>

              <Link
                href="/case-studies"
                className="border border-[#265E52] text-[#265E52] px-5 py-3 rounded-md text-sm font-semibold"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

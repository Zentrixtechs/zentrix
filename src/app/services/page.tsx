"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Digital Marketing",
    desc: "Grow your business online with SEO, social media, and email marketing to drive traffic, leads, and sales.",
    icon: "/icons/digital-marketing.svg",
    href: "/services/digital-marketing",
    accent: "border-[#F028C2]", // Magenta accent
  },
  {
    title: "Web Development",
    desc: "Build a powerful online presence with user-friendly, fast, and conversion-focused websites.",
    icon: "/icons/web-development.svg",
    href: "/services/websites-development",
    accent: "border-[#2D96EB]", // Blue accent
  },
  {
    title: "Logo Design & Branding",
    desc: "Create a strong brand identity with professional logo design and cohesive branding.",
    icon: "/icons/logo-design.svg",
    href: "/services/logo-design",
    accent: "border-[#F028C2]",
  },
  {
    title: "Local SEO",
    desc: "Boost local search visibility with optimized Google Business Profiles and location-based strategies.",
    icon: "/icons/seo.svg",
    href: "/services/local-seo",
    accent: "border-[#2D96EB]",
  },
  {
    title: "Google Ads",
    desc: "Drive targeted traffic with high-performing Google Ads campaigns and ROI-focused strategies.",
    icon: "/icons/google-ads.svg",
    href: "/services/ads/google-ads",
    accent: "border-[#F028C2]",
  },
  {
    title: "Facebook & Instagram Ads",
    desc: "Engage your audience with visually compelling Meta Ads that drive conversions.",
    icon: "/icons/meta-ads.svg",
    href: "/services/ads/meta-ads",
    accent: "border-[#2D96EB]",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-gradient-to-br from-[#FDF2FB] via-[#F0F7FF] to-[#F0F7FF] py-24 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg opacity-90 leading-relaxed font-medium">
            Our team of digital experts delivers Web Design, Local SEO, Ads,
            Development, and Digital Marketing solutions that turn ideas into
            <span className="bg-white/20 px-2 rounded ml-1">digital success stories.</span>
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-b-8 ${service.accent} hover:-translate-y-2`}
            >
              {/* Icon Container with subtle glow */}
              <div className="w-16 h-16 mb-8 p-3 rounded-2xl bg-gray-50 group-hover:bg-gradient-to-tr group-hover:from-[#F028C2]/10 group-hover:to-[#2D96EB]/10 transition-colors">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                {service.desc}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-bold 
                bg-gray-900 text-white px-6 py-3 rounded-xl 
                hover:bg-gradient-to-r hover:from-[#F028C2] hover:to-[#2D96EB] 
                transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Read more
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
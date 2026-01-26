"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { GRADIENTS } from "@/app/lib/gradients";

const SERVICES = [
  {
    title: "Digital Marketing",
    img: "/images/metaads.png",
    desc: "Grow your business online with SEO, social, email, and paid advertising that drives leads and revenue.",
    link: "/marketing/digital-marketing",
  },
  {
    title: "Web Development",
    img: "/images/webdevelopment.png",
    desc: "High-converting websites, UX designs, and landing pages that increase trust and conversions.",
    link: "/services/websites-development",
  },
  {
    title: "Logo Design & Branding",
    img: "/images/logodesign.png",
    desc: "Unique brand identity, logos, and visual systems that build authority and recall.",
    link: "/services/logo-design",
  },
  {
    title: "SEO",
    img: "/images/seo.png",
    desc: "Search engine optimization that ranks your business and brings consistent organic leads.",
    link: "/services/seo",
  },
  {
    title: "Google Ads",
    img: "/images/googleads.png",
    desc: "High ROI Google Ads campaigns with precision keyword and audience targeting.",
    link: "/services/ads/google-ads",
  },
  {
    title: "Facebook & Instagram Ads",
    img: "/images/metaads.png",
    desc: "Creative paid ads that drive awareness, leads, and sales on Meta platforms.",
    link: "/services/ads/meta-ads",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-28 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] overflow-hidden"
    >
      {/* 🔥 Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[520px] h-[520px] bg-[#00f0ff]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADING ================= */}
        <Reveal>
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-extrabold text-center text-gray-900"
          >
            Our{" "}
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r ${GRADIENTS.heading}`}
            >
              Services
            </span>
          </h2>

          <p className="mt-5 text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Our team of digital experts delivers Web Design, SEO, PPC Advertising,
            and Social Media strategies that transform ideas into{" "}
            <span className="text-[#F028C2] font-semibold">
              scalable digital success.
            </span>
          </p>
        </Reveal>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <article
                className="
                  group relative flex flex-col text-center
                  rounded-2xl bg-white
                  border border-[#00f0ff]/30
                  hover:border-[#ff2f92]
                  hover:shadow-2xl
                  transition-all duration-300
                  p-8 h-[460px]
                "
              >
                {/* Icon */}
                <div className="mb-8 flex justify-center">
                  <Image
                    src={s.img}
                    alt={`${s.title} services by Zentrix Tech`}
                    width={150}
                    height={150}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {s.title}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href={s.link}
                    className={`
                      inline-flex items-center gap-1 text-sm font-semibold
                      bg-clip-text text-transparent bg-gradient-to-r ${GRADIENTS.heading}
                      hover:opacity-90
                    `}
                  >
                    Learn More
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

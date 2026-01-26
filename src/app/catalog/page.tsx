"use client"; // ⚠ Required because we use animations and effects

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const catalogItems = [
  {
    title: "Logo Designs",
    desc: "Transform your brand’s identity with custom logo designs that capture your vision and make your business memorable.",
    img: "/images/logo-design.png",
  },
  {
    title: "Website Designs",
    desc: "Enhance your online presence with responsive and user-friendly website designs that convert visitors into customers.",
    img: "/images/website-designs.png",
  },
  {
    title: "Landing Page Designs",
    desc: "Boost conversions with landing pages that engage visitors and encourage them to take action.",
    img: "/images/landing-page.png",
  },
  {
    title: "Social Media Designs",
    desc: "Stand out on social media with visually compelling graphics that communicate your brand message effectively.",
    img: "/images/social_media.png",
  },
  {
    title: "Case Studies",
    desc: "Explore real success stories of businesses we've helped grow through design, marketing, and digital solutions.",
    img: "/images/case-studies.png",
  },
];

export default function CatalogPage() {
  return (
    <>
      {/* ================= SEO META ================= */}
      <Head>
        <title>Catalog | Zentrix Tech – Logo, Web & Digital Marketing Services</title>
        <meta
          name="description"
          content="Explore Zentrix Tech's catalog of services including logo design, website design, landing pages, social media graphics, and case studies. Elevate your brand today!"
        />
        <link rel="canonical" href="https://zentrix-tech.com/catalog" />

        {/* Open Graph */}
        <meta property="og:title" content="Zentrix Tech Catalog – Logo, Web & Digital Marketing Services" />
        <meta property="og:description" content="Browse Zentrix Tech's catalog of professional services to elevate your brand. From logos to websites, we help your business grow online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zentrix-tech.com/catalog" />
        <meta property="og:image" content="https://zentrix-tech.com/lo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zentrix Tech Catalog – Logo, Web & Digital Marketing Services" />
        <meta name="twitter:description" content="Explore our full catalog of services, including logos, websites, landing pages, and social media graphics." />
        <meta name="twitter:image" content="https://zentrix-tech.com/lo.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Catalog - Zentrix Tech",
              "url": "https://zentrix-tech.com/catalog",
              "description": "Explore Zentrix Tech's catalog of professional services including logo design, website design, landing pages, social media graphics, and case studies.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://zentrix-tech.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Catalog",
                    "item": "https://zentrix-tech.com/catalog"
                  }
                ]
              }
            }),
          }}
        />
      </Head>

      {/* ================= HERO ================= */}
      <section className="py-6 bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] text-white text-center shadow-md">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-bold">Catalog</h1>
        </Reveal>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-10 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="mt-4 max-w-3xl mx-auto text-center text-black/70">
              Browse our extensive catalog of services to{" "}
              <span className="text-[#F028C2] font-semibold">enhance your brand</span> and grow your business.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {catalogItems.map((service, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group flex flex-col items-center rounded-2xl border border-[#00f0ff]/30 bg-white hover:border-[#ff2f92] hover:shadow-2xl transition-all p-6 pt-8 h-[480px]">

                  {/* Image */}
                  <div className="mb-6 flex justify-center h-[180px] w-[180px]">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={180}
                      height={180}
                      className="object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center flex-1 font-sans">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">{service.desc}</p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-sm md:text-base font-medium text-[#2D96EB] hover:text-[#ff2f92]"
                    >
                      View All <span className="transition group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              See How We’ve{" "}
              <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
                Transformed Businesses
              </span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-black/70">
              Our case studies showcase real results from businesses that benefited from our digital marketing strategies, logo & web designs.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
            {[ // sample logos
              { src: "/images/yanthura-logo.jpeg", alt: "Erection Center" },
              { src: "/images/rustic-logo.jpeg", alt: "CD Logo" },
              { src: "/images/aura-logo.jpeg", alt: "PenoFill" },
              { src: "/images/yanthura-logo.jpeg", alt: "One Dental Group" },
              { src: "/images/rustic-logo.jpeg", alt: "IGLO MED SPA" },
              { src: "/images/aura-logo.jpeg", alt: "Smile Lounge" },
              { src: "/images/yanthura-logo.jpeg", alt: "Beauty Oasis" },
              { src: "/images/rustic-logo.jpeg", alt: "Precision IVF" },
            ].map((client, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-center justify-center bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MARQUEE CSS ================= */}
      <style jsx>{`
        @keyframes clients-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clients-marquee {
          width: max-content;
          animation: clients-marquee 25s linear infinite;
        }
      `}</style>
    </>
  );
}

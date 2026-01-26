"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GRADIENTS } from "@/app/lib/gradients";

const SERVICES = [
  { img: "/images/metaads.png", name: "Meta Ads Management Services" },
  { img: "/images/seo.png", name: "Search Engine Optimization Services" },
  { img: "/images/logodesign.png", name: "Logo Design and Branding Services" },
  { img: "/images/webdevelopment.png", name: "Website Development Services" },
  { img: "/images/googleads.png", name: "Google Ads Management Services" },
  { img: "/images/linkedinads.png", name: "LinkedIn Ads Management Services" },
];

export default function ServiceMarquee() {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="services-marquee-heading"
    >
      {/* SEO-only heading */}
      <h2 id="services-marquee-heading" className="sr-only">
        Zentrix Tech Digital Marketing and Advertising Services
      </h2>

      <Reveal>
        <div className="overflow-hidden">
          <div className="flex gap-8 items-center animate-marquee hover:pause">
            {SERVICES.concat(SERVICES).map((service, i) => (
              <div
                key={i}
                className={`w-[260px] h-[180px] flex items-center justify-center
                  rounded-xl border border-[#00f0ff]/30 bg-white
                  hover:border-[#ff2f92] hover:shadow-xl
                  transition-all
                `}
                role="img"
                aria-label={service.name}
              >
                <Image
                  src={service.img}
                  alt={service.name}
                  width={140}
                  height={140}
                  className="object-contain"
                />

                {/* Extra SEO context */}
                <span className="sr-only">
                  {service.name} by Zentrix Tech
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Marquee animation (same as old) */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

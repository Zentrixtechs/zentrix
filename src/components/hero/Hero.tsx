"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { GRADIENTS } from "@/app/lib/gradients";

const HERO_IMAGE = "/images/growth.png";

export default function Hero() {
  return (
    <section
      className="bg-white min-h-[80vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <Reveal>
             <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
  Grow Your Business with{" "}
  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${GRADIENTS.primary}`}>
    Zentrix Tech
  </span>
</h1>
<p className="mt-6 max-w-xl text-black/70 text-lg">
  Zentrix Tech is a results-driven digital marketing and web development agency helping businesses scale through SEO, Google Ads, Meta Ads, Branding, and high-converting websites. Our team delivers measurable results and increased ROI.
</p>

            </Reveal>

            <Reveal delay={300}>
              <nav
                className="mt-10 flex gap-4 flex-col sm:flex-row"
                aria-label="Primary actions"
              >
                <Link
                  href="/contact"
                  title="Contact Zentrix Tech for Digital Marketing Services"
                  className={`group inline-flex items-center gap-3 px-5 py-2.5 rounded-lg
                    text-white text-sm font-semibold
                    bg-gradient-to-r ${GRADIENTS.cta}
                    transition-all duration-300
                    hover:scale-[1.05]
                    hover:shadow-[0_0_20px_rgba(240,40,194,0.4)]
                  `}
                >
                  <span>Contact Us</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="#services"
                  title="Explore Zentrix Tech Services"
                  className="inline-flex items-center justify-center px-5 py-2.5
                    text-sm font-semibold rounded-lg
                    border border-gray-300 text-black
                    hover:bg-gray-100 transition"
                >
                  Explore Services
                </Link>
              </nav>
            </Reveal>
          </div>

          {/* IMAGE */}
          <Reveal delay={200}>
            <div className="relative w-full max-w-lg mx-auto animate-float">
              <Image
                src={HERO_IMAGE}
                alt="Zentrix Tech digital marketing agency growth strategy illustration"
                width={800}
                height={500}
                priority
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
          </Reveal>

        </div>
      </div>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

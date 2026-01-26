"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section
      className="py-24 bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] text-white text-center"
      aria-labelledby="final-cta-heading"
    >
      {/* Hidden heading for SEO */}
      <h2 id="final-cta-heading" className="sr-only">
        Book a Free Consultation with Zentrix Tech for Your Business Growth
      </h2>

      {/* Visible heading with Reveal */}
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Grow with Zentrix?
        </h2>
      </Reveal>

      {/* Button with hover effect */}
      <Reveal delay={200}>
        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-4 rounded-lg font-semibold
                     bg-white text-black hover:scale-105 transition-transform"
        >
          Book Free Consultation
        </Link>
      </Reveal>
    </section>
  );
}

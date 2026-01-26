"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GRADIENTS } from "@/app/lib/gradients";

export default function Funnel() {
  return (
    <section
      className="py-32 bg-white text-center"
      aria-labelledby="funnel-heading"
    >
      {/* SEO-only heading */}
      <h2 id="funnel-heading" className="sr-only">
        Zentrix Tech 360 Degree Marketing Funnel Strategy
      </h2>

      {/* Visible heading with gradient */}
      <Reveal>
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          We Offer a{" "}
          <span
            className={`bg-clip-text text-transparent bg-gradient-to-r ${GRADIENTS.cta}`}
          >
            360° Marketing Plan
          </span>{" "}
          for Your Growth
        </h2>
      </Reveal>

      {/* Funnel Image */}
      <Reveal delay={250}>
        <div className="mt-16 flex justify-center">
          <Image
            src="/images/360stratergy.jpeg"
            alt="Illustration of Zentrix 360° Marketing Funnel showing digital marketing, SEO, ads, and branding strategy"
            width={850}
            height={900}
            className="max-w-full h-auto rounded-xl"
            priority
          />
        </div>
      </Reveal>
    </section>
  );
}

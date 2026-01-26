"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { GRADIENTS } from "@/app/lib/gradients";

const PRICING = [
  {
    title: "Website Design",
    old: "$1,800",
    price: "$1,500",
    unit: "One Time",
    features: [
      "Up to 5 Pages Website",
      "3 Dedicated Service Pages",
      "Expert UX Design",
      "$100 per Additional Page",
      "Free Consultation",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Fast Delivery",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    title: "SEO",
    old: "$2,500",
    price: "$2,000",
    unit: "Per Month",
    features: [
      "Nationwide Targeting",
      "20 Keywords Research",
      "6 Pages Optimized",
      "2 Blog Posts",
      "Competitor Analysis",
      "Technical SEO Audit",
      "AI SEO Channels",
      "AI Content Distribution",
    ],
    cta: "Start SEO",
    popular: false,
  },
  {
    title: "Ads Management",
    old: "25%",
    price: "15%",
    unit: "of Ad Budget",
    features: [
      "Complete Ad Setup",
      "Unlimited Ad Runs",
      "Competitor Research",
      "GTM Tracking",
      "Unlimited Locations",
      "Daily Monitoring",
      "Conversion Optimization",
      "Monthly Reports",
    ],
    cta: "Launch Ads",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      className="py-32 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <Reveal>
          <h2
            id="pricing-heading"
            className="text-4xl md:text-5xl font-bold text-center text-black"
          >
            Pricing{" "}
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${GRADIENTS.heading}`}>
              Packages
            </span>
          </h2>
          <p className="mt-4 text-center text-black/70">
            Choose Your Ideal Marketing Plan
          </p>
        </Reveal>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {PRICING.map((plan, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                className="pricing-card h-[640px] flex flex-col justify-between
                  rounded-2xl bg-white border border-[#00f0ff]/30
                  hover:border-[#ff2f92] hover:shadow-2xl transition-all p-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
              >
                <div className="text-center">
                  {plan.popular && (
                    <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white">
                      Popular
                    </span>
                  )}

                  <h3 className="text-xl font-bold">{plan.title}</h3>

                  <p className="mt-4 text-black/40 line-through">{plan.old}</p>

                  <p
                    className={`text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2f92] to-[#2D96EB]`}
                  >
                    {plan.price}
                  </p>

                  <p className="text-sm text-black/60">{plan.unit}</p>
                </div>

                <ul className="mt-8 space-y-3 text-sm text-black/70 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${GRADIENTS.cta} hover:scale-105 transition`}
                >
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

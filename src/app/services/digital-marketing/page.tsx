"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";

const FUNNEL = [
  { title: "Awareness", items: ["Branding", "Social Media", "Content Marketing"] },
  { title: "Consideration", items: ["SEO", "Website UX", "Email Marketing"] },
  { title: "Conversion", items: ["Landing Pages", "Lead Funnels", "Remarketing"] },
  { title: "Retention", items: ["CRM Automation", "WhatsApp Marketing", "Loyalty Programs"] },
];

export default function DigitalMarketing() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* HERO */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Digital Marketing That Drives{" "}
                <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
                  Real Business Growth
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-black/70">
                We build full-funnel digital strategies that attract, convert and retain customers using SEO, Ads and Automation.
              </p>
              <Link href="/contact" className="inline-block mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-[#F028C2] to-[#2D96EB] text-white font-semibold hover:scale-105 transition">
                Get Free Strategy Call →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <Image src="/images/360stratergy.jpeg" alt="Digital Marketing" width={600} height={500} className="rounded-xl shadow-xl" />
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[["500+","Clients"],["3X","Avg ROI"],["10+","Years Experience"]].map((s,i)=>(
            <Reveal key={i} delay={i*100}>
              <div>
                <h3 className="text-4xl font-bold text-[#ff2f92]">{s[0]}</h3>
                <p className="text-black/70">{s[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FUNNEL */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="text-4xl font-bold text-center mb-16">Our 360° Growth Funnel</h2></Reveal>
          <div className="grid md:grid-cols-4 gap-8">
            {FUNNEL.map((f,i)=>(
              <Reveal key={i} delay={i*120}>
                <div className="p-6 bg-white rounded-2xl border hover:shadow-xl">
                  <h3 className="text-xl font-bold text-[#ff2f92] mb-3">{f.title}</h3>
                  <ul className="text-sm space-y-2 text-black/70">
                    {f.items.map((x,j)=><li key={j}>• {x}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="text-4xl font-bold text-center">What We Do</h2></Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {["SEO","Google Ads","Meta Ads","Social Media Marketing","Content Marketing","Marketing Automation"].map((s,i)=>(
              <Reveal key={i} delay={i*100}>
                <div className="p-8 rounded-2xl border hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-2">{s}</h3>
                  <p className="text-black/70 text-sm">High-impact {s.toLowerCase()} strategies built for ROI.</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><h2 className="text-4xl font-bold text-center">Our Proven Process</h2></Reveal>
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {["Audit","Strategy","Launch","Scale"].map((p,i)=>(
              <Reveal key={i} delay={i*120}>
                <div className="p-6 text-center bg-white border rounded-xl">
                  <h4 className="font-semibold">{p}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] text-white text-center">
        <Reveal>
          <h2 className="text-4xl font-bold">Want Predictable Lead Flow?</h2>
          <Link href="/contact" className="inline-block mt-8 px-8 py-4 bg-white text-black rounded-lg font-semibold">
            Book Free Consultation
          </Link>
        </Reveal>
      </section>

    </main>
  );
}

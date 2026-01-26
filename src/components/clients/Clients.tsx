"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const GRADIENTS = {
  heading: "from-[#ff2f92] to-[#2D96EB]",
  cta: "from-[#F028C2] to-[#2D96EB]",
};

const CLIENT_ICONS = [
  { title: "Yanthura", img: "/images/yanthura-logo.jpeg" },
  { title: "Rustic Farm House", img: "/images/rustic-logo.jpeg" },
  { title: "Aura", img: "/images/aura-logo.jpeg" },
  { title: "Yanthura", img: "/images/yanthura-logo.jpeg" },
  { title: "Rustic Farm House", img: "/images/rustic-logo.jpeg" },
  { title: "Aura", img: "/images/aura-logo.jpeg" },
];


export default function Clients() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
        Our <span className={`bg-gradient-to-r ${GRADIENTS.heading} bg-clip-text text-transparent`}>Trusted Clients</span>
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-black/70">
        From startups to enterprises, we provide digital marketing solutions that help your business grow, reach more customers, and deliver real results.
      </p>
    </Reveal>

    {/* Clients Marquee */}
    <Reveal delay={200}>
      <div className="mt-16 overflow-hidden">
        <div className="flex gap-12 animate-clients-marquee items-center hover:pause">
          {CLIENT_ICONS.concat(CLIENT_ICONS).map((client, i) => (
            <div
              key={i}
              className="client-card flex-shrink-0 w-[200px] h-[120px] rounded-xl bg-white border border-[#00f0ff]/30 hover:border-[#ff2f92] hover:shadow-xl transition-all flex items-center justify-center"
              aria-label={client.title}
            >
              <Image src={client.img} alt={client.title} width={140} height={80} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </Reveal>

    {/* CTA */}
    <Reveal delay={350}>
      <div className="mt-14 text-center">
        <Link
          href="/catalog"
          className={`inline-flex items-center gap-3 px-7 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${GRADIENTS.cta} hover:scale-105 transition-all`}
        >
          Explore More <span className="transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Reveal>
  </div>
      {  /* ================= CLIENT MARQUEE CSS ================= */}
<style jsx>{`
  @keyframes clients-marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-clients-marquee {
    width: max-content;
    animation: clients-marquee 25s linear infinite;
  }
  .hover\\:pause:hover {
    animation-play-state: paused;
  }
`}</style>

</section>

  );
}

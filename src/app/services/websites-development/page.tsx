"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import Link from "next/link";
const SERVICE_ICONS = [
  { title: "Google Ads", img: "/images/metaads.png" },
  { title: "SEO", img: "/images/seo.png" },
  { title: "Logo Design", img: "/images/logodesign.png" },
  { title: "Web Development", img: "/images/webdevelopment.png" },
  { title: "Meta Ads", img: "/images/googleads.png" },
  { title: "LinkedIn Ads", img: "/images/linkedinads.png" },
];


/* ================= COUNT UP COMPONENT ================= */
function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(1);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      const startTime = performance.now();
      const duration = 800;

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - 1) + 1));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}</span>;
}

/* ================= PAGE ================= */
export default function LogoDesignPage() {
  return (
    <main className="overflow-x-hidden bg-white">

      {/* ================= HERO + AUDIT ================= */}
      <section
        id="audit"
        className="pt-20 pb-32 bg-gradient-to-br from-[#eef6ff] via-[#d6e6ff] to-[#fdf2ff] text-black relative overflow-hidden"
      >
        {/* Floating soft blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT STATS */}
          <div>
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                The Best Choice for Business
                <span className="block bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] bg-clip-text text-transparent">
Web Design                </span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-4 text-black/70 max-w-xl">
                Stand out in your industry with a unique, professional logo designed to reflect your story, values, and vision.
              </p>
            </Reveal>

            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { v: 340, t: "Website Traffic" },
                { v: 450, t: "Lead Increase" },
                { v: 4, t: "Organic Revenue" },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="glass-soft p-6 rounded-2xl text-center border border-black/10 h-44 flex flex-col justify-center">
                    <h3 className="text-4xl font-extrabold bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] bg-clip-text text-transparent">
                      <CountUp end={s.v} />{s.v === 4 ? "X" : "%"}
                    </h3>
                    <p className="text-xs uppercase tracking-widest mt-2 text-black/50">{s.t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <Reveal delay={250}>
            <form className="glass-soft rounded-3xl p-10 space-y-5 border border-black/10">
              <h3 className="text-2xl font-bold mb-4 text-center text-black">Get Free Marketing Audit</h3>

              <input placeholder="Name" className="form-input-soft" />
              <input placeholder="Email" className="form-input-soft" />
              <input placeholder="Mobile" className="form-input-soft" />
              <input placeholder="Website (optional)" className="form-input-soft" />
              <select className="form-input-soft">
                <option>Select Service</option>
                <option>SEO</option>
                <option>Google Ads</option>
                <option>Web Development</option>
                <option>Social Media</option>
              </select>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] font-semibold hover:scale-105 transition">
                Get Free Audit →
              </button>
            </form>
          </Reveal>

        </div>
      </section>
      {/* ================= PROBLEM VS SOLUTION ================= */}
<section className="py-28 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
        Why Most Businesses Fail Online — <br />
        <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
          And How Zentrix Fixes It
        </span>
      </h2>
      <p className="mt-4 text-center text-black/70 max-w-3xl mx-auto">
        The difference between struggling brands and fast-growing brands is the digital strategy behind them.
      </p>
    </Reveal>

    <div className="grid md:grid-cols-2 gap-20 mt-20 items-center">

      {/* PROBLEM */}
      <Reveal delay={150}>
        <div className="relative border border-[#ff2f92]/30 rounded-3xl p-10 bg-white hover:shadow-2xl transition">

          <div className="absolute -top-8 left-8 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff2f92] to-[#F028C2] flex items-center justify-center text-white text-lg">✖</div>
            <span className="font-bold text-[#ff2f92]">The Problem</span>
          </div>

          <Image
            src="/images/webdevelopment.png"
            alt="Problem"
            width={420}
            height={260}
            className="rounded-xl mb-6"
          />

          <ul className="space-y-3 text-black/70 text-sm mt-6">
            {[
              "Customers can’t find your business online",
              "Low trust due to unprofessional websites",
              "Poor design and slow performance",
              "Low lead conversion & lost sales",
              "No SEO or advertising visibility",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-[#ff2f92]" />
                {item}
              </li>
            ))}
          </ul>

        </div>
      </Reveal>

      {/* SOLUTION */}
      <Reveal delay={300}>
        <div className="relative border border-[#00f0ff]/30 rounded-3xl p-10 bg-white hover:shadow-2xl transition">

          <div className="absolute -top-8 left-8 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] flex items-center justify-center text-white text-lg">✔</div>
            <span className="font-bold text-[#2D96EB]">The Solution</span>
          </div>

          <Image
            src="/images/metaads.png"
            alt="Solution"
            width={420}
            height={260}
            className="rounded-xl mb-6"
          />

          <ul className="space-y-3 text-black/70 text-sm mt-6">
            {[
              "Premium brand-focused website design",
              "High-converting landing pages",
              "SEO that ranks your business",
              "Performance-driven ad campaigns",
              "Consistent leads & sales growth",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-[#2D96EB]" />
                {item}
              </li>
            ))}
          </ul>

        </div>
      </Reveal>

    </div>
  </div>
</section>

{/* ================= WEB DESIGN SOLUTIONS ================= */}
<section className="py-28 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">

  {/* Floating glow blobs */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
  <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6">

    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Web Design <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
          Solutions
        </span>
      </h2>

      <p className="mt-5 max-w-4xl mx-auto text-center text-black/70 text-lg">
        At NShine, we deliver innovative and customized web design solutions that transform your business vision into a powerful online presence.
      </p>
    </Reveal>

    <div className="grid md:grid-cols-3 gap-10 mt-20">

      {[
        {
          title: "Responsive Web Design",
          desc: "Fast-loading mobile-first websites that adapt seamlessly across all devices."
        },
        {
          title: "Custom Web Design",
          desc: "Tailored websites that reflect your brand identity and business goals."
        },
        {
          title: "Landing Page Design",
          desc: "High-converting pages built for leads, sales and campaigns."
        },
        {
          title: "E-Commerce Websites",
          desc: "Modern online stores with secure checkout & intuitive UX."
        },
        {
          title: "Wireframing & Prototyping",
          desc: "Strategic UX structure mapped before development begins."
        },
        {
          title: "Graphics & Visual Design",
          desc: "Custom icons, banners and visual systems for brand consistency."
        }
      ].map((item, index) => (
        <Reveal key={index} delay={index * 120}>
          <div className="group bg-white border border-[#00f0ff]/30 rounded-2xl p-8 hover:border-[#ff2f92] hover:shadow-2xl transition-all h-full">

            <CheckCircleIcon className="w-10 h-10 mb-5 text-[#ff2f92] group-hover:text-[#2D96EB]" />

            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>

          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

{/* ================= WHY PROFESSIONAL WEBSITE ================= */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
        Why Your Business Needs a{" "}
        <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
          Professional Website
        </span>
      </h2>

      <p className="mt-6 max-w-4xl mx-auto text-center text-black/70 text-lg leading-relaxed">
        In today’s digital landscape, your website is your first impression. A professional website builds trust,
        strengthens your brand identity, and opens doors to new growth opportunities.
      </p>
    </Reveal>

    <div className="grid md:grid-cols-2 gap-12 mt-20">

      {[
        {
          title: "Improve User Experience",
          points: [
            "Enhance usability and navigation",
            "Create meaningful customer engagement",
          ],
        },
        {
          title: "Boost Brand Credibility",
          points: [
            "Establish trust instantly",
            "Stand out with a professional online presence",
          ],
        },
        {
          title: "Increase Visibility",
          points: [
            "Stay competitive in your industry",
            "Reach more potential customers",
          ],
        },
        {
          title: "Showcase Your Services",
          points: [
            "Highlight products with clarity",
            "Present your offerings with impact",
          ],
        },
        {
          title: "Drive Conversions",
          points: [
            "Turn visitors into paying customers",
            "Generate measurable business growth",
          ],
        },
        {
          title: "Lead Generation",
          points: [
            "Capture quality leads 24/7",
            "Build consistent sales opportunities",
          ],
        },
      ].map((item, index) => (
        <Reveal key={index} delay={index * 120}>
          <div className="p-8 rounded-2xl border border-[#00f0ff]/30 hover:border-[#ff2f92] hover:shadow-xl transition-all bg-white">

            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white flex items-center justify-center font-bold">
                ✓
              </span>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
            </div>

            <ul className="space-y-2 text-black/70 text-sm">
              {item.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#ff2f92] to-[#2D96EB]" />
                  {p}
                </li>
              ))}
            </ul>

          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
{/* ================= PREMIUM WEBSITE UPGRADE ================= */}
<section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#f7faff] via-[#eef3ff] to-[#fff2f8]">

  {/* glow orbs */}
  <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#ff2f92]/15 rounded-full blur-[120px]" />
  <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-[#2D96EB]/15 rounded-full blur-[120px]" />
  <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[160px] -translate-x-1/2" />

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Header */}
    <Reveal>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-black">
          Is Your Website{" "}
          <span className="bg-gradient-to-r from-[#ff2f92] via-[#F028C2] to-[#2D96EB] bg-clip-text text-transparent">
            Slow, Outdated or Killing Conversions?
          </span>
        </h2>

        <p className="mt-8 text-lg text-black/70 leading-relaxed">
          We transform weak websites into lightning-fast, visually powerful, and conversion-optimized platforms that
          elevate your brand, build trust, and generate real business growth.
        </p>
      </div>
    </Reveal>

  {/* Inline Performance Badge */}
<Reveal delay={150}>
  <div className="mt-10 flex justify-center">
    <div className="flex items-center gap-5 px-7 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-black/10 shadow-sm">

      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff2f92] to-[#2D96EB] flex items-center justify-center text-white font-bold">
        ⚡
      </div>

      <div>
        <p className="text-sm font-semibold text-black">
          300% Faster Performance
        </p>
        <p className="text-xs text-black/50">
          Average 1–2 second load time
        </p>
      </div>

    </div>
  </div>
</Reveal>

    {/* Feature Grid */}
    <div className="grid md:grid-cols-3 gap-10 mt-24">

      {[
        { title: "Modern UI/UX Redesign", desc: "Upgrade outdated layouts into premium, conversion-first designs." },
        { title: "Speed Optimization", desc: "Lightning-fast performance for better SEO & user experience." },
        { title: "Mobile First Experience", desc: "Perfect visuals and performance across every screen." },
        { title: "SEO & Security Shield", desc: "Higher Google rankings with enterprise-grade protection." },
        { title: "High Performance Hosting", desc: "Move to ultra-fast, scalable infrastructure." },
        { title: "Conversion Optimization", desc: "Turn visitors into leads and paying customers." },
      ].map((item, i) => (
        <Reveal key={i} delay={i * 120}>
          <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#ff2f92]/40 to-[#2D96EB]/40 hover:from-[#ff2f92] hover:to-[#2D96EB] transition">
            <div className="h-full bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
              <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

{/* ================= DIGITAL MARKETING SOLUTIONS ================= */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <Reveal>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          More Than Just{" "}
          <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
            Web Design
          </span>
        </h2>

        <p className="mt-5 text-black/70 text-base leading-relaxed">
          Whether you’re launching a new business or scaling an existing one, NShine provides complete digital
          solutions to help you attract more customers, calls, and bookings.
        </p>
      </div>
    </Reveal>

    {/* Services */}
    <div className="grid md:grid-cols-3 gap-6 mt-14">

      {/* SEO */}
      <Reveal delay={100}>
        <div className="border border-black/10 rounded-2xl p-7 hover:shadow-lg transition bg-white">
          <div className="w-10 h-10 mb-4 rounded-xl bg-gradient-to-br from-[#ff2f92] to-[#2D96EB] text-white flex items-center justify-center">
            🔍
          </div>
          <h3 className="font-semibold text-lg mb-2">SEO (Search Engine Optimization)</h3>
          <p className="text-sm text-black/60 leading-relaxed">
            Improve Google rankings, drive organic traffic, and connect with customers actively searching for your services.
          </p>
        </div>
      </Reveal>

      {/* Google Ads */}
      <Reveal delay={200}>
        <div className="border border-black/10 rounded-2xl p-7 hover:shadow-lg transition bg-white">
          <div className="w-10 h-10 mb-4 rounded-xl bg-gradient-to-br from-[#ff2f92] to-[#2D96EB] text-white flex items-center justify-center">
            📈
          </div>
          <h3 className="font-semibold text-lg mb-2">Google Ads Management</h3>
          <p className="text-sm text-black/60 leading-relaxed">
            Run targeted ad campaigns that deliver instant visibility, quality leads, and higher conversions.
          </p>
        </div>
      </Reveal>

      {/* Meta Ads */}
      <Reveal delay={300}>
        <div className="border border-black/10 rounded-2xl p-7 hover:shadow-lg transition bg-white">
          <div className="w-10 h-10 mb-4 rounded-xl bg-gradient-to-br from-[#ff2f92] to-[#2D96EB] text-white flex items-center justify-center">
            💬
          </div>
          <h3 className="font-semibold text-lg mb-2">Meta Ads (Facebook & Instagram)</h3>
          <p className="text-sm text-black/60 leading-relaxed">
            Reach your ideal audience, generate leads, and grow your brand with high-performing social campaigns.
          </p>
        </div>
      </Reveal>

    </div>
  </div>
</section>

{/* ================= TRUSTED CLIENTS ================= */}
<section className="py-28 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
        Our <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
          Trusted Clients
        </span>
      </h2>

      <p className="mt-4 max-w-3xl mx-auto text-center text-black/70">
        From startups to enterprises, we provide digital marketing solutions that help your business grow, reach more customers, and deliver real results.
      </p>
    </Reveal>

    {/* Clients Marquee */}
    <Reveal delay={200}>
      <div className="mt-16 overflow-hidden">
        <div className="flex gap-12 animate-clients-marquee items-center">
          {SERVICE_ICONS.concat(SERVICE_ICONS).map((client, i) => (
            <div
              key={i}
              className="client-card flex-shrink-0 w-[200px] h-[120px] rounded-xl bg-white border border-[#00f0ff]/30 hover:border-[#ff2f92] hover:shadow-xl transition-all flex items-center justify-center"
            >
              <Image
                src={client.img}
                alt="Client Logo"
                width={140}
                height={80}
                className="object-contain"
              />
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
          className="inline-flex items-center gap-3 px-7 py-3 rounded-lg font-semibold text-white
          bg-gradient-to-r from-[#F028C2] to-[#2D96EB]
          hover:scale-105 transition-all"
        >
          Explore More <span className="transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Reveal>

  </div>
</section>

{/* ================= FAQ ================= */}
<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold text-center">
      Have Any <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">Questions?</span>
    </h2>
    <p className="mt-4 text-lg text-center text-black/70 max-w-3xl mx-auto">
      Explore our FAQ's below.
    </p>

    <div className="mt-12 space-y-4">

      {[
        {
          question: "How long does logo design take?",
          answer: "Our typical timeline is 1–2 weeks, depending on the complexity of your project and how quickly we receive your feedback.",
        },
        {
          question: "What if I don’t like any of the initial designs?",
          answer: "We provide unlimited revisions and work closely with you until you are satisfied with the final logo.",
        },
        {
          question: "Do I own the copyright to my logo?",
          answer: "Yes! Once delivered, the logo is 100% yours, and you hold full copyright for all use.",
        },
        {
          question: "What file formats will I receive?",
          answer: "You will receive your logo in AI, SVG, PNG, JPEG, and PDF formats — ready for both print and digital.",
        },
      ].map((item, i) => (
        <details key={i} className="group border border-black/10 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all">
          <summary className="flex justify-between items-center font-semibold text-black text-lg list-none">
            {item.question}
            <span className="ml-2 transition-transform duration-300 group-open:rotate-45">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff2f92]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </summary>
          <p className="mt-2 text-black/70 text-sm leading-relaxed">
            {item.answer}
          </p>
        </details>
      ))}

    </div>
  </div>
</section>


      <style jsx>{`
        .glass-soft {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
        }

        .form-input-soft {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(0,0,0,0.1);
          color: #000;
          outline: none;
        }

        .form-input-soft::placeholder {
          color: rgba(0,0,0,0.4);
        }
          .icon-soft {
    width: 32px;
    height: 32px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;}
      `}</style>
    </main>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
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
                Custom Logo Design That
                <span className="block bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] bg-clip-text text-transparent">
                  Captures Your Brand’s Identity
                </span>
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

      {/* ================= WHY A STRONG LOGO MATTERS ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold">
              Why a Strong Logo Matters for Your Brand
            </h2>
            <p className="mt-4 text-black/70 max-w-3xl mx-auto">
              Your logo is often the first impression of your business — let’s make it unforgettable. At NShine, we blend strategy and creativity to create logos that are not only visually stunning but deeply connected to your brand’s purpose. Whether you’re a startup or an established brand, a well-designed logo helps build trust, recognition, and loyalty.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="text-2xl font-semibold mt-12 mb-6">Here’s why getting it right matters</h3>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
              {[
                {
                  title: "Your logo is your business’s handshake",
                  desc: "Make it firm, confident, and unforgettable."
                },
                {
                  title: "Customers decide in seconds",
                  desc: "A great logo can win their trust before they even read your name."
                },
                {
                  title: "Stand out or get lost",
                  desc: "In a sea of competitors, a unique logo is your beacon."
                },
                {
                  title: "It’s not just art, it’s strategy",
                  desc: "A logo shapes perception and drives real business results."
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-black/10 bg-white hover:shadow-xl transition">
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-black/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
{/* ================= BRAND GROWTH HERO CTA ================= */}
<section className="min-h-[80vh] flex items-center bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
  <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT */}
    <div>
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-black">
  Custom Logo Design That <br />
  <span className="text-black/70">
    Grows Your Brand
  </span>
</h1>

      </Reveal>

      <Reveal delay={120}>
        <p className="mt-5 max-w-xl text-black/60 text-base leading-relaxed">
  Our creative branding experts craft distinctive logo identities that build
  credibility, recognition and long-term trust for your business.
</p>

      </Reveal>

      {/* Dual CTA */}
      <Reveal delay={220}>
        <div className="mt-10 flex flex-wrap gap-5">

          <Link
  href="/contact"
  className="inline-flex items-center gap-3 px-7 py-3 rounded-lg font-semibold text-white
  bg-gradient-to-r from-[#F028C2] to-[#2D96EB]
  hover:scale-105 transition-all shadow-lg"
>
  Get Free Brand Consultation →
</Link>


          <Link
            href="/case-studies"
            className="px-8 py-3 rounded-xl font-semibold border border-black/20 bg-white/70 backdrop-blur-md hover:bg-white transition"
          >
            View Case Studies
          </Link>

        </div>
      </Reveal>
    </div>

    {/* RIGHT IMAGE */}
    <Reveal delay={200}>
  <div className="relative max-w-md mx-auto">
    <Image
      src="/images/logodesign.png"
      alt="Professional Logo Design"
      width={460}
      height={380}
      className="rounded-2xl shadow-xl"
    />
  </div>
</Reveal>


  </div>
</section>

{/* ================= CASE STUDIES ================= */}
<section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
        Case Study &{" "}
        <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
          Proven Brand Wins
        </span>
      </h2>
      <p className="mt-4 text-center text-black/70 max-w-3xl mx-auto">
        How strategic logo branding transforms businesses and builds lasting brand power.
      </p>
    </Reveal>

    <div className="grid md:grid-cols-2 gap-12 mt-20">

      {[
        {
          name: "One Dental Group",
          img: "/images/dental.png",
          desc: "A sleek and vibrant logo crafted for a dental group, reflecting professionalism and care."
        },
        {
          name: "IGLO Med Spa",
          img: "/images/iglo.png",
          desc: "A serene and elegant logo embodying tranquility, beauty, and holistic wellness."
        },
        {
          name: "PenoFill",
          img: "/images/penofill.png",
          desc: "Modern, bold logo representing strength, precision, and sealing expertise."
        },
        {
          name: "NS Constructions",
          img: "/images/nsconstructions.png",
          desc: "A contemporary logo reflecting durability, innovation, and construction excellence."
        },
      ].map((c, i) => (
        <Reveal key={i} delay={i * 120}>
          <div className="group bg-white rounded-2xl border border-[#00f0ff]/30 hover:border-[#ff2f92] hover:shadow-2xl transition-all p-8">

            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] flex items-center justify-center shadow-inner">
                <Image src={c.img} alt={c.name} width={80} height={80} className="object-contain" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-black">{c.name}</h3>
                <p className="text-black/60 text-sm mt-2 leading-relaxed">{c.desc}</p>
              </div>
            </div>

            <div className="mt-6">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#ff2f92]">
                Logo Branding Success
              </span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>

  </div>
</section>
{/* ================= FINAL LOGO CTA ================= */}
<section className="py-28 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">

  {/* soft glow blobs */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
  <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl" />

  <div className="relative max-w-6xl mx-auto px-6 text-center">

    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-black">
        Let’s Bring Your{" "}
        <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
          Brand to Life
        </span>
      </h2>
    </Reveal>

    <Reveal delay={150}>
      <p className="mt-4 text-black/70 max-w-2xl mx-auto">
        Ready to create a logo that speaks volumes? We’d love to be part of your brand journey.
      </p>
    </Reveal>

    <Reveal delay={300}>
      <div className="mt-10 flex justify-center flex-wrap gap-5">

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-3 rounded-lg font-semibold text-white
          bg-gradient-to-r from-[#F028C2] to-[#2D96EB]
          hover:scale-105 transition-all shadow-xl"
        >
          Get Free Brand Consultation →
        </Link>

        <Link
          href="/case-studies"
          className="px-8 py-3 rounded-lg font-semibold border border-black/20 bg-white/70 backdrop-blur-md hover:bg-white transition"
        >
          View Case Studies
        </Link>

      </div>
    </Reveal>

  </div>
</section>
{/* ================= OUR LOGO DESIGN SERVICES ================= */}
<section className="py-24 bg-white">

  {/* glow blobs */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
  <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6">

    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
        Our <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">Logo Design Services</span>
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-black/70">
        Premium branding solutions that build authority, recognition and trust.
      </p>
    </Reveal>

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">

      {[
        { title: "Brand Discovery & Strategy", img: "/images/strategy.png", desc: "Deep research into your values, mission and audience to craft a logo that truly reflects your brand." },
        { title: "Custom Logo Design", img: "/images/logodesign.png", desc: "100% original logo concepts — no templates, no shortcuts." },
        { title: "Iconic Logo Design", img: "/images/iconic.png", desc: "Timeless and simple logos designed to leave a lasting impression." },
        { title: "Wordmark / Typographic Logos", img: "/images/typography.png", desc: "Elegant word-based logos that are clean, professional and memorable." },
        { title: "Flyer Design", img: "/images/flyer.png", desc: "High-impact flyers that capture attention and drive action." },
        { title: "Social Media Cards", img: "/images/social.png", desc: "Vibrant creatives that boost engagement and brand visibility." },
      ].map((service, i) => (
        <Reveal key={i} delay={i * 120}>
  <div className="group h-[340px] flex flex-col justify-between rounded-xl border border-[#00f0ff]/25 bg-white hover:border-[#ff2f92] hover:shadow-xl hover:-translate-y-[2px] transition-all">

    {/* icon */}
    <div className="pt-7 flex justify-center">
      <Image src={service.img} alt={service.title} width={80} height={80} className="object-contain" />
    </div>

    {/* content */}
    <div className="px-6 text-center flex-1">
      <h3 className="text-base font-semibold text-black mb-2 leading-tight">{service.title}</h3>
      <p className="text-black/65 text-sm leading-relaxed">{service.desc}</p>
    </div>

    {/* CTA */}
    <div className="pb-6 text-center">
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff2f92] group-hover:text-[#2D96EB]"
      >
        Learn More <span className="transition group-hover:translate-x-1">→</span>
      </Link>
    </div>

  </div>
</Reveal>

      ))}

    </div>
  </div>
</section>

{/* ================= PROCESS ================= */}
<section className="py-24 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff]">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-bold">
      How Our <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">Process</span> Works
    </h2>

<p className="mt-6 max-w-4xl mx-auto text-base md:text-lg leading-relaxed text-black/70">
      Our collaborative workflow from discovery to final delivery.
    </p>

    <div className="grid md:grid-cols-5 gap-6 mt-16">

      <div className="bg-white p-6 rounded-xl border text-center hover:shadow-lg transition">
        <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white font-bold flex items-center justify-center mb-3">1</div>
        <h3 className="font-semibold text-sm">Discovery</h3>
        <p className="text-sm text-black/60 mt-2 leading-relaxed">Understanding your brand and goals.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border text-center hover:shadow-lg transition">
        <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white font-bold flex items-center justify-center mb-3">2</div>
        <h3 className="font-semibold text-sm">Sketching</h3>
        <p className="text-sm text-black/60 mt-2 leading-relaxed">Initial creative exploration.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border text-center hover:shadow-lg transition">
        <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white font-bold flex items-center justify-center mb-3">3</div>
        <h3 className="font-semibold text-sm">Proposals</h3>
        <p className="text-sm text-black/60 mt-2 leading-relaxed">2 to 3 logo concepts.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border text-center hover:shadow-lg transition">
        <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white font-bold flex items-center justify-center mb-3">4</div>
        <h3 className="font-semibold text-sm">Revisions</h3>
        <p className="text-sm text-black/60 mt-2 leading-relaxed">Unlimited refinements.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border text-center hover:shadow-lg transition">
        <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white font-bold flex items-center justify-center mb-3">5</div>
        <h3 className="font-semibold text-sm">Delivery</h3>
        <p className="text-sm text-black/60 mt-2 leading-relaxed">AI, SVG, PNG, PDF formats.</p>
      </div>

    </div>
  </div>
</section>
{/* ================= WHY CHOOSE NSHINE ================= */}
<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold text-center">
      Why Choose <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">NShine</span> for Logo Design?
    </h2>

    <p className="mt-4 text-lg max-w-3xl mx-auto text-center text-black/70">
      We combine creativity, strategy, and precision to deliver logos that truly represent your brand, helping you stand out and build trust with your audience.
    </p>

    <div className="mt-12 grid md:grid-cols-3 gap-6">

      {[
        "100% Custom Designs",
        "Unlimited Revisions",
        "Brand Strategy Focused",
        "Dedicated Designers",
        "Delivered in All Formats",
        "Personalized Support",
      ].map((title, i) => (
        <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-black/10 hover:shadow-md transition-all">
          {/* Single consistent icon for all items */}
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#ff2f92] via-[#FF6F61] to-[#2D96EB] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          {/* Text */}
          <h3 className="text-black font-semibold text-md">{title}</h3>
        </div>
      ))}

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
      `}</style>
    </main>
  );
}

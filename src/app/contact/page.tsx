"use client";

import Head from "next/head";
import Reveal from "@/components/Reveal";
import { useRef, useState, useEffect } from "react";

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0);
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
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}</span>;
}

export default function ContactPage() {
  // ================= STATE MANAGEMENT =================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with actual form submission API logic
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <>
      <Head>
        <title>
          Contact Zentrix Tech | SEO, Digital Marketing, Ads & Web Development
        </title>
        <meta
          name="description"
          content="Reach Zentrix Tech to grow your business with SEO, Google Ads, Meta Ads, branding, and high-converting websites. Get a free consultation today!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zentrix-tech.com/contact" />

        {/* ===== Open Graph / Social Sharing ===== */}
        <meta property="og:title" content="Contact Zentrix Tech – Grow Your Business Online" />
        <meta property="og:description" content="Full-stack digital marketing services including SEO, Google & Meta Ads, branding, and web development. Free growth audit available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zentrix-tech.com/contact" />
        <meta property="og:image" content="https://zentrix-tech.com/lo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Zentrix Tech – Grow Your Business Online" />
        <meta name="twitter:description" content="Full-stack digital marketing services including SEO, Google & Meta Ads, branding, and web development. Free growth audit available." />
        <meta name="twitter:image" content="https://zentrix-tech.com/lo.png" />

        {/* ===== Structured Data JSON-LD ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Zentrix Tech",
              "image": "https://zentrix-tech.com/lo.png",
              "url": "https://zentrix-tech.com",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Marketing St",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500001",
                "addressCountry": "IN"
              },
              "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
              "sameAs": [
                "https://www.linkedin.com/company/zentrix-tech",
                "https://www.instagram.com/zentrix-tech"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer support",
                "areaServed": "IN",
                "availableLanguage": ["English"]
              },
              "potentialAction": {
                "@type": "ContactAction",
                "target": "https://zentrix-tech.com/contact",
                "name": "Request a free consultation"
              }
            }),
          }}
        />
      </Head>

      {/* ================= CONTACT SECTION ================= */}
      <section
        className="py-18 md:py-12 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white relative overflow-hidden"
        aria-labelledby="contact-heading"
      >
        {/* Background blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <article>
            <Reveal>
              <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold leading-tight">
                Get in Touch With <br />
                <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
                  Our Digital Marketing Experts
                </span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 text-white/70 max-w-xl">
                Full‑stack digital marketing services to boost search visibility, capture quality leads, and scale revenue. Harness the power of SEO, Google & Meta ads, strategic content, high‑converting websites, and expert brand building.
              </p>
            </Reveal>

            {/* STATS */}
            <section className="grid grid-cols-3 gap-8 mt-12" aria-label="Company performance statistics">
              {[
                { v: 340, t: "Website Traffic Growth", suffix: "%" },
                { v: 450, t: "Qualified Lead Increase", suffix: "%" },
                { v: 4, t: "Organic Revenue Growth", suffix: "X" },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="glass stat-card rounded-2xl border border-white/15 flex flex-col items-center justify-center">
                    <div className="stat-number flex items-center justify-center">
                      <h3 className="text-4xl font-extrabold bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
                        <CountUp end={s.v} />{s.suffix}
                      </h3>
                    </div>
                    <p className="stat-label text-xs uppercase tracking-widest text-white/60 text-center">
                      {s.t}
                    </p>
                  </div>
                </Reveal>
              ))}
            </section>
          </article>

          {/* RIGHT FORM */}
          <Reveal delay={250}>
            <form
              className="glass rounded-3xl p-10 space-y-5 border border-white/10 shadow-xl"
              onSubmit={handleSubmit}
            >
              <h2 className="text-2xl font-bold mb-2 text-center">
                Get a Free Growth Audit
              </h2>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name *"
                className="form-input"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address *"
                className="form-input"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number *"
                className="form-input"
              />
              <input
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website URL (Optional)"
                className="form-input"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-input custom-select"
              >
                <option value="">Select Service</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SEO">SEO</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Web Development">Web Development</option>
                <option value="Branding & Design">Branding & Design</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                className="form-input h-28 resize-none"
              />
              <p className="text-xs text-white/60 text-center">
                🔒 We respect your privacy. No spam. No sales pressure.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] font-semibold hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit →"}
              </button>

              {success && (
                <p className="text-green-400 font-bold text-center animate-pulse">
                  ✓ Success! We will contact you shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        {/* ===== STYLES ===== */}
        <style jsx>{`
          .glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
          }
          .form-input {
            width: 100%;
            padding: 14px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: white;
          }
          .form-input::placeholder {
            color: rgba(255, 255, 255, 0.6);
          }
          .form-input:focus {
            border-color: #00f0ff;
            outline: none;
          }
          .stat-card {
            height: 150px;
            padding: 24px;
          }
          .stat-number {
            height: 48px;
            margin-bottom: 8px;
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
          }
          .custom-select {
            appearance: none;
            background: 
              linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02)),
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M7 10l5 5 5-5'/%3E%3C/svg%3E")
                no-repeat right 16px center;
            background-size: 16px;
          }
          .custom-select option {
            background: #020617;
            color: white;
          }
          .custom-select:focus {
            border-color: #ff2f92;
            box-shadow: 0 0 0 1px rgba(255,47,146,0.6);
          }
          @media (max-width: 640px) {
            .stat-card {
              height: auto;
              padding: 20px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
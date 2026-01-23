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
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        service: "",
        message: "",
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Digital Marketing Experts | SEO, Ads & Growth Strategy</title>
        <meta
          name="description"
          content="Get in touch with our digital marketing experts for SEO, Google Ads, web development, and branding."
        />
      </Head>

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
                Full‑stack digital marketing services to boost search visibility, capture quality leads, and scale revenue.
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
            transition: border-color 0.3s ease;
          }

          .form-input:focus {
            border-color: #00f0ff;
            outline: none;
          }

          .stat-card {
            height: 150px;
            padding: 24px;
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
        `}</style>
      </section>
    </>
  );
}
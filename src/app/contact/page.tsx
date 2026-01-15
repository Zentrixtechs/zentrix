"use client";
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

export default function FreeAuditSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white relative overflow-hidden">
      
      {/* Floating Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT + STATS */}
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Best Digital Marketing Agency <br />
              <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
                Grow Your Business With Us
              </span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 text-white/70 max-w-xl">
              Get a free audit & see exactly how to increase traffic, leads, and revenue.
            </p>
          </Reveal>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              { v: 340, t: "Website Traffic" },
              { v: 450, t: "Lead Increase" },
              { v: 4, t: "Organic Revenue X" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="glass p-6 rounded-2xl text-center border border-white/10 hover:scale-105 transition-transform">
                  <h3 className="text-4xl font-extrabold text-[#00f0ff]">
                    <CountUp end={s.v} />{s.v === 4 ? "X" : "%"}
                  </h3>
                  <p className="text-xs uppercase tracking-widest mt-2 text-white/60">{s.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <Reveal delay={250}>
          <form className="glass rounded-3xl p-10 space-y-5 border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Get Free Marketing Audit
            </h3>

            <input placeholder="Name *" className="form-input" />
            <input placeholder="Email *" className="form-input" />
            <input placeholder="Mobile *" className="form-input" />
            <input placeholder="Website (optional)" className="form-input" />
            
            <select className="form-input">
              <option>Select Service</option>
              <option>SEO</option>
              <option>Google Ads</option>
              <option>Web Development</option>
              <option>Social Media</option>
            </select>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] font-semibold hover:scale-105 transition-transform">
              Get Free Audit →
            </button>
          </form>
        </Reveal>

      </div>

      <style jsx>{`
        .glass {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
        }

        .form-input {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          outline: none;
          transition: all 0.3s ease;
        }

        .form-input::placeholder {
          color: rgba(255,255,255,0.6);
        }

        .form-input:focus {
          border-color: #00f0ff;
          background: rgba(255,255,255,0.1);
          box-shadow: 0 0 10px rgba(0,240,255,0.3);
        }
      `}</style>
    </section>
  );
}

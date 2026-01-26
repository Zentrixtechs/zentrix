"use client";

import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/Reveal";

const DATA = [
  { value: 5, label: "Happy Clients" },
  { value: 5, label: "Projects Delivered" },
  { value: 1, label: "Years Experience" },
];

export default function Stats() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff]"
      aria-labelledby="stats-heading"
    >
      {/* SEO-only section heading */}
      <h2 id="stats-heading" className="sr-only">
        Zentrix Tech Company Achievements and Business Statistics
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        {DATA.map((s, i) => (
          <Reveal key={i} delay={i * 120}>
            <div
              className="bg-white rounded-2xl border border-[#00f0ff]/30 p-10 shadow-xl
                         hover:border-[#ff2f92] hover:shadow-2xl transition-all"
              role="group"
              aria-label={`${s.value}+ ${s.label}`}
            >
              <h3 className="text-5xl font-extrabold bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
                <CountUp end={s.value} />+
              </h3>

              <p className="mt-3 uppercase text-sm tracking-widest text-black/70">
                {s.label}
              </p>

              {/* SEO support text (not visible) */}
              <span className="sr-only">
                Zentrix Tech has achieved over {s.value} {s.label.toLowerCase()}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
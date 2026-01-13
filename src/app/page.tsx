"use client"; // ⚠ Required because we use animations and effects

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";

// Images
const HERO_IMAGE = "/images/growth.png"; // uploaded image
const ICON_IMAGE = "/images/lo.png";
const SERVICE_ICONS = [
  { title: "Google Ads", img: "/images/metaads.png" },
  { title: "SEO", img: "/images/seo.png" },
  { title: "Logo Design", img: "/images/logodesign.png" },
  { title: "Web Development", img: "/images/webdevelopment.png" },
  { title: "Meta Ads", img: "/images/googleads.png" },
  { title: "LinkedIn Ads", img: "/images/linkedinads.png" },
];

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
export default function Home() {
  const servicesIcons = Array(7).fill(ICON_IMAGE);
  const logoColors = ["border-[#ff2f92]", "border-[#00f0ff]", "border-[#3b82f6]"];

  return (
    <main className="overflow-x-hidden bg-white">

      {/* ================= HERO ================= */}
<section className="bg-white min-h-[80vh] flex items-center">
<div className="max-w-7xl mx-auto px-6 pt-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <div>
              <Reveal>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
                  Grow Your Business <br />
                  with{" "}
                  <span className="bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] bg-clip-text text-transparent">
                    Zentrix
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-6 max-w-xl text-black/70">
                  We help businesses scale using performance-driven digital
                  marketing, web development, SEO, and advertising solutions.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-10 flex gap-4 flex-col sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-lg text-white text-sm font-semibold
  bg-gradient-to-r from-[#F028C2] to-[#2D96EB]
  transition-all duration-300 hover:scale-[1.05]
  hover:shadow-[0_0_20px_rgba(240,40,194,0.4)]"
                  >
                    <span>Contact Us</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>


                </div>
              </Reveal>
            </div>

            {/* HERO IMAGE */}
            <Reveal delay={200}>
              <div className="relative w-full max-w-lg mx-auto">
                <Image
                  src={HERO_IMAGE}
                  alt="Business Growth"
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-xl shadow-xl"
                />
              </div>
            </Reveal>

          </div>

        </div>
      </section>
      {/* ================= STATS ================= */}
<section className="py-24 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
    <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl" />
  </div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
    {[{ value: 500, label: "Happy Clients" }, { value: 1000, label: "Projects Delivered" }, { value: 10, label: "Years Experience" }].map((item, i) => (
      <Reveal key={i} delay={i * 120}>
        <div className="bg-white border border-[#00f0ff]/30 rounded-2xl py-10 shadow-xl hover:border-[#ff2f92] hover:shadow-2xl hover:scale-105 transition-all">
          <h3 className="text-5xl font-extrabold bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
            <CountUp end={item.value} />+
          </h3>
          <p className="mt-3 text-black/60 tracking-widest uppercase text-sm">
            {item.label}
          </p>
        </div>
      </Reveal>
    ))}
  </div>
</section>

{/* ================= MARQUEE ================= */}
<section className="py-20 bg-white">
  <Reveal>
    <div className="overflow-hidden">
      <div className="flex animate-marquee gap-8 items-center">
        {SERVICE_ICONS.concat(SERVICE_ICONS).map((service, i) => (
          <div
            key={i}
            className={`service-card flex-shrink-0 p-5 rounded-xl border ${logoColors[i % logoColors.length]} bg-white text-center`}
          >
            <Image src={service.img} alt={service.title} width={160} height={160} className="mx-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  </Reveal>
</section>


      {/* ================= OUR CORE SERVICES ================= */}
      <section className="py-28 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
              Our <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-black/70">
              Our team of digital experts has navigated Web Design, Content, SEO, PPC Advertising and Social Media —
              turning countless ideas into scalable digital success stories.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10 mt-20">

            {[
              {
                title: "Digital Marketing",
                img: "/images/metaads.png",
                desc: "Grow your business online with SEO, social, email and paid advertising that drives leads and revenue.",
                link: "/marketing/digital-marketing",
              },
              {
                title: "Web Development",
                img: "/images/webdevelopment.png",
                desc: "High-converting websites, UX designs and landing pages that increase trust and conversions.",
                link: "/services/websites-development",
              },
              {
                title: "Logo Design & Branding",
                img: "/images/logodesign.png",
                desc: "Unique brand identity, logos and visual systems that build authority and recall.",
                link: "/services/logo-design",
              },
              {
                title: "SEO",
                img: "/images/seo.png",
                desc: "Search engine optimization that ranks your business and brings consistent organic leads.",
                link: "/services/seo",
              },
              {
                title: "Google Ads",
                img: "/images/googleads.png",
                desc: "High ROI Google Ads campaigns with precision keyword and audience targeting.",
                link: "/services/ads/google-ads",
              },
              {
                title: "Facebook & Instagram Ads",
                img: "/images/metaads.png",
                desc: "Creative paid ads that drive awareness, leads and sales on Meta platforms.",
                link: "/services/ads/meta-ads",
              },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group h-[520px] flex flex-col justify-between rounded-2xl border border-[#00f0ff]/30 bg-white hover:border-[#ff2f92] hover:shadow-2xl transition-all">

                  {/* Image */}
                  <div className="p-6 flex justify-center">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={140}
                      height={140}
                      className="object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-8 flex-1">
                    <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                    <p className="text-black/70 text-sm leading-relaxed">{service.desc}</p>
                  </div>

                  {/* CTA */}
                  <div className="px-8 pb-8">
                    <Link
                      href={service.link}
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
      {/* ================= 360° MARKETING FUNNEL ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              We Offer a{" "}
              <span className="bg-gradient-to-r from-[#F028C2] to-[#2D96EB] bg-clip-text text-transparent">
                360° Marketing Plan
              </span>{" "}
              for Your Growth
            </h2>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-16 flex justify-center">
              <Image
                src="/images/360stratergy.jpeg"
                alt="360 Marketing Funnel"
                width={850}
                height={900}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </Reveal>

        </div>
      </section>


{/* ================= PRICING ================= */}
<section className="py-32 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">

  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
    <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl" />
  </div>

  <div className="max-w-7xl mx-auto px-6 relative">

    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
        Pricing <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">Packages</span>
      </h2>
      <p className="mt-4 text-center text-black/70">Choose Your Ideal Marketing Plan</p>
    </Reveal>

    <div className="grid md:grid-cols-3 gap-12 mt-20">

      {[
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
        },
      ].map((plan, i) => (
        <Reveal key={i} delay={i * 120}>
          <div className="pricing-card h-[640px] flex flex-col justify-between rounded-2xl bg-white border border-[#00f0ff]/30 hover:border-[#ff2f92] hover:shadow-2xl transition-all p-8">

            <div className="text-center">
              <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white">
                Popular
              </span>
              <h3 className="text-xl font-bold">{plan.title}</h3>

              <p className="mt-4 text-black/40 line-through">{plan.old}</p>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
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
              className="block text-center py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#F028C2] to-[#2D96EB] hover:scale-105 transition"
            >
              {plan.cta}
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
{/* ================= TRUSTED CLIENTS ================= */}
<section className="py-28 bg-white relative overflow-hidden">

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

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl font-bold">
              Ready to Grow with Zentrix?
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <Link
              href="/contact"
              className="inline-block mt-8 px-8 py-4 bg-white text-black rounded-lg font-semibold"
            >
              Book Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ================= MARQUEE CSS ================= */}
      <style jsx>{`
        .service-card {
          width: 260px;
          min-width: 260px;
          height: 180px;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 20s linear infinite;
        }
          .service-card {
  width: 260px;
  min-width: 260px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

      `}</style>

    </main>
  );
}
function FunnelStep({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all">
      <h3
        className={`text-xl font-bold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
      >
        {title}
      </h3>

      <ul className="space-y-2 text-black/80">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${color}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


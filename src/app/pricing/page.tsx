"use client";

import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";
import Reveal from "@/components/Reveal";

// ==================== GRADIENT COLORS ====================
const GRADIENTS = {
  primary: "from-[#ff2f92] via-[#00f0ff] to-[#3b82f6]",
  heading: "from-[#ff2f92] to-[#2D96EB]",
  cta: "from-[#F028C2] to-[#2D96EB]",
};

/* ======================================================
    PAGE
====================================================== */
export default function PricingPage() {
  useEffect(() => {
    // Fallback SEO update for older crawlers
    document.title = "Zentrix Digital Marketing | Pricing Packages";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore Zentrix Digital Marketing pricing packages for website design, SEO, and Ads Management. Transparent rates, custom plans, and maximum business value."
      );
    }
  }, []);

  return (
    <>
      {/* ================= SEO META ================= */}
      <Head>
        <title>Zentrix Digital Marketing | Pricing Packages</title>
        <meta
          name="description"
          content="Explore Zentrix Digital Marketing pricing packages for website design, SEO, and Ads Management. Transparent rates, custom plans, and maximum business value."
        />
        <link rel="canonical" href="https://zentrix-tech.com/pricing" />

        {/* Open Graph */}
        <meta property="og:title" content="Zentrix Digital Marketing | Pricing Packages" />
        <meta property="og:description" content="Discover Zentrix Digital Marketing's pricing packages for websites, SEO, and Ads Management. Tailored plans for business growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zentrix-tech.com/pricing" />
        <meta property="og:image" content="https://zentrix-tech.com/lo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zentrix Digital Marketing | Pricing Packages" />
        <meta name="twitter:description" content="Explore our pricing packages for web, SEO, and Ads Management services. Transparent and flexible plans for your business growth." />
        <meta name="twitter:image" content="https://zentrix-tech.com/lo.png" />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [

        /* ================= ORGANIZATION ================= */
        {
          "@type": "Organization",
          "@id": "https://zentrix-tech.com/#organization",
          "name": "Zentrix Digital Marketing",
          "url": "https://zentrix-tech.com",
          "logo": "https://zentrix-tech.com/lo.png",
          "sameAs": [
            "https://www.facebook.com/",
            "https://www.instagram.com/",
            "https://www.linkedin.com/"
          ]
        },
        /* ================= WEBPAGE ================= */
        {
          "@type": "WebPage",
          "@id": "https://zentrix-tech.com/pricing#webpage",
          "url": "https://zentrix-tech.com/pricing",
          "name": "Digital Marketing Pricing Packages | Zentrix",
          "description":
            "Explore Zentrix Digital Marketing pricing packages for website design, SEO services, Google Ads and Meta Ads management. Transparent pricing with no hidden costs.",
          "isPartOf": {
            "@id": "https://zentrix-tech.com/#organization"
          }
        },

        /* ================= SERVICE ================= */
        {
          "@type": "Service",
          "name": "Digital Marketing Services",
          "provider": {
            "@id": "https://zentrix-tech.com/#organization"
          },
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Pricing",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Website Design Package",
                "price": "1500",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "SEO Management Package",
                "price": "249",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Ads Management Package",
                "price": "15%",
                "priceCurrency": "USD"
              }
            ]
          }
        },
        {
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://zentrix-tech.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pricing",
      "item": "https://zentrix-tech.com/pricing"
    }
  ]
}

      ]
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What factors influence the pricing of Zentrix Digital Marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing depends on service scope, business goals, competition level, and required customization. Zentrix offers flexible pricing based on your needs."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden fees in your pricing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Zentrix Digital Marketing follows 100% transparent pricing with no hidden costs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer custom digital marketing packages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide custom pricing packages based on your goals, industry, and budget."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a minimum contract period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some services like SEO require a minimum duration to show results, while others are flexible."
          }
        }
      ]
    }),
  }}
/>

      </Head>

      {/* ================= PAGE SECTIONS ================= */}
      <PricingHero />
      <PopularPricing />
      <WebsitePricing />
      <SEOPricing />
      <AdsPricing />
      <MetaAdsDetailed/>
      <GoogleAdsDetailed/>
      {/* ================== PRICING RESOURCES ================== */}
<section className="py-24 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">
  
  {/* Background blobs */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl" />
  </div>

  <div className="max-w-7xl mx-auto px-6 relative">
    
    {/* Header */}
    <Reveal>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
        Pricing{" "}
        <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
          Guides & Comparisons
        </span>
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-center text-black/70 text-base md:text-lg">
        Explore in-depth pricing guides, SEO cost breakdowns, and ad platform
        comparisons to confidently choose the right marketing plan.
      </p>
    </Reveal>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10 mt-20">

      {/* Card 1 */}
      <Reveal delay={100}>
        <Link
          href="/digital-marketing-pricing-india"
          className="group block h-full rounded-2xl border border-[#00f0ff]/30 bg-white p-8 hover:border-[#ff2f92] hover:shadow-2xl transition-all"
        >
          <h3 className="text-2xl font-semibold mb-3 text-black group-hover:text-[#2D96EB] transition">
            Digital Marketing Pricing in India
          </h3>
          <p className="text-black/70 text-base leading-relaxed mb-6">
            A complete guide to monthly digital marketing costs, packages, and
            pricing trends for Indian businesses.
          </p>

          <span className="inline-flex items-center gap-1 text-[#2D96EB] font-medium">
            Read Guide
            <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </Reveal>

      {/* Card 2 */}
      <Reveal delay={200}>
        <Link
          href="/seo-pricing-india"
          className="group block h-full rounded-2xl border border-[#00f0ff]/30 bg-white p-8 hover:border-[#ff2f92] hover:shadow-2xl transition-all"
        >
          <h3 className="text-2xl font-semibold mb-3 text-black group-hover:text-[#2D96EB] transition">
            SEO Pricing in India
          </h3>
          <p className="text-black/70 text-base leading-relaxed mb-6">
            Understand SEO monthly costs, local vs enterprise pricing, and what
            deliverables matter for long-term rankings.
          </p>

          <span className="inline-flex items-center gap-1 text-[#2D96EB] font-medium">
            View SEO Costs
            <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </Reveal>

      {/* Card 3 */}
      <Reveal delay={300}>
        <Link
          href="/google-ads-vs-meta-ads-cost"
          className="group block h-full rounded-2xl border border-[#00f0ff]/30 bg-white p-8 hover:border-[#ff2f92] hover:shadow-2xl transition-all"
        >
          <h3 className="text-2xl font-semibold mb-3 text-black group-hover:text-[#2D96EB] transition">
            Google Ads vs Meta Ads Cost
          </h3>
          <p className="text-black/70 text-base leading-relaxed mb-6">
            Compare Google Ads and Meta Ads pricing, CPCs, and ROI to decide
            which platform fits your growth goals.
          </p>

          <span className="inline-flex items-center gap-1 text-[#2D96EB] font-medium">
            Compare Platforms
            <span className="transition group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </Reveal>

    </div>
  </div>
</section>

      <PricingFAQ />
    </>
  );
}

/* ================== HERO ================== */
function PricingHero() {
  return (
    <section className="py-6 bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] text-white text-center shadow-md">
      <Reveal>
<h1 className="text-3xl md:text-4xl font-bold">
  Digital Marketing Pricing Packages
</h1>
      </Reveal>
    </section>
  );
}

/* ---------- POPULAR PRICING ---------- */
function PopularPricing() {
  const plans = [
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

  return (
    <section className="py-12 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
            Popular{" "}
            <span
              className={`bg-gradient-to-r ${GRADIENTS.heading} bg-clip-text text-transparent`}
            >
              Packages
            </span>
          </h2>
          <p className="mt-4 text-center text-black/70">
            Our most chosen marketing plans for business growth
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {plans.map((plan, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="pricing-card h-[640px] flex flex-col justify-between rounded-2xl bg-white border border-[#00f0ff]/30 hover:border-[#ff2f92] hover:shadow-2xl transition-all p-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">
                <div className="text-center">
                  {plan.popular && (
                    <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white">
                      Popular
                    </span>
                  )}
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
                    aria-label="Contact Zentrix Digital Marketing for pricing"
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

/* ---------- WEBSITE PRICING ---------- */
function WebsitePricing() {
  const plans = [
    {
      title: "Starter Website",
      old: "$1,800",
      price: "$1,500",
      unit: "One Time",
      features: [
        "Up to 5 pages – Home, About, Services, Contact & Privacy Policy",
        "3 Dedicated Service Pages",
        "Expert UI/UX Design",
        "$100 per Additional Page",
        "Mobile Responsive Design",
        "Basic SEO Setup",
      ],
      popular: false,
    },
    {
      popular: true,
      title: "Standard Website",
      old: "$3,500",
      price: "$3,000",
      unit: "One Time",
      features: [
        "Up to 5 pages – Home, About, Services, Contact & Privacy Policy",
        "5 Dedicated Service Pages",
        "Conversion-Focused UX Design",
        "$100 per Additional Page",
        "Mobile Responsive Design",
        "On-Page SEO Optimization",
      ],
    },
    {
      title: "Advanced Website",
      old: "$5,400",
      price: "$5,000",
      unit: "One Time",
      features: [
        "Up to 10 pages – Including Bookings",
        "10 Dedicated Service Pages as per your needs",
        "High-Performance UX Design for Conversions",
        "$100 per Additional Page",
        "Advanced SEO Structure",
        "Speed & Performance Optimization",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-12 bg-white from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* ---------- HEADER ---------- */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
              Website Pricing Packages
            </span>
          </h2>
          <p className="mt-4 text-lg text-black/70 max-w-3xl mx-auto">
            Boost your online presence with our website pricing packages
            designed for growth, performance, and results.
          </p>
        </Reveal>

        {/* ---------- PRICING CARDS ---------- */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {plans.map((plan, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                className={`relative pricing-card flex flex-col justify-between
                rounded-2xl bg-white border border-[#00f0ff]/30
                hover:-translate-y-2 hover:border-[#ff2f92]
                hover:shadow-2xl transition-all duration-300 p-8 h-[520px]`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4
                    bg-gradient-to-r from-[#ff2f92] to-[#2D96EB]
                    text-white text-xs uppercase font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold">{plan.title}</h3>

                  <p className="mt-3 text-black/40 line-through">{plan.old}</p>
                  <p className="text-4xl font-extrabold
                    bg-gradient-to-r from-[#ff2f92] to-[#2D96EB]
                    bg-clip-text text-transparent">
                    {plan.price}
                  </p>
                  <p className="text-sm text-black/60">{plan.unit}</p>

                  <ul className="mt-6 space-y-2 text-sm text-black/70">
                    {plan.features.map((f, j) => (
                      <li key={j}>• {f}</li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                    aria-label="Contact Zentrix Digital Marketing for pricing"
                  className="mt-6 block py-3 rounded-lg font-semibold text-white
                    bg-gradient-to-r from-[#ff2f92] to-[#00f0ff]
                    hover:scale-105 transition-transform text-center"
                >
                  Get Started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- SEO + ADS PRICING ---------- */
function SEOPricing() {
  const plans = [
    { title: "Starter", price: "$249", unit: "Per Month", popular: false },
    { title: "Standard", price: "$449", unit: "Per Month", popular: true },
    { title: "Premium", price: "15%", unit: "of Ad Budget", popular: false },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            SEO &{" "}
            <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
              Ads Pricing
            </span>
          </h2>
          <p className="mt-4 text-center text-black/70 text-lg">
            Scalable SEO & paid marketing plans built for growth
          </p>
        </Reveal>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {plans.map((plan, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                className={`relative p-8 rounded-2xl text-center
                ${plan.popular
                  ? "bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white scale-105 shadow-2xl"
                  : "bg-white border border-[#00f0ff]/30 hover:border-[#ff2f92] hover:-translate-y-2 hover:shadow-2xl"}
                transition-all duration-300`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-white text-[#ff2f92]
                    text-xs px-3 py-1 rounded-full font-bold">
                    Popular
                  </span>
                )}

                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <p className={`text-4xl font-extrabold ${plan.popular ? "" : "bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent"}`}>
                  {plan.price}
                </p>
                <p className={`text-sm mt-1 ${plan.popular ? "opacity-90" : "text-black/60"}`}>
                  {plan.unit}
                </p>

                <Link
                  href="/contact"
                    aria-label="Contact Zentrix Digital Marketing for pricing"
                  className={`mt-8 block w-full py-3 rounded-lg font-semibold
                  ${plan.popular
                    ? "bg-white text-[#ff2f92]"
                    : "text-white bg-gradient-to-r from-[#ff2f92] to-[#00f0ff]"}
                  hover:scale-105 transition-transform`}
                >
                  Get Started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ADS PRICING ---------- */
function AdsPricing() {
  const plans = [
    { title: "Starter", price: "$249", unit: "Per Month", popular: false },
    { title: "Standard", price: "$449", unit: "Per Month", popular: true },
    { title: "Premium", price: "15%", unit: "of Ad Budget", popular: false },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Ads Management{" "}
            <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="mt-4 text-center text-black/70 text-lg">
            High-performance paid ad management built to scale
          </p>
        </Reveal>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {plans.map((plan, i) => (
            <Reveal key={i} delay={i * 120}>
              <div
                className={`relative p-8 rounded-2xl text-center
                ${plan.popular
                  ? "bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white scale-105 shadow-2xl"
                  : "bg-gray-50 border border-[#00f0ff]/30 hover:border-[#ff2f92] hover:-translate-y-2 hover:shadow-2xl"}
                transition-all duration-300`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-white text-[#ff2f92]
                    text-xs px-3 py-1 rounded-full font-bold">
                    Popular
                  </span>
                )}

                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <p className={`text-4xl font-extrabold ${plan.popular ? "" : "bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent"}`}>
                  {plan.price}
                </p>
                <p className={`text-sm mt-1 ${plan.popular ? "opacity-90" : "text-black/60"}`}>
                  {plan.unit}
                </p>

                <Link
                  href="/contact"
                    aria-label="Contact Zentrix Digital Marketing for pricing"
                  className={`mt-8 block w-full py-3 rounded-lg font-semibold
                  ${plan.popular
                    ? "bg-white text-[#ff2f92]"
                    : "text-white bg-gradient-to-r from-[#ff2f92] to-[#00f0ff]"}
                  hover:scale-105 transition-transform`}
                >
                  Get Started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================= ZENTRIX PRICING FAQ ================= */
function PricingFAQ() {
  const faqs = [
    {
      question: "What factors influence the pricing of Zentrix Digital Marketing services?",
      answer: "Our pricing is determined by several factors, including the scope of services required, project complexity, industry competitiveness, and your specific business goals. We customize our pricing packages to ensure you receive maximum value based on your needs.",
    },
    {
      question: "Are there any hidden fees in your pricing?",
      answer: "No. We believe in complete transparency. All costs are clearly outlined before the project begins, and there are no hidden charges or surprise fees.",
    },
    {
      question: "Can I get a custom quote for my digital marketing needs?",
      answer: "Yes, absolutely. We offer custom quotes tailored to your business goals, target market, and required services. You can contact us for a free consultation and personalized proposal.",
    },
    {
      question: "How often do you revise your pricing plans?",
      answer: "Our pricing plans are periodically reviewed based on market trends, service enhancements, and evolving client needs. Existing clients are always informed in advance about any changes.",
    },
    {
      question: "Do you offer discounts for long-term contracts?",
      answer: "Yes. We offer attractive discounts and customized pricing for long-term engagements and ongoing marketing partnerships.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major payment methods including credit/debit cards, bank transfers, and online payment gateways depending on your location.",
    },
    {
      question: "Is there a minimum contract duration for your services?",
      answer: "Some services may require a minimum commitment to deliver measurable results, especially SEO-related services. However, we also offer flexible plans depending on the service scope.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Have Any{" "}
          <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">
            Questions?
          </span>
        </h2>
        <p className="mt-4 text-lg text-center text-black/70 max-w-3xl mx-auto">
          Explore our FAQ's below.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => (
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
  );
}
/* ---------- META ADS DETAILED PRICING ---------- */
function MetaAdsDetailed() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- HEADER ---------- */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Meta Ads{" "}
            <span className="bg-gradient-to-r from-[#F028C2] to-[#2D96EB] bg-clip-text text-transparent">
              Pricing Packages
            </span>
          </h2>
          <p className="mt-4 text-center text-black/70 text-lg">
            Boost your business with high-performance Meta advertising
          </p>
        </Reveal>

        {/* ---------- PRICING CARDS ---------- */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {/* ===== STARTER ===== */}
          <Reveal delay={100}>
            <div className="p-8 rounded-2xl bg-gray-50 border
              hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-xl font-bold text-center mb-4">Starter</h3>
              <p className="text-center line-through text-black/40">$300</p>

              <p className="text-4xl font-extrabold text-center text-[#2D96EB]">
                $249
              </p>

              <p className="text-sm text-center text-black/60 mb-6">Per Month</p>

              <Link
                href="/contact"
                  aria-label="Contact Zentrix Digital Marketing for pricing"
                className="block text-center px-6 py-3 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-[#2D96EB] to-[#F028C2]
                  hover:scale-105 transition">
                Get Started
              </Link>
            </div>
          </Reveal>

          {/* ===== STANDARD (POPULAR) ===== */}
          <Reveal delay={200}>
            <div className="relative p-8 rounded-2xl text-white scale-105
              bg-gradient-to-r from-[#F028C2] to-[#2D96EB]
              shadow-2xl transition-all duration-300">

              <span className="absolute top-4 right-4 bg-white text-[#F028C2]
                text-xs px-3 py-1 rounded-full font-bold">
                Popular
              </span>

              <h3 className="text-xl font-bold text-center mb-4">Standard</h3>
              <p className="text-center line-through opacity-70">$500</p>
              <p className="text-4xl font-extrabold text-center">$449</p>
              <p className="text-sm text-center opacity-90 mb-6">Per Month</p>

              <Link
                href="/contact"
                  aria-label="Contact Zentrix Digital Marketing for pricing"
                className="block text-center px-6 py-3 rounded-lg font-semibold
                  bg-white text-[#F028C2]
                  hover:scale-105 transition">
                Get Started
              </Link>
            </div>
          </Reveal>

          {/* ===== PREMIUM ===== */}
          <Reveal delay={300}>
            <div className="p-8 rounded-2xl bg-gray-50 border
              hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-xl font-bold text-center mb-4">Premium</h3>
              <p className="text-center line-through text-black/40">25%</p>

              <p className="text-4xl font-extrabold text-center text-[#F028C2]">
                15%
              </p>

              <p className="text-sm text-center text-black/60 mb-6">
                of Ad Budget
              </p>

              <Link
                href="/contact"
                  aria-label="Contact Zentrix Digital Marketing for pricing"
                className="block text-center px-6 py-3 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-[#F028C2] to-[#2D96EB]
                  hover:scale-105 transition">
                Get Started
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ---------- FEATURES TABLE ---------- */}
        <div className="overflow-x-auto mt-24">
          <table className="w-full text-sm border rounded-xl overflow-hidden">
            <tbody>
              {[
                ["FB Page Setup", "✔", "✔", "✔"],
                ["Campaign Setup", "1", "2", "Unlimited"],
                ["Landing Page", "❌", "❌", "✔"],
                ["Budget", "Up to $1,500", "Up to $2,500", "Over $2,500"],
                ["Location Targeting", "1 Location", "Up to 2 Locations", "Unlimited"],
                ["Ad Creative Design", "Single Image", "Carousel", "Images + Videos"],
                ["Conversion Tracking", "Meta Pixel", "Pixel + Analytics", "Pixel + Analytics"],
                ["Free Flyers", "2 Included", "3 Included", "4 Included"],
                ["Reporting & Analytics", "Monthly", "Monthly", "Monthly"],
                ["Goals", "Traffic, Engagement & Calls", "Traffic, Engagement & Calls", "Traffic, Engagement & Calls"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className={`transition ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-[#f1f7ff]`}
                >
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 text-center">{row[1]}</td>
                  <td className="p-4 text-center font-bold text-[#F028C2]">{row[2]}</td>
                  <td className="p-4 text-center">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}


function GoogleAdsDetailed() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- HEADER ---------- */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Google Ads{" "}
            <span className="bg-gradient-to-r from-[#F028C2] to-[#2D96EB] bg-clip-text text-transparent">
              Pricing Packages
            </span>
          </h2>
          <p className="mt-4 text-center text-black/70 text-lg">
            Boost your business with high-intent Google advertising
          </p>
        </Reveal>

        {/* ---------- PRICING CARDS ---------- */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {/* ===== STARTER ===== */}
          <Reveal delay={100}>
            <div className="p-8 rounded-2xl bg-gray-50 border
              hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-xl font-bold text-center mb-4">Starter</h3>
              <p className="text-center line-through text-black/40">$300</p>

              <p className="text-4xl font-extrabold text-center text-[#2D96EB]">
                $249
              </p>

              <p className="text-sm text-center text-black/60 mb-6">Per Month</p>

              <Link
                href="/contact"
                  aria-label="Contact Zentrix Digital Marketing for pricing"
                className="block text-center px-6 py-3 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-[#F028C2] to-[#2D96EB]
                  hover:scale-105 transition"
              >
                Get Started
              </Link>
            </div>
          </Reveal>

          {/* ===== STANDARD (POPULAR) ===== */}
          <Reveal delay={200}>
            <div className="relative p-8 rounded-2xl text-white scale-105
              bg-gradient-to-r from-[#F028C2] to-[#2D96EB]
              shadow-2xl transition-all duration-300">

              <span className="absolute top-4 right-4 bg-white text-[#F028C2]
                text-xs px-3 py-1 rounded-full font-bold">
                Popular
              </span>

              <h3 className="text-xl font-bold text-center mb-4">Standard</h3>
              <p className="text-center line-through opacity-70">$500</p>
              <p className="text-4xl font-extrabold text-center">$449</p>
              <p className="text-sm text-center opacity-90 mb-6">Per Month</p>

              <Link
                href="/contact"
                  aria-label="Contact Zentrix Digital Marketing for pricing"
                className="block text-center px-6 py-3 rounded-lg font-semibold
                  bg-white text-[#F028C2]
                  hover:scale-105 transition"
              >
                Get Started
              </Link>
            </div>
          </Reveal>

          {/* ===== PREMIUM ===== */}
          <Reveal delay={300}>
            <div className="p-8 rounded-2xl bg-gray-50 border
              hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

              <h3 className="text-xl font-bold text-center mb-4">Premium</h3>
              <p className="text-center line-through text-black/40">25%</p>

              <p className="text-4xl font-extrabold text-center text-[#F028C2]">
                15%
              </p>

              <p className="text-sm text-center text-black/60 mb-6">
                of Ad Budget
              </p>

              <Link
                href="/contact"
                  aria-label="Contact Zentrix Digital Marketing for pricing"
                className="block text-center px-6 py-3 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-[#F028C2] to-[#2D96EB]
                  hover:scale-105 transition"
              >
                Get Started
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ---------- FEATURES TABLE ---------- */}
        <div className="overflow-x-auto mt-24">
          <table className="w-full text-sm border rounded-xl overflow-hidden">
            <tbody>
              {[
                ["Account Setup", "✔", "✔", "✔"],
                ["Campaign Setup", "1", "2", "Unlimited"],
                ["Landing Page", "❌", "❌", "✔"],
                ["Budget", "Up to $1,500", "Up to $2,500", "Over $2,500"],
                ["Competitor Analysis", "✔", "✔", "✔"],
                ["Conversion Tracking", "Using GTM", "Using GTM", "Using GTM"],
                ["Google Analytics Setup", "✔", "✔", "✔"],
                ["Reporting", "Monthly", "Monthly", "Monthly"],
                ["Locations", "1 Location", "2 Locations", "Unlimited"],
                ["Goals", "Qualified Traffic & Leads", "Qualified Traffic & Leads", "Qualified Traffic & Leads"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className={`transition ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-[#f1f7ff]`}
                >
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 text-center">{row[1]}</td>
                  <td className="p-4 text-center font-bold text-[#F028C2]">
                    {row[2]}
                  </td>
                  <td className="p-4 text-center">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
    
  );
}

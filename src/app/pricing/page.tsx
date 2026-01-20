


"use client";

import Link from "next/link";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

/* ======================================================
   PAGE
====================================================== */

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PopularPricing />
      <WebsitePricing />
      <SEOPricingTable />
      <MetaAdsPricing />
      <GoogleAdsPricing />
      <SEOFAQ />
    </>
  );
}

/* ======================================================
   SECTIONS
====================================================== */

const faqs = [
  {
    question: "What factors influence the pricing of NShine Digital Marketing services?",
    answer:
      "Our pricing is determined by several factors, including the scope of services required, project complexity, industry competitiveness, and your specific business goals. We customize our pricing packages to ensure you receive maximum value based on your needs."
  },
  {
    question: "Are there any hidden fees in your pricing?",
    answer:
      "No. We believe in complete transparency. All costs are clearly outlined before the project begins, and there are no hidden charges or surprise fees."
  },
  {
    question: "Can I get a custom quote for my digital marketing needs?",
    answer:
      "Yes, absolutely. We offer custom quotes tailored to your business goals, target market, and required services. You can contact us for a free consultation and personalized proposal."
  },
  {
    question: "How often do you revise your pricing plans?",
    answer:
      "Our pricing plans are periodically reviewed based on market trends, service enhancements, and evolving client needs. Existing clients are always informed in advance about any changes."
  },
  {
    question: "Do you offer discounts for long-term contracts?",
    answer:
      "Yes. We offer attractive discounts and customized pricing for long-term engagements and ongoing marketing partnerships."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major payment methods including credit/debit cards, bank transfers, and online payment gateways depending on your location."
  },
  {
    question: "Is there a minimum contract duration for your services?",
    answer:
      "Some services may require a minimum commitment to deliver measurable results, especially SEO-related services. However, we also offer flexible plans depending on the service scope."
  }
];

function PricingHero() {
  return (
    <section className="bg-[#265E52] text-white py-12 text-center">
      <h1 className="text-4xl font-bold">Pricing</h1>
    </section>
  );
}

/* ---------- POPULAR PRICING ---------- */

function PopularPricing() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-14">
          Our Popular Pricing Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            popular
            title="Website Design"
            oldPrice="$1,800"
            price="$1,500"
            period="One Time"
            button="Explore Plans"
            features={["Up to 5 pages", "Expert UI/UX", "Dedicated Manager"]}
          />

          <PricingCard
            popular
            title="SEO"
            oldPrice="$2,500"
            price="$2,000"
            period="Per Month"
            button="Explore Plans"
            features={["20 Keywords", "Technical SEO", "Competitor Analysis"]}
          />

          <PricingCard
            title="Ads"
            price="15%"
            suffix="of Ad Budget"
            button="Explore Plans"
            features={["Unlimited Ads", "Pixel Setup", "Tracking"]}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- WEBSITE PACKAGES ---------- */

function WebsitePricing() {
  return (
    <section className="py-20 bg-[#D6ECFF]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Website Pricing Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WebsiteCard
            title="Starter Website"
            oldPrice="$1,800"
            price="$1,500"
            features={["Up to 5 pages", "UI/UX Design"]}
          />

          <WebsiteCard
            popular
            title="Standard Website"
            oldPrice="$3,500"
            price="$3,000"
            features={["Business Website", "Conversion Focused"]}
          />

          <WebsiteCard
            title="Advanced Website"
            oldPrice="$5,400"
            price="$5,000"
            features={["Up to 10 pages", "Advanced UX"]}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- SEO TABLE ---------- */

function SEOPricingTable() {
  return (
    <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Our SEO Ads Pricing Packages
      </h2>
      <p className="text-sm text-gray-600">
        Boost Your Business on Any Budget
      </p>
    </div>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

      {/* STARTER */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
        <h3 className="text-xl font-semibold mb-3">Starter</h3>
        <p className="line-through text-gray-400">$300</p>
        <p className="text-4xl font-bold">$249</p>
        <p className="text-sm text-gray-600 mb-6">Per Month</p>

        <button className="w-full bg-[#1f8f72] text-white py-2 rounded-md font-medium">
          Get Started
        </button>
      </div>

      {/* STANDARD */}
      <div className="relative rounded-2xl p-8 text-center shadow bg-gradient-to-b from-[#E7B66A] to-[#45C4A0]">
        <span className="absolute top-4 right-4 bg-white text-xs px-3 py-1 rounded-full font-semibold">
          Popular
        </span>

        <h3 className="text-xl font-semibold mb-3">Standard</h3>
        <p className="line-through opacity-70">$500</p>
        <p className="text-4xl font-bold">$449</p>
        <p className="text-sm mb-6">Per Month</p>

        <button className="w-full bg-white text-black py-2 rounded-md font-medium">
          Get Started
        </button>
      </div>

      {/* PREMIUM */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
        <h3 className="text-xl font-semibold mb-3">Premium</h3>
        <p className="line-through text-gray-400">25%</p>
        <p className="text-4xl font-bold">15%</p>
        <p className="text-sm text-gray-600 mb-6">of Ad Budget</p>

        <button className="w-full bg-[#1f8f72] text-white py-2 rounded-md font-medium">
          Get Started
        </button>
      </div>
    </div>

    {/* FEATURES TABLE */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 text-sm">
        <tbody>

          {[
            ["Account Setup", "✔", "✔", "✔"],
            ["Campaign Setup", "1", "2", "Unlimited"],
            ["Landing Page", "❌", "❌", "✔"],
            ["Budget", "Up to $1,500", "Up to $2,500", "Over $2,500"],
            ["Competitor Analysis", "✔", "✔", "✔"],
            ["Conversion Tracking", "Using GTM Tracking", "Using GTM Tracking", "Using GTM Tracking"],
            ["Google Analytics Setup", "✔", "✔", "✔"],
            ["Reporting", "Monthly", "Monthly", "Monthly"],
            ["Locations", "1 Location", "2 Locations", "Unlimited"],
            ["Goals", 
              "Drive Traffic & Leads", 
              "Drive Traffic & Leads", 
              "Drive Traffic & Leads"
            ],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="p-4 font-medium">{row[0]}</td>
              <td className="p-4 text-center">{row[1]}</td>
              <td className="p-4 text-center">{row[2]}</td>
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

/* ---------- META ADS ---------- */

function MetaAdsPricing() {
  return (
    <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Our Google Ads Pricing Packages
      </h2>
      <p className="text-sm text-gray-600">
        Boost Your Business on Any Budget
      </p>
    </div>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

      {/* STARTER */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
        <h3 className="text-xl font-semibold mb-3">Starter</h3>
        <p className="line-through text-gray-400">$300</p>
        <p className="text-4xl font-bold">$249</p>
        <p className="text-sm text-gray-600 mb-6">Per Month</p>

        <button className="w-full bg-[#1f8f72] text-white py-2 rounded-md font-medium">
          Get Started
        </button>
      </div>

      {/* STANDARD */}
      <div className="relative rounded-2xl p-8 text-center shadow bg-gradient-to-b from-[#E7B66A] to-[#45C4A0]">
        <span className="absolute top-4 right-4 bg-white text-xs px-3 py-1 rounded-full font-semibold">
          Popular
        </span>

        <h3 className="text-xl font-semibold mb-3">Standard</h3>
        <p className="line-through opacity-70">$500</p>
        <p className="text-4xl font-bold">$449</p>
        <p className="text-sm mb-6">Per Month</p>

        <button className="w-full bg-white text-black py-2 rounded-md font-medium">
          Get Started
        </button>
      </div>

      {/* PREMIUM */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
        <h3 className="text-xl font-semibold mb-3">Premium</h3>
        <p className="line-through text-gray-400">25%</p>
        <p className="text-4xl font-bold">15%</p>
        <p className="text-sm text-gray-600 mb-6">of Ad Budget</p>

        <button className="w-full bg-[#1f8f72] text-white py-2 rounded-md font-medium">
          Get Started
        </button>
      </div>
    </div>

    {/* FEATURES TABLE */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 text-sm">
        <tbody>

          {[
            ["Account Setup", "✔", "✔", "✔"],
            ["Campaign Setup", "1", "2", "Unlimited"],
            ["Landing Page", "❌", "❌", "✔"],
            ["Budget", "Up to $1,500", "Up to $2,500", "Over $2,500"],
            ["Competitor Analysis", "✔", "✔", "✔"],
            ["Conversion Tracking", "Using GTM Tracking", "Using GTM Tracking", "Using GTM Tracking"],
            ["Google Analytics Setup", "✔", "✔", "✔"],
            ["Reporting", "Monthly", "Monthly", "Monthly"],
            ["Locations", "1 Location", "2 Locations", "Unlimited"],
            ["Goals", 
              "Drive Traffic & Leads", 
              "Drive Traffic & Leads", 
              "Drive Traffic & Leads"
            ],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="p-4 font-medium">{row[0]}</td>
              <td className="p-4 text-center">{row[1]}</td>
              <td className="p-4 text-center">{row[2]}</td>
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

/* ---------- GOOGLE ADS ---------- */

function GoogleAdsPricing() {
  return (
    <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Our Meta Ads Pricing Packages
      </h2>
      <p className="text-sm text-gray-600">
        Boost Your Business on Any Budget
      </p>
    </div>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

      {/* STARTER */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
        <h3 className="text-xl font-semibold mb-3">Starter</h3>
        <p className="line-through text-gray-400">$300</p>
        <p className="text-4xl font-bold">$249</p>
        <p className="text-sm text-gray-600 mb-6">Per Month</p>

        <button className="w-full bg-[#1f8f72] text-white py-2 rounded-md font-medium">
          Get Started
        </button>
      </div>

      {/* STANDARD */}
      <div className="relative rounded-2xl p-8 text-center shadow bg-gradient-to-b from-[#E7B66A] to-[#45C4A0]">
        <span className="absolute top-4 right-4 bg-white text-xs px-3 py-1 rounded-full font-semibold">
          Popular
        </span>

        <h3 className="text-xl font-semibold mb-3">Standard</h3>
        <p className="line-through opacity-70">$500</p>
        <p className="text-4xl font-bold">$449</p>
        <p className="text-sm mb-6">Per Month</p>

        <button className="w-full bg-white text-black py-2 rounded-md font-medium">
          Get Started
        </button>
      </div>

      {/* PREMIUM */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
        <h3 className="text-xl font-semibold mb-3">Premium</h3>
        <p className="line-through text-gray-400">25%</p>
        <p className="text-4xl font-bold">15%</p>
        <p className="text-sm text-gray-600 mb-6">of Ad Budget</p>

        <button className="w-full bg-[#1f8f72] text-white py-2 rounded-md font-medium">
          Get Started
        </button>
      </div>
    </div>

    {/* FEATURES TABLE */}
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 text-sm">
        <tbody>

          {[
            ["Account Setup", "✔", "✔", "✔"],
            ["Campaign Setup", "1", "2", "Unlimited"],
            ["Landing Page", "❌", "❌", "✔"],
            ["Budget", "Up to $1,500", "Up to $2,500", "Over $2,500"],
            ["Competitor Analysis", "✔", "✔", "✔"],
            ["Conversion Tracking", "Using GTM Tracking", "Using GTM Tracking", "Using GTM Tracking"],
            ["Google Analytics Setup", "✔", "✔", "✔"],
            ["Reporting", "Monthly", "Monthly", "Monthly"],
            ["Locations", "1 Location", "2 Locations", "Unlimited"],
            ["Goals", 
              "Drive Traffic & Leads", 
              "Drive Traffic & Leads", 
              "Drive Traffic & Leads"
            ],
          ].map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="p-4 font-medium">{row[0]}</td>
              <td className="p-4 text-center">{row[1]}</td>
              <td className="p-4 text-center">{row[2]}</td>
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

/* ---------- FAQ ---------- */

function SEOFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <p className="text-sm font-medium text-[#1E8E73] mb-2">
          Have any questions?
        </p>

        <h2 className="text-3xl font-bold mb-10">
          Explore our FAQ&apos;s below.
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left font-medium text-gray-900 py-3"
              >
                <span>{faq.question}</span>

                {activeIndex === index ? (
                  <MinusIcon className="w-5 h-5 text-[#1E8E73]" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* ANSWER */}
              {activeIndex === index && (
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ======================================================
   REUSABLE UI COMPONENTS (INSIDE SAME FILE)
====================================================== */

function PricingCard({ popular, title, oldPrice, price, period, suffix, button, features }: any) {
  return (
    <div className="relative bg-white rounded-xl p-8 shadow text-left">
      {popular && <Badge />}
      <h3 className="text-xl font-semibold">{title}</h3>
      {oldPrice && <p className="line-through text-gray-400">{oldPrice}</p>}
      <p className="text-3xl font-bold">{price}</p>
      {period && <p className="text-sm">{period}</p>}
      {suffix && <p className="text-sm">{suffix}</p>}

      <Link href="/contact" className="block mt-4 bg-[#265E52] text-white py-2 text-center rounded">
        {button}
      </Link>

      <ul className="mt-4 text-sm space-y-1">
        {features.map((f: string, i: number) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>
    </div>
  );
}

function WebsiteCard({ popular, title, oldPrice, price, features }: any) {
  return (
    <PricingCard
      popular={popular}
      title={title}
      oldPrice={oldPrice}
      price={price}
      button="Get Started"
      features={features}
    />
  );
}

function SimpleCard({ title, price, popular }: any) {
  return (
    <div className={`p-8 rounded-xl shadow ${popular ? "bg-[#265E52] text-white" : "bg-gray-100"}`}>
      {popular && <Badge />}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-3xl font-bold">{price}</p>
      <Link href="/contact" className="block mt-4 bg-black text-white py-2 rounded">
        Get Started
      </Link>
    </div>
  );
}

function Badge() {
  return (
    <span className="absolute top-4 right-4 bg-[#265E52] text-white text-xs px-3 py-1 rounded-full">
      Popular
    </span>
  );
}

function PlanHead({ title, price, popular }: any) {
  return (
    <th className={`p-4 ${popular ? "bg-[#45C4A0]" : "bg-gray-50"}`}>
      <p className="font-semibold">{title}</p>
      <p className="font-bold">{price}</p>
    </th>
  );
}

function Row({ label, values }: any) {
  return (
    <tr>
      <td className="p-4 font-medium">{label}</td>
      {values.map((v: string, i: number) => (
        <td key={i} className="p-4 text-center">{v}</td>
      ))}
    </tr>
  );
}

function IconRow({ label, checks }: any) {
  return (
    <tr>
      <td className="p-4 font-medium">{label}</td>
      {checks.map((c: boolean, i: number) => (
        <td key={i} className="p-4 text-center">{c ? "✅" : "❌"}</td>
      ))}
    </tr>
  );
}

function FAQItem({ question, answer }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-6" onClick={() => setOpen(!open)}>
      <div className="flex justify-between">
        <h4 className="font-medium">{question}</h4>
        <span>{open ? "−" : "+"}</span>
      </div>
      {open && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
  );
}


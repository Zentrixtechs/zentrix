"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import IndustrySeoShowcase from "@/components/shared/SEOShowcase";
import AISEOPricingTable from "@/components/shared/AISEOPricingTable";
import SEOFAQ from "@/components/shared/seofaq";

export default function AISEOIntroSection() {
  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                An AI SEO Company that helps businesses get found and grow
              </h2>

              <p className="text-gray-600 mb-4">
                If you are facing any of the following challenges
              </p>

              <ul className="space-y-3 text-sm mb-6">
                <li>✔ Struggling to rank on the first page of Google?</li>
                <li>✔ Low visibility on AI-powered search platforms?</li>
                <li>✔ Experiencing low website traffic?</li>
                <li>✔ Your business isn’t showing up online?</li>
                <li>✔ Not getting qualified leads or appointments?</li>
                <li>✔ Invisible on Google Maps and AI search results?</li>
              </ul>

              <p className="text-sm text-gray-600 mb-4">
                At NShine, our AI SEO Experts handle everything needed to help
                your business rank across traditional search engines and
                AI-driven platforms.
              </p>

              <p className="text-sm text-gray-600 mb-4">
                From Local AI SEO to National and Enterprise AI SEO, we optimize
                your digital presence for Google, Bing, and AI discovery.
              </p>

              <p className="text-sm text-gray-600 mb-6">
                We specialize in AI SEO, keyword intelligence, competitor
                analysis, AI-content optimization, technical AI SEO, and AI
                search visibility across ChatGPT, Gemini, Copilot, and Perplexity.
              </p>

              <p className="font-medium text-[#265E52]">
                AI SEO packages start at just <strong>$500 per month</strong>.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/ai-seo.png"
                alt="AI SEO Illustration"
                width={520}
                height={420}
              />
            </div>
          </div>

          {/* RESULTS */}
          <div className="mt-20 border rounded-xl p-8">
            <h3 className="text-center font-semibold mb-8">
              We turn AI SEO efforts into
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <ResultItem title="Higher Rankings" desc="Across Google & AI search" />
              <ResultItem title="More Traffic" desc="From AI-driven discovery" />
              <ResultItem title="Qualified Leads" desc="From intent-based searches" />
              <ResultItem title="Faster Growth" desc="With AI-first SEO strategy" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= AI SEO SERVICES ================= */}
      <section className="bg-gradient-to-b from-[#275E54] to-[#1F4037] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">
              Our <span className="text-[#E7B66A]">AI SEO Services</span>
            </h2>
            <p className="text-sm opacity-90 mt-3">
              AI-powered optimization strategies designed for modern search.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="/icons/local-seo.svg"
              title="Local AI SEO"
              desc="Optimize your business for local search and AI-based discovery including Google Maps and AI answers."
            />

            <ServiceCard
              icon="/icons/national-seo.svg"
              title="National AI SEO"
              desc="AI-optimized SEO strategies to compete nationwide across search engines and LLM platforms."
            />

            <ServiceCard
              icon="/icons/ecommerce-seo.svg"
              title="AI Commerce SEO"
              desc="AI-driven optimization for product pages, shopping feeds, and AI shopping assistants."
            />
          </div>
        </div>
      </section>

      {/* ================= AI SEO PLATFORM VISIBILITY ================= */}
      <section className="py-24 bg-[#F9FCFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              AI SEO: Get Found on AI-Powered Search
            </h2>
            <p className="text-gray-600 mt-3">
              Visibility across ChatGPT, Gemini, Copilot, Perplexity & AI Overviews
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <PlatformCard
                title="ChatGPT"
                badge="100M+ users"
                desc="AI-powered conversational discovery"
                icon="/icons/chatgpt.svg"
              />
              <PlatformCard
                title="Google AI"
                badge="8.5B searches/day"
                desc="AI Overviews & SGE visibility"
                icon="/icons/google-ai.svg"
              />
              <PlatformCard
                title="Perplexity"
                badge="10M+ users"
                desc="AI answer-based search results"
                icon="/icons/perplexity.svg"
              />
              <PlatformCard
                title="Gemini"
                badge="Rapid growth"
                desc="AI-assisted search experiences"
                icon="/icons/gemini.svg"
              />

              <div className="grid grid-cols-3 gap-6 mt-8 bg-[#EEF6F3] p-6 rounded-xl text-center">
                <Stat value="40%" label="Search moving to AI" />
                <Stat value="3x" label="Higher engagement" />
                <Stat value="65%" label="Trust AI answers" />
              </div>
            </div>

            <Image
              src="/images/ai-search-hero.jpg"
              alt="AI Search"
              width={560}
              height={420}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= REUSED COMPONENTS ================= */}
      <IndustrySeoShowcase />
      <AISEOPricingTable />
      <SEOFAQ />
    </>
  );
}

/* ================= SMALL COMPONENTS ================= */

function ResultItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="border border-white/30 rounded-xl p-8 text-center">
      <Image src={icon} alt={title} width={36} height={36} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm opacity-90">{desc}</p>
    </div>
  );
}

function PlatformCard({
  title,
  badge,
  desc,
  icon,
}: {
  title: string;
  badge: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="flex items-center gap-4 bg-white border rounded-xl p-4">
      <Image src={icon} alt={title} width={26} height={26} />
      <div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold">{title}</h4>
          <span className="text-xs bg-gray-100 px-2 rounded">{badge}</span>
        </div>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-[#1E8E73]">{value}</p>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  );
}

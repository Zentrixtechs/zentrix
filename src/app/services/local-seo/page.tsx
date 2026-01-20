"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import IndustrySeoShowcase from "@/components/shared/SEOShowcase";
import AISEOPricingTable from "@/components/shared/AISEOPricingTable";
import SEOFAQ from "@/components/shared/seofaq";
import FreeAuditSection from "@/components/firstform";

export default function AILocalSEOIntroSection() {
  return (
    <>
    <FreeAuditSection/>
      {/* ================= HERO ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                A <span className="text-[#1E8E73]">Local SEO</span> Company That Helps Businesses Get Found & Grow
              </h2>

              <p className="text-gray-600 mb-4">
                If you are facing any of the following challenges:
              </p>

              <ul className="space-y-3 text-sm mb-6">
                <li>✔ Struggling to rank in local Google results?</li>
                <li>✔ Invisible on Google Maps and “near me” searches?</li>
                <li>✔ Low website and local foot traffic?</li>
                <li>✔ Not getting qualified calls or appointments?</li>
                <li>✔ Losing customers to nearby competitors?</li>
              </ul>

              <p className="text-sm text-gray-600 mb-4">
                At NShine, our <strong>Local Search Engine Optimization experts</strong> help you dominate
                local search results and attract ready-to-convert customers.
              </p>

              <p className="text-sm text-gray-600 mb-4">
                From <strong>Local SEO services</strong> to <strong>AI-powered Local SEO</strong>,
                we optimize your website and business listings to reach customers exactly
                when they’re searching.
              </p>

              <p className="text-sm text-gray-600 mb-6">
                We work with businesses across the US with affordable
                <strong> Local SEO packages starting at $500/month</strong>.
              </p>

              <p className="font-medium text-[#265E52]">
                Explore our Local SEO packages and start ranking locally today.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/ai-seo.png"
                alt="AI Local SEO Illustration"
                width={520}
                height={420}
                className="object-contain"
              />
            </div>
          </div>

          {/* ================= RESULTS ================= */}
          <div className="mt-20 border rounded-xl p-8">
            <h3 className="text-center font-semibold mb-8">
              We turn local effort into real business growth
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <ResultItem title="Higher Local Rankings" desc="Dominate your service area." />
              <ResultItem title="More Calls & Visits" desc="Turn searches into customers." />
              <ResultItem title="Qualified Leads" desc="Reach ready-to-buy users." />
              <ResultItem title="Sustainable Growth" desc="Long-term local authority." />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gradient-to-b from-[#275E54] to-[#1F4037] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#E7B66A]">Local SEO Services</span>
            </h2>
            <p className="opacity-90">
              Powerful Local SEO solutions to boost visibility, calls, and in-store visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="/icons/local-seo.svg"
              title="Local SEO"
              desc="Google Business Profile optimization, citations, local keywords, reviews, and Maps ranking."
            />

            <ServiceCard
              icon="/icons/national-seo.svg"
              title="Multi-Location Local SEO"
              desc="Scale Local SEO performance across multiple cities and service areas."
            />

            <ServiceCard
              icon="/icons/ecommerce-seo.svg"
              title="Local E-Commerce SEO"
              desc="Rank product and store listings for nearby shoppers searching online."
            />
          </div>
        </div>
      </section>

      {/* ================= COMPREHENSIVE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className="text-[#1E8E73]">Local SEO Services</span>
            </h2>
            <p className="text-gray-600">
              Everything your business needs to rank locally and convert faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SEOCard title="On-Page Local SEO" desc="Location-based content, NAP optimization, schema, and internal linking." />
            <SEOCard title="Off-Page Local SEO" desc="Local backlinks, citations, and authority building." />
            <SEOCard title="Technical Local SEO" desc="Speed, indexing, structured data, and crawl optimization." />
            <SEOCard title="Google Maps Optimization" desc="Top rankings in Map Pack & local results." />
            <SEOCard title="AI Local SEO Services" desc="Optimize for AI search & local AI recommendations." />
            <SEOCard title="Local SEO Reporting" desc="Transparent reports on calls, rankings, and traffic." />
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Proven <span className="text-[#265E52]">Local SEO Process</span>
            </h2>

            <p className="text-gray-600 mb-6">
              A step-by-step Local SEO strategy designed to increase visibility,
              calls, and walk-ins.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-[#E7B66A] text-black px-6 py-3 rounded-md font-semibold"
            >
              Free Local SEO Consultation
            </Link>
          </div>

          <div className="space-y-6">
            <StepCard step="1" title="Local Audit & Research" desc="Analyze competitors, keywords, and Maps visibility." />
            <StepCard step="2" title="Local Strategy" desc="Geo-targeted optimization & content planning." />
            <StepCard step="3" title="Execution" desc="GBP optimization, citations, content & links." />
            <StepCard step="4" title="Tracking & Optimization" desc="Monitor rankings, calls, and conversions." />
          </div>
        </div>
      </section>

      <IndustrySeoShowcase />
      <AISEOPricingTable />
      <SEOFAQ />
    </>
  );
}

/* ================= COMPONENTS ================= */

function SEOCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-[#8AD4B2] rounded-2xl p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ResultItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: any) {
  return (
    <div className="border border-white/30 rounded-2xl p-8 text-center bg-white/5">
      <Image src={icon} alt={title} width={40} height={40} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm opacity-90">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }: any) {
  return (
    <div className="relative bg-[#265E52] text-white rounded-xl p-6">
      <span className="absolute top-4 right-4 text-5xl font-bold opacity-20">{step}</span>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm opacity-90">{desc}</p>
    </div>
  );
}


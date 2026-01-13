"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/shared/Section";
import ClientsMarquee from "@/components/shared/ClientsMarquee";

export default function MetaAdsPage() {
  return (
    <>
      {/* ================= HERO + FORM ================= */}
      <Section />

      {/* ================= TRUSTED CLIENTS ================= */}
      <section className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-[#265E52] mb-6">
            Our Trusted Clients in Dallas & Austin
          </p>
          <ClientsMarquee />
        </div>
      </section>

      {/* ================= WHY META ADS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">
            Why Your Business Should Invest in Meta <br />
            <span className="text-[#265E52]">
              (Facebook & Instagram) Ads
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#265E52]">
                Reach More Customers. Grow Faster.
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Reach and engage your ideal audience with high-performing
                Meta Ads designed to your business goals. Our Facebook and
                Instagram advertising strategies are built to attract local
                customers, generate qualified leads, and maximize your ROI.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#265E52] text-white flex items-center justify-center text-sm">
                    1
                  </span>
                  Advanced Targeting
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#265E52] text-white flex items-center justify-center text-sm">
                    2
                  </span>
                  Scalable Growth
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#265E52] text-white flex items-center justify-center text-sm">
                    3
                  </span>
                  Measurable ROI
                </li>
              </ul>

              <Link
                href="/contact"
                className="inline-block bg-[#E7B66A] px-6 py-3 rounded-md font-semibold text-black"
              >
                Get Started
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/images/meta-ad-single.png"
                alt="Meta Ads Example"
                width={420}
                height={520}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= AD PREVIEW GRID ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your Brand, Perfectly Presented on Facebook & Instagram
          </h2>

          <p className="text-gray-600 text-sm max-w-4xl mx-auto mb-12">
            Bring your campaigns to life with real-time Facebook and Instagram
            ad previews. Review placements, visuals, and formats before launch
            to ensure maximum impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["ad1.png", "ad2.png", "ad3.png", "ad4.png"].map((img) => (
              <Image
                key={img}
                src={`/images/${img}`}
                alt="Meta Ad Preview"
                width={220}
                height={380}
                className="rounded-lg shadow-md mx-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE STATS ================= */}
      <section className="bg-[#265E52] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Perform At Your Peak
          </h3>
          <p className="text-sm mb-10 opacity-90">
            We&apos;ll help you achieve your goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Stat value="3.4X" label="Average Advertising ROI" />
            <Stat value="260%" label="Increase in Appointments" />
            <Stat value="400%" label="Client Return on Ad Spend" />
          </div>
        </div>
        
      </section>
      {/* ================= CASE STUDY ================= */}
      <section className="bg-[#F4F6FF] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">
              Take a look at what we’ve created
            </h3>
            <Link
              href="/portfolio"
              className="bg-[#E7B66A] px-4 py-2 rounded-md font-medium"
            >
              Check out our work
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow p-8 max-w-md">
            <h4 className="font-semibold mb-2">NS Constructions – Facebook Ads</h4>
            <p className="text-sm text-gray-600 mb-4">
              Objective: Increase inquiries and project bookings through Meta Ads.
            </p>
            <p className="text-sm text-gray-600">
              Results: ₹10,000/month budget resulted in 200% increase in qualified
              leads.
            </p>

            <Link href="#" className="text-[#265E52] text-sm mt-4 block">
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/meta-why.png"
            alt="Why Meta Ads"
            width={500}
            height={400}
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Choose NShine for Your Meta Ads?
            </h2>

            <ul className="space-y-3">
              <li>✔ Proven Results with High ROI</li>
              <li>✔ Certified Meta Ads Specialists</li>
              <li>✔ Cost-Effective Strategies</li>
              <li>✔ Local Audience Targeting</li>
              <li>✔ Transparent Reporting</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-[#E7B66A] px-6 py-3 rounded-md font-semibold"
            >
              Ready to Boost Your Local Presence?
            </Link>
          </div>
        </div>
        
      </section>
       <section className="bg-[#265E52] py-10 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <ContactItem title="Call Us" value="+1 612-470-2664" />
          <ContactItem title="Email Us" value="support@nshine.tech" />
          <ContactItem title="Address" value="Austin, TX, USA" />
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>

          {faqData.map((f, i) => (
            <FAQItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>
    </>
  );
}

/* ================= SMALL COMPONENT ================= */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl font-bold text-[#E7B66A]">{value}</p>
      <p className="text-sm mt-2">{label}</p>
    </div>
  );
}



function ContactItem({ title, value }: any) {
  return (
    <div>
      <p className="text-sm opacity-80">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="border rounded-md mb-4 px-6 py-4 cursor-pointer bg-[#FFF9F1]"
    >
      <div className="flex justify-between items-center">
        <p className="font-medium">{question}</p>
        <span>{open ? "−" : "+"}</span>
      </div>

      {open && <p className="text-sm text-gray-600 mt-3">{answer}</p>}
    </div>
  );
}

/* ================= DATA ================= */

const faqData = [
  {
    q: "What is Facebook Ads?",
    a: "Facebook Ads is a paid advertising platform by Meta that allows businesses to reach targeted audiences across Facebook, Instagram, Messenger, and Audience Network.",
  },
  {
    q: "How do Facebook Ads work?",
    a: "Ads are shown to users based on demographics, interests, behaviors, and location using Meta's ad auction system.",
  },
  {
    q: "How do Facebook Ads help local businesses?",
    a: "They target people nearby, drive calls, form submissions, and increase foot traffic.",
  },
  {
    q: "What is ROI in Facebook Ads?",
    a: "ROI measures the return you receive compared to the amount spent on ads.",
  },
  {
    q: "Why choose NShine Marketing?",
    a: "We deliver data-backed strategies, certified experts, and transparent reporting.",
  },
];
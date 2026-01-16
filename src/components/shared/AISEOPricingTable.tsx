"use client";

import Link from "next/link";

export default function AISEOPricingTable() {
  return (
    
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our <span className="text-[#265E52]">AI SEO Pricing</span> Packages
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Choose Your Ideal Marketing Plan.
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm bg-white">
            <thead>
              <tr>
                <th className="p-4 text-left bg-gray-50">Features</th>

                <PlanHead title="Starter SEO" price="$500" />

                <PlanHead title="Basic SEO" price="$1000" />

                <PlanHead
                  title="Growth SEO"
                  price="$2000"
                  popular
                />

                <PlanHead title="Premium SEO" price="$3000" />

                <PlanHead title="Advanced SEO" price="$4000" />
              </tr>
            </thead>

            <tbody>
              <Row label="Target Area" values={["Local", "Multi-Cities", "Nationwide", "Nationwide", "Nationwide"]} />
              <Row label="Keyword Research / Month" values={["Up to 10", "Up to 10", "Up to 20", "25–40", "40–50"]} />
              <Row label="Pages Optimized / Month" values={["3", "3", "6", "9", "12"]} />

              <IconRow label="AI Content Distribution" values={[false, true, true, true, true]} />
              <IconRow label="AI SEO Channels (ChatGPT, Gemini, etc.)" values={[false, true, true, true, true]} />
              <IconRow label="Directory Listings" values={[false, true, true, true, true]} />
              <IconRow label="Forum Submissions" values={[false, true, true, true, true]} />
              <IconRow label="Google Business Profile Optimization" values={[false, true, true, true, true]} />

              <Row label="Blog Sharing" values={["❌", "1 Blog", "2 Blogs", "4 Blogs", "5 Blogs"]} />
              <Row label="Review Posts" values={["❌", "❌", "Bi-Weekly", "Weekly", "Weekly"]} />
              <IconRow label="Guest Posting" values={[false, true, true, true, true]} />
              <Row label="Competitor Analysis" values={["Up to 2", "Up to 5", "Up to 15", "Unlimited", "Unlimited"]} />

              <IconRow label="Technical SEO Audit & Report" values={[true, true, true, true, true]} />
              <IconRow label="Article Submissions" values={[false, false, false, true, true]} />
              <IconRow label="On-Page SEO" values={[true, true, true, true, true]} />
              <IconRow label="Image SEO (Alt Tags)" values={[true, true, true, true, true]} />
              <IconRow label="Monthly Reporting" values={[true, true, true, true, true]} />
            </tbody>
          </table>
        </div>

      </div>
    </section>
    
  );
}

/* ================= SUB COMPONENTS ================= */

function PlanHead({
  title,
  price,
  popular,
}: {
  title: string;
  price: string;
  popular?: boolean;
}) {
  return (
    <th
      className={`p-4 text-center ${
        popular ? "bg-gradient-to-b from-[#E7B66A] to-[#45C4A0] text-black" : "bg-gray-50"
      }`}
    >
      {popular && (
        <span className="inline-block text-xs bg-white px-3 py-1 rounded-full mb-2 font-semibold">
          Popular
        </span>
      )}
      <p className="font-semibold">{title}</p>
      <p className="text-xl font-bold mt-1">{price}</p>
      <p className="text-xs text-gray-600 mb-3">per month</p>

      <Link
        href="/contact"
        className="inline-block bg-[#1E8E73] text-white px-4 py-2 rounded-md text-xs font-medium"
      >
        Get Started
      </Link>
    </th>
  );
}

function Row({
  label,
  values,
}: {
  label: string;
  values: string[];
}) {
  return (
    <tr className="border-t">
      <td className="p-4 font-medium">{label}</td>
      {values.map((val, i) => (
        <td key={i} className="p-4 text-center">
          {val}
        </td>
      ))}
    </tr>
  );
}

function IconRow({
  label,
  values,
}: {
  label: string;
  values: boolean[];
}) {
  return (
    <tr className="border-t">
      <td className="p-4 font-medium">{label}</td>
      {values.map((v, i) => (
        <td key={i} className="p-4 text-center text-lg">
          {v ? "✅" : "❌"}
        </td>
      ))}
    </tr>
  );
}

"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is SEO?",
    answer:
      "SEO (Search Engine Optimization) is the process of improving a website’s visibility on search engines like Google to attract more organic traffic. It focuses on optimizing content, website structure, technical performance, and authority so your site ranks higher for relevant search queries.",
  },
  {
    question: "What does an SEO company do?",
    answer:
      "An SEO company helps businesses improve search engine rankings through keyword research, on-page optimization, technical SEO, content creation, link building, local SEO, analytics tracking, and ongoing performance optimization to drive qualified traffic and leads.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. Initial improvements can be seen in 2–3 months, while significant results typically take 4–6 months depending on competition, industry, website condition, and consistency of SEO efforts.",
  },
  {
    question: "How do I know if SEO is working for my business?",
    answer:
      "SEO success is measured through metrics like organic traffic growth, keyword rankings, leads, conversions, click-through rate (CTR), time on site, and ROI using tools like Google Analytics and Search Console.",
  },
  {
    question: "Can I do SEO myself, or should I hire a professional?",
    answer:
      "Basic SEO can be done by anyone, but professional SEO agencies bring expertise, advanced tools, strategic planning, and experience needed to compete effectively, avoid penalties, and achieve faster, sustainable growth.",
  },
  {
    question:
      "Do I need ongoing SEO, or can I stop after achieving initial results?",
    answer:
      "SEO requires continuous optimization. Search engine algorithms change, competitors improve, and rankings fluctuate. Ongoing SEO ensures you maintain rankings, grow visibility, and continue generating leads consistently.",
  },
  {
    question: "How much does an SEO campaign cost in the USA?",
    answer:
      "SEO pricing in the USA typically ranges from $500 to $5,000+ per month depending on business size, competition, goals, and services required. Affordable plans usually start around $500 for local SEO.",
  },
  {
    question: "What factors affect my SEO ranking?",
    answer:
      "Key ranking factors include content quality, keyword optimization, page speed, mobile responsiveness, backlinks, user experience, technical SEO, site authority, local signals, and engagement metrics.",
  },
  {
    question:
      "What are the most effective SEO practices, and does blogging help?",
    answer:
      "Effective SEO practices include quality content creation, keyword research, technical optimization, backlinks, and local SEO. Blogging helps significantly by improving keyword visibility, authority, and organic traffic over time.",
  },
  {
    question:
      "SEO vs Paid Advertising: Which is better for my business?",
    answer:
      "SEO provides long-term, sustainable traffic without paying per click, while paid advertising delivers instant visibility. The best strategy often combines both—SEO for long-term growth and paid ads for immediate results.",
  },
];

export default function SEOFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-medium text-[#265E52] mb-2">
          Have any questions?
        </p>

        <h2 className="text-3xl font-bold mb-10">
          Explore Our <span className="text-[#265E52]">FAQ&apos;s</span> below.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-gray-200 pb-4 cursor-pointer"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                <div className="flex justify-between items-center py-4">
                  <h4 className="text-base md:text-lg font-medium text-gray-800">
                    {faq.question}
                  </h4>
                  <span className="text-2xl text-gray-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <p className="text-sm text-gray-600 leading-relaxed pr-6">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

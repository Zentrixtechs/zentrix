"use client";

export default function FAQ() {
  const faqs = [
    {
      question: "What services does Zentrix Tech offer?",
      answer:
        "We provide Digital Marketing, SEO, Google Ads, Meta Ads, Logo Design & Branding, and Website Development services tailored to grow your business online.",
    },
    {
      question: "How can SEO help my business?",
      answer:
        "Our SEO services improve your website’s visibility on search engines, drive organic traffic, and help generate high-quality leads that convert into customers.",
    },
    {
      question: "Do you handle paid ads campaigns?",
      answer:
        "Yes! We manage Google Ads, Meta Ads, and LinkedIn Ads campaigns with precise targeting and optimization to maximize your ROI.",
    },
    {
      question: "Can you design a high-converting website for my business?",
      answer:
        "Absolutely. We design responsive, fast, and user-friendly websites that are optimized for conversions and SEO, helping you attract and retain customers.",
    },
    {
      question: "How do I get started with Zentrix Tech?",
      answer:
        "You can book a free consultation by visiting our Contact page. Our experts will understand your business goals and create a tailored marketing strategy.",
    },
    {
      question: "Do you provide branding and logo design services?",
      answer:
        "Yes! We create unique brand identities, logos, and visual systems that establish authority, increase brand recall, and align with your business goals.",
    },
  ];

  return (
    <section className="py-24 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section heading */}
        <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-center">
          Have Any <span className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] bg-clip-text text-transparent">Questions?</span>
        </h2>
        <p className="mt-4 text-lg text-center text-black/70 max-w-3xl mx-auto">
          Explore our FAQ's below.
        </p>

        {/* FAQ items */}
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

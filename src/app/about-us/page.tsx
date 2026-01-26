"use client";

import Head from "next/head";
import Image from "next/image";
import Section from "@/components/shared/Section";
import Reveal from "@/components/Reveal";

export default function AboutUs() {
  return (
    <>
      {/* ================= SEO META ================= */}
      <Head>
        <title>About Zentrix Tech Marketing Agency | Grow Your Business Online</title>
        <meta
          name="description"
          content="About Zentrix Tech Marketing — a performance-driven digital marketing agency offering SEO, Google Ads, Meta Ads, web development, branding, lead generation and conversion solutions."
        />
        <meta
          name="keywords"
          content="Zentrix Tech Marketing, India Digital Marketing Agency, SEO Services, Google Ads Management, Meta Ads, Web Development, Lead Generation"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.zentrix-tech.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Zentrix Digital Marketing Agency | Grow Your Business Online" />
        <meta
          property="og:description"
          content="Discover Zentrix Digital Marketing: experts in SEO, PPC, Google and Meta Ads, web development, and full‑stack digital solutions for businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zentrix-tech.com/about" />
        <meta property="og:image" content="https://www.zentrix-tech.com/images/digital.jpeg" />
        <meta property="og:image:alt" content="Zentrix Digital Marketing team" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zentrix Digital Marketing Agency | Grow Your Business Online" />
        <meta
          name="twitter:description"
          content="Learn about Zentrix Digital Marketing — an agency that helps brands grow online using SEO, PPC, web design, and conversion strategies."
        />
        <meta name="twitter:image" content="https://www.zentrix-tech.com/images/digital.jpeg" />

        {/* JSON‑LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zentrix Digital Marketing",
              url: "https://www.zentrix-tech.com",
              logo: "https://www.zentrix-tech.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/zentrix-tech",
                "https://www.instagram.com/zentrix-tech",
                "https://www.linkedin.com/company/zentrix-tech"
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91 XXXXX XXXXX",
                  contactType: "customer support",
                  areaServed: "IN"
                }
              ],
              description: "Zentrix Digital Marketing is a full‑service digital marketing and web development agency helping businesses grow through SEO, Google Ads, Meta Ads, and conversion‑focused solutions."
            })
          }}
        />

        {/* JSON‑LD Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.zentrix-tech.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://www.zentrix-tech.com/about"
                }
              ]
            })
          }}
        />

        {/* JSON‑LD FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Zentrix Tech Marketing offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer SEO, Google Ads, Meta Ads, web development, branding, lead generation, and conversion-focused solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Zentrix Tech Marketing located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zentrix Tech Marketing is headquartered in Austin, Texas, with services across the USA."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I get in touch with Zentrix Tech Marketing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact us through our website contact form or call us at +91 XXXXX XXXXX."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* ================= HERO ================= */}
      <section className="py-6 bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] text-white text-center shadow-md">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-bold">
            About Zentrix Tech Marketing
          </h1>
        </Reveal>
      </section>

  {/* ================= WHO WE ARE ================= */}
<section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
    
    {/* Left Image */}
    <Reveal>
      <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src="/images/digital.jpeg"
          alt="Zentrix Digital Marketing expert team working on growth strategies"
          width={700}
          height={420}
          className="w-full object-cover"
          priority={true} // Hero image priority
        />
      </div>
    </Reveal>

    {/* Right Text */}
    <Reveal delay={100}>
      <div>
        <p className="text-[#F028C2] font-semibold mb-2">Who We Are</p>

        <h2 className="text-3xl lg:text-4xl font-bold mb-5">
          Why Choose Our <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F028C2] to-[#2D96EB]">
            Digital Marketing Agency
          </span>
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Zentrix Digital Marketing, a division of Zentrix Technologies,
          was founded in 2021 and is headquartered in Austin, Texas.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          We help businesses across the USA, especially healthcare
          and medical industries, generate more visibility,
          appointments, and revenue.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          We offer end-to-end digital marketing solutions including
          SEO, Google Ads, Facebook Ads, website development,
          and lead generation strategies.
        </p>

        <button className="bg-gradient-to-r from-[#F028C2] to-[#2D96EB] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(240,40,194,0.4)]">
          Get in Touch
        </button>
      </div>
    </Reveal>
  </div>

 {/* ================= SECOND ROW ================= */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-20">

  {/* Left Text */}
  <Reveal>
    <div className="flex flex-col justify-center space-y-4 max-w-lg lg:max-w-md">
      
      {/* Small Heading / Brand */}
      <h3 className="text-2xl font-bold text-[#F028C2]">
        Zentrix Digital
      </h3>

      {/* Main Heading with gradient highlight */}
      <h4 className="text-3xl lg:text-4xl font-bold text-gray-900">
        Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F028C2] to-[#2D96EB]">champions of digital growth</span>
      </h4>

      {/* Description */}
      <p className="text-gray-700 text-lg leading-relaxed">
        Our expert team excels in Web Design, SEO, PPC, and Social Media, transforming ideas into measurable success with creative, data-driven strategies that grow your business and enhance online visibility.
      </p>

    </div>
  </Reveal>

  {/* Right Image */}
  <Reveal delay={100}>
    <div className="flex justify-center lg:justify-end">
      <Image
        src="/images/digital.png"
        alt="Digital marketing growth illustration"
        width={480}
        height={360}
        className="rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>
  </Reveal>

</div>

</section>

<section className="bg-slate-50 py-24 border-y border-gray-100">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Flex container: Left text + Right cards */}
    <div className="flex flex-col lg:flex-row items-start">

      {/* Left Strategy Block */}
<Reveal>
   <div className="inline-block px-5 py-2 rounded-full bg-[#EAF6FF] border border-[#2D96EB]">
      <span className="text-base font-semibold uppercase tracking-wider text-[#2D96EB]">
        Our Strategy
      </span>
    </div>
  <div className="flex flex-col justify-center mr-8 space-y-4">
    

    {/* Heading: Two lines */}
    <h2 className="text-5xl lg:text-6xl font-bold leading-snug text-gray-900">
      <span className="block">Big or small?</span>
      <span className="block relative text-transparent bg-clip-text bg-gradient-to-r from-[#F028C2] to-[#2D96EB]">
        We have a plan
        {/* <span className="absolute bottom-1 left-0 w-full h-2 bg-[#F028C2]/10 -z-10 rounded"></span> */}
      </span>
    </h2>

    {/* Description: Three lines */}
    {/* Description: SEO-friendly */}
<p className="text-gray-700 text-lg leading-relaxed max-w-sm">
  Whether you’re a startup, small business, or an established enterprise, we provide tailored digital marketing strategies designed to drive business growth, enhance online visibility, and foster innovation. Our data-driven approach ensures measurable success across SEO, social media marketing, paid campaigns, and brand development, helping your company achieve sustainable results and stay ahead of the competition.
</p>

  </div>
</Reveal>

      {/* Right Cards */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {[
          { title: "Mission", heading: "Unlocking Potential", desc: "Helping businesses grow by delivering innovative solutions.", img: "/images/mission.png", color: "#F028C2" },
          { title: "Vision", heading: "Shaping Tomorrow", desc: "Driving progress through creativity and technology.", img: "/images/vision.png", color: "#2D96EB" },
          { title: "Goal", heading: "Building Partnerships", desc: "Creating lasting relationships for shared success.", img: "/images/goal.png", color: "#2D96EB" },
          { title: "Values", heading: "Integrity & Innovation", desc: "Built on trust, innovation, and collaboration.", img: "/images/value.png", color: "#F028C2" }
        ].map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <article className="group bg-white rounded-2xl border border-gray-200 flex flex-col items-center text-center p-5 h-[280px] w-full hover:shadow-lg transition-all duration-300">
              
              {/* Image as div background */}
              <div
                className="w-20 h-20 mb-3 flex items-center justify-center bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>

              {/* Title */}
              <p className="text-1xl lg:text-2xl font-semibold text-xs uppercase tracking-wide mb-1" style={{ color: item.color }}>
                {item.title}
              </p>

              {/* Heading */}
              <h4 className="font-bold text-xl mb-2">
                {item.heading}
              </h4>

              {/* Description */}
              <p className="text-600 leading-relaxed">
                {item.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

    </div>
  </div>
</section>

{/* ================= WHY CHOOSE US ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

    {/* Section Heading */}
    <Reveal>
      <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-900">
        Why choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F028C2] to-[#2D96EB]">Zentrix Digital Marketing</span>
      </h2>
    </Reveal>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Customer Satisfaction", img: "/images/icons/customer.png" },
        { title: "Detailed Reporting", img: "/images/icons/report.png" },
        { title: "Excellent Support", img: "/images/icons/support.png" },
        { title: "Success Strategies", img: "/images/icons/strategy.png" },
        { title: "Cost Effective", img: "/images/icons/cost.png" },
        { title: "Precision Targeting", img: "/images/icons/target.png" },
        { title: "24/7 Monitoring", img: "/images/icons/monitor.png" },
        { title: "Certified Experts", img: "/images/icons/expert.png" },
      ].map((item, i) => (
        <Reveal key={item.title} delay={i * 100}>
          <article className="flex flex-col items-center bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group relative">

            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-[#F028C2] to-[#2D96EB] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

            {/* Icon */}
            <div className="w-40 h-40 flex items-center justify-center mb-3">
              <Image
                src={item.img}
                alt={`${item.title} icon`}
                width={100}
                height={100}
                className="object-contain"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <h4 className="font-semibold text-gray-900 text-lg group-hover:text-[#2D96EB] transition-colors duration-300">
              {item.title}
            </h4>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>


      <Section />
    </>
  );
}

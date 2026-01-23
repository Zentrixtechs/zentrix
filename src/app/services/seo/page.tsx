// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import IndustrySeoShowcase from '@/components/shared/SEOShowcase';
// import AISEOPricingTable from '@/components/shared/AISEOPricingTable';
// import SEOFAQ from '@/components/shared/seofaq';

// export default function AISEOIntroSection() {
//   return (
//     <>
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= TOP CONTENT ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div>
//             <h2 className="text-3xl font-bold mb-6">
//               An SEO Company that help businesses get found and grow
//             </h2>

//             <p className="text-gray-600 mb-4">
//               If you are one of them facing these following problems
//             </p>

//             <ul className="space-y-3 text-sm mb-6">
//               <li>✔ Struggling to rank on the first page of Google?</li>
//               <li>✔ Finding it hard to get visibility on AI-powered platforms?</li>
//               <li>✔ Experiencing low website traffic?</li>
//               <li>✔ Your business isn’t showing up online?</li>
//               <li>✔ Not getting qualified leads or appointments?</li>
//               <li>✔ Invisible on Google Maps and local searches?</li>
//             </ul>

//             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//               At NShine, our Search Engine Optimization Experts will take care of
//               your problems and ensure you’re choosing the right agency for
//               real results.
//             </p>

//             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//               From Local SEO services to International SEO services, we optimize
//               your website so your business reaches the right audience.
//             </p>

//             <p className="text-sm text-gray-600 leading-relaxed mb-4">
//               We help with Keyword Research, Competitor Analysis, Content
//               Optimization, SEO audits, On-Page, Off-Page, Technical SEO and AI
//               SEO practices across Google, Bing, ChatGPT, Gemini, Copilot and
//               more.
//             </p>

//             <p className="text-sm text-gray-600 leading-relaxed mb-6">
//               We work with businesses across the US and offer affordable SEO
//               packages starting at just <strong>$500 per month</strong>.
//             </p>

//             <p className="font-medium text-[#265E52]">
//               Please check our SEO packages and take your first step towards
//               organic growth.
//             </p>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center">
//             <Image
//               src="/images/ai-seo.png"
//               alt="AI SEO Illustration"
//               width={520}
//               height={420}
//               className="object-contain"
//             />
//           </div>

//         </div>

//         {/* ================= RESULT BOX ================= */}
//         <div className="mt-20 border rounded-xl p-8">
//           <h3 className="text-center font-semibold mb-8">
//             We turn your hard work into
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <ResultItem
//               title="Better Rankings"
//               desc="Get found above your competitors."
//             />
//             <ResultItem
//               title="More Traffic"
//               desc="Fix drops and grow visits."
//             />
//             <ResultItem
//               title="Increased Leads"
//               desc="Attract the right customers."
//             />
//             <ResultItem
//               title="Fast Growth"
//               desc="Start strong, scale smarter."
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//     <section className="bg-gradient-to-b from-[#275E54] to-[#1F4037] py-20 text-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= HEADER ================= */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Our <span className="text-[#E7B66A]">SEO Services</span>
//           </h2>
//           <p className="text-sm md:text-base opacity-90">
//             Our professional SEO services include expert Local SEO, National SEO,
//             and E-commerce SEO, helping your business rank higher in search
//             results, reach the right audience, and improve brand visibility.
//           </p>
//         </div>

//         {/* ================= SERVICES GRID ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* LOCAL SEO */}
//           <ServiceCard
//             icon="/icons/local-seo.svg"
//             title="Local SEO"
//             desc="Our Local SEO services help your business appear in local search results. As a trusted local SEO company, we optimize your Google Business Profile, citations, and local keywords to drive more traffic and leads."
//           />

//           {/* NATIONAL SEO */}
//           <ServiceCard
//             icon="/icons/national-seo.svg"
//             title="National SEO"
//             desc="Our National SEO services help improve website performance using targeted keywords, optimized site structure, and strategic link building to compete across nationwide search results."
//           />

//           {/* ECOMMERCE SEO */}
//           <ServiceCard
//             icon="/icons/ecommerce-seo.svg"
//             title="E-Commerce SEO"
//             desc="We provide expert E-commerce SEO services to optimize product pages, boost rankings, enhance site structure, and drive more online sales for your store."
//           />

//         </div>
//       </div>
//     </section>
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= HEADER ================= */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Our Comprehensive <span className="text-[#1E8E73]">SEO Services</span>
//           </h2>
//           <p className="text-gray-600 text-sm md:text-base">
//             Expert SEO services from audits to optimization to boost rankings and traffic
//           </p>
//         </div>

//         {/* ================= GRID ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           <SEOCard
//             title="On-Page SEO"
//             desc="At NShine, our SEO experts provide on-page SEO services to help your business rank higher and attract the right audience. We optimize website content, headings, title tags, meta descriptions, HTML structure, images, and internal linking to enhance both rankings and user experience."
//           />

//           <SEOCard
//             title="Off-Page SEO"
//             desc="Our Off-Page SEO services enhance brand and online presence using high-quality backlinks, strategic link building, digital PR, content marketing, and reputation management to build trust, authority, and qualified traffic."
//           />

//           <SEOCard
//             title="Technical SEO"
//             desc="Optimize website performance and search rankings with expert technical SEO. We ensure efficient crawling, indexing, site speed optimization, mobile friendliness, structured data, and a strong technical foundation."
//           />

//           <SEOCard
//             title="Local SEO Services"
//             desc="We provide local SEO services to help businesses rank higher in local searches. Our experts optimize Google Business Profile, on-page content, citations, and local keywords to drive nearby customers and local traffic."
//           />

//           <SEOCard
//             title="Amazon SEO Services"
//             desc="Our Amazon SEO services help your products get discovered by buyers ready to purchase. We optimize product titles, bullet points, backend search terms, enhanced brand content, and combine SEO with Amazon Ads."
//           />

//           <SEOCard
//             title="AI SEO Services"
//             desc="Increase visibility with AI SEO services designed to rank your business on AI platforms and LLMs. We use advanced AI tools and keyword strategies to help brands appear in AI Overviews and next-gen search results."
//           />

//           <SEOCard
//             title="Content & Copywriting for SEO"
//             desc="Our SEO content services include keyword research, content strategy, landing page creation, blog writing, and ongoing optimization to attract the right audience and convert visitors into customers."
//           />

//           <SEOCard
//             title="Shopify SEO Services"
//             desc="We provide Shopify SEO services to help stores rank higher and drive more sales. From product optimization and technical SEO to content and on-page improvements, we help Shopify stores grow profitably."
//           />

//           <SEOCard
//             title="Analytics & Reporting"
//             desc="We track performance with advanced analytics and reporting. Monitor traffic, user behavior, conversions, and KPIs through real-time dashboards to guide SEO improvements and business decisions."
//           />

//         </div>
//       </div>
      
//     </section>

//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* ================= LEFT IMAGE ================= */}
//           <div className="relative">
//             <Image
//               src="/images/nshine-team.jpg"   // 🔁 replace with your image path
//               alt="NShine Technologies Team"
//               width={620}
//               height={420}
//               className="rounded-2xl shadow-lg object-cover"
//             />

//             {/* Optional watermark effect */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="text-white text-4xl font-bold opacity-10 select-none">
//                 NShine Technologies
//               </span>
//             </div>
//           </div>

//           {/* ================= RIGHT CONTENT ================= */}
//           <div>
//             <p className="text-sm font-semibold text-[#1E8E73] mb-2">
//               Who We Are
//             </p>

//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Why Choose Our{" "}
//               <span className="text-[#1E8E73]">
//                 Digital Marketing Agency
//               </span>
//             </h2>

//             <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
//               <p>
//                 NShine Digital Marketing, a division of NShine Technologies,
//                 was founded in 2021 and is headquartered in Austin, Texas.
//               </p>

//               <p>
//                 At NShine Digital Marketing Company, we have helped businesses
//                 across industries in the USA, especially healthcare and the
//                 medical sector, achieve more appointments, visibility, and revenue.
//               </p>

//               <p>
//                 Our mission is to help businesses grow online through strategic
//                 and result-driven digital marketing solutions.
//               </p>

//               <p>
//                 We offer complete 360° digital marketing services — from logo
//                 design and website development to Google Ads, Facebook Ads,
//                 and long-term SEO growth. We believe in building strong client
//                 relationships, understanding problems deeply, and providing
//                 clear execution plans that generate quality leads.
//               </p>

//               <p>
//                 Partner with NShine today for personalized service and real,
//                 measurable results.
//               </p>
//             </div>

//             <Link
//               href="/contact"
//               className="inline-block mt-8 bg-[#1E8E73] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
//             >
//               Get in Touch
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>

//     <section className="py-24 bg-[#F9FCFB]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= HEADER ================= */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             AI SEO: Get Found on{" "}
//             <span className="text-[#1E8E73]">
//               AI-Powered Search
//             </span>
//           </h2>

//           <p className="text-gray-600 text-sm leading-relaxed">
//             Get your brand featured and attract traffic from leading language
//             platforms and smart search tools. Reach audiences across ChatGPT,
//             Perplexity, Google Gemini, Copilot, Google AI Overviews, and more.
//           </p>
//         </div>

//         {/* ================= CONTENT ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* ================= LEFT LIST ================= */}
//           <div>

//             <h3 className="text-lg font-semibold mb-6">
//               Get Featured Across All Major AI Platforms
//             </h3>

//             <div className="space-y-4">

//               <PlatformCard
//                 title="ChatGPT"
//                 badge="100M+ users"
//                 desc="OpenAI’s conversational platform"
//                 icon="/icons/chatgpt.svg"
//               />

//               <PlatformCard
//                 title="Google AI"
//                 badge="8.5B+ searches daily"
//                 desc="Featured in AI Overviews"
//                 icon="/icons/google-ai.svg"
//               />

//               <PlatformCard
//                 title="Perplexity"
//                 badge="10M+ users"
//                 desc="Intelligent search results"
//                 icon="/icons/perplexity.svg"
//               />

//               <PlatformCard
//                 title="Gemini"
//                 badge="Rapidly growing"
//                 desc="Google’s advanced search tool"
//                 icon="/icons/gemini.svg"
//               />

//             </div>

//             {/* ================= STATS ================= */}
//             <div className="grid grid-cols-3 gap-6 mt-10 bg-[#EEF6F3] rounded-xl p-6 text-center">
//               <Stat value="40%" label="of searches will rely on AI by 2025" />
//               <Stat value="3x" label="higher engagement from AI referrals" />
//               <Stat value="65%" label="of users trust AI recommendations" />
//             </div>
//           </div>

//           {/* ================= RIGHT IMAGE ================= */}
//           <div className="relative">
//             <Image
//               src="/images/ai-search-hero.jpg"
//               alt="AI Powered Search"
//               width={560}
//               height={420}
//               className="rounded-2xl shadow-xl object-cover"
//             />

//             <div className="absolute inset-0 bg-black/10 rounded-2xl" />
//           </div>

//         </div>
//       </div>
//     </section>
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

//         {/* ================= LEFT CONTENT ================= */}
//         <div>
//           <h2 className="text-3xl font-bold mb-4">
//             Our Proven SEO Process
//             <br />
//             <span className="text-[#265E52]">
//               That Delivers Results
//             </span>
//           </h2>

//           <p className="text-gray-600 text-sm leading-relaxed mb-4">
//             At NShine, we are more than just an SEO company – we are a
//             results-driven digital marketing SEO agency focused on helping
//             businesses grow utilizing strategic search engine optimization.
//             Our approach to SEO is a combination of data, creativity,
//             and experience to optimize your search engine rankings and
//             generate the right traffic to your website.
//           </p>

//           <p className="text-gray-600 text-sm leading-relaxed mb-4">
//             With a strong foundation in internet marketing, our process
//             includes a comprehensive website audit, content optimization,
//             and link building. At each phase, we follow a researched
//             procedure and a knowledgeable understanding of your business
//             goals and needs.
//           </p>

//           <p className="text-gray-600 text-sm leading-relaxed mb-8">
//             Here’s how our successful SEO process works.
//           </p>

//           <Link
//             href="/contact"
//             className="inline-block bg-[#E7B66A] text-black px-6 py-3 rounded-md font-semibold"
//           >
//             Free Consultation
//           </Link>
//         </div>

//         {/* ================= RIGHT STEPS ================= */}
//         <div className="space-y-6">

//           <StepCard
//             step="1"
//             title="Discover & Analyze"
//             desc="As a search engine optimization company, our first step involves gaining an understanding of your business objectives, target audience, and expectations. Our SEO specialists conduct a complete SEO audit. Then our technical SEO services team analyzes your competitors strategy, performance, link building, and technical factors. These research and analysis factors will provide a baseline for what you can expect from a results-focused SEO agency."
//           />

//           <StepCard
//             step="2"
//             title="Strategize"
//             desc="Experts from our NShine SEO agency create a 60-day strategic plan based on website analysis, competitor insights, and keyword research. Our SEO company prioritizes high impact tasks in the first month, combining on-page SEO, content planning, technical SEO, and link-building to boost visibility, traffic, and conversions while aligning with your KPIs."
//           />

//           <StepCard
//             step="3"
//             title="Execute"
//             desc="We optimize your website and create new pages around high-performing keywords, improve your technical SEO factors, and create and manage business listings. Our SEO agency also performs social media management on third-party platforms to reach more of your target audience, generate traffic, and improve your online presence."
//           />

//           <StepCard
//             step="4"
//             title="Monitor"
//             desc="We monitor the progress to understand how your SEO campaign is being executed. We track each KPI, traffic, CTR, and bounce rate, and create in-depth reports. Our SEO experts then utilize these metrics to provide data-driven adjustments and improvements to help increase rankings, visibility, and conversions on your website continuously."
//           />

//         </div>
//       </div>
//     </section>
//     <IndustrySeoShowcase />
//     <AISEOPricingTable />
//     <SEOFAQ />
    
    
//     </>
//   );
// }

// function SEOCard({
//   title,
//   desc,
// }: {
//   title: string;
//   desc: string;
// }) {
//   return (
//     <div className="border border-[#8AD4B2] rounded-2xl p-6 hover:shadow-lg transition">
//       <h3 className="font-semibold text-lg mb-3 text-gray-900">
//         {title}
//       </h3>
//       <p className="text-sm text-gray-600 leading-relaxed">
//         {desc}
//       </p>
//     </div>
//   );
// }

// /* ================= SMALL COMPONENT ================= */

// function ResultItem({
//   title,
//   desc,
// }: {
//   title: string;
//   desc: string;
// }) {
//   return (
//     <div>
//       <h4 className="font-semibold mb-2">{title}</h4>
//       <p className="text-sm text-gray-600">{desc}</p>
//     </div>
//   );
// }
// function ServiceCard({
//   icon,
//   title,
//   desc,
// }: {
//   icon: string;
//   title: string;
//   desc: string;
// }) {
//   return (
//     <div className="border border-white/30 rounded-2xl p-8 text-center backdrop-blur-sm bg-white/5 hover:bg-white/10 transition">
//       <div className="flex justify-center mb-6">
//         <div className="w-16 h-16 rounded-full border border-[#E7B66A] flex items-center justify-center">
//           <Image src={icon} alt={title} width={32} height={32} />
//         </div>
//       </div>

//       <h3 className="text-xl font-semibold mb-4">{title}</h3>
//       <p className="text-sm leading-relaxed opacity-90">
//         {desc}
//       </p>
//     </div>
//   );
// }

// function PlatformCard({
//   title,
//   badge,
//   desc,
//   icon,
// }: {
//   title: string;
//   badge: string;
//   desc: string;
//   icon: string;
// }) {
//   return (
//     <div className="flex items-center gap-4 bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition">
//       <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#EAF4F1]">
//         <Image src={icon} alt={title} width={26} height={26} />
//       </div>

//       <div className="flex-1">
//         <div className="flex items-center gap-2">
//           <h4 className="font-semibold">{title}</h4>
//           <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
//             {badge}
//           </span>
//         </div>
//         <p className="text-sm text-gray-500">{desc}</p>
//       </div>
//     </div>
//   );
// }

// function Stat({ value, label }: { value: string; label: string }) {
//   return (
//     <div>
//       <p className="text-2xl font-bold text-[#1E8E73]">{value}</p>
//       <p className="text-xs text-gray-600 mt-1">{label}</p>
//     </div>
//   );
// }

// function StepCard({
//   step,
//   title,
//   desc,
// }: {
//   step: string;
//   title: string;
//   desc: string;
// }) {
//   return (
//     <div className="relative bg-[#265E52] text-white rounded-xl p-6">
//       <span className="absolute top-4 right-4 text-5xl font-bold opacity-20">
//         {step}
//       </span>

//       <h4 className="text-lg font-semibold mb-3">{title}</h4>

//       <p className="text-sm opacity-90 leading-relaxed">
//         {desc}
//       </p>
//     </div>
//   );
// }

// src/app/services/ads/meta-ads/page.tsx

export default function Page() {
  return null; // Or <div>Coming Soon</div>
}
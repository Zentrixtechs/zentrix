// "use client";
// import { useState } from "react";

// import Image from "next/image";

// export default function GoogleAdsSection() {
//   return (
//     <>
//       {/* ================= HERO + FEATURES ================= */}
//       <section className="bg-[#275E54] text-white py-20">
//         <div className="max-w-7xl mx-auto px-6">

//           {/* ================= TOP CONTENT ================= */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

//             {/* LEFT TEXT */}
//             <div>
//               <h1 className="text-4xl font-bold leading-snug mb-6">
//                 Maximize ROI and{" "}
//                 <span className="text-[#E7B66A]">Boost Leads</span> with <br />
//                 Expert PPC & Google Ads Advertising
//               </h1>

//               <p className="text-sm leading-relaxed opacity-90">
//                 NShine Digital experts optimize your ad budget to boost lead generation,
//                 conversions, and ROI. With real-time tracking and adjustments, Google Ads
//                 and PPC campaigns drive sales, generate leads, and enhance brand awareness effectively.
//               </p>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="flex justify-center">
//               <Image
//                 src="/images/google-ads-hero.png"
//                 alt="Google Ads Illustration"
//                 width={420}
//                 height={320}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* ================= FEATURES GRID ================= */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <FeatureCard
//               title="Keyword Research"
//               desc="Optimize ads with high-performing keywords."
//               icon="/icons/keyword.svg"
//             />
//             <FeatureCard
//               title="Attractive Ad Copies"
//               desc="Attractive headlines, descriptions, and extensions to boost performance."
//               icon="/icons/ad-copy.svg"
//             />
//             <FeatureCard
//               title="Google Analytics"
//               desc="Tracks organic vs paid traffic."
//               icon="/icons/analytics.svg"
//             />
//             <FeatureCard
//               title="Conversion Tracking"
//               desc="We implement and track leads, sales and phone calls."
//               icon="/icons/conversion.svg"
//             />
//             <FeatureCard
//               title="Cost Effective"
//               desc="Maximize your ROI with cost-efficient campaigns."
//               icon="/icons/cost.svg"
//             />
//             <FeatureCard
//               title="Audience Insights"
//               desc="Deep understanding of audience behavior and preferences."
//               icon="/icons/audience.svg"
//             />
//             <FeatureCard
//               title="Weekly Reporting"
//               desc="We report results every week."
//               icon="/icons/report.svg"
//             />
//             <FeatureCard
//               title="Certified Google Ads Experts"
//               desc="Managed by certified professionals."
//               icon="/icons/certified.svg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ================= PERFORMANCE STATS (ADDED) ================= */}
//       <section className="bg-[#275E54] py-16 text-white text-center">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
//           <Stat value="3.4X" label="Average advertising ROI lift" />
//           <Stat value="260%" label="Average increase in appointments" />
//           <Stat value="400%" label="Average client return on ad spend" />
//         </div>
//       </section>

//       {/* ================= WHY INVEST IN PAID ADS (ADDED) ================= */}
//       <section className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT CONTENT */}
//           <div>
//             <h2 className="text-3xl font-bold mb-4">
//               Target the right users and build your Business.
//             </h2>

//             <p className="text-sm text-gray-600 leading-relaxed mb-6">
//               A successful paid advertising strategy involves targeting searching
//               customers, driving them to your website, and converting users into leads.
//             </p>

//             <ul className="space-y-3 mb-6">
//               <li className="flex items-center gap-3">
//                 <span className="w-6 h-6 bg-[#275E54] text-white rounded-full flex items-center justify-center text-sm">1</span>
//                 Targeted Campaigns
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="w-6 h-6 bg-[#275E54] text-white rounded-full flex items-center justify-center text-sm">2</span>
//                 Convert leads into customers
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="w-6 h-6 bg-[#275E54] text-white rounded-full flex items-center justify-center text-sm">3</span>
//                 Maximize marketing ROI
//               </li>
//             </ul>

//             <button className="bg-[#E7B66A] px-6 py-3 rounded-md font-semibold">
//               Get Started
//             </button>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center">
//             <Image
//               src="/images/google-ads-search.png"
//               alt="Google Ads Search Example"
//               width={420}
//               height={360}
//               className="rounded-xl shadow-lg"
//             />
//           </div>

//         </div>
//       </section>
//       {/* ================= WHY CHOOSE NSHINE ================= */}
// <section className="bg-white py-20">
//   <div className="max-w-7xl mx-auto px-6">

//     {/* HEADER */}
//     <div className="text-center mb-14">
//       <h2 className="text-3xl md:text-4xl font-bold mb-3">
//         Why Choose <span className="text-[#265E52]">NShine?</span>
//       </h2>
//       <p className="text-sm text-gray-600 max-w-3xl mx-auto">
//         Boost your business with targeted digital marketing using Google Ads,
//         Google Maps, Google Analytics, SEO, and social media strategies designed
//         for local success.
//       </p>
//     </div>

//     {/* CONTENT */}
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//       {/* LEFT IMAGE */}
//       <div className="flex justify-center">
//         <Image
//           src="/images/why-nshine-google-ads.png"
//           alt="Why Choose NShine"
//           width={480}
//           height={480}
//           className="rounded-xl shadow"
//         />
//       </div>

//       {/* RIGHT CONTENT */}
//       <div>
//         <h3 className="text-2xl font-bold mb-4 text-[#265E52]">
//           Proven results in Austin and DFW area
//         </h3>

//         <p className="text-sm text-gray-600 leading-relaxed mb-6">
//           Our team specializes in optimizing Google Ads campaigns to maximize
//           return on investment. Allow us to manage your ad campaigns so you can
//           focus on delivering the best care and services to your clients.
//         </p>

//         <ul className="space-y-4 mb-8">
//           <li className="flex gap-4">
//             <span className="w-8 h-8 rounded-full bg-[#265E52] text-white flex items-center justify-center font-semibold">
//               1
//             </span>
//             Proven Results with High ROI
//           </li>

//           <li className="flex gap-4">
//             <span className="w-8 h-8 rounded-full bg-[#265E52] text-white flex items-center justify-center font-semibold">
//               2
//             </span>
//             Certified Google Ads Experts
//           </li>

//           <li className="flex gap-4">
//             <span className="w-8 h-8 rounded-full bg-[#265E52] text-white flex items-center justify-center font-semibold">
//               3
//             </span>
//             Cost Effective
//           </li>

//           <li className="flex gap-4">
//             <span className="w-8 h-8 rounded-full bg-[#265E52] text-white flex items-center justify-center font-semibold">
//               4
//             </span>
//             Local SEO Expertise
//           </li>

//           <li className="flex gap-4">
//             <span className="w-8 h-8 rounded-full bg-[#265E52] text-white flex items-center justify-center font-semibold">
//               5
//             </span>
//             Transparent Reporting
//           </li>
//         </ul>

//         <button className="bg-[#E7B66A] px-6 py-3 rounded-md font-semibold text-black hover:opacity-90 transition">
//           Ready to Boost Your Local Presence?
//         </button>
//       </div>
//     </div>
//   </div>
// </section>
// {/* ================= GOOGLE ADS PRICING ================= */}
// <section className="bg-white py-20">
//   <div className="max-w-7xl mx-auto px-6">

//     {/* HEADER */}
//     <div className="text-center mb-16">
//       <h2 className="text-3xl md:text-4xl font-bold mb-2">
//         Our Google Ads Pricing Packages
//       </h2>
//       <p className="text-sm text-gray-600">
//         Boost Your Business on Any Budget
//       </p>
//     </div>

//     {/* PRICING CARDS */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

//       {/* STARTER */}
//       <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
//         <h3 className="text-xl font-semibold mb-3">Starter</h3>
//         <p className="line-through text-gray-400">$300</p>
//         <p className="text-4xl font-bold">$249</p>
//         <p className="text-sm text-gray-600 mb-6">Per Month</p>

//         <button className="w-full bg-[#1f8f72] text-white py-2 rounded-md font-medium">
//           Get Started
//         </button>
//       </div>

//       {/* STANDARD */}
//       <div className="relative rounded-2xl p-8 text-center shadow bg-gradient-to-b from-[#E7B66A] to-[#45C4A0]">
//         <span className="absolute top-4 right-4 bg-white text-xs px-3 py-1 rounded-full font-semibold">
//           Popular
//         </span>

//         <h3 className="text-xl font-semibold mb-3">Standard</h3>
//         <p className="line-through opacity-70">$500</p>
//         <p className="text-4xl font-bold">$449</p>
//         <p className="text-sm mb-6">Per Month</p>

//         <button className="w-full bg-white text-black py-2 rounded-md font-medium">
//           Get Started
//         </button>
//       </div>

//       {/* PREMIUM */}
//       <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
//         <h3 className="text-xl font-semibold mb-3">Premium</h3>
//         <p className="line-through text-gray-400">25%</p>
//         <p className="text-4xl font-bold">15%</p>
//         <p className="text-sm text-gray-600 mb-6">of Ad Budget</p>

//         <button className="w-full bg-[#1f8f72] text-white py-2 rounded-md font-medium">
//           Get Started
//         </button>
//       </div>
//     </div>

//     {/* FEATURES TABLE */}
//     <div className="overflow-x-auto">
//       <table className="w-full border border-gray-200 text-sm">
//         <tbody>

//           {[
//             ["Account Setup", "✔", "✔", "✔"],
//             ["Campaign Setup", "1", "2", "Unlimited"],
//             ["Landing Page", "❌", "❌", "✔"],
//             ["Budget", "Up to $1,500", "Up to $2,500", "Over $2,500"],
//             ["Competitor Analysis", "✔", "✔", "✔"],
//             ["Conversion Tracking", "Using GTM Tracking", "Using GTM Tracking", "Using GTM Tracking"],
//             ["Google Analytics Setup", "✔", "✔", "✔"],
//             ["Reporting", "Monthly", "Monthly", "Monthly"],
//             ["Locations", "1 Location", "2 Locations", "Unlimited"],
//             ["Goals", 
//               "Drive Traffic & Leads", 
//               "Drive Traffic & Leads", 
//               "Drive Traffic & Leads"
//             ],
//           ].map((row, i) => (
//             <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
//               <td className="p-4 font-medium">{row[0]}</td>
//               <td className="p-4 text-center">{row[1]}</td>
//               <td className="p-4 text-center">{row[2]}</td>
//               <td className="p-4 text-center">{row[3]}</td>
//             </tr>
//           ))}

//         </tbody>
//       </table>
//     </div>

//   </div>
// </section>
// {/* ================= GET IN TOUCH ================= */}
// <section className="bg-[#265E52] text-white py-12">
//   <div className="max-w-7xl mx-auto px-6 text-center">
//     <h3 className="text-2xl font-bold mb-6 text-[#E7B66A]">
//       Get in Touch with Us Today!
//     </h3>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//       <div>
//         <p className="text-sm opacity-80 mb-1">Call Us</p>
//         <p className="font-semibold text-lg">+1 612-470-2664</p>
//       </div>

//       <div>
//         <p className="text-sm opacity-80 mb-1">Email Us</p>
//         <p className="font-semibold text-lg">support@nshine.tech</p>
//       </div>

//       <div>
//         <p className="text-sm opacity-80 mb-1">Address</p>
//         <p className="font-semibold text-lg">Austin, TX, USA</p>
//       </div>

//     </div>
//   </div>
// </section>

// {/* ================= FAQ SECTION ================= */}
// <section className="bg-white py-20">
//   <div className="max-w-5xl mx-auto px-6">

//     <h2 className="text-2xl font-bold mb-8">FAQS</h2>

//     <GoogleAdsFAQItem
//       question="What is Google Ads?"
//       answer="Google Ads is an online advertising platform by Google where businesses can create ads that appear on Google Search, YouTube, Gmail, and other Google Display Network sites. Advertisers pay only when users click on their ads (Pay-Per-Click), making it a cost-effective way to drive traffic and leads."
//     />

//     <GoogleAdsFAQItem
//       question="How does Google Ads work?"
//       answer="Google Ads works on an auction system. Advertisers bid on keywords relevant to their business. When users search those keywords, Google displays ads based on bid amount, ad relevance, and quality score to deliver the best experience."
//     />

//     <GoogleAdsFAQItem
//       question="How do Google Ads work for local businesses?"
//       answer="Google Ads helps local businesses target customers in specific locations using geo-targeting. This allows ads to appear to people searching for services near them, driving calls, store visits, and inquiries."
//     />

//     <GoogleAdsFAQItem
//       question="What is a Google Ads campaign’s Return on Investment (ROI)?"
//       answer="ROI measures how much revenue you earn compared to what you spend on ads. Well-optimized Google Ads campaigns often generate high ROI by targeting high-intent users and converting them into paying customers."
//     />

//     <GoogleAdsFAQItem
//       question="Why should I choose NShine Marketing for managing my Google Ads campaigns?"
//       answer="NShine Marketing offers certified Google Ads experts, data-driven strategies, transparent reporting, and proven results across Austin and DFW. We focus on maximizing conversions while controlling ad spend."
//     />

//     <GoogleAdsFAQItem
//       question="How does NShine Marketing ensure better results compared to other agencies?"
//       answer="We use continuous optimization, advanced tracking (GTM & Analytics), competitor analysis, and weekly performance monitoring to improve results. Our goal is consistent growth, not just clicks."
//     />

//   </div>
// </section>


//     </>
//   );
// }





// function GoogleAdsFAQItem({
//   question,
//   answer,
// }: {
//   question: string;
//   answer: string;
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       className="bg-[#FBF7F1] rounded-md mb-4 cursor-pointer"
//       onClick={() => setOpen(!open)}
//     >
//       <div className="flex justify-between items-center px-6 py-4">
//         <h4 className="font-medium">{question}</h4>
//         <span className="text-xl">{open ? "−" : "+"}</span>
//       </div>

//       {open && (
//         <p className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
//           {answer}
//         </p>
//       )}
//     </div>
//   );
// }

// /* ================= REUSABLE COMPONENTS ================= */

// function FeatureCard({
//   title,
//   desc,
//   icon,
// }: {
//   title: string;
//   desc: string;
//   icon: string;
// }) {
//   return (
//     <div className="bg-white text-black rounded-xl p-6 shadow hover:shadow-lg transition">
//       <div className="w-12 h-12 rounded-lg bg-[#EAF4F1] flex items-center justify-center mb-4">
//         <Image src={icon} alt={title} width={26} height={26} />
//       </div>
//       <h4 className="font-semibold mb-2">{title}</h4>
//       <p className="text-sm text-gray-600">{desc}</p>
//     </div>
//   );
// }

// function Stat({ value, label }: { value: string; label: string }) {
//   return (
//     <div>
//       <p className="text-4xl font-bold text-[#E7B66A]">{value}</p>
//       <p className="text-sm mt-2">{label}</p>
//     </div>
//   );
// }

// src/app/marketing/ads/google-ads/page.tsx

export default function GoogleAdsPage() {
  return (
    <div>
      <h1>Google Ads Services</h1>
    </div>
  );
}
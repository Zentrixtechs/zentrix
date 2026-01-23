// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Section from "@/components/shared/Section";
// import ClientsMarquee from "@/components/shared/ClientsMarquee";

// export default function MetaAdsPage() {
//   return (
//     <>
//       {/* ================= HERO + FORM ================= */}
//       {/* Assuming Section contains your hero logic */}
//       <Section />

//       {/* ================= TRUSTED CLIENTS ================= */}
//       <section className="bg-white py-12 border-t">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <p className="text-sm font-bold text-[#F028C2] uppercase tracking-widest mb-6">
//             Our Trusted Clients in Dallas & Austin
//           </p>
//           <ClientsMarquee />
//         </div>
//       </section>

//       {/* ================= WHY META ADS ================= */}
//       <section className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-16">
//             Why Your Business Should Invest in Meta <br />
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F028C2] to-[#2D96EB]">
//               (Facebook & Instagram) Ads
//             </span>
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
//             {/* LEFT CONTENT */}
//             <div>
//               <h3 className="text-2xl font-bold mb-4 text-[#2D96EB]">
//                 Reach More Customers. Grow Faster.
//               </h3>

//               <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                 Reach and engage your ideal audience with high-performing
//                 Meta Ads designed to your business goals. Our Facebook and
//                 Instagram advertising strategies are built to attract local
//                 customers, generate qualified leads, and maximize your ROI.
//               </p>

//               <ul className="space-y-3 mb-6">
//                 <li className="flex gap-3 items-center">
//                   <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F028C2] to-[#2D96EB] text-white flex items-center justify-center text-xs font-bold">
//                     1
//                   </span>
//                   Advanced Targeting
//                 </li>
//                 <li className="flex gap-3 items-center">
//                   <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F028C2] to-[#2D96EB] text-white flex items-center justify-center text-xs font-bold">
//                     2
//                   </span>
//                   Scalable Growth
//                 </li>
//                 <li className="flex gap-3 items-center">
//                   <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F028C2] to-[#2D96EB] text-white flex items-center justify-center text-xs font-bold">
//                     3
//                   </span>
//                   Measurable ROI
//                 </li>
//               </ul>

//               <Link
//                 href="/contact"
//                 className="inline-block bg-[#F028C2] px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-magenta/40 hover:-translate-y-1 transition-all"
//               >
//                 Get Started
//               </Link>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="flex justify-center relative">
//                {/* Decorative background element */}
//                <div className="absolute inset-0 bg-gradient-to-tr from-[#F028C2]/10 to-[#2D96EB]/10 blur-3xl -z-10 rounded-full"></div>
//               <Image
//                 src="/images/meta-ad-single.png"
//                 alt="Meta Ads Example"
//                 width={420}
//                 height={520}
//                 className="rounded-xl shadow-2xl border border-white/50"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= AD PREVIEW GRID ================= */}
//       <section className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Your Brand, Perfectly Presented on Facebook & Instagram
//           </h2>

//           <p className="text-gray-600 text-sm max-w-4xl mx-auto mb-12">
//             Bring your campaigns to life with real-time Facebook and Instagram
//             ad previews. Review placements, visuals, and formats before launch
//             to ensure maximum impact.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {["ad1.png", "ad2.png", "ad3.png", "ad4.png"].map((img) => (
//               <div key={img} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-100">
//                 <Image
//                   src={`/images/${img}`}
//                   alt="Meta Ad Preview"
//                   width={220}
//                   height={380}
//                   className="mx-auto group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= PERFORMANCE STATS ================= */}
//       <section className="bg-gradient-to-r from-[#F028C2] to-[#2D96EB] py-16 text-white shadow-inner">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h3 className="text-xl font-semibold mb-2 uppercase tracking-widest">
//             Perform At Your Peak
//           </h3>
//           <p className="text-sm mb-10 opacity-90">
//             We&apos;ll help you achieve your goals
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             <Stat value="3.4X" label="Average Advertising ROI" />
//             <Stat value="260%" label="Increase in Appointments" />
//             <Stat value="400%" label="Client Return on Ad Spend" />
//           </div>
//         </div>
//       </section>

//       {/* ================= CASE STUDY ================= */}
//       <section className="bg-[#F0F7FF] py-20"> {/* Changed to light Blue tint */}
//         <div className="max-w-5xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
//             <h3 className="text-2xl font-bold">
//               Take a look at what we’ve created
//             </h3>
//             <Link
//               href="/portfolio"
//               className="bg-white border-2 border-[#F028C2] text-[#F028C2] hover:bg-[#F028C2] hover:text-white px-6 py-2 rounded-full font-bold transition-colors"
//             >
//               Check out our work
//             </Link>
//           </div>

//           <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md border-t-4 border-[#F028C2]">
//             <h4 className="font-bold text-lg mb-2">NS Constructions – Facebook Ads</h4>
//             <p className="text-sm text-gray-600 mb-4 leading-relaxed">
//               Objective: Increase inquiries and project bookings through Meta Ads.
//             </p>
//             <p className="text-sm font-semibold text-[#2D96EB]">
//               Results: ₹10,000/month budget resulted in 200% increase in qualified
//               leads.
//             </p>

//             <Link href="#" className="text-[#F028C2] font-bold text-sm mt-6 block flex items-center gap-1 hover:underline">
//               Read More <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE ================= */}
//       <section className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
//              <div className="absolute -inset-4 bg-gradient-to-r from-[#2D96EB] to-[#F028C2] opacity-10 blur-2xl rounded-full"></div>
//              <Image
//                 src="/images/meta-why.png"
//                 alt="Why Meta Ads"
//                 width={500}
//                 height={400}
//                 className="relative z-10"
//              />
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold mb-6">
//               Why Choose NShine for Your Meta Ads?
//             </h2>

//             <ul className="space-y-4">
//               {["Proven Results with High ROI", "Certified Meta Ads Specialists", "Cost-Effective Strategies", "Local Audience Targeting", "Transparent Reporting"].map((item) => (
//                 <li key={item} className="flex items-center gap-3 font-medium text-gray-700">
//                    <span className="text-[#F028C2] font-bold text-lg">✔</span>
//                    {item}
//                 </li>
//               ))}
//             </ul>

//             <Link
//               href="/contact"
//               className="inline-block mt-8 bg-gradient-to-r from-[#F028C2] to-[#2D96EB] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
//             >
//               Ready to Boost Your Local Presence?
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-12">
//   <div className="max-w-7xl mx-auto px-6">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 rounded-[2rem] bg-gradient-to-br from-[#FDF2FB] to-[#F0F7FF] border border-white shadow-sm">
//       <ContactItem 
//         title="Call Us" 
//         value="+1 612-470-2664" 
//         iconColor="text-[#F028C2]" 
//       />
//       <ContactItem 
//         title="Email Us" 
//         value="support@nshine.tech" 
//         iconColor="text-[#2D96EB]" 
//       />
//       <ContactItem 
//         title="Address" 
//         value="Austin, TX, USA" 
//         iconColor="text-[#F028C2]" 
//       />
//     </div>
//   </div>
// </section>

//       {/* ================= FAQ ================= */}
//       <section className="bg-white py-20">
//         <div className="max-w-5xl mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-10 text-center md:text-left">Frequently Asked Questions</h2>

//           <div className="space-y-4">
//             {faqData.map((f, i) => (
//               <FAQItem key={i} question={f.q} answer={f.a} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ================= SMALL COMPONENTS ================= */

// function Stat({ value, label }: { value: string; label: string }) {
//   return (
//     <div className="group">
//       <p className="text-5xl font-extrabold text-white mb-2">{value}</p>
//       <div className="h-1 w-12 bg-white/30 mx-auto mb-3 group-hover:w-24 transition-all duration-500"></div>
//       <p className="text-sm font-medium uppercase tracking-wider">{label}</p>
//     </div>
//   );
// }

// function ContactItem({ title, value, iconColor }: any) {
//   return (
//     <div className="flex flex-col items-center text-center group">
//       <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold mb-2">
//         {title}
//       </p>
//       <p className={`text-xl font-extrabold ${iconColor || 'text-gray-900'} transition-transform group-hover:scale-105 duration-300`}>
//         {value}
//       </p>
//       {/* Decorative tiny dot */}
//       {/* <div className={`h-1 w-1 rounded-full mt-2 ${iconColor === 'text-[#F028C2]' ? 'bg-[#F028C2]' : 'bg-[#2D96EB]'}`}></div> */}
//     </div>
//   );
// }

// function FAQItem({ question, answer }: any) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div
//       onClick={() => setOpen(!open)}
//       className={`border rounded-2xl mb-4 px-6 py-4 cursor-pointer transition-all duration-300 ${
//         open ? "bg-[#FDF2FB] border-[#F028C2]/30 shadow-md" : "bg-white border-gray-100 hover:border-[#2D96EB]/30"
//       }`}
//     >
//       <div className="flex justify-between items-center">
//         <p className={`font-bold transition-colors ${open ? "text-[#F028C2]" : "text-gray-800"}`}>
//             {question}
//         </p>
//         <span className={`text-xl transition-transform duration-300 ${open ? "rotate-45 text-[#F028C2]" : "text-gray-400"}`}>
//             {open ? "✕" : "+"}
//         </span>
//       </div>

//       {open && <p className="text-sm text-gray-600 mt-4 leading-relaxed animate-fadeIn">{answer}</p>}
//     </div>
//   );
// }

// /* ================= DATA ================= */

// const faqData = [
//   {
//     q: "What is Facebook Ads?",
//     a: "Facebook Ads is a paid advertising platform by Meta that allows businesses to reach targeted audiences across Facebook, Instagram, Messenger, and Audience Network.",
//   },
//   {
//     q: "How do Facebook Ads work?",
//     a: "Ads are shown to users based on demographics, interests, behaviors, and location using Meta's ad auction system.",
//   },
//   {
//     q: "How do Facebook Ads help local businesses?",
//     a: "They target people nearby, drive calls, form submissions, and increase foot traffic directly to your local storefront or service area.",
//   },
//   {
//     q: "What is ROI in Facebook Ads?",
//     a: "ROI (Return on Investment) measures the net profit you receive compared to the total amount spent on the ad campaign.",
//   },
//   {
//     q: "Why choose NShine Marketing?",
//     a: "We deliver data-backed strategies, certified Meta experts, and 100% transparent reporting to ensure you know exactly where every dollar goes.",
//   },
// ];

// src/app/services/ads/meta-ads/page.tsx

export default function Page() {
  return null; // Or <div>Coming Soon</div>
}
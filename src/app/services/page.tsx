// "use client";

// import Link from "next/link";
// import Image from "next/image";

// const services = [
//               {
//                 title: "Digital Marketing",
//                 img: "/images/metaads.png",
//                 desc: "Grow your business online with SEO, social, email and paid advertising that drives leads and revenue.",
//                 link: "/marketing/digital-marketing",
//               },
//               {
//                 title: "Web Development",
//                 img: "/images/webdevelopment.png",
//                 desc: "High-converting websites, UX designs and landing pages that increase trust and conversions.",
//                 link: "/services/websites-development",
//               },
//               {
//                 title: "Logo Design & Branding",
//                 img: "/images/logodesign.png",
//                 desc: "Unique brand identity, logos and visual systems that build authority and recall.",
//                 link: "/services/logo-design",
//               },
//               {
//                 title: "SEO",
//                 img: "/images/seo.png",
//                 desc: "Search engine optimization that ranks your business and brings consistent organic leads.",
//                 link: "/services/seo",
//               },
//               {
//                 title: "Google Ads",
//                 img: "/images/googleads.png",
//                 desc: "High ROI Google Ads campaigns with precision keyword and audience targeting.",
//                 link: "/services/ads/google-ads",
//               },
//               {
//                 title: "Facebook & Instagram Ads",
//                 img: "/images/metaads.png",
//                 desc: "Creative paid ads that drive awareness, leads and sales on Meta platforms.",
//                 link: "/services/ads/meta-ads",
//               },
//             ];

// export default function ServicesPage() {
//   return (
//     <section className="bg-gradient-to-br from-[#FDF2FB] via-[#F0F7FF] to-[#F0F7FF] py-24 border-y border-gray-100">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center max-w-3xl mx-auto mb-16 text-gray-900">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
//             Our Services
//           </h2>
//           <p className="text-lg opacity-90 leading-relaxed font-medium">
//             Our team of digital experts delivers Web Design, Local SEO, Ads,
//             Development, and Digital Marketing solutions that turn ideas into
//             <span className="bg-white/20 px-2 rounded ml-1">digital success stories.</span>
//           </p>
//         </div>

//         {/* SERVICES GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {services.map((service) => (
//             <div
//               key={service.title}
//               className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-b-8 ${service.accent} hover:-translate-y-2`}
//             >
//               {/* Icon Container with subtle glow */}
//               <div className="w-16 h-16 mb-8 p-3 rounded-2xl bg-gray-50 group-hover:bg-gradient-to-tr group-hover:from-[#F028C2]/10 group-hover:to-[#2D96EB]/10 transition-colors">
//                 <Image
//                   src={service.img}
//                   alt={service.title}
//                   width={64}
//                   height={64}
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               <h3 className="text-xl font-bold mb-4 text-gray-800">
//                 {service.title}
//               </h3>

//               <p className="text-sm text-gray-600 mb-8 leading-relaxed">
//                 {service.desc}
//               </p>

//               <Link
//                 href={service.link}
//                 className="inline-flex items-center gap-2 text-sm font-bold 
//                 bg-gray-900 text-white px-6 py-3 rounded-xl 
//                 hover:bg-gradient-to-r hover:from-[#F028C2] hover:to-[#2D96EB] 
//                 transition-all duration-300 shadow-md hover:shadow-lg"
//               >
//                 Read more
//                 <span className="group-hover:translate-x-1 transition-transform">→</span>
//               </Link>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Digital Marketing",
    desc: "End-to-end digital marketing strategies including SEO, paid ads, social media, and email marketing to drive consistent growth.",
    img: "/images/metaads.png",
  },
  {
    title: "Web Development",
    desc: "High-performing websites built with modern UI/UX, responsive layouts, and conversion-focused architecture.",
    img: "/images/webdevelopment.png",
  },
  {
    title: "Logo Design & Branding",
    desc: "Custom logo designs and branding systems that build trust, recognition, and long-term brand value.",
    img: "/images/logodesign.png",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Data-driven SEO strategies that improve rankings, organic traffic, and lead generation.",
    img: "/images/seo.png",
  },
  {
    title: "Google Ads (PPC)",
    desc: "ROI-focused Google Ads campaigns with keyword research, targeting, and performance optimization.",
    img: "/images/googleads.png",
  },
  {
    title: "Social Media Advertising",
    desc: "Facebook & Instagram ad campaigns designed to increase awareness, leads, and sales.",
    img: "/images/metaads.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ================= SEO META ================= */}
      <Head>
        <title>Services | Zentrix Digital Marketing – SEO, Web & Ads</title>
        <meta
          name="description"
          content="Zentrix Digital Marketing offers SEO, web development, branding, Google Ads, and social media marketing services designed to drive measurable business growth."
        />
        <link rel="canonical" href="https://zentrix-tech.com/services" />

        {/* Open Graph */}
        <meta property="og:title" content="Zentrix Digital Marketing Services" />
        <meta property="og:description" content="Explore our digital marketing services including SEO, web development, branding, and paid advertising." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zentrix-tech.com/services" />
        <meta property="og:image" content="https://zentrix-tech.com/lo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zentrix Digital Marketing Services" />
        <meta name="twitter:description" content="SEO, Web Development, Branding & Paid Ads by Zentrix Digital Marketing." />
        <meta name="twitter:image" content="https://zentrix-tech.com/lo.png" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "provider": {
                "@type": "Organization",
                "name": "Zentrix Digital Marketing",
                "url": "https://zentrix-tech.com"
              },
              "serviceType": "Digital Marketing Services",
              "areaServed": "US",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Zentrix Services",
                "itemListElement": services.map((s, i) => ({
                  "@type": "Offer",
                  "position": i + 1,
                  "itemOffered": {
                    "@type": "Service",
                    "name": s.title,
                    "description": s.desc
                  }
                }))
              }
            }),
          }}
        />
      </Head>

      {/* ================= HERO ================= */}
      <section className="py-8 bg-gradient-to-r from-[#ff2f92] via-[#00f0ff] to-[#3b82f6] text-white text-center shadow-md">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        </Reveal>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-16 bg-gradient-to-br from-[#f9fbff] via-[#eef6ff] to-[#fdf2ff] relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ff2f92]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <Reveal>
            <p className="max-w-3xl mx-auto text-center text-black/70">
              We offer comprehensive{" "}
              <span className="text-[#F028C2] font-semibold">
                digital marketing services
              </span>{" "}
              designed to help startups and enterprises scale faster with measurable results.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group flex flex-col items-center text-center rounded-2xl border border-[#00f0ff]/30 bg-white hover:border-[#ff2f92] hover:shadow-2xl transition-all p-8 h-[460px]">

                  {/* Image */}
                  <div className="mb-8 h-[140px] w-[140px] flex items-center justify-center">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={140}
                      height={140}
                      className="object-contain"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-base text-black/80 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[#2D96EB] hover:text-[#ff2f92]"
                  >
                    Get Started <span className="transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

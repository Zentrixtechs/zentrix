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

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Digital Marketing",
    img: "/images/metaads.png",
    desc: "Grow your business online with SEO, social, email and paid advertising that drives leads and revenue.",
    link: "/services",
  },
  {
    title: "Web Development",
    img: "/images/webdevelopment.png",
    desc: "High-converting websites, UX designs and landing pages that increase trust and conversions.",
    link: "/services",
  },
  {
    title: "Logo Design & Branding",
    img: "/images/logodesign.png",
    desc: "Unique brand identity, logos and visual systems that build authority and recall.",
    link: "/services",
  },
  {
    title: "SEO",
    img: "/images/seo.png",
    desc: "Search engine optimization that ranks your business and brings consistent organic leads.",
    link: "/services",
  },
  {
    title: "Google Ads",
    img: "/images/googleads.png",
    desc: "High ROI Google Ads campaigns with precision keyword and audience targeting.",
    link: "/services",
  },
  {
    title: "Facebook & Instagram Ads",
    img: "/images/metaads.png",
    desc: "Creative paid ads that drive awareness, leads and sales on Meta platforms.",
    link: "/services",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-gradient-to-br from-[#FDF2FB] via-[#F0F7FF] to-[#F0F7FF] py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg opacity-90 leading-relaxed font-medium">
            Our team of digital experts delivers Web Design, Local SEO, Ads,
            Development, and Digital Marketing solutions that turn ideas into
            <span className="bg-white/20 px-2 rounded ml-1">
              digital success stories.
            </span>
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* 🔥 HOVER GLOW BACKGROUND (this is the missing piece) */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-gradient-to-tr from-[#F028C2]/10 to-[#2D96EB]/10
                "
              />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* ICON */}
                <div className="w-16 h-16 mb-8 p-3 rounded-2xl bg-gray-50 transition-colors">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>

                <Link
                  href={service.link}
                  className="
                    inline-flex items-center gap-2 text-sm font-bold
                    bg-gray-900 text-white px-6 py-3 rounded-xl
                    hover:bg-gradient-to-r hover:from-[#F028C2] hover:to-[#2D96EB]
                    transition-all duration-300 shadow-md hover:shadow-lg
                  "
                >
                  Read more
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

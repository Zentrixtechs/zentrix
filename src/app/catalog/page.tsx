// public/images/catalog/
// ├─ logo-design.jpg
// ├─ website-design.jpg
// ├─ landing-page.jpg
// ├─ social-media.jpg
// ├─ case-studies.jpg




import Image from "next/image";

const catalogItems = [
  {
    title: "Logo Designs",
    desc: "Transform your brand’s identity with our custom logo designs that capture your vision and stand out in the market!",
    img: "/images/catalog/logo-design.jpg",
    bg: "bg-[#FDF2FB]", // Soft Magenta tint
    btn: "bg-[#F028C2]",
  },
  {
    title: "Website Designs",
    desc: "Enhance your online presence with our custom website designs that combine creativity and functionality!",
    img: "/images/catalog/website-design.jpg",
    bg: "bg-[#F0F7FF]", // Soft Blue tint
    btn: "bg-[#2D96EB]",
  },
  {
    title: "Landing Page Designs",
    desc: "Boost your brand with eye-catching landing page designs that engage and inspire your audience!",
    img: "/images/catalog/landing-page.jpg",
    bg: "bg-[#FDF2FB]", 
    btn: "bg-[#F028C2]",
  },
  {
    title: "Social Media Designs",
    desc: "Boost your brand with eye-catching social media designs that engage and inspire your audience!",
    img: "/images/catalog/social-media.jpg",
    bg: "bg-[#F0F7FF]",
    btn: "bg-[#2D96EB]",
  },
  {
    title: "Case Studies",
    desc: "Explore real case studies showcasing the success stories of businesses like yours.",
    img: "/images/catalog/case-studies.jpg",
    bg: "bg-gray-50",
    btn: "bg-gray-900",
  },
];

export default function CatalogPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#F028C2] to-[#2D96EB] py-5 text-center shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Catalog
        </h1>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
          Browse our extensive catalog, showcasing tailored services designed
          to <span className="text-[#F028C2] font-semibold">elevate your business</span>. 
          Discover how our expertise can help you achieve your goals with ease!
        </p>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {catalogItems.map((item) => (
            <div
              key={item.title}
              className={`group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 ${item.bg}`}
            >
              {/* Image with Hover Zoom */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <button
                  className={`${item.btn} text-white text-sm font-bold px-6 py-2.5 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all`}
                >
                  View All
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CLIENT RESULTS ================= */}
        <section className="mt-28 py-10 bg-white">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Check how <span className="text-[#2D96EB]">we improved</span> business
            </h2>

            <p className="text-gray-500 text-base max-w-2xl mx-auto mb-16">
              Discover how we’ve transformed businesses through innovative digital
              marketing, stunning logo designs, and impactful websites.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "edc.png",
                "contemporary-dentistry.png",
                "penofill.png",
                "one-dental.png",
                "iglo.png",
                "smile-lounge.png",
                "smile-aesthetics.png",
                "beauty-oasis.png",
                "precision-ivf.png",
                "wellness.png",
                "veterinary.png",
                "aegis.png",
                "mensana.png",
                "darshini.png",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-white border border-gray-100 rounded-xl px-4 py-8 shadow-sm hover:border-[#2D96EB]/30 hover:shadow-md transition-all group"
                >
                  <img
                    src={`/images/catalog/clients/${logo}`}
                    alt="Client Logo"
                    className="max-h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
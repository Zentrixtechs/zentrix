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
    bg: "bg-[#E8F6F1]",
    btn: "bg-[#265E52]",
  },
  {
    title: "Website Designs",
    desc: "Enhance your online presence with our custom website designs that combine creativity and functionality!",
    img: "/images/catalog/website-design.jpg",
    bg: "bg-[#EAF7FF]",
    btn: "bg-[#0F766E]",
  },
  {
    title: "Landing Page Designs",
    desc: "Boost your brand with eye-catching landing page designs that engage and inspire your audience!",
    img: "/images/catalog/landing-page.jpg",
    bg: "bg-[#FFF6E8]",
    btn: "bg-[#7C5C1A]",
  },
  {
    title: "Social Media Designs",
    desc: "Boost your brand with eye-catching social media designs that engage and inspire your audience!",
    img: "/images/catalog/social-media.jpg",
    bg: "bg-[#F2EDFF]",
    btn: "bg-[#4C1D95]",
  },
  {
    title: "Case Studies",
    desc: "Explore real case studies showcasing the success stories of businesses like yours.",
    img: "/images/catalog/case-studies.jpg",
    bg: "bg-[#EAF7F0]",
    btn: "bg-[#14532D]",
  },
];

export default function CatalogPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#265E52] py-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Catalog
        </h1>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          Browse our extensive catalog, showcasing tailored services designed
          to elevate your business. Discover how our expertise can help you
          achieve your goals with ease!
        </p>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {catalogItems.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition ${item.bg}`}
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {item.desc}
                </p>

                <button
                  className={`${item.btn} text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition`}
                >
                  View All
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* ================= CLIENT RESULTS ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

    <h2 className="text-xl md:text-2xl font-semibold mb-2">
      Check how we improved business
    </h2>

    <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-14">
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
          className="flex items-center justify-center bg-[#F7F8FA] rounded-xl px-4 py-8 shadow-sm hover:shadow-md transition"
        >
          <img
            src={`/images/catalog/clients/${logo}`}
            alt="Client Logo"
            className="max-h-12 object-contain"
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

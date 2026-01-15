import Image from "next/image";
import Section from "@/components/shared/Section";


export default function AboutUs() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#265E52] text-white py-5 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">About Us</h1>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/team.jpg"
              alt="NShine Team"
              width={700}
              height={420}
              className="w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[#265E52] font-semibold mb-2">Who We Are</p>

            <h2 className="text-3xl lg:text-4xl font-bold mb-5">
              Why Choose Our <br />
              <span className="text-[#265E52]">
                Digital Marketing Agency
              </span>
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              NShine Digital Marketing, a division of NShine Technologies,
              was founded in 2021 and headquartered in Austin, Texas.
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

            <button className="bg-[#265E52] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
              Get in Touch
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-20">
          <div>
            <h3 className="text-2xl font-bold text-[#265E52] mb-3">
              NShine
            </h3>
            <h4 className="text-3xl font-bold mb-4">
              Your champions of digital growth
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Our expert team excels in Web Design, SEO, PPC, and Social
              Media, transforming ideas into success with creative,
              data-driven strategies.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/digital-growth.png"
              alt="Digital Growth"
              width={420}
              height={320}
            />
          </div>
        </div>
      </section>

      {/* ================= BIG OR SMALL ================= */}
      <section className="bg-[#265E52] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">
                Big or small ? We <br />
                <span className="text-[#E7B66A]">have a plan</span>
              </h2>
              <p className="text-white/80 text-sm">
                Whether you’re a startup or an established business, we
                offer tailored strategies designed to empower growth,
                innovation, and success.
              </p>
            </div>

            {[
              {
                title: "Mission",
                heading: "Unlocking Potential",
                desc: "Helping businesses grow by delivering innovative solutions.",
              },
              {
                title: "Vision",
                heading: "Shaping Tomorrow",
                desc: "Driving progress through creativity and technology.",
              },
              {
                title: "Goal",
                heading: "Building Partnerships",
                desc: "Creating lasting relationships for shared success.",
              },
              {
                title: "Values",
                heading: "Integrity & Innovation",
                desc: "Built on trust, innovation, and collaboration.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/30 pt-5">
                <p className="text-[#E7B66A] font-semibold mb-2">
                  {item.title}
                </p>
                <h4 className="font-semibold mb-2">{item.heading}</h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#265E52] font-semibold mb-2">
            Why choose us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Your success is our obsession
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Customer Satisfaction", img: "/images/icons/customer.png" },
              { title: "Detailed Reporting", img: "/images/icons/report.png" },
              { title: "Excellent Support", img: "/images/icons/support.png" },
              { title: "Success Strategies", img: "/images/icons/strategy.png" },
              { title: "Cost Effective", img: "/images/icons/cost.png" },
              { title: "Precision Targeting", img: "/images/icons/target.png" },
              { title: "24/7 Monitoring", img: "/images/icons/monitor.png" },
              { title: "Certified Experts", img: "/images/icons/expert.png" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h4 className="font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS (SKY BLUE) ================= */}
      <section className="bg-[#EAF6FF] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <p className="text-sm text-gray-600 mb-2">
              Process we follow for Digital Ads
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our proven process for success
            </h2>
            <p className="text-gray-700 mb-6">
              A strategic, data-driven approach designed to deliver
              consistent and measurable growth.
            </p>
            <button className="bg-[#E7B66A] px-6 py-3 rounded-md font-medium">
              Free Consultation
            </button>
          </div>

          <div className="space-y-4">
            {[
              "Initial Consultation",
              "Market Research & Strategy",
              "Ad Creation & Design",
              "Campaign Launch",
              "Performance Monitoring",
              "Optimization",
              "Reporting & Communication",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-[#265E52] text-white rounded-xl p-5 relative"
              >
                <span className="absolute top-4 right-4 text-4xl font-bold text-white/20">
                  {i + 1}
                </span>
                <h4 className="font-semibold">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Section />
    </>
  );
}




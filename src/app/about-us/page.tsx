
"use client";

import Image from "next/image";
import Section from "@/components/shared/Section";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();

  const handleClick = () => {
    // Perform any logic here (e.g., analytics logging)
    router.push("/contact");
  };



  return (
    <>
      
      <section className="bg-gradient-to-r from-[#ff2f92] to-[#2D96EB] text-white py-6 text-center shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-white">About Us</h1>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/images/digital.jpeg"
              alt="Zentrix Team"
              width={700}
              height={420}
              className="w-full object-cover"
            />
          </div>

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

            <button
              onClick={handleClick}
              className="bg-gradient-to-r from-[#F028C2] to-[#2D96EB] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(240,40,194,0.4)]"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-20">
          <div>
            <h3 className="text-2xl font-bold text-[#F028C2] mb-3">
              Zentrix
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
              src="/images/digital.png"
              alt="Digital Growth"
              width={420}
              height={320}
            />
          </div>
        </div>
      </section>

      {/* ================= BIG OR SMALL ================= */}
      <section className="bg-slate-50 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Header Content */}
            <div className="lg:col-span-2">
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#EAF6FF] border border-[#2D96EB]/20">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2D96EB]">Our Strategy</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Big or small? <br />
                <span className="relative">
                  We have a plan
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#F028C2]/10 -z-10"></span>
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                Whether you’re a startup or an established business, we
                offer tailored strategies designed to empower growth,
                innovation, and success.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Mission",
                  heading: "Unlocking Potential",
                  desc: "Helping businesses grow by delivering innovative solutions.",
                  color: "#F028C2"
                },
                {
                  title: "Vision",
                  heading: "Shaping Tomorrow",
                  desc: "Driving progress through creativity and technology.",
                  color: "#2D96EB"
                },
                {
                  title: "Goal",
                  heading: "Building Partnerships",
                  desc: "Creating lasting relationships for shared success.",
                  color: "#2D96EB"
                },
                {
                  title: "Values",
                  heading: "Integrity & Innovation",
                  desc: "Built on trust, innovation, and collaboration.",
                  color: "#F028C2"
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white font-bold"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.title[0]}
                  </div>
                  <p className="font-bold text-sm uppercase tracking-wider mb-2" style={{ color: item.color }}>
                    {item.title}
                  </p>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">{item.heading}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 bg-white-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#0f0e0f] lg:text-3xl font-bold mb-2">
            Why choose us
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-900">
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
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#2D96EB]"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
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
            <button className="bg-gradient-to-r from-[#F028C2] to-[#2D96EB] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
              Free Consultation
            </button>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Initial Consultation",
                desc: "We start with a detailed consultation to understand your unique needs and tailor our approach to your specific goals."
              },
              {
                title: "Market Research & Strategy",
                desc: "Conduct comprehensive research and create a strategic plan to effectively position your brand and reach your target audience."
              },
              {
                title: "Ad Creation & Design",
                desc: "Develop eye-catching ads and engaging visuals designed to capture attention and drive action."
              },
              {
                title: "Campaign Launch",
                desc: "Plan and execute campaigns meticulously for a successful launch and maximum impact."
              },
              {
                title: "Performance Monitoring",
                desc: "Continuously monitor and analyze campaign performance to measure success and identify areas for improvement."
              },
              {
                title: "Optimization",
                desc: "Refine and optimize strategies based on performance insights to enhance results."
              },
              {
                title: "Reporting & Communication",
                desc: "Provide clear, comprehensive reports with regular updates on campaign progress and performance."
              },
              {
                title: "Ongoing Support and Improvement",
                desc: "Offer continuous support and make improvements to adapt to evolving needs and market conditions."
              }

            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-[#F028C2] to-[#2D96EB] text-white rounded-xl p-6 relative shadow-md transition-all hover:shadow-lg"
              >
                <span className="absolute top-4 right-4 text-4xl font-bold text-white/10 select-none">
                  {i + 1}
                </span>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-white/90 leading-relaxed max-w-[90%]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Section />
    </>
  );
}
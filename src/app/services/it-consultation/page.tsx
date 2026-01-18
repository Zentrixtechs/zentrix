"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ITSolutionsSection() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#FFE9D9] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
          {/* LEFT */}
          <div>
            <h1 className="text-3xl font-bold text-red-600 mb-3">
              IT Solutions
            </h1>

            <p className="text-gray-700 mb-6">
              Innovative IT Solutions to Drive Efficiency, Growth, <br />
              and Success in Your Business
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-red-600 transition"
            >
              Contact Us Now →
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/images/it-solutions-hero.png" // replace if needed
              alt="IT Solutions"
              width={420}
              height={280}
            />
          </div>

        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-3">

            {/* INTRO */}
            <h2 className="text-2xl font-bold mb-4">
              Strategic IT Solutions for{" "}
              <span className="text-red-500">Your Business Growth</span>
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              Embark on a journey of technological advancement with NShine
              Technologies. Our IT solutions are designed to{" "}
              <strong>optimize your business operations</strong> and drive growth.
              Trust our dedicated team of IT experts to deliver tailored solutions
              that align with your unique business needs.
            </p>

            {/* WHY CHOOSE */}
            <h3 className="text-xl font-semibold mb-4">
              Why Choose Our Business Consultation Services?
            </h3>

            <ul className="space-y-3 text-sm mb-10">
              <li className="flex items-start gap-2">
                <span className="text-red-500">●</span>
                Tailored Solutions for Your Unique Needs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">●</span>
                Comprehensive Expertise
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">●</span>
                Actionable Roadmaps for Success
              </li>
            </ul>

            {/* PROCESS */}
            <h3 className="text-xl font-semibold mb-6">
              Our Consultation Process
            </h3>

            <p className="text-sm text-gray-600 mb-8">
              Our Consultation Process ensures that every project is completed
              efficiently, from start to finish.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <ProcessItem
                title="Initial Discussion"
                desc="We begin by understanding your business goals and challenges."
              />

              <ProcessItem
                title="Technology Strategy"
                desc="Based on your needs, we recommend the most appropriate solutions and technologies, such as .NET, Blazor, Azure, React, Angular, Flutter, etc."
              />

              <ProcessItem
                title="Action Plan"
                desc="We develop a detailed action plan that lays out the steps and resources necessary for project execution."
              />

              <ProcessItem
                title="Ongoing Support"
                desc="Even after the consultation, we continue to support you throughout the project lifecycle, ensuring smooth development and deployment."
              />

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-gray-50 p-6 rounded-lg h-fit">
            <h4 className="font-semibold mb-4">Related Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-red-500 font-medium">IT Solutions</li>
              <li>Custom Development</li>
              <li>Web Portals</li>
              <li>App Development</li>
              <li>UI/UX Design</li>
              <li>ERP Solutions</li>
            </ul>
          </aside>

        </div>
      </section>
      <section className="bg-[#FFF3EA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Partner with Us for{" "}
            <span className="text-orange-500">Consultation?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ConsultCard
              title="Customized Solutions"
              desc="We offer tailored advice that addresses your unique business needs."
            />

            <ConsultCard
              title="Experienced Team"
              desc="With extensive experience in developing enterprise-grade applications using .NET, Blazor, SQL Server, Azure, React, Angular, Flutter, and more."
            />

            <ConsultCard
              title="Collaborative Approach"
              desc="We collaborate closely with your team to ensure that your project is executed successfully."
            />

            <ConsultCard
              title="Scalable & Secure Solutions"
              desc="Our expertise in scalable and secure technologies ensures that your digital solutions can grow with your business."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-black via-[#0F2027] to-black py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">
            Ready to take your{" "}
            <span className="text-orange-500">business to the next level?</span>
          </h3>

          <p className="text-sm opacity-90 mb-8">
            Let us help you choose the right technology, plan your project,
            and ensure smooth execution.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Schedule Your Free IT Consultation →
          </Link>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10">
            Questions about service
          </h2>

          <FAQItem
            question="How can your IT solutions specifically benefit my business?"
            answer="Our IT solutions help streamline operations, improve efficiency, reduce costs, enhance security, and enable scalable growth. We analyze your business challenges and design solutions that align with your goals."
          />

          <FAQItem
            question="How do your agile cloud solutions adapt to my business requirements?"
            answer="We follow agile methodologies, allowing continuous feedback and iteration. Our cloud solutions are flexible, scalable, and can be customized as your business needs evolve."
          />

          <FAQItem
            question="What measures do you have in place to ensure the security of my digital assets?"
            answer="We implement best-in-class security practices including encrypted data storage, secure authentication, regular security audits, role-based access control, and compliance with industry standards."
          />
        </div>
      </section>


      
      <section className="bg-gradient-to-r from-black via-[#2A1A12] to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* PHONE */}
          <div>
            <p className="text-xs uppercase opacity-70 mb-2">USA</p>
            <p className="font-semibold text-lg mb-4">📞 +1 612-470-2664</p>

            <p className="text-xs uppercase opacity-70 mt-6 mb-2">India</p>
            <p className="font-semibold text-lg">📞 +91 999-666-5233</p>
          </div>

          {/* EMAIL */}
          <div>
            <p className="text-xs uppercase opacity-70 mb-2">Email Us</p>
            <p className="font-semibold text-lg">
              📧 support@nshine.tech
            </p>
          </div>

          {/* ADDRESS */}
          <div>
            <p className="text-xs uppercase opacity-70 mb-2">USA</p>
            <p className="text-sm leading-relaxed">
              Leander, Austin, Texas, USA
            </p>

            <p className="text-xs uppercase opacity-70 mt-6 mb-2">India</p>
            <p className="text-sm leading-relaxed">
              3rd Floor, RR Nagar, RC Puram,<br />
              NH 65, Beeramguda Main Rd,<br />
              Opposite ICICI Bank,<br />
              Hyderabad, Ramachandrapuram,<br />
              Telangana – 502032
            </p>
          </div>

        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="bg-white">
        <div className="w-full h-[420px] relative cursor-pointer">
          <a
            href="https://www.google.com/maps/place/NShine+Technologies+Pvt+Ltd"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
          >
            <iframe
              title="NShine Technologies Location"
              src="https://www.google.com/maps?q=NShine%20Technologies%20Hyderabad&output=embed"
              className="w-full h-full border-0 pointer-events-none"
              loading="lazy"
            />
          </a>

          {/* OVERLAY TEXT */}
          <div className="absolute bottom-6 left-6 bg-black/70 text-white px-4 py-2 rounded-md text-sm">
            📍 Click to open in Google Maps
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= SMALL COMPONENT ================= */

function ProcessItem({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
function ConsultCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border hover:shadow-md transition">
      <h4 className="font-semibold mb-3">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left font-medium"
      >
        {question}
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}
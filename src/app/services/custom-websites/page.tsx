"use client";


import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#FFE6D5] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* LEFT */}
          <div>
            <h1 className="text-red-600 font-semibold text-lg mb-2">
              Web Development
            </h1>

            <p className="text-gray-800 mb-6">
              Create impactful and feature-rich websites to accelerate your business.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition"
            >
              Contact Us Now →
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/images/web-development-hero.png"
              alt="Web Development"
              width={420}
              height={300}
              className="object-contain"
            />
          </div>

        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-3">

            <h2 className="text-2xl font-bold mb-4">
              Welcome to NShine, your Pioneering Web Development Partner for Unmatched Success
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              At NShine Technologies, we specialize in providing <strong>custom web development services</strong>
              that address the unique needs of your business. Whether you're building a web application
              from the ground up or enhancing an existing one, our solutions are scalable, secure,
              and user-friendly. Our team uses cutting-edge technologies such as
              <strong> .NET Core, React, Angular, Blazor, and Next.js</strong> to deliver tailored web
              solutions designed to help your business thrive in the competitive digital world.
            </p>

            {/* ================= SERVICES ================= */}
            <h3 className="text-xl font-bold mb-6">
              Our Custom Web Development Services
            </h3>

            <p className="text-sm text-gray-600 mb-10">
              At NShine Technologies, we offer a broad range of custom web development services
              designed to cater to businesses of all sizes and industries:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* WEBSITE DEVELOPMENT */}
              <ServiceItem
                icon="/icons/web-dev.svg"
                title="Website Development"
                desc="We build dynamic, interactive, and feature-rich web applications that meet your unique business requirements."
              />

              {/* RESPONSIVE */}
              <ServiceItem
                icon="/icons/responsive.svg"
                title="Responsive Websites"
                desc="Our websites provide a seamless experience across all devices, ensuring your audience engages with ease."
              />

              {/* SPA */}
              <ServiceItem
                icon="/icons/spa.svg"
                title="Single Page Applications (SPA)"
                desc="Using React, Angular, Blazor, and Next.js, we deliver fast, interactive, and high-performance web applications."
              />

              {/* MAINTENANCE */}
              <ServiceItem
                icon="/icons/maintenance.svg"
                title="Web Maintenance"
                desc="Dependable website maintenance to ensure your site stays secure, optimized, and always up-to-date."
              />

            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="border p-6 rounded-md h-fit">
            <h4 className="font-semibold mb-4">Related Services</h4>

            <ul className="space-y-2 text-sm">
              <li><Link href="/services/it-solutions" className="hover:text-red-500">IT Solutions</Link></li>
              <li><Link href="/services/custom-development" className="text-red-500 font-medium">Custom Development</Link></li>
              <li><Link href="/services/web-portals" className="hover:text-red-500">Web Portals</Link></li>
              <li><Link href="/services/app-development" className="hover:text-red-500">App Development</Link></li>
              <li><Link href="/services/ui-ux-design" className="hover:text-red-500">UI/UX Design</Link></li>
              <li><Link href="/services/erp-solutions" className="hover:text-red-500">ERP Solutions</Link></li>
            </ul>
          </aside>

        </div>
      </section>
      {/* ================= TECHNOLOGIES SECTION ================= */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-3">
        Technologies That Power Your{" "}
        <span className="text-orange-500">Custom Websites</span>
      </h2>
      <p className="text-sm text-gray-600 max-w-3xl">
        At NShine Technologies, we use a wide range of cutting-edge technologies
        to ensure the best performance, security, and scalability for your
        custom web applications:
      </p>
    </div>

    {/* TECHNOLOGY GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">

      {/* FRONTEND */}
      <TechCard title="Client Software (Front-End)">
        <TechItem icon="/icons/react.svg" label="React" />
        <TechItem icon="/icons/angular.svg" label="Angular" />
        <TechItem icon="/icons/blazor.svg" label="Blazor" />
        <TechItem icon="/icons/nextjs.svg" label="Next Js" />
      </TechCard>

      {/* BACKEND */}
      <TechCard title="Server Software (Back-End)">
        <TechItem icon="/icons/dotnet.svg" label=".NET Core" />
        <TechItem icon="/icons/nodejs.svg" label="Node Js" />
      </TechCard>

      {/* DATABASE */}
      <TechCard title="Database">
        <TechItem icon="/icons/sql-server.svg" label="SQL Server" />
        <TechItem icon="/icons/cosmosdb.svg" label="Azure Cosmos DB" />
      </TechCard>

      {/* CLOUD */}
      <TechCard title="Cloud & Hosting">
        <TechItem icon="/icons/azure.svg" label="Azure" />
      </TechCard>

    </div>

    {/* CTA */}
    <div className="text-center mb-24">
      <a
        href="/contact"
        className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition"
      >
        Request custom Web Development from scratch →
      </a>
    </div>

    {/* ================= DEVELOPMENT PROCESS ================= */}
    <div>
      <h2 className="text-3xl font-bold mb-3">
        Our Proven Development Process
      </h2>
      <p className="text-sm text-gray-600 mb-12">
        Our custom web development process ensures that every project is
        completed efficiently, from start to finish
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <ProcessItem
          title="Requirement Analysis"
          desc="Understand your business needs and set clear objectives."
        />

        <ProcessItem
          title="Solution Design"
          desc="Architect scalable and tailored solutions with future growth in mind."
        />

        <ProcessItem
          title="Development & Testing"
          desc="Leverage modern technologies to build, test, and refine your application."
        />

        <ProcessItem
          title="Launch & Support"
          desc="Provide ongoing support and enhancements post-launch."
        />

      </div>
    </div>

  </div>
</section>

{/* ================= WHY CHOOSE NSHINE ================= */}
<section className="bg-[#FFF2EA] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Why Choose NShine Technologies for{" "}
      <span className="text-orange-500">Custom Web Development?</span>
    </h2>

    <p className="text-sm text-gray-700 max-w-5xl mb-12 leading-relaxed">
      At <strong>NShine Technologies</strong>, we craft web solutions that align
      with your business goals and provide a competitive edge. Whether you need
      to build a web application from scratch or enhance an existing one, our
      expertise in cutting-edge technologies like{" "}
      <strong>.NET Core, React, Angular,</strong> and <strong>Blazor</strong>
      ensures your success in the digital space.
    </p>

    {/* FEATURE GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

      <WhyCard
        title="Tailored Features"
        desc="Custom-built to meet your unique requirements and business goals."
        icon="⚙️"
      />

      <WhyCard
        title="Scalability"
        desc="Designed to grow with your business, adapting seamlessly to changing needs."
        icon="📈"
      />

      <WhyCard
        title="Enhanced Security"
        desc="Implementing advanced security measures to safeguard your data."
        icon="🔒"
      />

      <WhyCard
        title="Seamless Integration"
        desc="Effortlessly connect with third-party APIs, CRM tools, and more."
        icon="🔗"
      />

    </div>

    {/* DESCRIPTION */}
    <p className="text-sm text-gray-700 leading-relaxed max-w-5xl">
      We specialize in developing customized, mobile-friendly websites that
      deliver exceptional user experiences. With our user-centric approach, we
      ensure that your website is intuitive and easy to navigate. Our web
      development team stays up-to-date with cutting-edge technologies,
      utilizing the most suitable tools and frameworks to bring your website to
      life. From optimization for search engines to ongoing support and
      maintenance, we provide comprehensive solutions to enhance your online
      presence.
    </p>

  </div>
</section>

{/* ================= FINAL CTA ================= */}
<section className="bg-gradient-to-r from-[#081A1F] to-[#0F2E33] py-20">
  <div className="max-w-4xl mx-auto px-6 text-center text-white">

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Ready to Build your{" "}
      <span className="text-orange-500">Custom Web Solution?</span>
    </h2>

    <p className="text-sm opacity-90 mb-8">
      Let’s collaborate to create a custom web solution that meets your unique
      business needs and drives growth.
    </p>

    <a
      href="/contact"
      className="inline-block bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-md font-semibold"
    >
      Get a Free Quote →
    </a>

  </div>
</section>
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

function ServiceItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-14 h-14 flex items-center justify-center rounded-md bg-red-100">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>

      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

import Image from "next/image";
import { useState } from "react";

/* ================= TECH CARD ================= */

function TechCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-xl p-6">
      <h4 className="font-semibold text-orange-500 mb-4">{title}</h4>
      <div className="flex flex-wrap gap-6">{children}</div>
    </div>
  );
}

function TechItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center text-sm">
      <Image src={icon} alt={label} width={36} height={36} />
      <span className="mt-2">{label}</span>
    </div>
  );
}

/* ================= PROCESS ITEM ================= */

function ProcessItem({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
        ✓
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function WhyCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow hover:shadow-md transition text-center">
      <div className="text-3xl mb-4">{icon}</div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
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
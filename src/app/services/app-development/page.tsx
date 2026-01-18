"use client";

import Image from "next/image";
import Link from "next/link";

export default function AppDevelopmentPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#FFE8DA] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-orange-500">Mobile App Development</span>
            </h1>

            <p className="text-gray-700 mb-6 max-w-lg">
              Build high-performing mobile apps that drive growth and enhance
              user experience.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Contact Us Now →
            </Link>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/mobile-app-hero.png"
              alt="Mobile App Development"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-3">

            <h2 className="text-3xl font-bold mb-4">
              Innovate and Thrive with{" "}
              <span className="text-orange-500">
                Expert Mobile App Development
              </span>
            </h2>

            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              At NShine Technologies, we specialize in creating custom mobile
              applications to enhance customer engagement and improve operational
              efficiency. Whether you need a <strong>native mobile app</strong> or
              a <strong>cross-platform solution</strong>, we use the latest
              technologies to deliver exceptional, scalable apps that cater to
              your business needs.
            </p>

            {/* SERVICES */}
            <h3 className="text-xl font-semibold mb-6">
              Our Mobile App Development Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <ServiceItem
                title="Native Mobile App Development"
                desc="We build native apps for Android (using Kotlin) and iOS (using Swift). Native apps offer the best performance, leveraging device capabilities for an optimized and seamless user experience."
              />

              <ServiceItem
                title="Cross-Platform (Flutter)"
                desc="For businesses targeting multiple platforms, we develop cross-platform mobile apps using Flutter, ensuring high-performance and native-like experiences on both Android and iOS."
              />

              <ServiceItem
                title="Cross-Platform (.NET MAUI)"
                desc="For Microsoft ecosystem users, we develop apps using .NET MAUI, allowing deployment across Android, iOS, macOS, and Windows from a single codebase."
              />

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-[#F9F9F9] rounded-xl p-6 h-fit">
            <h4 className="font-semibold mb-4">Related Services</h4>

            <ul className="space-y-3 text-sm">
              {[
                "IT Solutions",
                "Custom Development",
                "Web Portals",
                "App Development",
                "UI/UX Design",
                "ERP Solutions",
              ].map((item) => (
                <li
                  key={item}
                  className={`cursor-pointer ${
                    item === "App Development"
                      ? "text-orange-500 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>

        </div>
      </section>
      {/* ================= DEVELOPMENT PROCESS ================= */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="max-w-3xl mb-14">
      <h2 className="text-3xl font-bold mb-3">
        Our Proven Development Process
      </h2>
      <p className="text-sm text-gray-600">
        Our app development process is structured and collaborative to ensure
        the success of your project:
      </p>
    </div>

    {/* PROCESS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">

      <ProcessItem
        title="Discovery & Consultation"
        desc="We analyze your business goals, audience, and app requirements."
      />

      <ProcessItem
        title="UI/UX Design"
        desc="We create intuitive, attractive designs for the best user experience."
      />

      <ProcessItem
        title="Development and Quality Assurance"
        desc="Using the most suitable technology (native or cross-platform), testing ensures performance, functionality, and quality."
      />

      <ProcessItem
        title="Launch & Support"
        desc="Assistance with app launch on Google Play and the Apple App Store, and continuous support post-launch."
      />

    </div>

    {/* DESCRIPTION */}
    <p className="text-sm text-gray-600 max-w-4xl">
      Our mobile app development process is collaborative and transparent.
      From concept to deployment, we involve you every step of the way,
      ensuring the final product aligns with your vision. The benefits extend
      beyond a well-developed app; you gain a powerful tool to engage users,
      boost brand loyalty, and <strong>drive business growth</strong>.
    </p>

  </div>
</section>

{/* ================= CTA ================= */}
<section className="bg-gradient-to-r from-[#001F2A] to-[#00141C] py-20">
  <div className="max-w-7xl mx-auto px-6 text-center text-white">

    <h3 className="text-2xl md:text-3xl font-bold mb-4">
      Design & Launch Your App with{" "}
      <span className="text-orange-500">Our Experts</span>
    </h3>

    <p className="text-sm opacity-90 max-w-2xl mx-auto mb-8">
      Let us turn your ideas into a reality with our Mobile App Development.
    </p>

    <a
      href="/contact"
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition"
    >
      Contact Us →
    </a>

  </div>
</section>

{/* ================= TOOLS & TECHNOLOGIES ================= */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="max-w-3xl mb-14">
      <h2 className="text-3xl font-bold mb-3">
        Leveraging the <span className="text-orange-500">Best Tools</span> for Success
      </h2>

      <p className="text-sm text-gray-600">
        At NShine Technologies, we use a wide range of cutting-edge technologies
        to ensure the best performance, security, and scalability for your
        <strong> Mobile Applications</strong>:
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

      {/* FRONTEND */}
      <TechCard title="Client Software (Front-End)">
        <TechItem icon="/icons/flutter.svg" label="Flutter" />
        <TechItem icon="/icons/dotnet-maui.svg" label=".NET MAUI" />
        <TechItem icon="/icons/swift.svg" label="Swift" />
        <TechItem icon="/icons/kotlin.svg" label="Kotlin" />
      </TechCard>

      {/* BACKEND */}
      <TechCard title="Server Software (Back-End)">
        <TechItem icon="/icons/dotnet-core.svg" label=".NET Core" />
      </TechCard>

      {/* DATABASE */}
      <TechCard title="Database">
        <TechItem icon="/icons/sql-server.svg" label="SQL Server" />
        <TechItem icon="/icons/azure-cosmos.svg" label="Azure Cosmos DB" />
      </TechCard>

      {/* CLOUD */}
      <TechCard title="Cloud & Hosting">
        <TechItem icon="/icons/azure.svg" label="Azure" />
      </TechCard>

    </div>

    {/* CTA */}
    <div className="text-center">
      <a
        href="/contact"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition"
      >
        Start Your Mobile App Project →
      </a>
    </div>

  </div>
</section>


{/* ================= WHY CHOOSE US ================= */}
<section className="bg-[#FFF3EC] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="max-w-3xl mb-14">
      <h2 className="text-3xl font-bold mb-3">
        Why Choose NShine Technologies for{" "}
        <span className="text-orange-500">Mobile App Development?</span>
      </h2>

      <p className="text-sm text-gray-700">
        When you choose NShine Technologies for your mobile app development,
        we deliver features that enhance your business and offer superior value:
      </p>
    </div>

    {/* FEATURES GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <WhyCard
        title="Seamless Integration"
        desc="Integration with your existing systems, APIs, and third-party services."
      />

      <WhyCard
        title="Real-Time Updates"
        desc="Live tracking, real-time notifications, and instant data updates to keep users engaged."
      />

      <WhyCard
        title="Customizable UI"
        desc="Intuitive, user-friendly interfaces customized to your branding and target audience."
      />

      <WhyCard
        title="Scalability"
        desc="Effortlessly connect with third-party APIs, CRM tools, and grow your app as your business scales."
      />

      <WhyCard
        title="Security"
        desc="Highest security standards including encryption, two-factor authentication, and secure data storage."
      />

      <WhyCard
        title="Push Notifications"
        desc="Personalized notifications to increase user retention and improve conversions."
      />

    </div>
  </div>
</section>

{/* ================= FAQ ================= */}
<section className="bg-white py-24">
  <div className="max-w-4xl mx-auto px-6">

    <h3 className="text-2xl font-bold mb-10">
      Questions about service
    </h3>

    <FAQItem
      question="How will mobile app development benefit my business?"
      answer="Mobile app development helps businesses improve customer engagement, streamline operations, increase brand visibility, and create new revenue streams. A well-built app allows you to connect directly with users, offer personalized experiences, and improve customer retention."
    />

    <FAQItem
      question="Can you ensure my app works on both iOS and Android platforms?"
      answer="Yes. We build apps using native and cross-platform technologies such as Flutter, .NET MAUI, Kotlin, and Swift. This ensures your app performs reliably across both iOS and Android devices with a consistent user experience."
    />

    <FAQItem
      question="How do you handle app maintenance, and what kind of ongoing support can I expect?"
      answer="We provide complete post-launch support, including performance monitoring, security updates, feature enhancements, bug fixes, and OS compatibility updates. Our team ensures your app stays secure, optimized, and up-to-date as your business grows."
    />

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
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">
        ◎
      </div>

      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}



function ServiceItem({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="text-orange-500 text-2xl">📱</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}


function TechCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-xl p-6">
      <h4 className="font-semibold text-orange-500 mb-4">
        {title}
      </h4>

      <div className="flex flex-wrap gap-6">
        {children}
      </div>
    </div>
  );
}

function TechItem({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center w-20">
      <img
        src={icon}
        alt={label}
        className="h-10 mb-2 object-contain"
      />
      <span className="text-xs text-gray-700 font-medium">
        {label}
      </span>
    </div>
  );
}


import { useState } from "react";

function WhyCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border hover:shadow-lg transition">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">
        {desc}
      </p>
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
        <span className="text-xl text-gray-500">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

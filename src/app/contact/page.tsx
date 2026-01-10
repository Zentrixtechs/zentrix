import Section from "@/components/shared/Section";

export default function ContactPage() {
  return (
    <>
      {/* ================= PAGE TITLE ================= */}
      <section className="bg-[#D6ECFF] py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#265E52]">
          Contact Us
        </h1>
      </section>

      {/* ================= CONTACT FORM AREA ================= */}
      <section className="bg-[#D6ECFF] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* WHITE CARD (FORM + LEFT INFO handled inside Section) */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <Section />
          </div>

        </div>
      </section>

      {/* ================= BOTTOM TEXT (NO GREEN BG) ================= */}
      <section className="bg-[#D6ECFF] pb-20 text-center">
        <h2 className="text-3xl font-bold text-[#265E52] mb-4">
          Partner With Us for <br className="hidden sm:block" />
          Lasting Success
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto text-sm">
          Our dedicated team works closely with you to design, market, and grow
          your business—one step at a time.
        </p>
      </section>
    </>
  );
}

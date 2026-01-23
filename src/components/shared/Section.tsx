
"use client";
import { useState } from "react";

export default function Section() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    website: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        website: "",
        service: "",
        message: "",
      });
    } catch {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* ================= LEFT PANEL ================= */}
        <div className="bg-gradient-to-br from-[#F028C2] to-[#2D96EB] text-white px-10 py-10">
          <h2 className="text-3xl font-semibold leading-snug mb-8">
            Headquartered in the USA, <br />
            <span className="text-white drop-shadow-md">Delivering Services Worldwide!</span>
          </h2>

          <h3 className="text-2xl font-semibold underline underline-offset-8 decoration-[#F028C2] mb-6">
            USA
          </h3>

          <ul className="space-y-6 text-base">
            <li className="flex items-center gap-3">
              <span className="text-xl">📍</span> Leander, Austin, Texas, USA
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📞</span> +1 612-470-2664
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✉️</span> support@Zentrix.tech
            </li>
          </ul>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="px-10 py-16 bg-white">
          <h2 className="text-3xl font-semibold mb-3">
            How can <span className="text-[#F028C2]">we help today?</span>
          </h2>

          <p className="text-gray-600 mb-10">
            Tell us what you need, and we’ll find the right solution for you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#F028C2] focus:border-transparent outline-none transition-all"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#F028C2] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile *"
                className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#F028C2] focus:border-transparent outline-none transition-all"
              />

              <input
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter Website URL (If Applicable)"
                className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#F028C2] focus:border-transparent outline-none transition-all"
              />
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#F028C2] focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">Select Services *</option>
              <option>Digital Marketing</option>
              <option>Web Development</option>
              <option>SEO</option>
              <option>App Development</option>
              <option>UI / UX Design</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#F028C2] focus:border-transparent outline-none transition-all"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#F028C2] to-[#2D96EB] text-white py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(240,40,194,0.4)] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600 font-bold text-center animate-pulse">
                ✓ Form submitted successfully!
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
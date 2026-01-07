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
        <div className="bg-[#265E52] text-white px-10 py-16">
          <h2 className="text-3xl font-semibold leading-snug mb-8">
            Headquartered in the USA, <br />
            <span className="text-[#E7B66A]">Delivering Services Worldwide!</span>
          </h2>

          <h3 className="text-2xl font-semibold underline underline-offset-8 mb-6">
            USA
          </h3>

          <ul className="space-y-6 text-base">
            <li>📍 Leander, Austin, Texas, USA</li>
            <li>📞 +1 612-470-2664</li>
            <li>✉️ support@nshine.tech</li>
          </ul>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="px-10 py-16 bg-white">
          <h2 className="text-3xl font-semibold mb-3">
            How can <span className="text-[#265E52]">we help today?</span>
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
                className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#265E52]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#265E52]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile *"
                className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#265E52]"
              />

              <input
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter Website URL (If Applicable)"
                className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#265E52]"
              />
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#265E52]"
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
              className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-[#265E52]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#265E52] text-white py-3 rounded-md text-lg font-semibold hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {success && (
              <p className="text-green-600 font-medium">
                Form submitted successfully!
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}

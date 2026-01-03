import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Zentrix</h2>
          <p className="text-sm leading-relaxed">
            We help businesses grow with digital marketing, web development,
            SEO, ads, and scalable technology solutions.
          </p>
        </div>

        {/* Marketing */}
        <div>
          <h3 className="text-white font-semibold mb-4">Marketing</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/marketing/seo">SEO Services</Link></li>
            <li><Link href="/marketing/google-ads">Google Ads</Link></li>
            <li><Link href="/marketing/meta-ads">Meta Ads</Link></li>
            <li><Link href="/marketing/lead-generation">Lead Generation</Link></li>
            <li><Link href="/marketing/ai-seo">AI SEO</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/websites-development">Website Development</Link></li>
            <li><Link href="/services/app-development">App Development</Link></li>
            <li><Link href="/services/erp-solutions">ERP Solutions</Link></li>
            <li><Link href="/services/ui-ux-design">UI/UX Design</Link></li>
            <li><Link href="/services/it-consultation">IT Consultation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 India</li>
            <li>📞 +91 XXXXX XXXXX</li>
            <li>✉️ contact@zentrix.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Zentrix. All rights reserved.
      </div>
    </footer>
  );
}

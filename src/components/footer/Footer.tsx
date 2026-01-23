// import Link from "next/link";
// import Image from "next/image";
// import {
//   MapPinIcon,
//   PhoneIcon,
//   EnvelopeIcon,
// } from "@heroicons/react/24/outline";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-[#0B0F19] via-[#0E1325] to-[#0B0F19] text-gray-300">
//       <div className="max-w-7xl mx-auto px-6 py-16">

//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

//           {/* BRAND */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Image src="/images/so.png" alt="Zentrix" width={32} height={40} />
//               <h2 className="text-white text-2xl font-bold">Zentrix</h2>
//             </div>

//             <p className="text-sm text-gray-400 leading-relaxed mb-6">
//               We help businesses grow with digital marketing, web development,
//               SEO, ads, and scalable technology solutions.
//             </p>

//             {/* SOCIAL ICONS */}
//             <div className="flex gap-4">
//               <SocialIcon href="#" label="Facebook">
//                 <FacebookIcon />
//               </SocialIcon>
//               <SocialIcon href="#" label="Instagram">
//                 <InstagramIcon />
//               </SocialIcon>
//               <SocialIcon href="#" label="LinkedIn">
//                 <LinkedInIcon />
//               </SocialIcon>
//               <SocialIcon href="#" label="Twitter">
//                 <TwitterIcon />
//               </SocialIcon>
//             </div>
//           </div>

//           {/* SERVICES */}
//           <FooterColumn title="Services">
//             <FooterLink href="/marketing/digital-marketing">Digital Marketing</FooterLink>
//             <FooterLink href="/marketing/lead-generation">Lead Generation</FooterLink>
//             <FooterLink href="/services/business-website-development">
//               Website Development
//             </FooterLink>
//             <FooterLink href="/services/app-development">App Development</FooterLink>
//             <FooterLink href="/services/erp-solutions">ERP Solutions</FooterLink>
//             <FooterLink href="/services/ui-ux-design">UI / UX Design</FooterLink>
//             <FooterLink href="/services/it-consultation">IT Consultation</FooterLink>
//           </FooterColumn>

//           {/* MARKETING */}
//           <FooterColumn title="Marketing">
//             <FooterLink href="/marketing/seo">Search Engine Optimization</FooterLink>
//             <FooterLink href="/marketing/ai-seo">AI SEO Services</FooterLink>
//             <FooterLink href="/marketing/local-seo">Local SEO</FooterLink>
//             <FooterLink href="/marketing/google-ads">Google Ads</FooterLink>
//             <FooterLink href="/marketing/meta-ads">Meta Ads</FooterLink>
//           </FooterColumn>

//           {/* QUICK LINKS */}
//           <FooterColumn title="Quick Links">
//             <FooterLink href="/">Home</FooterLink>
//             <FooterLink href="/about-us">About Us</FooterLink>
//             <FooterLink href="/pricing">Pricing</FooterLink>
//             <FooterLink href="/catalog">Catalog</FooterLink>
//             <FooterLink href="/contact">Contact</FooterLink>
//           </FooterColumn>

//           {/* CONTACT */}
//           <FooterColumn title="Contact">
//             <li className="flex items-center gap-3 text-sm text-gray-400">
//               <MapPinIcon className="w-5 h-5 text-[#F028C2]" />
//               India
//             </li>
//             <li className="flex items-center gap-3 text-sm text-gray-400">
//               <PhoneIcon className="w-5 h-5 text-[#0BF1FA]" />
//               +91 XXXXX XXXXX
//             </li>
//             <li className="flex items-center gap-3 text-sm text-gray-400">
//               <EnvelopeIcon className="w-5 h-5 text-[#2D96EB]" />
//               contact@zentrix.com
//             </li>
//           </FooterColumn>
//         </div>
//       </div>

//       {/* BOTTOM BAR */}
//       <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} Zentrix. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// /* ================= HELPERS ================= */

// function FooterColumn({ title, children }: any) {
//   return (
//     <div>
//       <h4
//         className="
//           text-white font-semibold mb-4 relative inline-block
//           after:absolute after:left-0 after:-bottom-1
//           after:h-[3px] after:w-0
//           after:bg-gradient-to-r after:from-[#F028C2] after:to-[#ED2189]
//           after:transition-all after:duration-300
//           hover:after:w-full
//         "
//       >
//         {title}
//       </h4>
//       <ul className="space-y-3">{children}</ul>
//     </div>
//   );
// }

// function FooterLink({ href, children }: any) {
//   return (
//     <li>
//       <Link
//         href={href}
//         className="
//           relative inline-block text-sm text-gray-400
//           after:absolute after:left-0 after:-bottom-1
//           after:h-[2px] after:w-0
//           after:bg-gradient-to-r after:from-[#0BF1FA] after:to-[#2D96EB]
//           after:transition-all after:duration-300
//           hover:text-white hover:after:w-full
//         "
//       >
//         {children}
//       </Link>
//     </li>
//   );
// }


// function SocialIcon({ href, children, label }: any) {
//   return (
//     <Link
//       href={href}
//       aria-label={label}
//       className="
//         w-10 h-10 flex items-center justify-center rounded-full
//         bg-white/5 text-gray-400
//         transition-all duration-300
//         hover:text-white hover:scale-110
//         hover:bg-gradient-to-r hover:from-[#F028C2] hover:to-[#2D96EB]
//         hover:shadow-[0_0_20px_rgba(240,40,194,0.45)]
//       "
//     >
//       {children}
//     </Link>
//   );
// }

// /* ================= SOCIAL SVG ICONS ================= */

// function FacebookIcon() {
//   return (
//     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" />
//     </svg>
//   );
// }

// function InstagramIcon() {
//   return (
//     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm6-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" />
//     </svg>
//   );
// }

// function LinkedInIcon() {
//   return (
//     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M4 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm-2 6h4v12H2V9Zm7 0h4v1.7h.1a4.4 4.4 0 0 1 4-2.2c4.3 0 5.1 2.8 5.1 6.4V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H9V9Z" />
//     </svg>
//   );
// }

// function TwitterIcon() {
//   return (
//     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.7-2.2a8 8 0 0 1-2.5 1a4 4 0 0 0-6.9 3.6A11.3 11.3 0 0 1 3.1 4.8a4 4 0 0 0 1.2 5.3a4 4 0 0 1-1.8-.5v.1a4 4 0 0 0 3.2 3.9a4 4 0 0 1-1.8.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6a11.3 11.3 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0 0 22 5.9Z" />
//     </svg>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-[#F7F8FA] text-gray-800 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/so.png" alt="Zentrix" width={32} height={40} />
              <h2 className="text-gray-900 text-2xl font-bold">Zentrix</h2>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              We help businesses grow with digital marketing, web development,
              SEO, ads, and scalable technology solutions.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <SocialIcon href="#" label="Facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon href="#" label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon href="#" label="Twitter">
                <TwitterIcon />
              </SocialIcon>
            </div>
          </div>

          {/* SERVICES */}
          <FooterColumn title="Services">
            <FooterLink href="/">Digital Marketing</FooterLink>
            <FooterLink href="/">Lead Generation</FooterLink>
            <FooterLink href="/">
              Website Development
            </FooterLink>
            <FooterLink href="/">App Development</FooterLink>
            <FooterLink href="/">ERP Solutions</FooterLink>
            <FooterLink href="/">UI / UX Design</FooterLink>
            <FooterLink href="/">IT Consultation</FooterLink>
          </FooterColumn>

          {/* MARKETING */}
          <FooterColumn title="Marketing">
            <FooterLink href="/">Search Engine Optimization</FooterLink>
            <FooterLink href="/">AI SEO Services</FooterLink>
            <FooterLink href="/">Local SEO</FooterLink>
            <FooterLink href="/">Google Ads</FooterLink>
            <FooterLink href="/">Meta Ads</FooterLink>
          </FooterColumn>

          {/* QUICK LINKS */}
          <FooterColumn title="Quick Links">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about-us">About Us</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/catalog">Catalog</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>

          {/* CONTACT */}
          <FooterColumn title="Contact">
            <li className="flex items-center gap-3 text-sm text-gray-600">
              <MapPinIcon className="w-5 h-5 text-[#F028C2]" />
              India
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-600">
              <PhoneIcon className="w-5 h-5 text-[#2D96EB]" />
              +91 XXXXX XXXXX
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-600">
              <EnvelopeIcon className="w-5 h-5 text-[#2D96EB]" />
              contact@zentrix.com
            </li>
          </FooterColumn>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Zentrix. All rights reserved.
      </div>
    </footer>
  );
}

/* ================= HELPERS ================= */

function FooterColumn({ title, children }: any) {
  return (
    <div>
      <h4
        className="
          text-gray-900 font-bold mb-6 relative inline-block
          after:absolute after:left-0 after:-bottom-1
          after:h-[3px] after:w-0
          after:bg-gradient-to-r after:from-[#F028C2] after:to-[#2D96EB]
          after:transition-all after:duration-300
          hover:after:w-full
        "
      >
        {title}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: any) {
  return (
    <li>
      <Link
        href={href}
        className="
          relative inline-block text-sm text-gray-600 transition-colors
          after:absolute after:left-0 after:-bottom-1
          after:h-[2px] after:w-0
          after:bg-gradient-to-r after:from-[#F028C2] after:to-[#2D96EB]
          after:transition-all after:duration-300
          hover:text-gray-900 hover:after:w-full
        "
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, children, label }: any) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        w-10 h-10 flex items-center justify-center rounded-full
        bg-gray-100 text-gray-500
        transition-all duration-300
        hover:text-white hover:scale-110
        hover:bg-gradient-to-r hover:from-[#F028C2] hover:to-[#2D96EB]
        hover:shadow-lg
      "
    >
      {children}
    </Link>
  );
}

/* ================= SOCIAL SVG ICONS (Remained same, used for SocialIcon helper) ================= */

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm6-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm-2 6h4v12H2V9Zm7 0h4v1.7h.1a4.4 4.4 0 0 1 4-2.2c4.3 0 5.1 2.8 5.1 6.4V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H9V9Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.7-2.2a8 8 0 0 1-2.5 1a4 4 0 0 0-6.9 3.6A11.3 11.3 0 0 1 3.1 4.8a4 4 0 0 0 1.2 5.3a4 4 0 0 1-1.8-.5v.1a4 4 0 0 0 3.2 3.9a4 4 0 0 1-1.8.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6a11.3 11.3 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0 0 22 5.9Z" />
    </svg>
  );
}
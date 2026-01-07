// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";


// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b">
//       {/* ================= TOP BAR ================= */}
//       <div className="bg-orange-50 text-sm px-8 py-2 flex justify-between items-center">
//         <span>Looking for Marketing Services?</span>
//         <Link
//           href="/contact"
//           className="bg-orange-500 text-white px-4 py-1 rounded-md text-sm font-medium"
//         >
//           Visit →
//         </Link>
//       </div>

//       {/* ================= MAIN NAV ================= */}
//       <div className="relative">
//         <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 h-10">
//             <Image
//               src="/images/los.png"
//               alt="Zentrix Logo"
//               width={158}
//               height={40}
//               priority
//               className="object-contain"
//             />

//           </Link>



//           {/* Menu */}
//           <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
//             <Link href="/">Home</Link>
//             <Link href="/about-us">About Us</Link>

//             {/* ===== SERVICES ===== */}
//             <div
//               className="static"
//               onMouseEnter={() => setOpen(true)}
//               onMouseLeave={() => setOpen(false)}
//             >
//               <button className="flex items-center gap-1">
//                 Services <span>▾</span>
//               </button>

//               {open && (
//                 <div className="absolute left-0 right-0 top-full bg-white border-t shadow-md">
//                   <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-4 gap-12">
//                     <MenuColumn title="Digital Marketing">
//                       <MenuItem label="Digital Marketing" />
//                       <MenuItem label="Lead Generation" />
//                     </MenuColumn>

//                     <MenuColumn title="Websites Development">
//                       <MenuItem label="Logo Design" />
//                       <MenuItem label="Business Website Development" />
//                     </MenuColumn>

//                     <MenuColumn title="SEO">
//                       <MenuItem label="Search Engine Optimization (SEO)" />
//                       <MenuItem label="AI SEO Services" />
//                       <MenuItem label="Local SEO" />
//                     </MenuColumn>

//                     <MenuColumn title="Ads">
//                       <MenuItem label="Google Ads" />
//                       <MenuItem label="Meta Ads" />
//                     </MenuColumn>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <Link href="/pricing">Pricing</Link>
//             <Link href="/catalog">Catalog</Link>
//             <Link href="/contact">Contact</Link>
//           </nav>

//           {/* ================= CTA BUTTONS ================= */}
//           <div className="hidden md:flex items-center gap-4">
//             <Link
//               href="/contact"
//               className="bg-amber-300 px-5 py-2 rounded-lg font-medium"
//             >
//               Free Consultation
//             </Link>

//             <Link
//               href="tel:+16124702664"
//               className="bg-green-800 text-white px-5 py-2 rounded-lg font-medium"
//             >
//               +1 612-470-2664
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// /* ================= HELPERS ================= */

// function MenuColumn({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <h4 className="font-semibold mb-4 inline-block border-b-4 border-green-600">
//         {title}
//       </h4>
//       <ul className="space-y-3 text-sm text-gray-800">{children}</ul>
//     </div>
//   );
// }

// function MenuItem({ label }: { label: string }) {
//   return <li className="cursor-pointer hover:text-green-700">{label}</li>;
// }

"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* ================= TOP BAR ================= */}
      <div className="bg-orange-50 text-sm px-8 py-2 flex justify-between items-center border-b border-orange-200">
        <span>Looking for Marketing Services?</span>
        <Link
          href="/contact"
          className="bg-orange-500 text-white px-4 py-1 rounded-md font-medium"
        >
          Visit →
        </Link>
      </div>

      {/* ================= MAIN NAV ================= */}
      {/* shadow-md gives shadow at the bottom of header */}
      <div className="relative shadow-md">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">

          {/* LOGO (slightly moved down for visual alignment) */}
          <Link href="/" className="flex items-center gap-2 h-10">
            <Image
              src="/images/so.png"
              alt="Zentrix Logo"
              width={28}
              height={38}
              priority
              className="object-contain"
            />
            <span className="text-2xl font-bold leading-none">
              Zentrix
            </span>
          </Link>


          {/* MENU */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-small">
            <Link href="/" className="relative  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
            >Home</Link>
            <Link href="/about-us" className="relative  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
            >About Us</Link>

            {/* ===== SERVICES ===== */}
            <div
              className="static"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="flex items-center gap-1 ">
                Services <ChevronDownIcon className="w-4 h-4 mt-[1px] font-bold" />
              </button>

              {open && (
                <div className="absolute left-0 right-0 top-full bg-white border-t shadow-lg">
                  {/* <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-5 gap-12"> */}
                  <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 lg:grid-cols-5 gap-12">

                    <MenuColumn title="Digital Marketing">
                      <MenuItem label="Digital Marketing" />
                      <MenuItem label="Lead Generation" />
                    </MenuColumn>

                    <MenuColumn title="Websites Development">
                      <MenuItem label="Logo Design" />
                      <MenuItem label="Business Website Development" />
                    </MenuColumn>

                    <MenuColumn title="SEO">
                      <MenuItem label="Search Engine Optimization (SEO)" />
                      <MenuItem label="AI SEO Services" />
                      <MenuItem label="Local SEO" />
                    </MenuColumn>

                    <MenuColumn title="Ads">
                      <MenuItem label="Google Ads" />
                      <MenuItem label="Meta Ads" />
                    </MenuColumn>

                    <MenuColumn title="Development">
                      <MenuItem label="IT Consultation" />
                      <MenuItem label="Custom Websites" />
                      <MenuItem label="Web Portals" />
                      <MenuItem label="App Development" />
                      <MenuItem label="UI / UX Design" />
                      <MenuItem label="ERP Solutions" />
                    </MenuColumn>

                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="relative  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
            >Pricing</Link>
            <Link href="/catalog" className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
            >Catalog</Link>
            <Link href="/contact" className="relative  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
            >Contact</Link>
          </nav>

          {/* ================= CTA BUTTONS ================= */}
          <div className="hidden md:flex items-center gap-4">
            {/* Free Consultation – Pink */}
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg font-medium text-white transition hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#F45BFF" }}
            >
              Free Consultation
            </Link>

            {/* Contact Number – Blue */}
            <Link
              href="tel:+16124702664"
              className="px-5 py-2 rounded-lg font-medium text-white transition hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#22D3EE" }}
            >
              +1 612-470-2664
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}

/* ================= HELPERS ================= */

function MenuColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-semibold mb-4 inline-block border-b-4 border-green-600">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-gray-800">{children}</ul>
    </div>
  );
}

function MenuItem({ label }: { label: string }) {
  return (
    <li className="cursor-pointer hover:text-green-700 transition-colors">
      {label}
    </li>
  );
}

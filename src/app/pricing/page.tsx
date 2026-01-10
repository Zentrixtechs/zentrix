"use client";

import Link from "next/link";
import { useState } from "react";




/* ================= PAGE ================= */

export default function PricingPage() {
    return (
        <>
            {/* ================= HERO ================= */}
            <section className="bg-[#265E52] text-white py-12 text-center">
                <h1 className="text-3xl md:text-4xl font-bold">Pricing</h1>
            </section>

            {/* ================= POPULAR PRICING ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-3xl font-bold mb-2">
                        Our Popular Pricing Packages
                    </h2>
                    <p className="text-gray-600 mb-14 text-sm">
                        Explore our popular pricing packages with complete transparency.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PricingCard
                            popular
                            title="Website Design"
                            oldPrice="$1,800"
                            price="$1,500"
                            period="One Time"
                            button="Explore More Plans"
                            features={[
                                "Up to 5 pages",
                                "Dedicated manager",
                                "Expert UI/UX",
                                "$100 per extra page",
                            ]}
                        />

                        <PricingCard
                            popular
                            title="SEO"
                            oldPrice="$2,500"
                            price="$2,000"
                            period="Per Month"
                            button="Explore More Plans"
                            features={[
                                "Nationwide targeting",
                                "20 keyword research",
                                "6 pages optimized",
                                "2 blogs + sharing",
                                "Competitor analysis",
                                "Technical audit",
                            ]}
                        />

                        <PricingCard
                            popular
                            title="Ads"
                            price="15%"
                            suffix="of Ad Budget"
                            button="Explore More Plans"
                            features={[
                                "Complete ad setup",
                                "Unlimited ads",
                                "Competitor insights",
                                "Accurate GTM tracking",
                                "Unlimited locations",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= WEBSITE PACKAGES ================= */}
            <section className="py-20 bg-[#D6ECFF]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-3xl font-bold mb-2">
                        Our Website Pricing Packages
                    </h2>
                    <p className="text-gray-700 mb-14 text-sm">
                        Designed for growth, performance, and conversions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <WebsiteCard
                            title="Starter Website"
                            oldPrice="$1,800"
                            price="$1,500"
                            features={[
                                "Up to 5 pages",
                                "Dedicated manager",
                                "Expert UI/UX",
                                "$100 per extra page",
                            ]}
                        />

                        <WebsiteCard
                            popular
                            title="Standard Website"
                            oldPrice="$3,500"
                            price="$3,000"
                            features={[
                                "Up to 5 pages",
                                "Dedicated manager",
                                "Expert UI/UX",
                                "$100 per extra page",
                            ]}
                        />

                        <WebsiteCard
                            title="Advanced Website"
                            oldPrice="$5,400"
                            price="$5,000"
                            features={[
                                "Up to 10 pages",
                                "Dedicated manager",
                                "Conversion-focused UX",
                                "$100 per extra page",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ================= SEO PRICING TABLE ================= */}
            <section className="py-20 ">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">
                            Our SEO <span className="text-[#265E52]">Pricing Packages</span>
                        </h2>
                        <p className="text-gray-700 text-sm">
                            Choose your ideal marketing plan.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 bg-white rounded-lg text-sm">
                            <thead>
                                <tr>
                                    <th className="p-4 text-left bg-gray-50">Features</th>
                                    <PlanHead title="Starter SEO" price="$500" />
                                    <PlanHead title="Basic SEO" price="$1000" />
                                    <PlanHead title="Growth SEO" price="$2000" popular />
                                    <PlanHead title="Premium SEO" price="$3000" />
                                    <PlanHead title="Advanced SEO" price="$4000" />
                                </tr>
                            </thead>
                            <tbody>
                                <Row label="Target Area" values={["Local", "Multi", "Nationwide", "Nationwide", "Nationwide"]} />
                                <Row label="Keyword Research" values={["10", "10", "20", "25–40", "40–50"]} />
                                <IconRow label="AI SEO Channels" checks={[false, true, true, true, true]} />
                                <IconRow label="Technical SEO" checks={[true, true, true, true, true]} />
                                <IconRow label="Monthly Reports" checks={[true, true, true, true, true]} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ================= META ADS PRICING ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">

                    <h2 className="text-3xl font-bold mb-2">
                        Our <span className="text-[#265E52]">Meta Ads</span> Pricing Packages
                    </h2>
                    <p className="text-gray-600 mb-14 text-sm">
                        Boost your business on any budget
                    </p>

                    {/* ===== TOP CARDS ===== */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                        {/* STARTER */}
                        <div className="bg-gray-100 rounded-2xl p-8 shadow">
                            <h3 className="text-xl font-semibold mb-3">Starter</h3>

                            <p className="text-gray-400 line-through">$300</p>
                            <p className="text-4xl font-bold mb-1">$249</p>
                            <p className="text-sm text-gray-500 mb-6">Per Month</p>

                            <Link
                                href="/contact"
                                className="block bg-[#1E8E73] text-white py-2 rounded-md font-medium"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* STANDARD */}
                        <div className="relative rounded-2xl p-8 shadow bg-gradient-to-b from-[#E7B66A] to-[#45C4A0] text-black">
                            <span className="absolute top-4 right-4 bg-white text-xs px-3 py-1 rounded-full font-semibold">
                                Popular
                            </span>

                            <h3 className="text-xl font-semibold mb-3">Standard</h3>

                            <p className="text-black/50 line-through">$500</p>
                            <p className="text-4xl font-bold mb-1">$449</p>
                            <p className="text-sm mb-6">Per Month</p>

                            <Link
                                href="/contact"
                                className="block bg-white text-black py-2 rounded-md font-medium"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* PREMIUM */}
                        <div className="bg-gray-100 rounded-2xl p-8 shadow">
                            <h3 className="text-xl font-semibold mb-3">Premium</h3>

                            <p className="text-gray-400 line-through">25%</p>
                            <p className="text-4xl font-bold mb-1">15%</p>
                            <p className="text-sm text-gray-500 mb-6">of Ad Budget</p>

                            <Link
                                href="/contact"
                                className="block bg-[#1E8E73] text-white py-2 rounded-md font-medium"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* ===== FEATURE TABLE ===== */}
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 text-sm">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-left">Features We Offer</th>
                                    <th className="p-4">Starter</th>
                                    <th className="p-4">Standard</th>
                                    <th className="p-4">Premium</th>
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                <MetaRow label="FB Page Setup" values={["✅", "✅", "✅"]} />
                                <MetaRow label="Campaign Setup" values={["1", "2", "Unlimited"]} />
                                <MetaRow label="Landing Page" values={["❌", "❌", "✅"]} />
                                <MetaRow label="Ad Budget" values={["Up to $1,500", "Up to $2,500", "Over $2,500"]} />
                                <MetaRow label="Location Targeting" values={["1 Location", "Up to 2", "Unlimited"]} />
                                <MetaRow
                                    label="Ad Creative Design"
                                    values={[
                                        "Single Image",
                                        "Single & Carousel",
                                        "Images & Videos",
                                    ]}
                                />
                                <MetaRow
                                    label="Conversion Tracking"
                                    values={[
                                        "Meta Pixel",
                                        "Meta Pixel + Analytics",
                                        "Meta Pixel + Analytics",
                                    ]}
                                />
                                <MetaRow label="Free Flyers" values={["2", "3", "4"]} />
                                <MetaRow label="Reporting & Analytics" values={["Monthly", "Monthly", "Monthly"]} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>



            {/* ================= GOOGLE ADS PRICING ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">

                    {/* HEADER */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Our <span className="text-[#265E52]">Google Ads</span> Pricing Packages
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Boost Your Business on Any Budget
                        </p>
                    </div>

                    {/* ================= PRICING CARDS ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                        {/* STARTER */}
                        <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
                            <h3 className="text-xl font-semibold mb-2">Starter</h3>
                            <p className="line-through text-gray-400">$300</p>
                            <p className="text-4xl font-bold my-1">$249</p>
                            <p className="text-sm text-gray-600 mb-6">Per Month</p>
                            <button className="w-full bg-[#1f8f72] text-white py-2 rounded-md font-medium">
                                Get Started
                            </button>
                        </div>

                        {/* STANDARD */}
                        <div className="relative rounded-2xl p-8 text-center shadow bg-gradient-to-b from-[#E7B66A] to-[#45C4A0]">
                            <span className="absolute top-4 right-4 bg-[#FFD88A] text-xs px-3 py-1 rounded-full font-semibold">
                                Popular
                            </span>

                            <h3 className="text-xl font-semibold mb-2">Standard</h3>
                            <p className="line-through opacity-70">$500</p>
                            <p className="text-4xl font-bold my-1">$449</p>
                            <p className="text-sm mb-6">Per Month</p>

                            <button className="w-full bg-white text-black py-2 rounded-md font-medium">
                                Get Started
                            </button>
                        </div>

                        {/* PREMIUM */}
                        <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
                            <h3 className="text-xl font-semibold mb-2">Premium</h3>
                            <p className="line-through text-gray-400">25%</p>
                            <p className="text-4xl font-bold my-1">15%</p>
                            <p className="text-sm text-gray-600 mb-6">of Ad Budget</p>
                            <button className="w-full bg-[#1f8f72] text-white py-2 rounded-md font-medium">
                                Get Started
                            </button>
                        </div>

                    </div>

                    {/* ================= FEATURES TABLE ================= */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <tbody>

                                {[
                                    ["Account Setup", "✔", "✔", "✔"],
                                    ["Campaign Setup", "1", "2", "Unlimited"],
                                    ["Landing Page", "❌", "❌", "✔"],
                                    ["Budget", "Up to $1,500", "Up to $2,500", "Over $2,500"],
                                    ["Competitor Analysis", "✔", "✔", "✔"],
                                    ["Conversion Tracking", "Using GTM Tracking", "Using GTM Tracking", "Using GTM Tracking"],
                                    ["Google Analytics Setup", "✔", "✔", "✔"],
                                    ["Reporting", "Monthly", "Monthly", "Monthly"],
                                ].map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                                        <td className="p-4 font-medium">{row[0]}</td>
                                        <td className="p-4 text-center">{row[1]}</td>
                                        <td className="p-4 text-center">{row[2]}</td>
                                        <td className="p-4 text-center">{row[3]}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                </div>
            </section>




            {/* ================= FAQ SECTION ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-10">

                    <p className="text-[#265E52] font-medium mb-2">
                        Have any questions?
                    </p>

                    <h2 className="text-3xl font-bold mb-12">
                        Explore our <span className="text-[#265E52]">FAQ&apos;s</span> below.
                    </h2>

                    <FAQItem
                        question="What factors influence the pricing of NShine Digital Marketing services?"
                        answer="Our pricing is determined by various factors, including the scope of services, project complexity, industry competition, and the specific goals of your marketing strategy. We tailor our packages to meet your unique business needs."
                    />

                    <FAQItem
                        question="Are there any hidden fees in your pricing?"
                        answer="No. We believe in complete transparency. All costs are clearly outlined upfront, so you always know exactly what you’re paying for."
                    />

                    <FAQItem
                        question="Can I get a custom quote for my digital marketing needs?"
                        answer="Yes. Every business is unique. We offer customized pricing based on your goals, budget, and required services. Contact our team for a personalized quote."
                    />

                    <FAQItem
                        question="How often do you revise your pricing plans?"
                        answer="We periodically review our pricing to stay aligned with market trends, service enhancements, and client feedback. Any changes are communicated in advance."
                    />

                    <FAQItem
                        question="Do you offer discounts for long-term contracts?"
                        answer="Yes. We offer attractive discounts for long-term engagements and bundled services. Please reach out to learn more about available offers."
                    />

                    <FAQItem
                        question="What payment methods do you accept?"
                        answer="We accept major credit and debit cards, bank transfers, and approved online payment gateways for both domestic and international clients."
                    />

                </div>
            </section>


        </>
    );
}

/* ================= COMPONENTS ================= */


function MetaRow({ label, values }: any) {
    return (
        <tr className="border-t">
            <td className="p-4 text-left font-medium">{label}</td>
            {values.map((v: string, i: number) => (
                <td key={i} className="p-4">{v}</td>
            ))}
        </tr>
    );
}


function PricingCard({ popular, title, oldPrice, price, period, suffix, button, features }: any) {
    return (
        <div className="relative bg-white rounded-2xl shadow-lg p-8 text-left">
            {popular && <span className="badge">Popular</span>}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            {oldPrice && <p className="line-through text-gray-400">{oldPrice}</p>}
            <p className="text-3xl font-bold">{price}</p>
            {period && <p className="text-sm text-gray-500">{period}</p>}
            {suffix && <p className="text-sm text-gray-500">{suffix}</p>}

            <Link href="/contact" className="btn-primary mt-4 block text-center">
                {button}
            </Link>

            <ul className="mt-4 space-y-2 text-sm">
                {features.map((f: string, i: number) => (
                    <li key={i}>✔ {f}</li>
                ))}
            </ul>
        </div>
    );
}

function WebsiteCard({ popular, title, oldPrice, price, features }: any) {
    return (
        <div className="relative bg-white rounded-2xl shadow-lg p-8 text-left">
            {popular && <span className="badge">Popular</span>}
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="line-through text-gray-400">{oldPrice}</p>
            <p className="text-3xl font-bold">{price}</p>

            <Link href="/contact" className="btn-green mt-4 block text-center">
                Get Started
            </Link>

            <ul className="mt-4 space-y-2 text-sm">
                {features.map((f: string, i: number) => (
                    <li key={i}>✔ {f}</li>
                ))}
            </ul>
        </div>
    );
}

function PlanHead({ title, price, popular }: any) {
    return (
        <th className={`p-4 ${popular ? "bg-[#45C4A0]" : "bg-gray-50"}`}>
            <p className="font-semibold">{title}</p>
            <p className="text-xl font-bold">{price}</p>
            <Link href="/contact" className="btn-green mt-2 inline-block text-xs">
                Get Started
            </Link>
        </th>
    );
}

function Row({ label, values }: any) {
    return (
        <tr className="border-t">
            <td className="p-4 font-medium">{label}</td>
            {values.map((v: string, i: number) => (
                <td key={i} className="p-4 text-center">{v}</td>
            ))}
        </tr>
    );
}

function IconRow({ label, checks }: any) {
    return (
        <tr className="border-t">
            <td className="p-4 font-medium">{label}</td>
            {checks.map((c: boolean, i: number) => (
                <td key={i} className="p-4 text-center">
                    {c ? "✅" : "❌"}
                </td>
            ))}
        </tr>
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
        <div className="border-b py-6 cursor-pointer" onClick={() => setOpen(!open)}>
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium text-gray-800">
                    {question}
                </h4>
                <span className="text-2xl text-gray-500">
                    {open ? "−" : "+"}
                </span>
            </div>

            {open && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                    {answer}
                </p>
            )}
        </div>
    );
}


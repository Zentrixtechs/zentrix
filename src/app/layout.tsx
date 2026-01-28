import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
export const metadata: Metadata = {
  

  title: "Zentrix Tech | Digital Marketing, SEO & Web Development Agency",
  description: "Zentrix Tech helps businesses grow with SEO, Google Ads, Meta Ads, Branding, and high-converting websites. Boost traffic, leads, and revenue today!",
  keywords: [
    "Digital Marketing Agency",
    "SEO Services",
    "Web Development Company",
    "Google Ads Agency",
    "Meta Ads Agency",
    "Branding Services",
    "Website Design Company"
  ],
  icons: {
    icon: '/images/so.png', // Path to your logo
    shortcut: '/images/so.png',
    apple: '/images/so.png',
  },
  alternates: {
    canonical: "https://www.zentrix-tech.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Zentrix Tech | Digital Marketing & Web Development Agency",
    description: "Zentrix Tech helps businesses grow online with SEO, Ads, Branding, and high-converting websites.",
    url: "https://www.zentrix-tech.com",
    siteName: "Zentrix Tech",
    type: "website",
    images: [
      {
        url: "https://www.zentrix-tech.com/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zentrixtech",
    title: "Zentrix Tech | Digital Marketing & Web Development Agency",
    description: "Grow your business online with SEO, Google Ads, Meta Ads, Branding, and high-converting websites.",
    images: ["https://www.zentrix-tech.com/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white antialiased">
        <Navbar/>
        {children}
        <Footer/>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zentrix Tech",
            "url": "https://www.zentrix-tech.com",
            "logo": "https://www.zentrix-tech.com/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/zentrixtech",
              "https://www.linkedin.com/company/zentrixtech",
              "https://twitter.com/zentrixtech"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-123-456-7890",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English"]
            },
            "description": "Zentrix Tech is a results-driven digital marketing and web development agency offering SEO, Google Ads, Meta Ads, Branding, and high-converting websites."
          })}}
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Zentrix Tech offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide Digital Marketing, SEO, Google Ads, Meta Ads, Logo Design & Branding, and Website Development services tailored to grow your business online."
          }
        },
        {
          "@type": "Question",
          "name": "How can SEO help my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our SEO services improve your website’s visibility on search engines, drive organic traffic, and help generate high-quality leads that convert into customers."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle paid ads campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We manage Google Ads, Meta Ads, and LinkedIn Ads campaigns with precise targeting and optimization to maximize your ROI."
          }
        },
        {
          "@type": "Question",
          "name": "Can you design a high-converting website for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We design responsive, fast, and user-friendly websites that are optimized for conversions and SEO, helping you attract and retain customers."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with Zentrix Tech?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a free consultation by visiting our Contact page. Our experts will understand your business goals and create a tailored marketing strategy."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide branding and logo design services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We create unique brand identities, logos, and visual systems that establish authority, increase brand recall, and align with your business goals."
          }
        }
      ]
    })
  }}
/>
      </body>
    </html>
  );
}

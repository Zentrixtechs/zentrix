import Hero from "@/components/hero/Hero";
import Stats from "@/components/stats/Stats";
import ServiceMarquee from "@/components/marquee/ServiceMarquee";
import Services from "@/components/services/Services";
import Funnel from "@/components/funnel/Funnel";
import Pricing from "@/components/pricing/Pricing";
import Clients from "@/components/clients/Clients";
import FinalCTA from "@/components/cta/FinalCTA";
import FAQ from "@/components/faqs/Faqs";
export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero/>
      <Stats />
      <ServiceMarquee />
      <Services />
      <Funnel />
      <Pricing />
      <Clients />
      <FinalCTA />
      <FAQ/>
    </main>
    
  );
}

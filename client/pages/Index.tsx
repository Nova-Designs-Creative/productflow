import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import DataInsight from "@/components/sections/DataInsight";
import WorkTogether from "@/components/sections/WorkTogether";
import Testimonials from "@/components/sections/Testimonials";
import CompanyLogos from "@/components/sections/CompanyLogos";
import GetStarted from "@/components/sections/GetStarted";
import Pricing from "@/components/sections/Pricing";
import CTASection from "@/components/sections/CTASection";
import Newsletter from "@/components/sections/Newsletter";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Features />
      <DataInsight />
      <WorkTogether />
      <Testimonials />
      <CompanyLogos />
      <GetStarted />
      <Pricing />
      <CTASection 
        heading="Ready to move faster?"
        description="Join teams that ship with clarity and confidence every day"
        primaryCTA="Start"
        secondaryCTA="Demo"
        image="https://api.builder.io/api/v1/image/assets/TEMP/0d0b11cbf53324d59751559f8e44808e7a261657?width=2880"
      />
      <Newsletter />
      <FAQ />
      <Contact />
    </Layout>
  );
}

export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import LightBoxSection from "@/components/light-box-section"
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Pricing from "@/components/pricing-home";
import SplitCarousel from "@/components/split-carousel";
import Partners from "@/components/partners";
import "../css/homepage.css"

export default function Home() {
  return (
    <>
      <PageIllustration multiple/>
      <Hero />
      <LightBoxSection />
      <Workflows />
      <Features />
      <SplitCarousel />
      <Pricing />
      <Partners />
    </>
  );
}

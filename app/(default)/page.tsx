export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import LightBoxSection from "@/components/light-box-section"
import Permissionless from "@/components/permissionless";
import Features from "@/components/features";
import Providing from "@/components/providing";
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
      <Permissionless />
      <Features />
      <Providing />
      <SplitCarousel />
      <Pricing />
      <Partners />
    </>
  );
}

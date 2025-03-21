export const metadata = {
  title: "Home - ASO",
  description: "Page description",
};

import PageIllustration from "@/components/homepage/page-illustration";
import Hero from "@/components/homepage/hero-home";
import LightBoxSection from "@/components/homepage/light-box-section"
import Permissionless from "@/components/homepage/permissionless";
import SaleModels from "@/components/homepage/sale-models";
import Providing from "@/components/homepage/providing";
import WhyChoose from "@/components/homepage/why-choose";
import Storys from "@/components/homepage/storys";
import PartnerComp from "@/components/partner-comp";
import "@css/homepage.css";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <LightBoxSection />
      <Permissionless />
      <SaleModels />
      <Providing />
      <WhyChoose />
      <Storys />
      <PartnerComp />
    </>
  );
}

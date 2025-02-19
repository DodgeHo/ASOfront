export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import LightBoxSection from "@/components/light-box-section"
import Permissionless from "@/components/permissionless";
import SaleModels from "@/components/sale-models";
import Providing from "@/components/providing";
import WhyChoose from "@/components/why-choose";
import Storys from "@/components/storys";
import Partners from "@/components/partners";
import "../css/homepage.css"

export default function Home() {
  return (
    <>
      <PageIllustration multiple/>
      <Hero />
      <LightBoxSection />
      <Permissionless />
      <SaleModels />
      <Providing />
      <WhyChoose />
      <Storys />
      <Partners />
    </>
  );
}

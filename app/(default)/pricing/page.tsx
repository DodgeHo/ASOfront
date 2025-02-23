export const metadata = {
  title: "Pricing - Open PRO",
  description: "Page description",
};

import GeneralPageIllustration from "@/components/general-page-illustration";
import Hero from "@/components/hero-pricing";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import Partners from "@/components/homepage/partners";

export default function Pricing() {
  return (
    <>
      <GeneralPageIllustration/>
      <Hero />
      <Faqs />
      <Testimonials />
      <Partners />
    </>
  );
}

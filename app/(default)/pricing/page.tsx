export const metadata = {
  title: "Pricing - Open PRO",
  description: "Page description",
};

import GeneralPageIllustration from "@/components/general-page-illustration";
import Hero from "@/components/hero-pricing";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";

export default function Pricing() {
  return (
    <>
      <GeneralPageIllustration/>
      <Hero />
      <Faqs />
      <Testimonials />
    </>
  );
}

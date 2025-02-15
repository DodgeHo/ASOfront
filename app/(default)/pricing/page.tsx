export const metadata = {
  title: "Pricing - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-pricing";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import Partners from "@/components/partners";

export default function Pricing() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Faqs />
      <Testimonials />
      <Partners />
    </>
  );
}

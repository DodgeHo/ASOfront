export const metadata = {
  title: "Pricing - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/homepage/page-illustration";
import Hero from "@/components/hero-pricing";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import Partners from "@/components/homepage/partners";

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

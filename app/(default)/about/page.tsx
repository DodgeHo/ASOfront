export const metadata = {
  title: "About us - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/homepage/page-illustration";
import Hero from "@/components/hero-about";
import Timeline from "@/components/timeline";
import Team from "@/components/team";
import Benefits from "@/components/benefits";
import Career from "@/components/career";
import Clients from "@/components/clients";
import Partners from "@/components/homepage/partners";

export default function About() {
  return (
    <>
      <PageIllustration  />
      <Hero />
      <Timeline />
      <Team />
      <Benefits />
      <Career />
      <Clients />
      <Partners />
    </>
  );
}

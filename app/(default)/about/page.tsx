export const metadata = {
  title: "About us - Open PRO",
  description: "Page description",
};

import GeneralPageIllustration from "@/components/general-page-illustration";
import Hero from "@/components/hero-about";
import Timeline from "@/components/timeline";
import Team from "@/components/team";
import Benefits from "@/components/benefits";
import Career from "@/components/career";
import Clients from "@/components/clients";

export default function About() {
  return (
    <>
      <GeneralPageIllustration />
      <Hero />
      <Timeline />
      <Team />
      <Benefits />
      <Career />
      <Clients />
    </>
  );
}

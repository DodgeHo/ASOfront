export const metadata = {
  title: "Donation - ASO",
  description: "Page description",
};

import GeneralPageIllustration from "@/components/general-page-illustration";
import DonationLightBoxSection from "@/components/donation/donation-light-box-section";
import DonationASOPumSection from "@components/donation/donation-aso-pum-section";
import "@css/donationpage.css";
import Image from "next/image";
import Hero from "@/components/homepage/hero-home";
import FooterSeparator from "@/components/ui/footer-separator";

export default function Newsletter() {
  return (
    <>
      <GeneralPageIllustration />
      <DonationLightBoxSection />
      <DonationASOPumSection />


    </>
  );
}

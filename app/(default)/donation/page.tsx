export const metadata = {
  title: "Donation - ASO",
  description: "Page description",
};

import GeneralPageIllustration from "@/components/general-page-illustration";
import DonationLightBoxSection from "@/components/donation/donation-light-box-section";
import DonationASOPumSection from "@components/donation/donation-aso-pum-section";
import DonationBlog from "@/components/donation/donationBlog";
import "@css/donationpage.css";
import Image from "next/image";

export default function Donation() {
  return (
    <>
      <GeneralPageIllustration />
      <DonationLightBoxSection />
      <DonationASOPumSection />
      <DonationBlog />

    </>
  );
}

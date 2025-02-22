import Image from "next/image";
import Banner from "@/public/images/donation/banner.png";
import Background from "@/public/images/background.png";
import donationPageConfig from "@/configs/donationPageConfig";
export default function DonationPageIllustration() {
  return (
    <>
      <div
        className="pointer-events-none absolute top-0 -z-10 w-full"
        aria-hidden="true"
      >
        <Image
          className="w-full h-full object-cover object-center"
          src={Banner}
          alt="Banner"
        />
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-11 w-full -translate-x-1/2 "
        style={{ top: donationPageConfig.illustrationBottomPosition }}
        aria-hidden="true"
      >
        <Image
          className="w-full h-full object-cover"
          src={Background}
          alt="Background"
        />
      </div>

    </>
  );
}

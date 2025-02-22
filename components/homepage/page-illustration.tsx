import Image from "next/image";
import Background from "@/public/images/homepage/background.png";
import Banner from "@/public/images/homepage/banner.png";
import homePageConfig from "@/configs/homePageConfig";

export default function PageIllustration() {
  return (
    <>
      <div
        className="pointer-events-none absolute top-0 -z-10 w-full"
        aria-hidden="true"
        style={{ height: homePageConfig.illustrationTopPosition }}
      >
        <Image
          className="w-full h-full object-cover object-center"
          src={Banner}
          alt="Banner"
        />
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 w-full -translate-x-1/2 opacity-50"
        style={{ top: homePageConfig.illustrationBottomPosition }}
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

import Image from "next/image";
import Banner from "@/public/images/banner.png";
import Background from "@/public/images/background.png";
import GlobalPageConfig from "@/configs/globalConfig";
export default function GeneralPageIllustration() {
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
        style={{ top: GlobalPageConfig.illustrationBottomPosition }}
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

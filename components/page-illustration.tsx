import Image from "next/image";
import Background from "@/public/images/background.png";
import Banner from "@/public/images/banner.png";
import homePageConfig from "@/configs/homePageConfig";

export default function PageIllustration({
  multiple = true,
}: {
  multiple?: boolean;
}) {
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
          alt="Page illustration"
        />
      </div>

      {multiple && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 -z-10 w-full -translate-x-1/2 opacity-50"
            style={{ top: homePageConfig.illustrationBottomPosition }}
            aria-hidden="true"
          >
            <Image
              className="w-full h-full object-cover"
              src={Background}
              alt="Blurred shape"
            />
          </div>
        </>
      )}
    </>
  );
}

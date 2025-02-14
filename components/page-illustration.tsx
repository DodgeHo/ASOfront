import Image from "next/image";
import Background from "@/public/images/background.png";
import Banner from "@/public/images/banner.png";

export default function PageIllustration({
  multiple = true,
}: {
  multiple?: boolean;
}) {
  return (
    <>
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 w-full -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="w-full h-auto"
          src={Banner}
          alt="Page illustration"
        />
      </div>
      {multiple && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-[700px] -z-10 w-full -translate-x-1/2 opacity-50"
            aria-hidden="true"
          >
            <Image
              className="w-full h-auto"
              src={Background}
              alt="Blurred shape"
            />
          </div>

        </>
      )}
    </>
  );
}

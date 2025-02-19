import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import homePageConfig from "@/configs/homePageConfig";
import StorysCards from "@/components/storys-cards";

export default function Storys() {
  return (
    <section className="relative">
      <div
        className="centered-absolute-bottom -mb-20 -translate-x-1/3"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="why-choose-title">
              {homePageConfig.storysTitle}
            </div>
          </div>
          {/* Pricing table */}
          <StorysCards slides={homePageConfig.storySlides} />
          {/* Single testimonial */}
        </div>
      </div>
    </section>
  );
}

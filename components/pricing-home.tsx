import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import TestimonialImage from "@/public/images/large-testimonial-01.jpg";
import PricingTable from "@/components/pricing-table";

export default function PricingHome() {
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Simple Pricing
              </span>
            </div>
            <h2 className="animate-gradient-text pb-10 nacelle-text ">
              Pick the right plan for your business
            </h2>
          </div>
          {/* Pricing table */}
          <PricingTable />
          {/* Single testimonial */}

        </div>
      </div>
    </section>
  );
}

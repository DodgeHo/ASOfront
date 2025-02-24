import Image from "next/image";
import partnersConfig from "@/configs/partnersConfig";
import "@css/partner.css";

export default function PartnerComp() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 py-12 md:py-20 max-w-3xl text-center">
        <div className="animate-gradient-text pb-8 nacelle-text24">
          {partnersConfig.partnerTitle}
        </div>
        <div className="partner-container">
          {partnersConfig.partnersImg.map((partner, index) => {
            return (
              <div className="partner-icon-container" key={index}>
                <Image
                  src={partner.imageSrcPath}
                  alt={partner.title}
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

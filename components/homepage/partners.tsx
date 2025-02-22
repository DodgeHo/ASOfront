import Image from "next/image";
import homePageConfig from "@/configs/homePageConfig";

export default function Partners() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-gradient-text pb-8 nacelle-text24">
              {homePageConfig.partnerTitle}
            </div>
            <div className="partner-container">
              {homePageConfig.partnersImg.map((partner, index) => {
                return (
                  <div className="partner-icon-container"  key={index}>
                    <Image
                      src={partner.imageSrcPath}
                      alt={partner.title}
                      
                      fill
                      style={{
                        objectFit:"contain",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

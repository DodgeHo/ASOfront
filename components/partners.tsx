import Image from "next/image";
import homePageConfig from "@/configs/homePageConfig";
import type { StaticImageData } from "next/image";

export default function Partners() {
  const imageHeight = 30;
  const images: { [key: string]: StaticImageData } =
    homePageConfig.partnersImg.reduce<{ [key: string]: StaticImageData }>(
      (acc, card) => {
        const imagePath = card.imageSrcPath.split("/").pop();
        acc[card.imageSrcPath] =
          require(`../public/images/${imagePath}`).default;
        return acc;
      },
      {}
    );

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
                const image = images[partner.imageSrcPath];
                const aspectRatio = image.width / image.height;
                return (
                  <Image
                    key={index}
                    src={image}
                    alt={partner.title}
                    height={imageHeight}
                    width={imageHeight * aspectRatio}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

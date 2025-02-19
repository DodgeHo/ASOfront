import Image from "next/image";
import type { StaticImageData } from "next/image";
import homePageConfig from "@/configs/homePageConfig";

interface SaleModelItemProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  content: string;
}

function SaleModelItem({ imageSrc, imageAlt, title, content }: SaleModelItemProps) {
  return (
    <article className="sale-models-card">
      <div className="flex items-center mb-3" >
        <Image
          src={imageSrc}
          alt={imageAlt}
          style={{ width: "var(--sale-model-icon-size)", }}
        />
        <div className="sale-models-card-title ml-3 flex items-center">{title}</div>
      </div>
      <p className="sale-models-card-content">{content}</p>
    </article>
  );
}

export default function SaleModels() {
  const images: { [key: string]: StaticImageData } = homePageConfig.salesModelCards.reduce<{ [key: string]: StaticImageData }>(
    (acc, card) => {
      const imagePath = card.imageSrcPath.split("/").pop();
      acc[card.imageSrcPath] = require(`../public/images/${imagePath}`).default;
      return acc;
    },
    {}
  );

  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 md:pb-20">
        <div className="sale-models-container">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="animate-gradient-text nacelle-text24 ">
              {homePageConfig.saleModelsTitle}
            </div>
            <p className="third-title-description">
              {homePageConfig.saleModelsDescription}
            </p>
          </div>

          {/* Items */}
          <div className="mx-auto sale-models-grid">
            {homePageConfig.salesModelCards.map((card) => (
              <SaleModelItem
                key={card.title}
                imageSrc={images[card.imageSrcPath]}
                imageAlt={card.title}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

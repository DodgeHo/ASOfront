import Image from "next/image";
import type { StaticImageData } from "next/image";
import Spotlight from "@/components/spotlight";
import homePageConfig from "@/configs/homePageConfig";

const IMAGE_SIZE = 100;

interface PermissionCardProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  content: string;
}

export function PermissionCard({
  imageSrc,
  imageAlt,
  title,
  content,
}: PermissionCardProps) {
  return (
    <a className="group-card" href="#0">
      <div className="permission-card-container flex items-center">
        <div
          style={{
            position: "relative",
            height: `${IMAGE_SIZE}px`,
            width: `${IMAGE_SIZE}px`,
          }}
        >
          <Image
            className=""
            src={imageSrc}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            alt={imageAlt}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              transform: "translateX(0)",
            }}
          />
        </div>
        <div className="permission-card">
          <div className="permission-card-title ">{title}</div>
          <p className="permission-card-content">{content}</p>
        </div>
      </div>
    </a>
  );
}

export default function Permissionless() {
  const images: { [key: string]: StaticImageData } =
    homePageConfig.perimissionCards.reduce<{ [key: string]: StaticImageData }>(
      (acc, card) => {
        const imagePath = card.imageSrcPath.split("/").pop();
        acc[card.imageSrcPath] =
          require(`../public/images/${imagePath}`).default;
        return acc;
      },
      {}
    );

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 md:pb-20">
        <div className="mx-auto max-w-3xl pb-12 text-center ">
          <div className="animate-gradient-text pb-4 nacelle-text14 ">
            Permissionless and Partnered Sales for Every Need
          </div>
          <p className="third-title-description">
            ASO pum offers two flexible sale options, designed to fit the needs
            of both projects and their backers
          </p>
        </div>
        <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-3xl grid-cols-1">
          {homePageConfig.perimissionCards.map((card, index) => (
            <PermissionCard
              key={card.title}
              imageSrc={images[card.imageSrcPath]}
              title={card.title}
              imageAlt={card.title}
              content={card.content}
            />
          ))}
        </Spotlight>
      </div>
    </section>
  );
}

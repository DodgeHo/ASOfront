import { useMemo } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Spotlight from "@/components/spotlight";
import homePageConfig from "@/configs/homePageConfig";

const IMAGE_SIZE = 90;
const COLOR_BLUE_700 = "#0A77D8";
const COLOR_GREEN_600 = "#05BE9D";

interface WhyChooseCardProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  content: string;
  backgroundColor: string;
}

export function WhyChooseCard({
  imageSrc,
  imageAlt,
  title,
  content,
  backgroundColor,
}: WhyChooseCardProps) {
  return (
    <a className="group-card" href="#0">
      <div className="flex items-center">
        <div
          style={{
            position: "relative",
            height: `${IMAGE_SIZE}px`,
            width: `${IMAGE_SIZE}px`,
            overflow: "hidden",
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
              bottom: "0",
              left: "0",
              transform: "translateX(0)",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="why-choose-card" style={{ height: `${IMAGE_SIZE}px` }}>
            <div
            className="why-choose-card-title"
            style={{
              background: backgroundColor,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            >
            {title}
            </div>
          <p className="why-choose-card-content">{content}</p>
        </div>
      </div>
    </a>
  );
}

function interpolateColor(color1: string, color2: string, factor: number) {
  const colorCode = color1
    .slice(1)
    .match(/.{2}/g)!
    .map((hex, index) => {
      const value1 = parseInt(hex, 16);
      const value2 = parseInt(color2.slice(1).match(/.{2}/g)![index], 16);
      const value = Math.round(value1 + (value2 - value1) * factor);
      return value.toString(16).padStart(2, "0");
    });
  return `#${colorCode.join("")}`;
}

export default function WhyChooseless() {
  const images: { [key: string]: StaticImageData } =
    homePageConfig.whyChooseCards.reduce<{ [key: string]: StaticImageData }>(
      (acc, card) => {
        const imagePath = card.imageSrcPath.split("/").pop();
        acc[card.imageSrcPath] =
          require(`../public/images/${imagePath}`).default;
        return acc;
      },
      {}
    );

  const cards = homePageConfig.whyChooseCards.map((card, index) => {
    const factor = index / (homePageConfig.whyChooseCards.length - 1);
    const backgroundColor = interpolateColor(
      COLOR_BLUE_700,
      COLOR_GREEN_600,
      factor
    );
    return { ...card, backgroundColor };
  });

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        <div className="mx-auto max-w-3xl py-12 text-center ">
          <div className="why-choose-title" style={{ fontSize: "2.25rem" }}>
            Why Choose ASO
          </div>
        </div>
        <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-3xl grid-cols-1">
          {cards.map((card, index) => (
            <WhyChooseCard
              key={card.title}
              imageSrc={images[card.imageSrcPath]}
              title={card.title}
              imageAlt={card.title}
              content={card.content}
              backgroundColor={card.backgroundColor}
            />
          ))}
        </Spotlight>
      </div>
    </section>
  );
}

import { useMemo } from "react";
import Image from "next/image";
import Spotlight from "@/components/spotlight";
import homePageConfig from "@/configs/homePageConfig";

const COLOR_BLUE_700 = "#0A77D8";
const COLOR_GREEN_600 = "#05BE9D";

interface WhyChooseCardProps {
  imageSrc: string;
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
      <div className="flex ">
        <div
          style={{
            position: "relative",
            height: "var(--why-choose-icon-size)",
            width: "var(--why-choose-icon-size)",
            overflow: "hidden",
            top: "0",
          }}
        >
          <Image
            className=""
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="why-choose-card">
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
          <div className="why-choose-title">
            {homePageConfig.whyChooseTitle}
          </div>
        </div>
        <Spotlight className="group mx-auto grid max-w-sm items-start gap-8 md:gap-6 sm:max-w-3xl grid-cols-1">
          {cards.map((card, index) => (
            <WhyChooseCard
              key={card.title}
              imageSrc={card.imageSrcPath}
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

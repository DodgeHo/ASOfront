import Image from "next/image";
import type { StaticImageData } from "next/image";
import Spotlight from "@/components/spotlight";
import homePageConfig from "@/configs/homePageConfig";
import CirclePlate from "@/public/images/providing-circle-plate.png";

interface ProvidingCardProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  content: string;
  hashSeed: number; // 添加 hashSeed 参数
}

export function ProvidingCard({
  imageSrc,
  imageAlt,
  title,
  content,
  hashSeed,
}: ProvidingCardProps) {
  // 根据 hashSeed 生成一个哈希值来设置背景渐变方向——使用黄金角度生成器
  const angle = (hashSeed * 137.5) % 360;

  return (
    <a className="group-card" href="#0">
      <div
        className="providing-container"
        style={{ background: `linear-gradient(${angle}deg, #06D678, #3E65EF)` }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            height: "var(--providing-icon-height)",
            overflow: "visible",
          }}
        >
          <Image
            className=""
            src={imageSrc}
            alt={imageAlt}
            style={{
              position: "absolute",
              top: "calc(-0.75 * var(--providing-icon-height))",
              left: "50%",
              transform: "translateX(-50%)",
              height: "calc(var(--providing-icon-height) * 2)",
              width: "calc(var(--providing-icon-height) * 2)",
            }}
          />
        </div>
        {/* Content */}
        <div className="providing-card">
          <div className="providing-card-title">{title}</div>
          <p className="providing-card-content">{content}</p>
        </div>
      </div>
    </a>
  );
}

export default function Providing() {
  const images: { [key: string]: StaticImageData } =
    homePageConfig.providingCards.reduce<{ [key: string]: StaticImageData }>(
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <div className="animate-gradient-text pb-4 nacelle-text24 ">
            {homePageConfig.providingTitle}
          </div>
        </div>
        {/* Spotlight items */}
        <Spotlight className="spotlight-container">
          {homePageConfig.providingCards.map((card, index) => (
            <ProvidingCard
              key={card.title}
              imageSrc={images[card.imageSrcPath]}
              title={card.title}
              imageAlt={card.title}
              content={card.content}
              hashSeed={index}
            />
          ))}
        </Spotlight>
      </div>
      {/* Circle plate */}
      <div
        className="pointer-events-none w-full  -z-10 opacity-80"
        aria-hidden="true"
      >
        <Image
          className="w-full h-full object-cover"
          src={CirclePlate}
          alt="CirclePlate"
        />
      </div>
    </section>
  );
}

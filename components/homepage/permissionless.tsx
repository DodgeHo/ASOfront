import Image from "next/image";
import Spotlight from "@/components/spotlight";
import homePageConfig from "@/configs/homePageConfig";

interface PermissionCardProps {
  imageSrc: string;
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
            height: "var(--permission-icon-size)",
            width: "var(--permission-icon-size)",
          }}
        >
          <Image
            className="permission-icon"
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{
              objectFit: "contain",
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
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 md:pb-20">
        <div className="mx-auto max-w-3xl pb-12 text-center ">
          <div className="animate-gradient-text pb-4 nacelle-text24 ">
            {homePageConfig.permissionlessTitle}
          </div>
          <p className="third-title-description">
            {homePageConfig.permissionlessDescription}
          </p>
        </div>
        <Spotlight className="group mx-auto grid items-start gap-6 max-w-3xl grid-cols-1">
          {homePageConfig.perimissionCards.map((card, index) => (
            <PermissionCard
              key={card.title}
              imageSrc={card.imageSrcPath}
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

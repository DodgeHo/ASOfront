import homePageConfig from "@/configs/homePageConfig";
import Image from "next/image";
import Coins from "@/public/images/coins.png";
import LightBox from "@/public/images/light-box.png";

export default function LightBoxSection() {
  return (
    <>
      <div className="lightbox-content">
        <div
          className="pointer-events-none absolute w-full left-1/2 -z-10 -translate-x-1/2 opacity-80"
          style={{
            top: homePageConfig.illustrationLightPosition,
            height: '450px',
          }}
          aria-hidden="true"
        >
          <Image
            className="w-full h-full object-cover"
            src={LightBox}
            alt="LightBox"
          />
        </div>

        <div
          className="lightbox-figure"
          data-aos="fade-up"
          data-aos-delay={1200}
          style={{
            display: "flex",
            justifyContent: "space-between",
            WebkitBackgroundClip: "text",
            fontSize: homePageConfig.heroTitleFontSize,
            fontWeight: homePageConfig.heroTitleFontWeight,
            marginBottom: homePageConfig.heroTitleMarginBottom,
          }}
        >
          <div className="third-width-center">100K<sup>+</sup></div>
          <div className="third-width-center">$3<sub>B</sub><sup>+</sup></div>
          <div className="third-width-center">$1.5<sub>B</sub><sup>+</sup></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: homePageConfig.heroThirdTextColor,
            fontSize: homePageConfig.heroThirdFontSize,
            marginBottom: homePageConfig.heroThirdTextMarginBottom,
            fontWeight: homePageConfig.heroThirdTextFontWeight,
            lineHeight: homePageConfig.heroThirdTextLineHeight,
            transform: "translateX(-10px)",
          }}
        >
          <div className="third-width-center">Total Participants</div>
          <div className="third-width-center">Funds Raised</div>
          <div className="third-width-center">Volume Traded</div>
        </div>
        <Image
          className="h-auto mt-25"
          src={Coins}
          alt="Coins"
          style={{ maxWidth: "800px", width: "100%" }}
        />
      </div>
    </>
  );
}

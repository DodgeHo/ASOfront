import homePageConfig from "@/configs/homePageConfig";
import Image from "next/image";
import Coins from "@/public/images/homepage/coins.png";
import LightBox from "@/public/images/homepage/light-box.png";

export default function LightBoxSection() {
  return (
    <>
      <div className="lightbox-content">
        <div
          className="pointer-events-none absolute w-full left-1/2 -z-10 -translate-x-1/2 opacity-80 h-[350px] lg:h-[450px] sm:h-[350px] "
          style={{
            top: homePageConfig.illustrationLightPosition,
          }}
          aria-hidden="true"
        >
          <Image
            className="w-full h-full object-cover"
            src={LightBox}
            alt="LightBox"
          />
        </div>

        <div className="lightbox-figure">
          <div className="third-width-center">
            {homePageConfig.lightBoxStats.participants}
            <sup>+</sup>
          </div>
          <div className="third-width-center">
            {homePageConfig.lightBoxStats.fundsRaised}
            <sub>B</sub>
            <sup>+</sup>
          </div>
          <div className="third-width-center">
            {homePageConfig.lightBoxStats.volumeTraded}
            <sub>B</sub>
            <sup>+</sup>
          </div>
        </div>
        <div className="lightbox-stats">
          <div className="third-width-center">
            {homePageConfig.lightBoxStats.labels.participants}
          </div>
          <div className="third-width-center">
            {homePageConfig.lightBoxStats.labels.fundsRaised}
          </div>
          <div className="third-width-center">
            {homePageConfig.lightBoxStats.labels.volumeTraded}
          </div>
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

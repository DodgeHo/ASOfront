import homePageConfig from "@/configs/homePageConfig";
import Image from "next/image";
import Coins from "@/public/images/coins.png";
import LightBox from "@/public/images/light-box.png";

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
            100K<sup>+</sup>
          </div>
          <div className="third-width-center">
            $3<sub>B</sub>
            <sup>+</sup>
          </div>
          <div className="third-width-center">
            $1.5<sub>B</sub>
            <sup>+</sup>
          </div>
        </div>
        <div className="lightbox-stats">
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

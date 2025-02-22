import donationPageConfig from "@/configs/donationPageConfig";
import Image from "next/image";
import LightBox from "@/public/images/light-box.png";
import "@css/lightbox.css";

const OrangeToRedTextStyle = {
  background: "var(--color-gradient-orange-to-red)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

export default function DonationLightBoxSection() {
  return (
    <>
      <div
        className="lightbox-content"
        style={{
          marginTop: donationPageConfig.illustrationLightPosition,
        }}
      >
        <div
          className="pointer-events-none absolute w-full left-1/2 -z-10 -translate-x-1/2 opacity-80 h-[350px] lg:h-[450px] sm:h-[350px] "
          aria-hidden="true"
        >
          <Image
            className="w-full h-full object-cover"
            src={LightBox}
            alt="LightBox"
          />
        </div>

        <div className="lightbox-figure mt-10">
          <div className="third-width-center" style={OrangeToRedTextStyle}>
            {donationPageConfig.lightBoxStats.populationInCommunity}
            <sup style={OrangeToRedTextStyle}>+</sup>
          </div>
          <div className="third-width-center">
            {donationPageConfig.lightBoxStats.dealAmountToday}
            <sup>+</sup>
          </div>
          <div className="third-width-center" style={OrangeToRedTextStyle}>
            {donationPageConfig.lightBoxStats.marketValueToday}
            <sup style={OrangeToRedTextStyle}>+</sup>
          </div>
        </div>
        <div className="lightbox-stats">
          <div className="third-width-center">
            {donationPageConfig.lightBoxStats.labels.populationInCommunity}
          </div>
          <div className="third-width-center">
            {donationPageConfig.lightBoxStats.labels.dealAmountToday}
          </div>
          <div className="third-width-center">
            {donationPageConfig.lightBoxStats.labels.marketValueToday}
          </div>
        </div>
      </div>
    </>
  );
}

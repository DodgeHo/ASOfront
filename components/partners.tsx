import Image from "next/image";
import partnerLogo1 from "../public/images/partners_logo1.png";
import partnerLogo2 from "../public/images/partners_logo2.png";
import partnerLogo3 from "../public/images/partners_logo3.png";
import partnerLogo4 from "../public/images/partners_logo4.png";
import partnerLogo5 from "../public/images/partners_logo5.png";

export default function Partners() {
  const imageHeight = 30;

  return (
    <section className="relative overflow-hidden">
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="animate-gradient-text pb-8 nacelle-text "
              data-aos="fade-up"
            >
              Our Partners & Backers
            </div>
            <div className="gradient-container flex justify-center space-x-4 padding-10">
              <Image src={partnerLogo1} alt="Partner 1" height={imageHeight} width={imageHeight * (partnerLogo1.width / partnerLogo1.height)} />
              <Image src={partnerLogo2} alt="Partner 2" height={imageHeight} width={imageHeight * (partnerLogo2.width / partnerLogo2.height)} />
              <Image src={partnerLogo3} alt="Partner 3" height={imageHeight} width={imageHeight * (partnerLogo3.width / partnerLogo3.height)} />
              <Image src={partnerLogo4} alt="Partner 4" height={imageHeight} width={imageHeight * (partnerLogo4.width / partnerLogo4.height)} />
              <Image src={partnerLogo5} alt="Partner 5" height={imageHeight} width={imageHeight * (partnerLogo5.width / partnerLogo5.height)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

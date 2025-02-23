import donationPageConfig from "@/configs/donationPageConfig";
import Image from "next/image";
import LogoMedium from "@/public/images/donation/logo-medium.png";
import ASOPumBlock from "@/public/images/donation/aso-pum-block.png";
import "@/app/css/donationpage.css";

export default function DonationASOPumSection() {
  return (
    <>
      <div className="aso-pum-container">
        <div
          style={{
            position: "relative",
            height: "var(--aso-pum-icon-size)",
            width: "var(--aso-pum-icon-size)",
          }}
        >
          <Image
            className="aso-pum-icon"
            src={LogoMedium}
            alt="ASO logo"
            fill
          />
        </div>
        <div className="aso-pum-card">
          <div className="aso-pum-label">
            {" "}
            {donationPageConfig.ASOPumLabel}{" "}
          </div>
          <div className="aso-pum-table-container">
            <table className="aso-pum-card-table aso-pum-table-title">
              <tbody>
                <tr>
                  <td className="aso-pum-card-title">
                    {donationPageConfig.ASOPumTitle}
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="aso-pum-card-table aso-pum-table-parameters">
              <tbody>
                <tr>
                  {donationPageConfig.ASOPumParameter.map((param, index) => (
                    <td key={index} className="aso-pum-option">
                      {param.option}
                    </td>
                  ))}
                </tr>
                <tr>
                  {donationPageConfig.ASOPumParameter.map((param, index) => (
                    <td key={index} className="aso-pum-value">
                      {param.value}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="aso-pum-card-content">
            {donationPageConfig.ASOPumDescription}
          </p>
        </div>
      </div>
      <div className="aso-pum-container">
        <div
          className="pointer-events-none -z-10 w-full relative"
          aria-hidden="true"
        >
          <Image
            className="w-full h-full object-cover object-center"
            src={ASOPumBlock}
            alt="ASO Pum Block"
          />
          <div className="aso-pum-block-centered-text">
            <p>{donationPageConfig.ASOPumTitle}</p>
            <p className ="aso-pum-block-centered-title">{donationPageConfig.ASOPumMainFigure}</p>
            <p>{donationPageConfig.ASOPumSecondFigure}</p>
          </div>
        </div>
      </div>
    </>
  );
}

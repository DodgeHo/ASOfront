import { Card } from "./typesConfig";

type Config = {
  partnerTitle: string;
  partnersImg: Card[];
};

const partnersConfig: Config = {
  partnerTitle: "Our Partners & Backers",
  partnersImg: [
    {
      imageSrcPath: "images/homepage/partners_logo1.png",
      title: "Partner 1",
      content: "",
    },
    {
      imageSrcPath: "/images/homepage/partners_logo2.png",
      title: "Partner 2",
      content: "",
    },
    {
      imageSrcPath: "/images/homepage/partners_logo3.png",
      title: "Partner 3",
      content: "",
    },
    {
      imageSrcPath: "/images/homepage/partners_logo4.png",
      title: "Partner 4",
      content: "",
    },
    {
      imageSrcPath: "/images/homepage/partners_logo5.png",
      title: "Partner 5",
      content: "",
    },
  ],
};

export default partnersConfig;

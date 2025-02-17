type Config = {
  // Hero Section
  heroUpperButtonMarginTop: string;
  heroUpperButtonText: string;
  heroUpperButtonMarginBottom: string;

  heroTitle: string;
  heroTitleMarginBottom: string;

  heroSecondText: string;
  heroSecondTextMarginBottom: string;
  heroSecondTextLineHeight: string;

  heroThirdText: string;
  heroThirdTextMarginBottom: string;
  heroThirdTextLineHeight: string;

  heroLowerButtonText: string;

  illustrationTopPosition: string;
  illustrationLightPosition: string;
  illustrationBottomPosition: string;

  providingCards: {
    imageSrcPath: string;
    title: string;
    content: string;
  }[];
  perimissionCards: {
    imageSrcPath: string;
    title: string;
    content: string;
  }[];
  salesModelCards: {
    imageSrcPath: string;
    title: string;
    content: string;
  }[];
  whyChooseCards: {
    imageSrcPath: string;
    title: string;
    content: string;
  }[];
};

/* 全局的主题属性包括颜色，请在文件ASOfront/app/css/style.css中的:root编辑*/

const homePageConfig: Config = {
  // Hero Section
  heroUpperButtonMarginTop: "5rem",
  heroUpperButtonText: "项目白皮书",
  heroUpperButtonMarginBottom: "1rem",

  heroTitle: "Discovery starts here",
  heroTitleMarginBottom: "2rem",

  heroSecondText:
    "Empowering Capital Formation \n through Transparent Token Sales",
  heroSecondTextMarginBottom: "2.25rem",
  heroSecondTextLineHeight: "1.5",

  heroThirdText:
    "Whether you're a project seeking early-stage funding or a participant eager to back the next big idea, Aso connects you, offering transparent tools for capital formation and discovering new communities.",
  heroThirdTextMarginBottom: "4rem",
  heroThirdTextLineHeight: "2",

  heroLowerButtonText: "Explore Sales",

  illustrationTopPosition: "800px",
  illustrationLightPosition: "800px",
  illustrationBottomPosition: "1200px",

  providingCards: [
    {
      imageSrcPath: "/public/images/providing-seed.png",
      title: "Seed Round",
      content:
        "For early-stage projects with longer vesting schedules, ideal for backers supporting emerging ideas.",
    },
    {
      imageSrcPath: "/public/images/providing-key.png",
      title: "Private Sale",
      content:
        "Suited for established projects with shorter vesting schedules offering early access for backers.",
    },
    {
      imageSrcPath: "/public/images/providing-community.png",
      title: "Public Sale",
      content:
        "Open to the community near TGE, providing broad exposure and participation opportunities before official release.",
    },
  ],

  perimissionCards: [
    {
      imageSrcPath: "/public/images/permission-community.png",
      title: "Community Sales",
      content:
        "Permissionless sales where any project can launch, Driven by community upvoting, these sales are open to a wide range of innovative projects seeking support.",
    },
    {
      imageSrcPath: "/public/images/permission-partner.png",
      title: "Partner Sales",
      content:
        "Supported by Fjord or trusted third-party launch partners, these sales are backed by recognized entities and individuals within the web3 community.",
    },
  ],

  salesModelCards: [
    {
      imageSrcPath: "/public/images/sales-lbp.png",
      title: "LBP Sales",
      content:
        "Liquidity Bootstrapping Pools (LBP) is a dynamic pricing model that allows market forces to determine the token price, ideal for projects seeking to discover their true market value.",
    },
    {
      imageSrcPath: "/public/images/sales-fixed.png",
      title: "Fixed Price Sales",
      content:
        "Supported by Fjord or trusted third-party launch partners, these sales are backed by recognized entities and individuals within the web3 community.",
    },
    {
      imageSrcPath: "/public/images/sales-tiered.png",
      title: "Tiered Sales",
      content:
        "A dynamic pricing model that allows market forces to determine the token price, ideal for projects seeking to discover their true market value.",
    },
    {
      imageSrcPath: "/public/images/sales-overflow.png",
      title: "Overflow Sales",
      content:
        "A simple, straightforward sale model with a set price per token, perfect for projects that prefer price certainty. Coming soon.",
    },
  ],

  whyChooseCards: [
    {
      imageSrcPath: "/public/images/why-choose-arrow.png",
      title: "Revolutionizing On-Chain Funding",
      content:
        "ASO delivers groundbreaking on-chain funding models that give projects and backers unprecedented transparency and control. From launch to growth, every step is streamlined.",
    },
    {
      imageSrcPath: "/public/images/why-choose-community.png",
      title: "Empowering Direct Community Connections",
      content:
        "ASO enables projects to bypass traditional funding, connecting directly with backers for faster growth.Backers gain early access to innovative projects, fostering a shared journey from day one.",
    },
    {
      imageSrcPath: "/public/images/why-choose-company.png",
      title: " A Trusted Name in Token Sales",
      content:
        "With a successful history of launching projects and raising capital, AsO is a trusted name in the world of token sales",
    },
  ],


};

export default homePageConfig;

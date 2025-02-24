import { Slide, Card } from './typesConfig';

type Config = {
  // Hero Section
  heroUpperButtonText: string;
  heroTitle: string;
  heroSecondText: string;
  heroThirdText: string;
  heroLowerButtonText: string;
  // Background illustration
  illustrationTopPosition: string;
  illustrationLightPosition: string;
  illustrationBottomPosition: string;
  // LightBox Stats
  lightBoxStats: {
    participants: string;
    fundsRaised: string;
    volumeTraded: string;
    labels: {
      participants: string;
      fundsRaised: string;
      volumeTraded: string;
    };
  };
  // Permissionless section
  permissionlessTitle: string;
  permissionlessDescription: string;
  perimissionCards: Card[];
  // Sales model section
  saleModelsTitle: string;
  saleModelsDescription: string;
  salesModelCards: Card[];
  // Providing section
  providingTitle: string;
  providingCards: Card[];
  // Why Choose section
  whyChooseTitle: string;
  whyChooseCards: Card[];
  // Storys section
  storysTitle: string;
  storySlides: Slide[];
};

/* 全局的主题属性包括颜色，请在文件ASOfront/app/css/style.css中的:root编辑*/

const homePageConfig: Config = {
  // Hero Section
  heroUpperButtonText: "项目白皮书",
  heroTitle: "Discovery starts here",
  heroSecondText:
    "Empowering Capital Formation \n through Transparent Token Sales",
  heroThirdText:
    "Whether you're a project seeking early-stage funding or a participant eager to back the next big idea, Aso connects you, offering transparent tools for capital formation and discovering new communities.",
  heroLowerButtonText: "Explore Sales",
  // Background illustration
  illustrationTopPosition: "800px",
  illustrationLightPosition: "800px",
  illustrationBottomPosition: "1200px",
  // lightBox Stats
  lightBoxStats: {
    participants: "100K",
    fundsRaised: "$3",
    volumeTraded: "$1.5",
    labels: {
      participants: "Total Participants",
      fundsRaised: "Funds Raised",
      volumeTraded: "Volume Traded",
    },
  },
  // Permissionless section
  permissionlessTitle: "Permissionless and Partnered Sales for Every Need",
  permissionlessDescription:
    "ASO pum offers two flexible sale options, designed to fit the needs of both projects and their backers",
  perimissionCards: [
    {
      imageSrcPath: "images/homepage/permission-community.png",
      title: "Community Sales",
      content:
        "Permissionless sales where any project can launch, Driven by community upvoting, these sales are open to a wide range of innovative projects seeking support.",
    },
    {
      imageSrcPath: "images/homepage/permission-partner.png",
      title: "Partner Sales",
      content:
        "Supported by Fjord or trusted third-party launch partners, these sales are backed by recognized entities and individuals within the web3 community.",
    },
  ],

  // Sales model section
  saleModelsTitle: "Token Sale Models",
  saleModelsDescription: "Multiple Token Sale Models to Choose From",
  salesModelCards: [
    {
      imageSrcPath: "images/homepage/sales-lbp.png",
      title: "LBP Sales",
      content:
        "Liquidity Bootstrapping Pools (LBP) is a dynamic pricing model that allows market forces to determine the token price, ideal for projects seeking to discover their true market value.",
    },
    {
      imageSrcPath: "images/homepage/sales-fixed.png",
      title: "Fixed Price Sales",
      content:
        "Supported by Fjord or trusted third-party launch partners, these sales are backed by recognized entities and individuals within the web3 community.",
    },
    {
      imageSrcPath: "images/homepage/sales-tiered.png",
      title: "Tiered Sales",
      content:
        "A dynamic pricing model that allows market forces to determine the token price, ideal for projects seeking to discover their true market value.",
    },
    {
      imageSrcPath: "images/homepage/sales-overflow.png",
      title: "Overflow Sales",
      content:
        "A simple, straightforward sale model with a set price per token, perfect for projects that prefer price certainty. Coming soon.",
    },
  ],

  // Providing section
  providingTitle: "Providing Opportunities at Every Stage",
  providingCards: [
    {
      imageSrcPath: "images/homepage/providing-seed.png",
      title: "Seed Round",
      content:
        "For early-stage projects with longer vesting schedules, ideal for backers supporting emerging ideas.",
    },
    {
      imageSrcPath: "images/homepage/providing-key.png",
      title: "Private Sale",
      content:
        "Suited for established projects with shorter vesting schedules offering early access for backers.",
    },
    {
      imageSrcPath: "images/homepage/providing-community.png",
      title: "Public Sale",
      content:
        "Open to the community near TGE, providing broad exposure and participation opportunities before official release.",
    },
  ],

  // Why Choose section
  whyChooseTitle: "Why Choose ASO",
  whyChooseCards: [
    {
      imageSrcPath: "images/homepage/why-choose-arrow.png",
      title: "Revolutionizing On-Chain Funding",
      content:
        "ASO delivers groundbreaking on-chain funding models that give projects and backers unprecedented transparency and control. From launch to growth, every step is streamlined.",
    },
    {
      imageSrcPath: "images/homepage/why-choose-community.png",
      title: "Empowering Direct Community Connections",
      content:
        "ASO enables projects to bypass traditional funding, connecting directly with backers for faster growth.Backers gain early access to innovative projects, fostering a shared journey from day one.",
    },
    {
      imageSrcPath: "images/homepage/why-choose-company.png",
      title: " A Trusted Name in Token Sales",
      content:
        "With a successful history of launching projects and raising capital, AsO is a trusted name in the world of token sales",
    },
  ],

  // Storys section
  storysTitle: "Previous Success Stories",
  storySlides: [
    {
      imageSrcPath: "images/homepage/Autonolas.png",
      title: "Autonolas 1",
      description: "Description for slide 1",
      href: "#0",
      fundsRaised: "$541k",
      percentSold: "99%",
      currentFDVMC: "$1.21bn",
    },
    {
      imageSrcPath: "images/homepage/Autonolas.png",
      title: "Autonolas 2",
      description: "Description for slide 2",
      href: "#0",
      fundsRaised: "$542k",
      percentSold: "99%",
      currentFDVMC: "$1.22bn",
    },
    {
      imageSrcPath: "images/homepage/Autonolas.png",
      title: "Autonolas 3",
      description:
        "OLAS coordinates the cutting-edge Autonolas network, a unified network of off-chain services-like automation,oracles,and co-owned A1.",
      href: "#0",
      fundsRaised: "$543k",
      percentSold: "99%",
      currentFDVMC: "$1.23bn",
    },
    {
      imageSrcPath: "images/homepage/Autonolas.png",
      title: "Slide 4",
      description: "Description for slide 4",
      href: "#0",
      fundsRaised: "$544k",
      percentSold: "99%",
      currentFDVMC: "$1.24bn",
    },
    {
      imageSrcPath: "images/homepage/Autonolas.png",
      title: "Slide 5",
      description: "Description for slide 5",
      href: "#0",
      fundsRaised: "$545k",
      percentSold: "99%",
      currentFDVMC: "$1.25bn",
    },
    {
      imageSrcPath: "images/homepage/Autonolas.png",
      title: "Slide 6",
      description: "Description for slide 6",
      href: "#0",
      fundsRaised: "$546k",
      percentSold: "99%",
      currentFDVMC: "$1.26bn",
    },
  ],

  
};

export default homePageConfig;

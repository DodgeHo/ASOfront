type Config = {
  //lightBox Section
  illustrationLightPosition: string;
  lightBoxStats: {
    populationInCommunity: string;
    dealAmountToday: string;
    marketValueToday: string;
    labels: {
      populationInCommunity: string;
      dealAmountToday: string;
      marketValueToday: string;
    };
  };
  //ASO Pum section
  ASOPumTitle: string;
  ASOPumLabel: string;
  ASOPumParameter: { option: string; value: string }[];
  ASOPumDescription: string;
  ASOPumMainFigure: string;
  ASOPumSecondFigure: string;
  // Blog sections
  blogSections: {
    label: string;
    filePath: string;
  }[];
};

const donationPageConfig: Config = {
  // lightBox Section
  illustrationLightPosition: "150px",
  lightBoxStats: {
    populationInCommunity: "1999",
    dealAmountToday: "1235",
    marketValueToday: "$8W",
    labels: {
      populationInCommunity: "社区跟随人数",
      dealAmountToday: "今日成交数量",
      marketValueToday: "今日市值",
    },
  },
  // ASO Pum section
  ASOPumTitle: "ASO pum",
  ASOPumLabel: "$ASO",
  ASOPumParameter: [
    { option: "Token Sale Type", value: "None" },
    { option: "Fixed Price", value: "Launch Partner" },
    { option: "Network Chain", value: "Nova Research" },
    { option: "Ethereum", value: "Round Type" },
    { option: "Token Vesting", value: "Public" },
  ],
  ASOPumDescription:
    "ASO is building a data-centric, modular and scalable infrastructure for agents, models and datasets, supercharging Al at scale.",
  ASOPumMainFigure: "11.051,023 ASO",
  ASOPumSecondFigure: " $8,203,274          +11.05%",
  // Blog sections
  blogSections: [
    { label: "About", filePath: "/content/donation/about.mdx" },
    { label: "Transparency", filePath: "/content/donation/transparency.mdx" },
    { label: "Sale Trades", filePath: "/content/donation/sale-trades.mdx" },
    { label: "Sale Info", filePath: "/content/donation/sale-info.mdx" },
  ],
};

export default donationPageConfig;

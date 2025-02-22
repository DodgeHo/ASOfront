type Config = {
    illustrationLightPosition: string;  
    illustrationBottomPosition: string;
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
};

const donationPageConfig: Config = {
  // lightBox Stats
  illustrationLightPosition:"150px",
  illustrationBottomPosition:"180px",
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
};

export default donationPageConfig;

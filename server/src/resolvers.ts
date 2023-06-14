require("dotenv").config();
const coinMarketUrl = process.env.COIN_MARKET_URL;
const coinListUrl = process.env.API_URL;

const resolvers = {
    Query: {
      coins: async () => {
        const response = await fetch(coinListUrl);
        const data = await response.json();
        return data.data;
      },
      coinMarket: async (_, { coinId }) => {
        const marketDataApiUrl = coinMarketUrl.replace(
          "${COIN_ID}",
          String(coinId)
        );
        const response = await fetch(
         marketDataApiUrl
        );
        const data = await response.json();
        return data[0];
      },
    },
  };

  export default resolvers
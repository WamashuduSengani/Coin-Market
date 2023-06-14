const resolvers = {
    Query: {
      coins: async () => {
        const response = await fetch('https://api.coinlore.net/api/tickers/');
        const data = await response.json();
        return data.data;
      },
      coinMarket: async (_, { coinId }) => {
        const response = await fetch(
          `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
        );
        const data = await response.json();
        return data[0];
      },
    },
  };

  export default resolvers
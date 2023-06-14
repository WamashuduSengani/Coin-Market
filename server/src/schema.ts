const { gql } = require("apollo-server");

const typeDefs = gql`
  type Coin {
    id: String!
    name: String!
    symbol: String!
    rank: Int!
  }

  type CoinMarket {
    name: String!
    symbol: String!
    priceUsd: Float!
    volume24: Float!
    marketCapUsd: Float!
  }

  type Query {
    coins: [Coin!]!
    coinMarket(coinId: String!): CoinMarket!
  }
`;

export default typeDefs;

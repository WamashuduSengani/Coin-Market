import { gql } from '@apollo/client';

export const GET_COIN_MARKET = gql`
  query GetCoinMarket($coinId: String!) {
    coinMarket(coinId: $coinId) {
      name
      symbol
      priceUsd
      volume24
      marketCapUsd
    }
  }
`;
import { gql } from '@apollo/client';

export const GET_ALL_COINS = gql`
  query {
    coins {
      id
      name
      symbol
      rank
    }
  }
`;

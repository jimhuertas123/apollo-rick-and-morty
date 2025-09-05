import { gql } from '@apollo/client';

export const GET_CHARACTER_BY_ID = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      gender
      origin {
        name
      }
      location {
        name
      }
      episode(first: 5)
    }
  }
`;

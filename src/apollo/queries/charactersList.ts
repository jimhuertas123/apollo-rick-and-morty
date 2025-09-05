import { gql } from '@apollo/client';

export const GET_CHARACTERS_LIST = gql`
  query Characters($page: Int = 1) {
    characters(page: $page) {
      info {
        next
        prev
      }
      results {
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
        episode {
          id
          name
          episode
        }
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
      water {
        cups
        createdAt
      }
      outside {
        minutes
        createdAt
      }
      sleep {
        hours
        createdAt
      }
      intention {
        intention
        createdAt
      }
      gratitude {
        gratitude
        createdAt
      }
      picture {
        picture
        createdAt
      }
      mood {
        mood
        createdAt
      }
    }
  }
`;
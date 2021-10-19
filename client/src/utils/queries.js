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
        minutesOutside
        createdAt
      }
      sleep {
        hoursSlept
        createdAt
      }
      intention {
        intentionText
        createdAt
      }
      gratitude {
        gratitudeText
        createdAt
      }
      picture {
        picture
        createdAt
      }
      mood {
        moodRanking
        createdAt
      }
      social {
        minutesEngaged
        createdAt
      }
    }
  }
`;
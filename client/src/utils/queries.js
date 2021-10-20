import { gql } from '@apollo/client';

export const QUERY_WATER = gql`
  query getWater($createdAt: Date!) {
    water(createdAt: $createdAt) {
      _id
      cups
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
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

// perhaps we only need QUERY_ME but we can keep?
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
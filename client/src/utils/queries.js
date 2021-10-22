import { gql } from '@apollo/client';

export const QUERY_WATER = gql`
query me {
  me {
    water {
     createdAt
     cups
    }
  }
 }
`;

export const QUERY_SLEEP = gql`
query me {
  me {
    sleep {
     createdAt
     hoursSlept
    }
  }
 }
`;

export const QUERY_INTENTION = gql`
query me {
  me {
    sleep {
     createdAt
     intentionText
    }
  }
 }
`;


export const QUERY_SOCIAL = gql`
query me {
  me {
    social {
     createdAt
     minutesEngaged
    }
  }
 }
`;

export const QUERY_OUTSIDE = gql`
query me {
  me {
    outside {
     createdAt
     minutesOutside
    }
  }
 }
`;

export const QUERY_MOOD = gql`
query userone ($name:String!){
  userone (name:$name){
    mood {
     createdAt
     moodRanking
    }
  }
 }
`;



// query getWater($createdAt: Date!) {
//   water(createdAt: $createdAt) {
//     _id
//     cups
//   }
// }


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

export const QUERY_USERONE = gql`
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
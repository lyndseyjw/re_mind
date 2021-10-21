import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        password
      }
    }
  }
`;

export const ADD_SLEEP = gql`
  mutation addSleep(
    $hoursSlept: Int!
  ) {
    addSleep(
      hoursSlept: $hoursSlept
    ) {
      _id
      hoursSlept
      createdAt
    }
  }
`;

export const ADD_INTENTION = gql`
  mutation addIntention(
    $userId: ID!
    $intentionText: String!
  ) {
    addIntention(
      userId: $userId
      intentionText: $intentionText
    ) {
      _id
      name
      intention {
        _id
        intentionText
        createdAt
      }
    }
  }
`;

export const ADD_WATER = gql`
mutation addWater(
  $cups: Int!
) {
addWater(
    cups: $cups
  ) {
      _id
      cups
      createdAt
    }
  }
`;

export const ADD_SOCIAL = gql`
mutation addSocial(
  $userId: ID!
  $minutesEngaged: Int!
) {
  addSocial(
    userId: $userId
    minutesEngaged: $minutesEngaged
  ) {
      _id
      minutesEngaged
      createdAt
    }
  }
`;

export const ADD_OUTSIDE = gql`
mutation addOutside(
  $userId: ID!
  $minutesOutside: Int!
) {
addOutside(
    userId: $userId
    minutesOutside: $minutesOutside
  ) {
      _id
      minutesOutside
      createdAt
  }
}
`;

export const ADD_GRATITUDE = gql`
mutation addGratitude(
  $userId: ID!,
  $gratitudeText: String!
) {
  addGratitude(
    userId: $userId,
    gratitudeText: $gratitudeText
) {
      _id
      gratitudeText
      createdAt
  }
}
`;

export const ADD_PICTURE = gql`
  mutation addPicture(
    $userId: ID!
    $pictureUploaded: Int!
  ) {
    addPicture(
      userId: $userId
      pictureUploaded: $pictureUploaded
    ) {
      _id
      name
      picture {
        _id
        pictureUploaded
        createdAt
      }
    }
  }
`;

export const ADD_MOOD = gql`
mutation addMood(
  $userId: String!,
  $moodRanking: Int!
) {
  addMood(
    userId: $userId,
    moodRanking: $moodRanking
) {
      _id
      moodRanking
      createdAt
  }
}
`;
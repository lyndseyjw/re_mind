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
  $minutesEngaged: Int!
) {
  addSocial(
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
  $minutesOutside: Int!
) {
addOutside(
    minutesOutside: $minutesOutside
  ) {
      _id
      minutesOutside
      createdAt
  }
}
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
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
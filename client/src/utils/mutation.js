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
    $userId: ID!
    $hoursSlept: Int!
  ) {
    addSleep(
      userId: $userId
      hoursSlept: $hoursSlept
    ) {
      _id
      name
      sleep {
        _id
        hoursSlept
        createdAt
      }
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
    $userId: ID!
    $cups: Int!
  ) {
    addWater(
      userId: $userId
      cups: $cups
    ) {
      _id
      name
      water {
        _id
        cups
        createdAt
      }
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
      name
      social {
        _id
        minutesEngaged
        createdAt
      }
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
      name
      outside {
        _id
        minutesOutside
        createdAt
      }
    }
  }
`;

export const ADD_GRATITUDE = gql`
  mutation addGratitude(
    $userId: ID!
    $gratitudeText: Int!
  ) {
    addGratitude(
      userId: $userId
      gratitudeText: $gratitudeText
    ) {
      _id
      name
      gratitude {
        _id
        gratitudeText
        createdAt
      }
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
    $userId: ID!
    $moodRanking: Int!
  ) {
    addMood(
      userId: $userId
      moodRanking: $moodRanking
    ) {
      _id
      name
      mood {
        _id
        moodRanking
        createdAt
      }
    }
  }
`;
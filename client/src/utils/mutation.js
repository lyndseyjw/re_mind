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
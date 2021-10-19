const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    password: String
    water: [Water]!
    outside: [Outside]!
    sleep: [Sleep]!
    intention: [Intention]!
    gratitude: [Gratitude]!
    picture: [Picture]!
    mood: [Mood]!
    social: [Social]!
  }

  type Water {
    _id: ID
    cups: Int
    createdAt: String
  }

  type Outside {
    _id: ID
    minutesOutside: Int
    createdAt: String
  }

  type Sleep {
    _id: ID
    hoursSlept: Int
    createdAt: String
  }

  type Intention {
    _id: ID
    intentionText: String
    createdAt: String
  }

  type Gratitude {
    _id: ID
    gratitudeText: String
    createdAt: String
  }

  type Picture {
    _id: ID
    pictureUploaded: String
    createdAt: String
  }

  type Mood {
    _id: ID
    moodRanking: Int
    createdAt: String
  }

  type Social {
    _id: ID
    minutesEngaged: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]!
    userone(userId: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWater(email: String!, cups: Int!): Water
    addOutside(email: String!, minutesOutside: Int!): Outside
    addSleep(email: String!, hoursSlept: Int!): Sleep
    addIntention(email: String!, intentionText: String!): Intention
    addGratitude(email: String!, gratitudeText: String!): Gratitude
    addPicture(email: String!, pictureUploaded: String!): Picture
    addMood(email: String!, moodRanking: Int!): Mood
    addSocial(email: String!, minutesEngaged: Int!): Social
  }
`;

module.exports = typeDefs;
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
    moodRanking: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]
  
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWater(cups: Int!): Water
    addOutside(minutesOutside: Int!): Outside
    addSleep(hoursSlept: Int!): Sleep
    addIntention(intentionText: String!): Intention
    addGratitude(gratitudeText: String!): Gratitude
    addPicture(pictureUploaded: String!): Picture
    addMood(moodRanking: String!): Mood
  }
`;

module.exports = typeDefs;
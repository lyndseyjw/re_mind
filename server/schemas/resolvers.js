const { AuthenticationError } = require('apollo-server-express');
const { Gratitude, Intention, Mood, Outside, Picture, Sleep, User, Water, Social } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user : async () => {
      return User.find().populate("water").populate("mood").populate("outside").populate("sleep").populate("intention").populate("social").populate("gratitude");
    },
    
    userone : async ( parent, { name }) => {
      return User.findOne({ name }).populate("water").populate("mood").populate("outside").populate("sleep").populate("intention").populate("social").populate("gratitude");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("water").populate("mood").populate("outside").populate("sleep").populate("intention").populate("social").populate("gratitude");
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addWater: async (parent, { userId, cups }, context) => {
      if (true) {
        const water= await Water.create({
          cups,
        });

        await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { water: water._id } },
          {
            new: true,
          }
        );

        return water;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addOutside: async (parent, { userId, minutesOutside }, context) => {
      if (true) {
        const outside = await Outside.create({
          minutesOutside,
        });

        await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { outside: outside._id } },
          {
            new: true,
          }
        );

        return outside;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addSleep: async (parent, { userId, hoursSlept }, context) => {
      if (true) {
        const sleep = await Sleep.create({
          hoursSlept,
        });

        await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { sleep: sleep._id } },
          {
            new: true,
          }
        );

        return sleep;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addSocial: async (parent, { userId, minutesEngaged }, context) => {
      if (true) {
        const social = await Social.create({
          minutesEngaged,
        });

        await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { social: social._id } },
          {
            new: true,
          }
        );

        return social;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addIntention: async (parent, { userId, intentionText }, context) => {
      if (true) {
        const intention = await Intention.create({
          intentionText,
        });

        await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { intention: intention._id } },
          {
            new: true,
          }
        );

        return intention;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addGratitude: async (parent, { userId, gratitudeText }, context) => {
      if (true) {
        const gratitude = await Gratitude.create({
          gratitudeText,
        });

        await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { gratitude: gratitude._id } },
          {
            new: true,
          }
        );

        return gratitude;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addPicture: async (parent, { userId, pictureUploaded }, context) => {
      if (true) {
        const picture = await Picture.create({
          pictureUploaded,
        });

        await User.findOneAndUpdate(
          { _id: userId, },
          { $addToSet: { picture: picture._id } },
          {
            new: true,
          }
        );

        return picture;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addMood: async (parent, { userId, moodRanking }, context) => {
      if (true) {
        const mood = await Mood.create({
          moodRanking,
        });

        await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { mood: mood._id } },
          {
            new: true,
          }
        );

        return mood;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

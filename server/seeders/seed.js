const db = require('../config/connection');
const { Water } = require('../models');
const { User } = require('../models');
const { Mood } = require('../models');
const { Picture } = require('../models');
const { Gratitude } = require('../models');
const { Intention } = require('../models');
const { Outside } = require('../models');
const { Sleep } = require('../models');
const { Social } = require('../models');

const userSeeds = require('./userSeeds.json');
const gratitudeSeeds = require('./gratitudeSeeds.json');
const intentionSeeds = require('./intentionSeeds.json');




db.once('open', async () => {
    try {
        await Water.deleteMany({});
        await Mood.deleteMany({});
        await Picture.deleteMany({});
        await Gratitude.deleteMany({});
        await Intention.deleteMany({});
        await Outside.deleteMany({});
        await Sleep.deleteMany({});
        await Social.deleteMany({});

        await User.deleteMany({});
        await User.create(userSeeds);

        // seed data that corresponds to each user data
        for (let i = 0; i < userSeeds.length; i++) {
            // Add water
            let { _id } = await Water.create({ "cups": Math.floor(Math.random() * 10) });
            let user = await User.findOneAndUpdate(
                { email: userSeeds[i].email },
                {
                    $addToSet: {
                        water: _id,
                    },
                }
            );
        }
        for (let i = 0; i < userSeeds.length; i++) {
            // Add Mood
            let { _id } = await Mood.create({ "moodRanking": Math.floor(Math.random() * 10) });
            let user = await User.findOneAndUpdate(
                { email: userSeeds[i].email },
                {
                    $addToSet: {
                        mood: _id,
                    },
                }
            );
        }
        for (let i = 0; i < userSeeds.length; i++) {
            // Add Outside
            let { _id } = await Outside.create({ "minutesOutside": Math.floor(Math.random() * 10) });
            let user = await User.findOneAndUpdate(
                { email: userSeeds[i].email },
                {
                    $addToSet: {
                        outside: _id,
                    },
                }
            );
        }
        for (let i = 0; i < userSeeds.length; i++) {
            // Add Sleep
            let { _id } = await Sleep.create({ "hoursSlept": Math.floor(Math.random() * 10) });
            let user = await User.findOneAndUpdate(
                { email: userSeeds[i].email },
                {
                    $addToSet: {
                        sleep: _id,
                    },
                }
            );
        }
        for (let i = 0; i < userSeeds.length; i++) {
            // Add Social
            let { _id } = await Social.create({ "minutesEngaged": Math.floor(Math.random() * 10) });
            let user = await User.findOneAndUpdate(
                { email: userSeeds[i].email },
                {
                    $addToSet: {
                        social: _id,
                    },
                }
            );
        }
        for (let i = 0; i < userSeeds.length; i++) {
            // Add Intention
            let { _id } = await Intention.create(intentionSeeds[(Math.floor(Math.random()*4))]);
            let user = await User.findOneAndUpdate(
                { email: userSeeds[i].email },
                {
                    $addToSet: {
                        intention: _id,
                    },
                }
            );
        }
        for (let i = 0; i < userSeeds.length; i++) {
            // Add Gratitude
            let { _id } = await Gratitude.create(gratitudeSeeds[(Math.floor(Math.random()*4))]);
            let user = await User.findOneAndUpdate(
                { email: userSeeds[i].email },
                {
                    $addToSet: {
                        gratitude: _id,
                    },
                }
            );
        }


    } catch (err) {
        throw err;
    }

    console.log('all done!');
    process.exit(0);
});
const db = require('../config/connection');
const { Water } = require('../models');
const { User } = require('../models');
const { Mood } = require('../models');
const { Picture } = require('../models');
const { Gratitude } = require('../models');
const { Intention } = require('../models');
const { Outside } = require('../models');
const { Sleep } = require('../models');

const userSeeds = require('./userSeeds.json');
// const moodSeeds = require('./moodSeeds.json');
// const pictureSeeds = require('./pictureSeeds.json');
// const gratitudeSeeds = require('./gratitudeSeeds.json');
// const intentionSeeds = require('./intentionSeeds.json');
// const outsideSeeds = require('./outsideSeeds.json');
// const sleepSeeds = require('./sleepSeeds.json');

db.once('open', async () => {
    try {
        await Water.deleteMany({});
        await Mood.deleteMany({});
        await Picture.deleteMany({});
        await Gratitude.deleteMany({});
        await Intention.deleteMany({});
        await Outside.deleteMany({});
        await Sleep.deleteMany({});

        await User.deleteMany({});
        await User.create(userSeeds);

        // seed data that corresponds to each user data
        for (let i = 0; i < userSeeds.length; i++) {
            // Add water
            const { _id } = await Water.create({ "cups" : Math.floor(Math.random() * 10) });

            const user = await User.findOneAndUpdate(
                { email: userSeeds[i].email },
                {
                    $addToSet: {
                        water: _id,
                    },
                }
            );
            // Add Mood

        }



    } catch (err) {
        throw err;
    }

    console.log('all done!');
    process.exit(0);
});
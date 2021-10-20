import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_MOOD } from '../utils/mutations';

const Mood = ({ userId, mood }) => {

    // I think we will include this error down below if the user does not choose a mood? (similar to how used in Intention component)
    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addMood, { error }] = useMutation(ADD_MOOD);

    // maybe after user submits their mood, it will then take them to the Journal page where they can see their daily stats?
    const moodSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await addMood({
                variables: {
                    userId,
                    moodRanking,
                },
            });

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {mood ? (
            <>
                <h3>You ranked your mood today as {mood}/3</h3>
                <p>Would you like to change this ranking?</p>
                {/* I think here we would have maybe 3 emojis that function as submit buttons? Either faces OR hands that portray the 1, 2, 3 mood ranking options .. & depending on which one user clicks, it will add the moodRanking in the db */}
                <button type="submit" onSubmit={moodSubmit}>Rank 1</button>
                <button type="submit" onSubmit={moodSubmit}>Rank 2</button>
                <button type="submit" onSubmit={moodSubmit}>Rank 3</button>
            </>
          ) : (
            <div>
                <h3>How would you rank your mood today?</h3>
                {/* same thing as above with the 3 emoji buttons */}
                <button type="submit" onSubmit={moodSubmit}>Rank 1</button>
                <button type="submit" onSubmit={moodSubmit}>Rank 2</button>
                <button type="submit" onSubmit={moodSubmit}>Rank 3</button>
            </div>
          )}
        </div>
    )
}

export default Mood;
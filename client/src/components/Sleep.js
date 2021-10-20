import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_SLEEP } from '../utils/mutations';

const Sleep = ({ userId, sleep }) => {

    // I think we will include this error down below if the user does not choose a number before clicking Submit (similar to how used in Intention component)
    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addSleep, { error }] = useMutation(ADD_SLEEP);

    const sleepSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addSleep({
                variables: {
                    userId,
                    hoursSlept,
                },
            });

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {sleep ? (
            <>
                <h3>You slept {sleep} last night</h3>
            </>
          ) : (
            <div>
              <h3>How many hours of sleep did you get last night?</h3>
                {/* here we will need a drop down menu perhaps where users can choose the number of hours? Bootstrap React probably has something like this */}
                <button type="submit" onSubmit={sleepSubmit}>Rested</button>
            </div>
          )}
        </div>
    )
}

export default Sleep;
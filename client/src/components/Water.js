import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_WATER } from '../../utils/mutations';

const Water = ({ userId, water }) => {

    // I think we will include this error down below if the user does not choose a number before clicking Submit in the else statement (similar to how used in Intention component)
    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addWater, { error }] = useMutation(ADD_WATER);

    const waterSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addWater({
                variables: {
                    userId,
                    cups,
                },
            });

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {water ? (
            <>
                <h3>You have drinken {water} cups of water so far today</h3>
                <p>Would you like to add more?</p>
                {/* Same drop down menu option where user can add more water to their data .. perhaps we can have a function that adds the amount user inputs now to what is already in the db */}
                <button type="submit" onSubmit={waterSubmit}>Hydrated</button>
            </>
          ) : (
            <div>
                <h3>How much water have you drinken so far today?</h3>
                {/* here we will need a drop down menu perhaps where users can choose the number of cups (like for hours)? Bootstrap React probably has something like this */}
                <button type="submit" onSubmit={waterSubmit}>Hydrated</button>
            </div>
          )}
        </div>
    )
}

export default Water;
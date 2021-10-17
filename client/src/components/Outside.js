import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_OUTSIDE } from '../../utils/mutations';

const Outside = ({ userId, outside }) => {

    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addOutside, { error }] = useMutation(ADD_OUTSIDE);

    const outsideSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addOutside({
                variables: {
                    userId,
                    minutesOutside,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {outside ? (
                <>
                    <h3>You've been outside for {outside} minutes so far today</h3>
                    <p>Any more outside time you want to add?</p>
                    {/* Same dropdown menu to choose # of minutes .. function to add to what is already in the db */}
                    <button type="submit" onSubmit={outsideSubmit}>Into the Wild</button>
                </>
            ) : (
                <div>
                    <h3>Have you been outside today?</h3>
                    <p>If so, for how long? If not, choose 0</p>
                    {/* dropdown menu to choose # minutes */}
                    <button type="submit" onSubmit={outsideSubmit}>Into the Wild</button>
                </div>
            )}
        </div>
    )
}

export default Outside;
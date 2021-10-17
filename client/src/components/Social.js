import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_SOCIAL } from '../../utils/mutations';

const Social = ({ userId, social }) => {

    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addSocial, { error }] = useMutation(ADD_SOCIAL);

    const socialSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addSocial({
                variables: {
                    userId,
                    minutesEngaged,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {social ? (
                <>
                    <h3>You've engaged with another human for {social} minutes so far today</h3>
                    <p>Any more social time you want to add?</p>
                    {/* Same dropdown menu to choose # of minutes .. function to add to what is already in the db */}
                    <button type="submit" onSubmit={socialSubmit}>Engaged</button>
                </>
            ) : (
                <div>
                    <h3>Have you spoken to another human today?</h3>
                    <p>If so, for how long? If not, choose 0</p>
                    {/* dropdown menu to choose # minutes */}
                    <button type="submit" onSubmit={socialSubmit}>Engaged</button>
                </div>
            )}
        </div>
    )
}

export default Social;
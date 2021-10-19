import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_INTENTION } from '../utils/mutation';

const Intention = ({ userId, intention }) => {

    const [intentionText, setIntentionText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addIntention, { error }] = useMutation(ADD_INTENTION);

    const intentionSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addIntention({
                variables: {
                    userId,
                    intentionText,
                },
            });

            setIntentionText('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'intentionText' && value.length <= 280) {
            setIntentionText(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div>
            {intention ? (
                <>
                    <h3>Your intention for the day : {intention}</h3>
                </>
            ) : (
                <div>
                    <h3>What is your intention for the day?</h3>
                    <p
                        className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
                            }`}
                    >
                        Character Count: {characterCount}/280
                    </p>
                    <form
                        className="flex-row justify-center justify-space-between-md align-center"
                        onSubmit={intentionSubmit}
                    >
                        <div className="col-12 col-lg-9">
                            <textarea
                                name="intentionText"
                                placeholder="I am capable of anything"
                                value={intentionText}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                            <button className="btn btn-light btn-block py-3" type="submit">
                                Set
                            </button>
                        </div>
                        {error && (
                            <div className="col-12 my-3 bg-danger text-white p-3">
                                {error.message}
                            </div>
                        )}
                    </form>
                </div>
            )}
        </div>
    )
}

export default Intention;
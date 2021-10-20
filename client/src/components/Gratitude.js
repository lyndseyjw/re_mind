import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_GRATITUDE } from '../utils/mutations';

const Gratitude = ({ userId, gratitude }) => {

    const [gratitudeText, setGratitudeText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addGratitude, { error }] = useMutation(ADD_GRATITUDE);

    const gratitudeSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addGratitude({
                variables: {
                    userId,
                    gratitudeText,
                },
            });

            setGratitudeText('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'gratitudeText' && value.length <= 280) {
            setGratitudeText(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div>
            {gratitude ? (
                <>
                    <h3>You're grateful for {gratitude}</h3>
                </>
            ) : (
                <div>
                    <h3>What is something you're grateful for?</h3>
                    <p
                        className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
                            }`}
                    >
                        Character Count: {characterCount}/280
                    </p>
                    <form
                        className="flex-row justify-center justify-space-between-md align-center"
                        onSubmit={gratitudeSubmit}
                    >
                        <div className="col-12 col-lg-9">
                            <textarea
                                name="gratitudeText"
                                placeholder="The sun, the air.. to name a few...."
                                value={gratitudeText}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                            <button className="btn btn-light btn-block py-3" type="submit">
                                Gratitude is sexy
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

export default Gratitude;
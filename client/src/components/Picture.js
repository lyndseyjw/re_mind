import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_PICTURE } from '../utils/mutation';

const Picture = ({ userId, picture }) => {

    // I think we will include this error down below if the user does not upload a picture before clicking Submit (similar to how used in Intention component)
    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addPicture, { error }] = useMutation(ADD_PICTURE);

    const pictureSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addPicture({
                variables: {
                    userId,
                    pictureUploaded,
                },
            });

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {picture ? (
            <>
                <h3>This made you smile today :</h3>
                <img src={picture}></img>
            </>
          ) : (
            <div>
                <h3>Upload that picture you took of something that made you smile today</h3>
                {/* here we will need to add the cloudserver stuffff */}
                <button type="submit" onSubmit={pictureSubmit}>Happiness looks great on you</button>
            </div>
          )}
        </div>
    )
}

export default Picture;
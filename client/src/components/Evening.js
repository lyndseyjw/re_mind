import React from 'react';
import { Link } from 'react-router-dom';

import Water from './Water';
import Gratitude from './Gratitude';
import Picture from './Picture';
import Mood from './Mood';

import Auth from '../utils/auth';

const Evening = ({ user }) => {

    return (
        <div>
    
          {Auth.loggedIn() ? (
            <>
                <h2>Good Evening, {user.name}</h2>
                {/* wondering if in the evening we want to ask user if they 'met' their intention & then have this as a row (forget the mongoose term) within the intention document so the row would be "intentionMet" & would be a boolean */}
                <p>{user.intention.intentionText ? (`Your intention for the day : ${intentionText}`) : ('')}</p>
                {/* asking water again .. perhaps we could ask outside & social again? so they can update their time if they want OR add if they haven't yet? not sure if that will make the page too crowded though ... */}
                <Water water={user.water.cups} />
                <Gratitude gratitude={user.gratitude.gratitudeText} />
                <Picture picture={user.picture.pictureUploaded} />
                <Mood mood={user.mood.moodRanking} />
            </>
          ) : (
            <p>
              Please{' '}
              <Link to="/login">login</Link> to view your day
            </p>
          )}
        </div>
      );
}

export default Evening;
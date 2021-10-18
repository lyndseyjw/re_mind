import React from 'react';
import { Link } from 'react-router-dom';

import Water from './Water';
import Social from './Social';
import Outside from './Outside';

import Auth from '../../utils/auth';

const Day = ({ user }) => {

    return (
        <div>
    
          {Auth.loggedIn() ? (
            <>
                <h2>Lovely day, {user.name}</h2>
                <p>{user.intention.intentionText ? (`Your intention for the day : ${intentionText}`) : ('')}</p>
                <Water userId={user._id} water={user.water.cups} />
                <Social userId={user._id} social={user.social.minutesEngaged } />
                <Outside userId={user._id} outside={user.outside.minutesOutside } />
                <p>Have you taken your picture yet today?</p>
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

export default Day;
import React from 'react';
import { Link } from 'react-router-dom';

import Sleep from './Sleep';
import Intention from './Intention';

import Auth from '../utils/auth';

const Morning = ({ user }) => {

    return (
        <div>
    
          {Auth.loggedIn() ? (
            <>
                <h2>Good Morning, {user.name}</h2>
                <Sleep sleep={user.sleep.hoursSlept} />
                <Intention intention={user.intention.intentionText } />
                <p>Don't forget to take a picture of something that makes you smile today!</p>
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

export default Morning;
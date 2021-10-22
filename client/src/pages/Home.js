import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import { useQuery } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Home = () => {

    const { data } = useQuery(QUERY_ME);

    const user = data?.me || {};

    return (
        <main>
            {Auth.loggedIn() ? (
                <div className="home-main">
                    <h1>
                        <Link to="/greeting" className='header'>re:mind</Link>
                    </h1>
                </div>
            ) : (
                <div className="home-main">
                    <h1>
                        <Link to="/login" className='header'>re:mind</Link>
                    </h1>
                </div>
            )}
        </main>
    )
}

export default Home;

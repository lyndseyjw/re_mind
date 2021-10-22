import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

    return (
        <main>
            <div className="home-main">
                <h1>
                    <Link to="/login" className='header'>re:mind</Link>
                </h1>
            </div>
        </main>
    )
}

export default Home;

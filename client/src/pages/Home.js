import React from 'react';
import { Link } from 'react-router-dom';

// so here this could just be a super simple page with a nice relaxing photo in the background, blurred a bit so that our logo in front stands out
// Kimberly, I think you mentioned an idea you had about some plants or something like that? that could be the user's intro into the app & then our logo would be a button that when clicked will take them to the login page
// we might need conditional logic here that checks {auth.loggedin ? (<Link to="/login">) : (<Link to="/greeting">} that way, if user is logged in, they will just go to the greeting page, rather than the login page
// Greeting page right now is just the main page that calls Morning Day & Evening components depending on the time of day
// let's go to login page from here ...
const Home = () => {

    return (
        <main>
            <div className="flex-row justify-center">
                <div
                    className="col-12 col-md-10 mb-3 p-3"
                    style={{ border: '1px dotted #1a1a1a' }}
                >
                    <h1>
                        <Link to="/login">re:mind</Link>
                    </h1>
                </div>
            </div>
        </main>
    )
}

export default Home;
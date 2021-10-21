// import React from 'react';
// import { Link } from 'react-router-dom';
// import Water from './Water';
// import Social from './Social';
// import Outside from './Outside';
// import Chart from '../utils/auth';
// import Auth from '../utils/auth';

//

function Dashboard() {
  

    // the thought is that Home, Login, Signup & Greeting will have their own links i.e. a unique URL .. thinking Dashboard might too? that way user can bookmark, etc. & also we wont have to worry about page reloading & leaving these specific pages
    // right now these 'Links' are set up as pages .. the 'Dashboard' is called 'Journal' at the moment but we can change that depending on how we want it presented to the user
    // lets go to Home page from here...
    return (
      
      <ApolloProvider client={client} >
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <NavTabs />
            <div>
            <Chart />
            </div>
            <div>
            <CalendarPage />
            </div>

          </div>
        </Router>
      </ApolloProvider>
    );
  }


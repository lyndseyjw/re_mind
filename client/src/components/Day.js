import React from 'react';
import { Link } from 'react-router-dom';

// import Water from './Water';
// import Social from './Social';
// import Outside from './Outside';

// import Auth from '../utils/auth';

// here we are accessing user data to give them a greeting & then, IF there is intention data for this user FOR THIS DAY specifically, then we could display it for them as motivation throughout the day .. I think here is where we will need to make sure that logic in Water component is correct for querying data specific to the day is correct .. once we get that query down, that can be used throughout the app to display to the user their activity
// here we call Water Social & Outside components & pass in user info as props so that we can access this information
// lets go to water from here ...

// const Day = ({ user }) => {

//     return (
//         <div>
    
//           {Auth.loggedIn() ? (
//             <>
//                 <h2>Lovely day, {user.name}</h2>
//                 <p>{user.intention.intentionText ? (`Your intention for the day : ${user.intention.intentionText}`) : ('')}</p>
//                 <Water water={user.water} />
//                 <Social social={user.social } />
//                 <Outside outside={user.outside } />
//                 <p>Have you taken your picture yet today?</p>
//             </>
//           ) : (
//             <p>
//               Please{' '}
//               <Link to="/login">login</Link> to view your day
//             </p>
//           )}
//         </div>
//       );
// }

// export default Day;
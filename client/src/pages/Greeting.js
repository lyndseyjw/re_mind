import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Morning from '../components/Morning';
import Day from '../components/Day';
import Evening from '../components/Evening';

import { QUERY_USER } from '../utils/queries';

// so here is where we useParams to pull that userId out of the URL & we use this info to QUERY_USER .. from here we can query the user & pass all of the user's info in as props to the following components so this info (i.e. water, outside, etc) can be used throughout the app
// again, if we use context, I don't think we need to do this here
// also below is an idea of conditional logic that will call Morning Day & Evening components depending on the day .. I'm not sure if this is correct, perhaps we can ask Bryan
// SO depending on the time of day, this Greeting page will basically just be showing either the Morning, Day, OR Evening components with all of their components (these Morning, Day & Evening components can be styled in the relevant colors so that when user opens the app & clicks our logo & they are logged in, they will either see Morning Day OR Evening depending on the time of day)
// lets go to Morning component from here ...

const Greeting = () => {

    // Use `useParams()` to retrieve value of the route parameter `:userId`
    const { userId } = useParams();

    const { data } = useQuery(QUERY_USER, {
        // pass URL parameter
        variables: { userId: userId },
    });

    const user = data?.user || {};

    if (moment().format('H') < 9) {

        return <Morning user={user} />

    } else if (moment().format('H') < 18) {

        return <Day user={user} />

    } else {

        return <Evening user={user} />
    }

}

export default Greeting;
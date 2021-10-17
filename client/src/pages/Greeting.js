import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Morning from '../components/Morning';
import Day from '../components/Day';
import Evening from '../components/Evening';

import { QUERY_USER } from '../utils/queries';

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
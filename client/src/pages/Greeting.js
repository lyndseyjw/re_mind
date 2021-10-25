import React from 'react';
import moment from 'moment';

import { useQuery } from '@apollo/client';

import Morning from '../components/Morning';
import Day from '../components/Day';
import Evening from '../components/Evening';

import { QUERY_ME } from '../utils/queries';

const Greeting = () => {

    const { data } = useQuery(QUERY_ME);

    const user = data?.me || {};

    if (window.moment().format('H') < 7) {

        return <Morning user={user} />

    } else if (window.moment().format('H') < 8) {

        return <Day user={user} />

    } else {

        return <Evening user={user} />
    }
}

export default Greeting;
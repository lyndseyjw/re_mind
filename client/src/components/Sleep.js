import React from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'react-bootstrap'

import { ADD_SLEEP } from '../utils/mutation';

const Sleep = ({ sleep }) => {

const [sleep, setSleep] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSleep(value);
    };

    const [addSleep, { error }] = useMutation(ADD_SLEEP);

    const sleepTotal= async (e) => {
        e.preventDefault();

        try {
            const { data } = await addSleep({
                variables: {
                    hoursSlept,
                },
            });

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {sleep ? (
            <>
                <h3>You slept {sleep} last night</h3>
            </>
          ) : (
            <div>
              <h3>How many hours of sleep did you get last night?</h3>
                {/* here we will need a drop down menu perhaps where users can choose the number of hours? Bootstrap React probably has something like this */}
                <button type="submit" onSubmit={sleepSubmit}>Rested</button>
            </div>
          )}
        </div>
    )
}

export default Sleep;



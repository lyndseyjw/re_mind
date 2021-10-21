import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { useQuery } from '@apollo/client';
import { Form, Button } from 'react-bootstrap'

import { ADD_WATER } from '../utils/mutations';
// import { QUERY_WATER } from '../utils/queries';

// ahh water, our favorite example .. so below, is that tentative logic that perhaps maybe miiiight query water FOR THE SPECIFIC USER (b/c we already queried the user in Home / we are going to be using context so we will only access data specific to the user logged in) ONLY ON THE CURRENT DAY .. was trying to format it to match Date.now format .. not sure, what does Bryan think?

const Water = ({ cupsDrinken }) => {

    // const current = new Date();
    // const createdAt = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    // const { water } = useQuery(QUERY_WATER, {
    //     variables: { createdAt },
    // });

    const [cups, setCups] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCups(value);
    };

    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan
    const [addWater, { error }] = useMutation(ADD_WATER);

    const waterSubmit = async (event) => {
        event.preventDefault();
        const cupsInt = parseInt(cups)

        try {
            const { data } = await addWater({
                variables: {
                    cups: cupsInt,
                },
            });
            window.location.replace('/greeting')

        } catch (err) {
            console.error('hello');
        }
    };

    return (
        <div>
            {cupsDrinken ? (
                <>
                    <h3>You've drinken {cupsDrinken} cups of water so far today</h3>
                    <p>Would you like to add more?</p>
                    <Form.Select onChange={handleChange} aria-label="Default select example">
                        <option>Choose number of cups</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                        <option value="6">Six</option>
                        <option value="7">Seven</option>
                        <option value="8">Eight</option>
                        <option value="9">Nine</option>
                        <option value="10">Ten</option>
                        <option value="11">Eleven</option>
                        <option value="12">Twelve</option>
                        <option value="13">Thirteen</option>
                        <option value="14">Fourteen</option>
                        <option value="15">Fifteen</option>
                        <option value="16">Sixteen</option>
                        <option value="17">Seventeen</option>
                        <option value="18">Eighteen</option>
                        <option value="19">Nineteen</option>
                        <option value="20">Twenty</option>
                        <option value="21">Twenty-One</option>
                        <option value="22">Twenty-Two</option>
                        <option value="23">Twenty-Three</option>
                        <option value="24">Twenty-Four</option>
                    </Form.Select>
                    <Button variant="light" type="submit" onClick={waterSubmit}>Hydrated</Button>
                </>
            ) : (
                <div>
                    <h3>How much water have you drinken so far today?</h3>
                    <Form.Select onChange={handleChange} aria-label="Default select example">
                        <option>Choose number of cups</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                        <option value="6">Six</option>
                        <option value="7">Seven</option>
                        <option value="8">Eight</option>
                        <option value="9">Nine</option>
                        <option value="10">Ten</option>
                        <option value="11">Eleven</option>
                        <option value="12">Twelve</option>
                        <option value="13">Thirteen</option>
                        <option value="14">Fourteen</option>
                        <option value="15">Fifteen</option>
                        <option value="16">Sixteen</option>
                        <option value="17">Seventeen</option>
                        <option value="18">Eighteen</option>
                        <option value="19">Nineteen</option>
                        <option value="20">Twenty</option>
                        <option value="21">Twenty-One</option>
                        <option value="22">Twenty-Two</option>
                        <option value="23">Twenty-Three</option>
                        <option value="24">Twenty-Four</option>
                    </Form.Select>
                    <Button variant="light" type="submit" onSubmit={waterSubmit}>Hydrated</Button>
                </div>
            )}
        </div>
    )
}

export default Water;
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'react-bootstrap'

import { ADD_WATER } from '../../utils/mutation';

const Water = ({ water }) => {

    const [cups, setCups] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCups(value);
    };

    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addWater, { error }] = useMutation(ADD_WATER);

    const waterSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addWater({
                variables: {
                    cups,
                },
            });

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {water ? (
                <>
                    <h3>You have drinken {water} cups of water so far today</h3>
                    <p>Would you like to add more?</p>
                    <Form.Select onChange={handleChange} aria-label="Default select example">
                        <option>Choose number of cups</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Fiv</option>
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
                        <option value="5">Fiv</option>
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
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'react-bootstrap'

import { ADD_SLEEP } from '../utils/mutations';

const Sleep = ({ hoursSlept, style }) => {

    const [sleep, setSleep] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSleep(value);
    };

    const [addSleep, { error }] = useMutation(ADD_SLEEP);

    const sleepTotal = async (e) => {
        e.preventDefault();
        const sleepInt = parseInt(sleep)

        try {
            const { data } = await addSleep({
                variables: {
                    hoursSlept: sleepInt,
                },
            });
            window.location.replace('/greeting')

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {hoursSlept ? (
                <>
                    <h3>You slept {hoursSlept} hours last night.</h3>
                    <p>Would you like to add more?</p>
                    <Form.Select onChange={handleChange} aria-label="Default select example" style={style.text}>
                        <option>Choose number of hours</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                    </Form.Select>
                    <Button variant="light" type="submit" onClick={sleepTotal} style={style.button}>Rest</Button>
                </>
            ) : (
                <div>
                    <h3>How many hours of sleep did you get last night?</h3>
                    <Form.Select onChange={handleChange} aria-label="Default select example">
                        <option>Choose number of hours</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                    </Form.Select>
                    <Button variant="light" type="submit" onClick={sleepTotal} style={style.button}>Rest</Button>
                </div>
            )}
        </div>
    )
}

export default Sleep;



import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'react-bootstrap'

import { ADD_WATER } from '../utils/mutations';

const Water = ({ cupsDrinken , style }) => {

    // const current = new Date();
    // const createdAt = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    // const { water } = useQuery(QUERY_WATER, {
    //     variables: { createdAt },
    // });

    const [cups, setCups] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
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
            console.error(err);
        }
    };

    return (
        <div>
            {cupsDrinken ? (
                <>
                    <h3>You've drank {cupsDrinken} cups of water so far today.</h3>
                    <p>Would you like to add more?</p>
                    <Form.Select onChange={handleChange} aria-label="Default select example" style={style.text}>
                        <option>Choose number of cups</option>
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
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </Form.Select>
                    <Button variant="light" type="submit" onClick={waterSubmit} style={style.button}>Hydrated</Button>
                </>
            ) : (
                <div>
                    <h3>How much water have you drank so far today?</h3>
                    <Form.Select onChange={handleChange} aria-label="Default select example">
                        <option>Choose number of cups</option>
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
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </Form.Select>
                    <Button variant="light" type="submit" onClick={waterSubmit} style={style.button}>Hydrated</Button>
                </div>
            )}
        </div>
    )
}

export default Water;
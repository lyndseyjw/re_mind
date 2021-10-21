import React , {useState} from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'react-bootstrap'

import { ADD_OUTSIDE } from '../utils/mutations';


const Outside = ({ timeOutside }) => {

    const [outside, setOutside] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOutside(value);
    };

    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addOutside, { error }] = useMutation(ADD_OUTSIDE);

    const outsideSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addOutside({
                variables: {
                    // minutesOutside,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

    // exact same logic as in Water & Social 
    // Kimberly wants to do Evening but lets go here now so we can see where Dashboard / Journal could possibly come into play...

    return (
        <div>
            {timeOutside ? (
                <>
                    <h3>You've been outside for {timeOutside} minutes so far today</h3>
                    <p>Any more outside time you want to add?</p>
                    <Form.Select onChange={handleChange} aria-label="Default select example">
                        <option>Choose how long</option>
                        <option value="5">5 Mins</option>
                        <option value="10">10 Mins</option>
                        <option value="15">15 Mins</option>
                        <option value="20">20 Mins</option>
                        <option value="25">25 Mins</option>
                        <option value="30">30 Mins</option>
                        <option value="35">35 Mins</option>
                        <option value="40">40 Mins</option>
                        <option value="45">45 Mins</option>
                        <option value="50">50 Mins</option>
                        <option value="55">55 Mins</option>
                        <option value="60">60 Mins</option>
                        <option value="75">1 Hour 15 Mins</option>
                        <option value="90">1 Hour 30 Mins</option>
                        <option value="105">1 Hour 45 Mins</option>
                        <option value="120">2 Hours</option>
                        <option value="135">2 Hours 15 Mins</option>
                        <option value="150">2 Hours 30 Mins</option>
                        <option value="175">2 Hours 45 Mins</option>
                        <option value="190">3 Hours</option>
                    </Form.Select>
                    <Button variant="light" type="submit" onSubmit={outsideSubmit}>Into the Wild</Button>
                </>
            ) : (
                <div>
                    <h3>Have you been outside today?</h3>
                    <p>If so, for how long? If not, choose 0</p>
                    <Form.Select onChange={handleChange} aria-label="Default select example">
                        <option>Choose how long</option>
                        <option value="5">5 Mins</option>
                        <option value="10">10 Mins</option>
                        <option value="15">15 Mins</option>
                        <option value="20">20 Mins</option>
                        <option value="25">25 Mins</option>
                        <option value="30">30 Mins</option>
                        <option value="35">35 Mins</option>
                        <option value="40">40 Mins</option>
                        <option value="45">45 Mins</option>
                        <option value="50">50 Mins</option>
                        <option value="55">55 Mins</option>
                        <option value="60">60 Mins</option>
                        <option value="75">1 Hour 15 Mins</option>
                        <option value="90">1 Hour 30 Mins</option>
                        <option value="105">1 Hour 45 Mins</option>
                        <option value="120">2 Hours</option>
                        <option value="135">2 Hours 15 Mins</option>
                        <option value="150">2 Hours 30 Mins</option>
                        <option value="175">2 Hours 45 Mins</option>
                        <option value="190">3 Hours</option>
                    </Form.Select>
                    <Button variant="light" type="submit" onSubmit={outsideSubmit}>Into the Wild</Button>
                </div>
            )}
        </div>
    )
}

export default Outside;
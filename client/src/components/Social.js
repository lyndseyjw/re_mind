import React , {useState} from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'react-bootstrap'

import { ADD_SOCIAL } from '../utils/mutations';

const Social = (props) => {

    const [social, setSocial] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSocial(value);
    };

    // not sure how to use cache in this instance because we would want to query the specific user .. may need to ask Bryan Monday
    const [addSocial, { error }] = useMutation(ADD_SOCIAL);

    const socialSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addSocial({
                variables: {
                    // minutesEngaged,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

    // here we have the same exact idea as Water .. if there is social data for the current day, then we show them how long they have been social so far & ask if they would like to add more time .. if not, then they can just add time
    // lets go to Outside from here ...

    return (
        <div>
            {social ? (
                <>
                    <h3>You've engaged with another human for {social} minutes so far today</h3>
                    <p>Any more social time you want to add?</p>
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
                    <Button variant="light" type="submit" onSubmit={socialSubmit}>Engaged</Button>
                </>
            ) : (
                <div>
                    <h3>Have you spoken to another human today?</h3>
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
                    <Button variant="light" type="submit" onSubmit={socialSubmit}>Engaged</Button>
                </div>
            )}
        </div>
    )
}

export default Social;
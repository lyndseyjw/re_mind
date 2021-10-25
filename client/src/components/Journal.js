import React, { PureComponent, useEffect } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_INTENTION } from '../utils/queries';



//NOTE: how do we map through social, water, mood, sleep? may need to do if / switches, onclicks for tabs that'll trigger which data to render : https://medium.com/forepaas/react-making-recharts-easy-to-use-e3d99d0641ba

export default function Journal() {

    const { loading, data } = useQuery(QUERY_INTENTION);

    const intentionData = data?.me.intention.intentionText || ['hello'];

    return (
        <div>
            {loading ? (
            <div>Loading...</div>
            ) : (
            <ListGroup variant="flush">
                <ListGroup.Item>{intentionData[0]}</ListGroup.Item>
                <ListGroup.Item>{intentionData[0]}</ListGroup.Item>
                <ListGroup.Item>{intentionData[0]}</ListGroup.Item>
                <ListGroup.Item>{intentionData[0]}</ListGroup.Item>
            </ListGroup>
            )}
        </div>
    );
}
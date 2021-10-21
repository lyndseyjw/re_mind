import React, { PureComponent, useEffect } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_WATER } from '../utils/queries';



//NOTE: how do we map through social, water, mood, sleep? may need to do if / switches, onclicks for tabs that'll trigger which data to render : https://medium.com/forepaas/react-making-recharts-easy-to-use-e3d99d0641ba

export default function WaterChart() {

  useEffect(() => {
    console.log(data)
  })

  const { loading, data } = useQuery(QUERY_WATER);

  const waterData = data?.me.water || ['hello']
  console.log(waterData[0].createdAt);

  // //moment code - need to check if it'll render once frontend displays
    // const day = waterData[0].createdAt.format('MMM Do YY');

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        // <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={400}
            height={400}
            data={waterData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="cups" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        // </ResponsiveContainer>
      )}
    </div>
  );
}
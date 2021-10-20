import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {QUERY_WATER} from './../utils/queries';
//function to create data, map through data
//this is the chart on the right of dashboard that would render the water, social, etc. intake 


  const data = [QUERY_WATER];
console.log(data);
// [
//   {
//     name: 'Day 1',
//     uv: 4,

//   },
//   {
//     name: 'Day 2',
//     uv: 6,
//   },
//   {
//     name: 'Day 3',
//     uv: 4,
//   },
//   {
//     name: 'Day 4',
//     uv: 8,
//   },
//   {
//     name: 'Day 5',
//     uv: 6,
//   },
//   {
//     name: 'Day 6',
//     uv: 5,
//   },
//   {
//     name: 'Day 7',
//     uv: 8,
//   },
// ];

export default function Chart() {
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}
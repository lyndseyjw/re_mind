import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {QUERY_WATER} from './../utils/queries';
//function to create data, map through data
//this is the chart on the right of dashboard that would render the water, social, etc. intake 

const data = 
// [{QUERY_WATER}];

[
  {
    name: 'Day 1',
    uv: 4,

  },
  {
    name: 'Day 2',
    uv: 6,
  },
  {
    name: 'Day 3',
    uv: 4,
  },
  {
    name: 'Day 4',
    uv: 8,
  },
  {
    name: 'Day 5',
    uv: 6,
  },
  {
    name: 'Day 6',
    uv: 5,
  },
  {
    name: 'Day 7',
    uv: 8,
  },
];

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

// export default class Chart extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart width={730} height={250} data={data}
//           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//           <defs>
//             <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
//             </linearGradient>
//             <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Tooltip />
//           <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
//           <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
//         </AreaChart>
//       </ResponsiveContainer>
//     );
//   }
// }
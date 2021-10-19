import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

//function to create data, map through data

const data = [
  {
    day: 'Day 1',
    cups: 4,

  },
  {
    day: 'Day 2',
    cups: 6,
  },
  {
    day: 'Day 3',
    cups: 4,
  },
  {
    day: 'Day 4',
    cups: 8,
  },
  {
    day: 'Day 5',
    cups: 6,
  },
  {
    day: 'Day 6',
    cups: 5,
  },
  {
    day: 'Day 7',
    cups: 8,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
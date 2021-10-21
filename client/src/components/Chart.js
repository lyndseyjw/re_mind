import React, { PureComponent, useEffect } from 'react';
// import Moment from 'react-moment';
import moment from 'moment';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_WATER } from '../utils/queries';
//function to create data, map through data
//this is the chart on the right of dashboard that would render the water, social, etc. intake 


//CAN WE EXPORT ONE FUNCTION AND ENCOMPASS WATER, SOCIAL, ETC. UNDER THIS OR DO WE NEED TO CREATE NEW COMPONENTS FOR EACH CHART
export default function Chart() {

  useEffect(() => {
    console.log(waterData)
  })

  const { loading, data } = useQuery(QUERY_WATER, {
    variables: { name: "John" }
  });

  
  const waterData = data?.userone.water || ['hello']
  console.log(waterData[0].createdAt);

  // const day = waterData[0].createdAt;
  // const formattedDate = moment(day).format("MMM D");

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <AreaChart
          width={500}
          height={400}
          data={waterData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          {console.log({ waterData })}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="cups" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      )}
    </div>
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
// const waterData = data?.user.water || ["hello"];

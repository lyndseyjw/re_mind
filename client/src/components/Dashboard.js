import React from 'react';
import { Link } from 'react-router-dom';
import Water from './Water';
import Social from './Social';
import Outside from './Outside';
import Chart from '../utils/auth';
import Auth from '../utils/auth';

export default function Dashboard() {
    return (



<div>
<Datepicker
    marked={[
        { 
            date: new Date(year, month, 2), 
            color: '#46c4f3'
        }, { 
            date: new Date(year, month, 10), 
            color: '#7e56bd'
        }, { 
            date: new Date(year, month, 13), 
            color: '#f13f77'
        }, { 
            date: new Date(year, month, 13), 
            color: '#89d7c9'
        }, { 
            date: new Date(year, month, 21), 
            color: '#ffc400'
        }, { 
            date: new Date(year, month, 21), 
            color: '#8dec7d'
        },{ 
            recurring: { 
                repeat: 'yearly', month: 4, day: 1
            },
            color: 'ffc400'
        }
      ]}/>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  </div>
}

//         <div>
//             <Chart />

//         </div>
//     );
//   }


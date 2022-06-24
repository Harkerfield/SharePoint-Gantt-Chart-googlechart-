import React from 'react';
import { Chart } from 'react-google-charts';
// https://developers.google.com/chart/interactive/docs/gallery/ganttchart#data-format





const columns = [
  { type: 'string', label: 'Task ID' },
  { type: 'string', label: 'Task Name' },
  { type: 'string', label: 'Resource' },
  { type: 'date', label: 'Start Date' },
  { type: 'date', label: 'End Date' },
  { type: 'number', label: 'Duration' },
  { type: 'number', label: 'Percent Complete' },
  { type: 'string', label: 'Dependencies' },
];

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

// var date = new Date("11/21/1987 16:00:00"); // some mock date
// var milliseconds = date.getTime();

const startDate = new Date('2022-06-05T06:49:34.611Z');
const endDate = new Date('2022-06-10T06:49:34.611Z');

const startDate2 = new Date('2022-06-11T06:49:34.611Z');
const endDate2 = new Date('2022-06-15T06:49:34.611Z');

const startDate3 = new Date('2022-06-17T06:49:34.611Z');
const endDate3 = new Date('2022-06-20T06:49:34.611Z');

const rows = [
  [
    'walk', //ID
    'Walking', //Title
    'walk', //Resource
    startDate,
    endDate,
    null,
    50,
    null,
  ], 
  [
    'walk1', //ID
    'new', //Title
    'walk', //Resource
    startDate2,
    endDate2,
    null,
    50,
    'walk',
  ],
  [
    'walk2', //ID
    'new2', //Title
    'walk', //Resource
    startDate3,
    endDate3,
    null,
    50,
    'walk',
  ],
];

// const rows = [
//   [
//     'toTrain', //ID
//     'Walk to train stop', //Title
//     'walk',//Resource
//     null,
//     null,
//     50 * 60 * 1000,
//     100,
//     null,
//     "dsa",
//   ],
//   ['music', 'Listen to music', 'music', null, null, 70 * 60 * 1000, 100, null,
//   "dsa",],
//   [
//     'wait',
//     'Wait for train',
//     'wait',
//     null,
//     null,
//     10 * 60 * 1000,
//     100,
//     'toTrain',
//     "dsa",
//   ],
//   ['train', 'Train ride', 'train', null, null, 45 * 60 * 1000, 75, 'wait',
//   "dsa",],
//   ['toWork', 'Walk to work', 'walk', null, null, 10 * 60 * 1000, 10, 'wait',
//   "dsa",],
//   ['work', 'Sit down at desk', null, null, null, 20 * 60 * 1000, 0, null,
//   "dsa",],
// ];

export const data = [columns, ...rows];

export const options = {
  height: 275,
  gantt: {
    defaultStartDateMillis: new Date(),

    criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.

    percentEnabled: false,

    arrow: {
      angle: 100,
      width: 2,
      color: 'green',
      radius: 0,
    },
    innerGridHorizLine: {
      stroke: 'black',
      strokeWidth: 2,
    },

    innerGridTrack: { fill: '#83E5FF' }, //black
    innerGridDarkTrack: { fill: '#ffcc80' },
  },
};

export default function App() {
  return (
    <Chart
      chartType="Gantt"
      width="100%"
      height="50%"
      data={data}
      options={options}
    />
  );
}

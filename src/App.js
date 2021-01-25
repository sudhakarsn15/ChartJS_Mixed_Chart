import React from 'react';
import "./styles.css";
import { Bar } from 'react-chartjs-2';
import pattern from 'patternomaly'

export default class App extends React.Component {
  render(){
    const downtimeData= {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
         {
            label: 'Dataset 2',
            data: [50, 30, 20, 50],
            type: 'bar',
            backgroundColor: [
            pattern.draw('square', '#ff6384'),
            pattern.draw('circle', '#36a2eb'),
            pattern.draw('diamond', '#cc65fe'),
            pattern.draw('triangle', '#ffce56')
 
            ],
        },
         {
            label: 'Dataset 3',
            data: [50, 30, 20, 50],
            type: 'bar',
        }
        ]
};
const downtimeOptions = {
  legend : {
    display : true,
    position: "right",
    fullWidth: true,
    rtl: false
  },
    scales: {
            yAxes: [{
            stacked: false,
                ticks: {
                    beginAtZero: true
                }
            }],
          xAxes:[{
            // stacked:true,
          }]
        }
};
  return (
    <div className="App">
      <h1>ChartJS Mixed chart example </h1>
      <Bar
        data= {downtimeData}
    options= {downtimeOptions}
      >
      </Bar>
    </div>
  );
  }
}

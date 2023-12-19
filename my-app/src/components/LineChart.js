import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ yData, xYears }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xYears,
        datasets: [
          {
            label: 'Data',
            data: yData,
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Years',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Y-Axis Label',
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [yData, xYears]);

  return <canvas ref={chartRef} />;
};

export default LineChart;

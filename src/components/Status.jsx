import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Status = () => {
  const [chartData] = useState({
    donut: {
      series: [44, 55, 13],
      options: {
        chart: {
          type: 'donut',
        },
        labels: ['Completed', 'Ongoing', 'Penalties'],
        colors: ['#00E396', '#FF4560', '#775DD0'],
        legend: {
          position: 'bottom',
        },
      },
    },
    line: {
      series: [
        {
          name: 'Violations',
          data: [30, 40, 35, 50, 49, 60, 70],
        },
        {
          name: 'Fines',
          data: [20, 30, 40, 35, 50, 60, 70],
        },
      ],
      options: {
        chart: {
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        legend: {
          position: 'top',
        },
        colors: ['#FF4560', '#00E396'],
      },
    },
    bar: {
      series: [
        {
          name: 'Completed',
          data: [10, 20, 15, 30, 25, 35, 40],
        },
        {
          name: 'Ongoing',
          data: [20, 30, 25, 40, 35, 45, 50],
        },
      ],
      options: {
        chart: {
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        legend: {
          position: 'top',
        },
        colors: ['#00E396', '#FF4560'],
      },
    },
  });

  return (
    <div className="bg-white p-4 shadow rounded mb-4 space-y-8">
      <h2 className="text-lg font-semibold">Driving Stats</h2>

      {/* Donut Chart */}
      <div className="mb-8">
        <h3 className="text-md font-semibold mb-4">Donut Chart</h3>
        <ReactApexChart
          options={chartData.donut.options}
          series={chartData.donut.series}
          type="donut"
          height={350}
        />
      </div>

      {/* Line Chart */}
      <div className="mb-8">
        <h3 className="text-md font-semibold mb-4">Line Chart</h3>
        <ReactApexChart
          options={chartData.line.options}
          series={chartData.line.series}
          type="line"
          height={350}
        />
      </div>

      {/* Bar Chart */}
      <div>
        <h3 className="text-md font-semibold mb-4">Bar Chart</h3>
        <ReactApexChart
          options={chartData.bar.options}
          series={chartData.bar.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default Status;

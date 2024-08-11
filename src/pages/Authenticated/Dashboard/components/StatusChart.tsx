"use client";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { FaChevronRight } from "react-icons/fa6";

const StatusChart = () => {
  const series = [
    {
      name: "comments",
      data: [44, 55, 41, 67, 5],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 150,
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        borderRadiusApplication: "end", // 'around', 'end'
        borderRadiusWhenStacked: "last", // 'all', 'last'
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    colors: ["#A9DFD8"],
  };

  return (
    <div className="bg-white pt-7 pb-5 rounded-[10px] flex-1">
      <div className="font-semibold px-5 mb-2">Report Status</div>
      <div className="p-0">
        <Chart options={options} series={series} type="bar" height={150} />
      </div>
      <div className="flex items-center gap-2 px-7 mt-10">
        <div className="text-sm font-medium text-grayColor">Go to reports</div>
        <FaChevronRight size={12} />
      </div>
    </div>
  );
};

export default StatusChart;

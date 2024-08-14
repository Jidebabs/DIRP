"use client";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { FaChevronRight } from "react-icons/fa6";

const SeverityLevelChart = () => {
  const series = [44, 55, 41, 17];
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    labels: ["Low", "Medium", "High", "Critical"],
    colors: ["#16B21C", "#2C0AFC", "#DC0512", "#000000"],
  };

  return (
    <div className="bg-white pt-7 pb-5 rounded-[10px] flex-1">
      <div className="font-semibold px-5 mb-2">Severity Levels</div>
      <div className="p-0">
        <Chart options={options} series={series} type="donut" height={150} />
      </div>
      <div className="flex items-center gap-2 px-7 mt-10">
        <div className="text-sm font-medium text-grayColor">Go to reports</div>
        <FaChevronRight size={12} />
      </div>
    </div>
  );
};

export default SeverityLevelChart;

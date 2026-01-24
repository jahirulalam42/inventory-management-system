import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const OrderChart = ({ data }: any) => {
  // console.log("Order Summary Data", data);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const labels = data?.map((m: any) => {
    return m?.month;
  });

  const dataSet = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Ordered",
        data: data?.map((d: any) => d?.ordered) || [],
        borderColor: "rgb(245, 158, 11)", // amber-500
        backgroundColor: "rgba(245, 158, 11, 0.1)",
      },

      {
        fill: true,
        label: "Delivered",
        data: data?.map((d: any) => d?.delivered) || [],
        borderColor: "rgb(56, 189, 248)", // sky-400
        backgroundColor: "rgba(56, 189, 248, 0.1)",
      },
    ],
  };

  return (
    <div className="w-full h-90 bg-white rounded-sm p-6">
      <h1 className=" flex-auto text-xl">Order Summary</h1>

      <div className="w-full h-full py-2 flex justify-center items-center flex-auto">
        <Line options={options} data={dataSet} />
      </div>
    </div>
  );
};

export default OrderChart;

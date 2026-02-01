"use client";
import React, { useEffect, useState } from "react";
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
  Legend
);

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ProfitAndRevenue = ({ data }: any) => {
  const [dayValue, setDayValue] = useState("daily");
  const [filteredData, setFilteredData] = useState(data?.daily);

  const handleDayValue = (value: any) => {
    setDayValue(value);
  };

  useEffect(() => {
    if (!data) return;

    switch (dayValue) {
      case "daily":
        setFilteredData(data?.daily);
        break;
      case "weekly":
        setFilteredData(data?.weekly);
        break;
      case "monthly":
        setFilteredData(data?.monthly);
        break;
    }
  }, [dayValue, data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const labels = filteredData?.map((d: any) => {
    return d?.day || d?.month || d?.week;
  });

  const dataSet = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Revenue",
        data: filteredData?.map((d: any) => d?.revenue) || [],
        borderColor: "rgb(245, 158, 11)", // amber-500
        backgroundColor: "rgba(245, 158, 11, 0.1)",
      },

      {
        fill: true,
        label: "Profit",
        data: filteredData?.map((d: any) => d?.profit) || [],
        borderColor: "rgb(56, 189, 248)", // sky-400
        backgroundColor: "rgba(56, 189, 248, 0.1)",
      },
    ],
  };
  return (
    <div className="w-full h-96 bg-white rounded-sm p-4 flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-between">
        <h1 className="text-base lg:text-xl">Profit & Revenue</h1>

        <Select onValueChange={handleDayValue} defaultValue="daily">
          <SelectTrigger className="w-full max-w-37.25">
            <SelectValue placeholder="Select Day" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectLabel>Fruits</SelectLabel> */}
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-[98%] h-full py-6 flex justify-center items-center flex-auto">
        <Line options={options} data={dataSet} />
      </div>
    </div>
  );
};

export default ProfitAndRevenue;

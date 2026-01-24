"use client";
import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = ({ data }: any) => {
  // console.log("Data", data);

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
      case "yearly":
        setFilteredData(data?.yearly);
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

  //   const labels = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //   ];

  const labels = filteredData?.map((d: any) => {
    return d?.day || d?.month || d?.week || d?.year;
  });

  const dataSet = {
    labels,
    datasets: [
      {
        label: "Purchase",
        data: filteredData?.map((d: any) => {
          return d?.purchases;
        }),
        backgroundColor: "rgba(8, 255, 6, 0.5)",
        // barThickness: 30,
      },
      {
        label: "Sales",
        data: filteredData?.map((d: any) => {
          return d?.sales;
        }),
        backgroundColor: "rgba(0, 20, 217, 0.5)",
        // barThickness: 40,
      },
    ],
  };
  return (
    <div className="w-full h-90 bg-white rounded-sm py-6 lg:p-6">
      <div className="flex flex-row justify-between">
        <h1 className="h-[20%] flex-auto text-xl">Sales & Purchase</h1>
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
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full h-full py-2 flex justify-center items-center flex-auto">
        <Bar options={options} data={dataSet} />
      </div>
    </div>
  );
};

export default SalesChart;

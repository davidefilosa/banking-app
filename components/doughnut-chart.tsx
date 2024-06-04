"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  const accountNames = ["Bank 1", "Bank 2", "Bank 3", "Bank 4"];
  const balances = [2500, 1050, 750, 700];

  const data = {
    datasets: [
      {
        lablel: "Banks",
        data: balances,
        backgroundColor: ["#FF47b6", "#2265d8", "#2f91fa", "#FF82fa"],
      },
    ],
    labels: accountNames,
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

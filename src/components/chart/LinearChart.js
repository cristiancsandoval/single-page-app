import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { linearChartData } from "@/data/chart";

ChartJS.register(ArcElement, Tooltip, Legend);

const LinearChart = () => {
  return (
    <div>
      <Line
        datasetIdKey="linearChart"
        data={linearChartData}
        width={650}
        height={500}
        options={{
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: "#cbd5e1" },
            },
            y: {
              grid: { display: false },
              ticks: { color: "#cbd5e1" },
            },
          },
        }}
      />
    </div>
  );
};

export default LinearChart;

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const CircularChart = ({ value, label, color }) => {
    const data = {
        datasets: [
            {
                data: [value, 100 - value], // Value and remaining portion
                backgroundColor: [color, "#EAEAEA"], // Main color and gray for remaining
                borderWidth: 0,
            },
        ],
        labels: [label, "Remaining"],
    };

    const options = {
        responsive: true,
        cutout: "70%", // Makes it a doughnut
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.raw}%`,
                },
            },
        },
    };

    return (
        <div className="w-40 h-40">
            <Doughnut data={data} options={options} />
            <div className="text-center mt-2 text-sm font-bold">{label}</div>
        </div>
    );
};

export default CircularChart;

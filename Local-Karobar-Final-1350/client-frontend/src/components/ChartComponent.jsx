import React from 'react'

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const ChartComponent = () => {
    const data = [
        { "_id": "Item A", "avgCostPrize": 50, "avgSellingPrize": 75 },
        { "_id": "Item B", "avgCostPrize": 30, "avgSellingPrize": 45 },
        { "_id": "Item C", "avgCostPrize": 60, "avgSellingPrize": 90 }
    ];


    // Prepare labels and datasets
    const labels = data.map(item => item._id);
    const avgCostPrizeData = data.map(item => item.avgCostPrize);
    const avgSellingPrizeData = data.map(item => item.avgSellingPrize);

    // Define chart data
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Average Cost Prize',
                data: avgCostPrizeData,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Average Selling Prize',
                data: avgSellingPrizeData,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };

    // Chart options
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <h2>Item Data Chart</h2>
            <Bar data={chartData} options={options} />
        </div>
    )
}
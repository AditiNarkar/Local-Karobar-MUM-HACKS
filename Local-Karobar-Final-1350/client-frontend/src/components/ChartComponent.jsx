import React from 'react'

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Chart options
const options = {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

export const ItemDataChart = () => {
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
    return (
        <div>
            <h4 style={{ zIndex: 10000 }}>Item Data Chart</h4>
            <Bar data={chartData} options={options} width={700} />
        </div>
    )
}

// const getBranchData = async () => {
//     return await User.aggregate([
//         { $unwind: "$karobars" },
//         { $unwind: "$karobars.branchData" },
//         {
//             $group: {
//                 _id: "$karobars.branchData.brAddress",
//                 totalBranches: { $sum: 1 },
//                 locations: { $push: { lat: "$karobars.branchData.lat", long: "$karobars.branchData.long" } }
//             }
//         }
//     ]);
// };

export const BranchDataChart = () => {
    const [branchData, setBranchData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            // const data = await getBranchData();
            const data = [{ _id: "Branch A", totalBranches: 5, locations: [{ lat: 34.05, long: -118.25 }] },
            { _id: "Branch B", totalBranches: 3, locations: [{ lat: 40.71, long: -74.01 }] },
            { _id: "Branch C", totalBranches: 8, locations: [{ lat: 37.77, long: -122.42 }] },]
            setBranchData(data);
        };
        fetchData();
    }, []);

    const labels = branchData.map(item => item._id);
    const totalBranchesData = branchData.map(item => item.totalBranches);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Total Branches',
                data: totalBranchesData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    return (
        <div>
            <h4>Branch Data Chart</h4>

            <Bar data={chartData} options={options} width={700} />

        </div>
    );
};

// const getSupplierData = async () => {
//     return await User.aggregate([
//         { $unwind: "$karobars" },
//         { $unwind: "$karobars.suppliers" },
//         {
//             $group: {
//                 _id: "$karobars.suppliers.supplierName",
//                 avgLeadTime: { $avg: "$karobars.suppliers.supplierLeadTime" },
//                 contacts: { $push: "$karobars.suppliers.supplierContact" }
//             }
//         }
//     ]);
// };

export const SupplierDataChart = () => {
    const [supplierData, setSupplierData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // const data = await getSupplierData();
            const data = [
                { _id: "Supplier A", avgLeadTime: 2, contacts: ["123-456-7890", "supplierA@example.com"] },
                { _id: "Supplier B", avgLeadTime: 3, contacts: ["987-654-3210", "supplierB@example.com"] },
                { _id: "Supplier C", avgLeadTime: 1, contacts: ["555-555-5555", "supplierC@example.com"] }
            ]
            setSupplierData(data);
        };
        fetchData();
    }, []);

    const labels = supplierData.map(item => item._id);
    const avgLeadTimeData = supplierData.map(item => item.avgLeadTime);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Average Lead Time',
                data: avgLeadTimeData,
                backgroundColor: 'rgba(100, 206, 86, 0.6)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }
        ]
    };

    return (
        <div>
            <h4>Supplier Data Chart</h4>
            <Bar data={chartData} options={options} width={700} />
        </div>
    );
};

// const getStockData = async () => {
//     return await User.aggregate([
//         { $unwind: "$karobars" },
//         { $unwind: "$karobars.stock" },
//         {
//             $group: {
//                 _id: "$karobars.stock.stockSupplier",
//                 totalStock: { $sum: "$karobars.stock.stockQty" },
//                 minStockLevel: { $min: "$karobars.stock.stockMinLevel" },
//                 maxStockLevel: { $max: "$karobars.stock.stockMaxLevel" }
//             }
//         }
//     ]);
// };

export const StockDataChart = () => {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // const data = await getStockData();
            const data = [
                { _id: "Supplier A", totalStock: 150, minStockLevel: 20, maxStockLevel: 300 },
                { _id: "Supplier B", totalStock: 100, minStockLevel: 10, maxStockLevel: 250 },
                { _id: "Supplier C", totalStock: 200, minStockLevel: 30, maxStockLevel: 400 },
            ];
            setStockData(data);
        };
        fetchData();
    }, []);

    const labels = stockData.map(item => item._id);
    const totalStockData = stockData.map(item => item.totalStock);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Total Stock Quantity',
                data: totalStockData,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    };

    return (
        <div>
            <h4>Stock Data Chart</h4>
            <Bar data={chartData} options={options} width={700} />
        </div>
    );
};
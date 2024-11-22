import React, { useEffect, useRef } from "react";
import { Line, Radar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	RadarController,
	RadialLinearScale,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
	Legend,
} from "chart.js";
import { useSelector } from "react-redux";
import { selectFilteredData } from "../redux/dashboardSlice";

// Register the required Chart.js components
ChartJS.register(
	LineElement,
	RadarController,
	RadialLinearScale,
	CategoryScale,
	LinearScale,
	PointElement,
	Tooltip,
	Legend
);

// Custom plugin for striped background
const backgroundStripesPlugin = {
	id: "backgroundStripes",
	beforeDraw: (chart) => {
		const { ctx, chartArea, config } = chart;

		// Check if the `backgroundStripes` plugin options are defined
		if (!config.options.plugins.backgroundStripes) {
			return;
		}

		const { stripeColor1, stripeColor2 } =
			config.options.plugins.backgroundStripes;

		if (!stripeColor1 || !stripeColor2) {
			return; // Ensure both colors are defined
		}

		const { left, right, top, bottom } = chartArea;
		const stripeWidth = (right - left) / chart.data.labels.length; // Width of each stripe

		for (let i = 0; i < chart.data.labels.length; i++) {
			ctx.fillStyle = i % 2 === 0 ? stripeColor1 : stripeColor2; // Alternating colors
			ctx.fillRect(left + i * stripeWidth, top, stripeWidth, bottom - top); // Draw stripe
		}
	},
};

// Register the custom plugin
ChartJS.register(backgroundStripesPlugin);

// Component
const SalesOverview = ({ isDarkMode }) => {
	const chartRef = useRef(null); // Reference for line chart instance

	const filteredData = useSelector(selectFilteredData);
	useEffect(() => {
		const handleResize = () => {
			const chart = chartRef.current;
			if (chart) {
				chart.resize(); // Dynamically resize the line chart
			}
		};

		// Attach resize event listener
		window.addEventListener("resize", handleResize);

		return () => {
			// Clean up event listener
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Line chart options
	const lineOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false, // Hide the legend
			},
			tooltip: {
				mode: "index",
				intersect: false,
				backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF", // Dynamic background
				titleColor: isDarkMode ? "#FFF" : "#000",
				bodyColor: isDarkMode ? "#FFF" : "#000",
				borderWidth: 1,
				borderColor: isDarkMode ? "#4F46E5" : "#F97316", // Dynamic border
			},
			backgroundStripes: {
				stripeColor1: isDarkMode
					? "rgba(75, 85, 99, 0.2)" // Dark mode stripe
					: "rgba(229, 231, 235, 0.5)", // Light mode stripe
				stripeColor2: isDarkMode
					? "rgba(55, 65, 81, 0.5)" // Alternate dark stripe
					: "rgba(255, 255, 255, 1)", // Alternate light stripe
			},
		},
		scales: {
			x: {
				ticks: {
					color: isDarkMode ? "#9CA3AF" : "#374151",
					font: { size: 12 },
				}, // Dynamic tick color
				grid: { color: isDarkMode ? "rgba(107, 114, 128, 0.1)" : "#E5E7EB" },
			},
			y: {
				ticks: {
					color: isDarkMode ? "#9CA3AF" : "#374151",
					font: { size: 12 },
					callback: (value) => `$${value / 1000}k`,
				},
				grid: {
					color: isDarkMode ? "rgba(107, 114, 128, 0.1)" : "#E5E7EB",
				},
			},
		},
	};

	// Radar chart options
	const radarOptions = {
		responsive: true,
		maintainAspectRatio: false,

		scales: {
			r: {
				ticks: {
					display: false, // Hide the numbers
				},
				grid: {
					color: "rgba(0, 0, 0, 0.1)", // Optional: grid line color
				},
			},
		},
		plugins: {
			legend: {
				display: false, // Hide the legend
			},
		},
		elements: {
			line: {
				borderWidth: 2,
			},
			point: {
				radius: 5,
				backgroundColor: "rgba(79, 70, 229, 1)", // Example: point color
			},
		},
	};

	return (
		<div className=' md:flex gap-4'>
			{/* Line Chart */}
			<div
				className={`p-4 ${
					isDarkMode
						? "bg-[#1F214A] border-gray-700"
						: "bg-white border-gray-300"
				} border rounded-lg shadow-md md:basis-2/3  `}
			>
				<div className='flex justify-between items-center mb-4'>
					<h2
						className={`text-sm font-medium ${
							isDarkMode ? "text-gray-100" : "text-gray-900"
						}`}
					>
						Sales Overview
					</h2>
					<div className='text-xs space-y-1'>
						<div className='flex items-center'>
							<span
								className='w-3 h-3 rounded-full bg-blue-600 inline-block mr-2'
								aria-label='Total Revenue'
							></span>
							<span
								className={`font-medium ${
									isDarkMode ? "text-gray-100" : "text-gray-900"
								}`}
							>
								Total Revenue:
							</span>
							{"  "}
							<span className={isDarkMode ? "text-gray-100" : "text-gray-900"}>
								$
								{filteredData &&
									filteredData.sales_overview.line_data.datasets[0].data.reduce(
										(acc, currentValue) => acc + currentValue,
										0
									)}
							</span>
						</div>
						<div className='flex items-center'>
							<span
								className='w-3 h-3 rounded-full bg-orange-500 inline-block mr-2'
								aria-label='Total Target'
							></span>
							<span
								className={`font-medium ${
									isDarkMode ? "text-gray-100" : "text-gray-900"
								}`}
							>
								Total Target:
							</span>{" "}
							<span className={isDarkMode ? "text-gray-100" : "text-gray-900"}>
								$
								{filteredData &&
									filteredData.sales_overview.line_data.datasets[1].data.reduce(
										(acc, currentValue) => acc + currentValue,
										0
									)}
							</span>
						</div>
					</div>
				</div>
				<div className='relative h-[130px] w-full'>
					{filteredData && (
						<Line
							ref={chartRef}
							data={filteredData.sales_overview.line_data}
							options={lineOptions}
						/>
					)}
				</div>
			</div>

			{/* Radar Chart */}
			<div
				className={`p-4 ${
					isDarkMode
						? "bg-[#1F214A] border-gray-700"
						: "bg-white border-gray-300"
				} border rounded-lg shadow-md md:basis-1/3`}
			>
				<h2
					className={`text-sm font-medium ${
						isDarkMode ? "text-gray-100" : "text-gray-900"
					} mb-4`}
				>
					Sales by Region
				</h2>
				<div className='relative h-[130px] w-full'>
					{filteredData && (
						<Radar
							data={filteredData.sales_overview.radar_data}
							options={radarOptions}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default SalesOverview;

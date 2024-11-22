import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import { selectFilteredData } from "../redux/dashboardSlice";
ChartJS.register(ArcElement, Tooltip, Legend);
const RegisteredUsersComponent = () => {
	const filteredData = useSelector(selectFilteredData);

	const options = {
		rotation: -112, // Start angle (rotate 90 degrees to the top)
		circumference: 225, // Half circle (arc only)
		cutout: "85%", // Inner circle radius for the donut shape
		responsive: true, // Ensure it resizes
		maintainAspectRatio: false, // Allow manual sizing
		plugins: {
			legend: {
				display: false, // Disable the legend
			},
			tooltip: {
				enabled: true,
			},
		},
	};

	return (
    <div className="bg-white dark:bg-[#1F214A] border shadow-lg  dark:border-none min-w-[25rem] h-[13rem]  rounded-lg  text-center">
      <h2 className="text-lg font-semibold   dark:text-white text-black">
        Registered Users
      </h2>
      <div className="relative flex justify-center  h-[8rem] items-center ">
        {filteredData && (
          <Doughnut data={filteredData.registered_users} options={options} />
        )}
        {/* Centered Text */}
        <div className="absolute text-center">
          <div className="flex justify-center items-center mb-1">
            <div className="bg-blue-500 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 11a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            </div>
          </div>
          <p className="text-xl font-bold  dark:text-white text-black">
            {filteredData &&
              filteredData.registered_users.datasets[0].data.reduce(
                (acc, currentValue) => acc + currentValue,
                0
              )}
          </p>
          <p className="text-sm  dark:text-white text-gray-500">Total users</p>
        </div>
      </div>
      {/* User Details */}
      <div className="pl-3   pr-3 flex justify-between">
        <div>
          <p className="text-xl  dark:text-white font-bold text-black">
            {filteredData && filteredData.registered_users.datasets[0].data[0]}
          </p>
          <p className="text-xs  dark:text-white text-gray-500">
            Premium Users
          </p>
        </div>
        <div>
          <p className="text-xl  dark:text-white font-bold text-black">
            {" "}
            {filteredData && filteredData.registered_users.datasets[0].data[1]}
          </p>
          <p className="text-xs  dark:text-white text-gray-500">Basic Users</p>
        </div>
      </div>
    </div>
  );
};

export default RegisteredUsersComponent;

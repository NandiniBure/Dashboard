import React from "react";

const StatCard = ({ title, value, change, isPositive, unit }) => {
  return (
    <div className="bg-white dark:bg-[#1F214A] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 text-center flex flex-col justify-between h-auto sm:h-40 w-full">
      <h3 className="text-sm font-medium text-gray-500 dark:text-white">
        {title}
      </h3>
      <p className="text-2xl font-bold mt-2 text-gray-800 dark:text-gray-200">
        {unit === "%" ? ` ${value} ${unit}` : `${unit} ${value}`}
      </p>
      <div className="flex items-center justify-center gap-2 mt-3">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            isPositive
              ? "bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200"
              : "bg-red-100 text-red-600 dark:bg-red-700 dark:text-red-200"
          }`}
        >
          {isPositive ? "▲" : "▼"} {Math.abs(change)}%
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          Compared to last month
        </span>
      </div>
    </div>
  );
};

export default StatCard;

import React from "react";

const ToggleDarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-2 rounded shadow-md"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleDarkMode;

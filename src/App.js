import { useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "./redux/dashboardSlice";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import ToggleDarkMode from "./Components/ToggleDarkMode";

function App() {
  const [darkMode, setDarkMode] = useState(false);

 const dispatch = useDispatch();

 // Access the full dashboard data from Redux
 const { data, status, error } = useSelector((state) => state.dashboard);

 useEffect(() => {
   if (!data) {
     // Fetch data only if it's not already loaded
     dispatch(fetchDashboardData());
   }
 }, [dispatch, data]);



  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex dark:bg-[#434467]">
        <Sidebar />
        <div className="flex-1 relative">
          {/* <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} /> */}
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;

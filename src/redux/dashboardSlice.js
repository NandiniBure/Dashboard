import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch full dashboard JSON data (GET all data)
export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchDashboardData",
  async () => {
    const response = await fetch("/data/data.json"); // Adjust path if needed
    if (!response.ok) {
      throw new Error("Failed to fetch dashboard data");
    }
    const data = await response.json();
    return data;
  }
);

// Fetch a specific country data (GET method)
export const getCountry = createAsyncThunk(
  "dashboard/getCountry",
  async (countryName, { getState }) => {
    const state = getState().dashboard.data; // Access the full dashboard data
    if (!state) {
      throw new Error("Dashboard data is not loaded yet.");
    }

    // Find the specific country in the data
    const country = state.countries.find(
      (country) => country.country === countryName
    );
    if (!country) {
      throw new Error(`Country ${countryName} not found.`);
    }
    return country;
  }
);

// The slice
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    data: null, // Full dashboard data
    filteredData: null, // Filtered data
    countryData: localStorage.getItem("selectedCountry") || "USA", // Specific country data
    status: "idle", // Status for all data
    countryStatus: "idle", // Status for specific country data
    error: null,
  },
  reducers: {
    // Set a specific country data manually (SET method)
    setCountry(state, action) {
      state.countryData = action.payload; // Payload contains the country data
    },
    // Set filtered data manually
    setFilteredData(state, action) {
      state.filteredData = action.payload; // Payload contains the filtered data
    },
  },
  extraReducers: (builder) => {
    // Fetch all dashboard data
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Fetch specific country data
    builder
      .addCase(getCountry.pending, (state) => {
        state.countryStatus = "loading";
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.countryStatus = "succeeded";
        state.countryData = action.payload;
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.countryStatus = "failed";
        state.error = action.error.message;
      });
  },
});

// Export the actions
export const { setCountry, setFilteredData } = dashboardSlice.actions;

// Export the reducer
export default dashboardSlice.reducer;

// Selector for getting filtered data
export const selectFilteredData = (state) => state.dashboard.filteredData;

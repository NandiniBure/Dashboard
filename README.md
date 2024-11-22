# SellerApp Frontend Assignment

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Setup Instructions](#setup-instructions)
5. [Project Structure](#project-structure)
6. [Implementation Details](#implementation-details)
7. [Bonus Features](#bonus-features)
8. [Deployed Link](#deployed-link)
9. [Future Improvements](#future-improvements)

---

## Introduction
This project is a responsive dashboard web application built using **ReactJS**. The dashboard dynamically loads country-specific data, displays various metrics, and provides an interactive user experience. It follows modern frontend development practices and is styled with **Tailwind CSS**.

---

## Features
1. **Dashboard Layout**:
   - Sidebar with icons-only navigation.
   - Top bar with:
     - Dashboard title.
     - Country switcher dropdown.
     - User profile icon.
   - Main content area for displaying components.

2. **Country Switcher**:
   - Dropdown to select countries like USA, Canada, Germany, and India.
   - Dynamically updates stats based on the selected country.

3. **Stat Cards**:
   - Metrics include Total Income, Profit, Total Views, and Conversion Rate.
   - Displays percentage changes compared to the previous month.

4. **Graphs**:
   - Line chart for Total Revenue and Total Target trends.
   - Radar chart for sales performance by regions.

5. **Registered Users**:
   - Circular progress bar showing the distribution of Premium and Basic users.

6. **Integration Table**:
   - Table with app details, integration type, progress bars, and profit values.

---

## Tech Stack
- **Frontend Framework**: ReactJS
- **Styling**: Tailwind CSS
- **State Management**: Redux
- **Charts**: Chart.js
- **Data**: Mock JSON API

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sellerapp-dashboard.git

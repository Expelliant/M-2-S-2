import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  // Chart data configuration
  const visitorData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Legal Customers',
        data: [400, 300, 200, 100, 0, 150, 250, 300, 400, 350, 300],
        backgroundColor: '#3B82F6',
      },
      {
        label: 'Unique Customers',
        data: [200, 250, 300, 350, 400, 300, 250, 200, 150, 100, 50],
        backgroundColor: '#10B981',
      }
    ]
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="header-section">
        <h1>Q Search</h1>
        <h2>Dashboard</h2>
      </div>

      {/* Main Grid */}
      <div className="dashboard-grid">
        {/* Today's Sales Card */}
        <div className="sales-card">
          <h3>Today's Sales</h3>
          <div className="sales-metrics">
            <div className="metric-item">
              <span className="metric-label">Total Sales</span>
              <span className="metric-value">$589.98k</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">Total Orders</span>
              <span className="metric-value">300</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">Products Sold</span>
              <span className="metric-value">5</span>
            </div>
          </div>
        </div>

        {/* Revenue Section */}
        <div className="revenue-card">
          <h3>Total Revenue</h3>
          <div className="revenue-chart">
            <Bar 
              data={visitorData}
              options={{
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="satisfaction-card">
          <h3>Customer Satisfaction</h3>
          <div className="satisfaction-metrics">
            <div className="satisfaction-item">
              <span>Satisfied</span>
              <span className="positive">53.1%</span>
            </div>
            <div className="satisfaction-item">
              <span>Not Satisfied</span>
              <span className="negative">46.9%</span>
            </div>
          </div>
        </div>

        {/* Sales Analytics */}
        <div className="analytics-card">
          <h3>Sales Analytics</h3>
          <div className="analytics-grid">
            <div className="analytic-item">
              <span>Income</span>
              <h4>$1,760</h4>
            </div>
            <div className="analytic-item">
              <span>Sales</span>
              <h4>345</h4>
            </div>
            <div className="analytic-item">
              <span>Conversion</span>
              <h4>3.5%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
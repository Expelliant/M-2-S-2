import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './Analytics.css';

const Analytics = () => {
  // Chart data configuration
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Legal Customers',
      data: [400, 300, 200, 100, 0, 150, 250, 300, 400, 350, 300],
      backgroundColor: '#3B82F6',
    }]
  };

  return (
    <div className="analytics-container">
      {/* Header Section */}
      <div className="header-section">
        <h1>CBM</h1>
        <h2>Sales Analytics</h2>
        <p>Using data-driven sales strategies to gain insights and boost growth.</p>
      </div>

      {/* Main Grid */}
      <div className="analytics-grid">
        {/* Key Metrics */}
        <div className="metrics-card">
          <div className="metric-category">
            <h3>GeneGuard</h3>
            <div className="metric-items">
              <span>Commercial</span>
              <span>Analytics</span>
            </div>
          </div>
          
          <div className="metric-category">
            <h3>CBM</h3>
            <div className="metric-items">
              <div className="metric-row">
                <span>Vista Customers</span>
                <span>349,123</span>
              </div>
              <div className="metric-row">
                <span>Impressories</span>
                <span>37,075,231</span>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="chart-card">
          <h3>Visitor Insights</h3>
          <div className="chart-container">
            <Bar 
              data={revenueData}
              options={{
                responsive: true,
                maintainAspectRatio: false
              }}
            />
          </div>
        </div>

        {/* Revenue Forecast */}
        <div className="forecast-card">
          <h3>Dual Revenue Forecast</h3>
          <div className="forecast-metrics">
            <div className="forecast-item">
              <span>This Month</span>
              <span className="highlight">82.6%</span>
            </div>
            <div className="forecast-item">
              <span>Total Good Mention</span>
              <span className="positive">+14.4k</span>
            </div>
          </div>
          
          <div className="revenue-table">
            <div className="table-row">
              <span>Sales Nominee</span>
              <span>$14,400</span>
            </div>
            <div className="table-row">
              <span>Ads Business</span>
              <span>$8,237</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
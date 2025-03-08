import React from 'react';
import './Ecommerce.css';

const Ecommerce = () => {
  return (
    <div className="ecommerce-container">
      {/* Header Section */}
      <div className="header-section">
        <h1>MARKETING</h1>
        <h2>MIMOS Ecommerce</h2>
        <div className="welcome-banner">
          <h3>Welcome Back!</h3>
          <p>You have earned 49% more than last month which is great thing.</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="ecommerce-grid">
        {/* Sales Overview */}
        <div className="sales-card">
          <div className="sales-metric">
            <h3>Today's Sales</h3>
            <p className="highlight">$589.98k</p>
          </div>
          <div className="sales-metric">
            <h3>Overall Performance</h3>
            <p className="highlight">49%</p>
          </div>
        </div>

        {/* Orders Section */}
        <div className="orders-card">
          <h3>Orders</h3>
          <div className="metric-grid">
            <div className="metric-item">
              <span>Total Orders</span>
              <p className="positive">+36</p>
            </div>
            <div className="metric-item">
              <span>Customers</span>
              <p>123,400</p>
            </div>
            <div className="metric-item">
              <span>Sales Profit</span>
              <p>25,874</p>
            </div>
          </div>
        </div>

        {/* Product Sales */}
        <div className="product-card">
          <h3>Product Sales</h3>
          <div className="sales-info">
            <p className="monthly-earning">Monthly Earning</p>
            <p className="earning-amount">24,938</p>
          </div>
          <div className="performance-indicator">
            <span className="positive">3.5%</span>
            <span>vs previous month</span>
          </div>
        </div>

        {/* Customer Section */}
        <div className="customer-card">
          <h3>All Customers</h3>
          <div className="customer-info">
            <p>Active Members</p>
            <div className="filter-section">
              <span>Sort By:</span>
              <select>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
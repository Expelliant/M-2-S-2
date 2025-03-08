import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Marketing Dashboard</h1>
      <div className="navigation-cards">
        <Link to="/dashboard" className="nav-card">
          <h2>Dashboard</h2>
          <p>View Key Metrics</p>
        </Link>
        <Link to="/ecommerce" className="nav-card">
          <h2>Ecommerce</h2>
          <p>Sales Analytics</p>
        </Link>
        <Link to="/analytics" className="nav-card">
          <h2>Analytics</h2>
          <p>Detailed Insights</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
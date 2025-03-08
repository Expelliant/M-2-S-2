import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '.vscode/src/components/Auth/AuthForm';
import './Home.css';

export default function Home() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="home-page">
      <div className="auth-container">
        <div className="auth-tabs">
          <button 
            onClick={() => setShowLogin(true)}
            className={showLogin ? 'active' : ''}
          >
            Login
          </button>
          <button
            onClick={() => setShowLogin(false)}
            className={!showLogin ? 'active' : ''}
          >
            Sign Up
          </button>
        </div>
        <AuthForm isLogin={showLogin} />
      </div>

      <div className="page-links">
        <h3>Explore Sections:</h3>
        <Link to="/dashboard" className="page-link">Dashboard</Link>
        <Link to="/ecommerce" className="page-link">Ecommerce</Link>
        <Link to="/analytics" className="page-link">Analytics</Link>
      </div>
    </div>
  );
}
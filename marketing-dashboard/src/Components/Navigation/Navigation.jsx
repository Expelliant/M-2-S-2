import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="main-nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/dashboard" className="nav-link">Dashboard</Link>
      <Link to="/ecommerce" className="nav-link">Ecommerce</Link>
      <Link to="/analytics" className="nav-link">Analytics</Link>
    </nav>
  );
}
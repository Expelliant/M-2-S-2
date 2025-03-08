import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Ecommerce from './pages/Ecommerce/Ecommerce';
import Analytics from './pages/Analytics/Analytics';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
export default App;
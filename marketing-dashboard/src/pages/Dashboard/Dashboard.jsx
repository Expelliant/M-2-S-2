import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './Dashboard.css';

// Reusable Metric Card Component
function MetricCard({ title, value, icon: Icon }) {
  return (
    <Card className="metric-card">
      <CardContent>
        <div className="metric-header">
          <Icon className="metric-icon" />
          <Typography variant="h6" color="textSecondary">
            {title}
          </Typography>
        </div>
        <Typography variant="h4" className="metric-value">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Marketing Dashboard</h1>
      
      <Grid container spacing={3} className="metrics-grid">
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Total Sales"
            value="$589.98k"
            icon={AttachMoneyIcon}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Active Users"
            value="123,400"
            icon={PeopleAltIcon}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Conversion Rate"
            value="3.5%"
            icon={TrendingUpIcon}
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Monthly Profit"
            value="$25,874"
            icon={AttachMoneyIcon}
          />
        </Grid>
      </Grid>

      {/* Fixed Link component */}
      <Link to="/" className="home-link">Back to Home</Link>
    </div>
  );
}
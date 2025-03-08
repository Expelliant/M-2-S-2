// src/components/MetricCard.jsx
import { Card, Typography } from '@mui/material';

export default function MetricCard({ title, value }) {
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </Card>
  );
}
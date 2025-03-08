// src/components/ProductCard.jsx
import { Card, CardMedia, Button } from '@mui/material';

export default function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia component="img" image={product.image} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Button>Add to Cart</Button>
    </Card>
  );
}
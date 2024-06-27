// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={`https://source.unsplash.com/random/200x200?sig=${product.id}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
        <Button component={Link} to={`/product/${product.id}`} variant="contained" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

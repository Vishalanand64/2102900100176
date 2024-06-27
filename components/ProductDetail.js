// src/components/ProductDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/Laptop/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product detail:', error);
    }
  };

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Box>
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h6">
          Company: {product.company}
        </Typography>
        <Typography variant="h6">
          Category: {product.category}
        </Typography>
        <Typography variant="h6">
          Price: ${product.price}
        </Typography>
        <Typography variant="h6">
          Rating: {product.rating}
        </Typography>
        <Typography variant="h6">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="h6">
          Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </Box>
    </Container>
  );
};

export default ProductDetail;

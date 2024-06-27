// src/components/Filter.js

import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';

const Filter = ({ products, onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [availability, setAvailability] = useState('');

  const handleFilter = () => {
    let filtered = [...products];
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    if (company) {
      filtered = filtered.filter(product => product.company === company);
    }
    if (rating) {
      filtered = filtered.filter(product => product.rating >= rating);
    }
    if (minPrice) {
      filtered = filtered.filter(product => product.price >= minPrice);
    }
    if (maxPrice) {
      filtered = filtered.filter(product => product.price <= maxPrice);
    }
    if (availability) {
      filtered = filtered.filter(product => product.availability === availability);
    }
    onFilterChange(filtered);
  };

  return (
    <Box display="flex" flexDirection="column" marginBottom={2}>
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        variant="outlined"
        margin="normal"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Pendrive">Pendrive</MenuItem>
        <MenuItem value="Remote">Remote</MenuItem>
        <MenuItem value="Speaker">Speaker</MenuItem>
        <MenuItem value="Headset">Headset</MenuItem>
        <MenuItem value="Laptop">Laptop</MenuItem>
        <MenuItem value="PC">PC</MenuItem>
      </TextField>
      <TextField
        select
        label="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        variant="outlined"
        margin="normal"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="AMZ">Amazon</MenuItem>
        <MenuItem value="WMT">Walmart</MenuItem>
        <MenuItem value="BBY">Best Buy</MenuItem>
        <MenuItem value="TGT">Target</MenuItem>
        <MenuItem value="BJS">BJ's</MenuItem>
      </TextField>
      <TextField
        label="Rating"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Min Price"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Max Price"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        select
        label="Availability"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        variant="outlined"
        margin="normal"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="In Stock">In Stock</MenuItem>
        <MenuItem value="Out of Stock">Out of Stock</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Filter
      </Button>
    </Box>
  );
};

export default Filter;

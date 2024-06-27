

import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button } from '@mui/material';

const Sort = ({ products, onSortChange }) => {
  const [sortOption, setSortOption] = useState('');

  const handleSort = () => {
    let sorted = [...products];
    if (sortOption === 'price') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'discount') {
      sorted.sort((a, b) => b.discount - a.discount);
    }
    onSortChange(sorted);
  };

  return (
    <Box display="flex" justifyContent="flex-end" marginBottom={2}>
      <TextField
        select
        label="Sort By"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        variant="outlined"
        margin="normal"
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="discount">Discount</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleSort}>
        Sort
      </Button>
    </Box>
  );
};

export default Sort;

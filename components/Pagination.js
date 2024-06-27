// src/components/Pagination.js

import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ productsPerPage, totalProducts, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(totalProducts / productsPerPage);

  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <MuiPagination
      count={pageCount}
      page={currentPage}
      onChange={handleChange}
      color="primary"
    />
  );
};

export default Pagination;

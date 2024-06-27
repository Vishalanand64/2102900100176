import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(
      `${API_URL}/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    const products = response.data.map((product) => ({
      ...product,
      id: uuidv4(),
    }));
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductDetail = async (company, category, productId) => {
  try {
    const response = await axios.get(`${API_URL}/companies/${company}/categories/${category}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product detail:', error);
    throw error;
  }
};

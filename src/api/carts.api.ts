// import { httpClient } from './http';

// interface AddCartParams {
//   book_id: number;
//   quantity: number;
// }

// export const addCart = async (params: AddCartParams) => {
//   const response = await httpClient.post('/carts', params);
//   return response.data;
// };

// export const fetchCart = async () => {
//   const response = await httpClient.get('/carts');
//   return response.data;
// };

import axios from 'axios';
// import { httpClient } from './http';

interface AddCartParams {
  book_id: number;
  quantity: number;
}

const httpClient = axios.create({
  baseURL: 'http://localhost:9999/',
  withCredentials: true,
});

export const addCart = async (params: AddCartParams) => {
  const response = await httpClient.post('/carts', params);
  // return response.data;
  return Array.isArray(response.data.result) ? response.data.result : [];
};

export const fetchCart = async () => {
  const response = await httpClient.get('/carts');
  return response.data;
};

export const deleteCart = async (cartId: number) => {
  const response = await httpClient.delete(`/carts/${cartId}`);
  return response.data;
};

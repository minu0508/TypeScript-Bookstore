import { OrderSheet } from '../models/order.model';
import { httpClient } from './http';

export const order = async (orderData: OrderSheet) => {
  console.log('@@@ orderData: ', orderData);
  const response = await httpClient.post('/orders', orderData);
  return response.data;
};

export const fetchOrders = async () => {
  // const response = await httpClient.get<Order[]>('/orders');
  const response = await httpClient.get('/orders');
  return response.data;
};

export const fetchOrder = async (orderId: number) => {
  const response = await httpClient.get(`/orders/${orderId}`);
  return response.data;
};

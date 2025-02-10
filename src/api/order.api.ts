import { OrderSheet } from '@/models/order.model';
import { requestHandler } from './http';

export const order = async (orderData: OrderSheet) => {
  return await requestHandler<OrderSheet>('post', '/orders', orderData);
};

export const fetchOrders = async () => {
  return await requestHandler('get', '/orders');
};

export const fetchOrder = async (orderId: number) => {
  return await requestHandler('get', `/orders/${orderId}`);
};

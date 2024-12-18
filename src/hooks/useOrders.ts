import { useEffect, useState } from 'react';
import { Order } from '../models/order.model';
import { fetchOrders } from '../api/order.api';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetchOrders().then((orders) => {
      setOrders(orders);
    });
  }, []);

  return { orders };
};

import { Order } from '@/models/order.model';
import { useEffect, useState } from 'react';
import { fetchOrder, fetchOrders } from '@/api/order.api';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>();

  useEffect(() => {
    fetchOrders().then((orders) => {
      setOrders(orders.result);
    });
  }, []);

  const selectOrderItem = (orderId: number) => {
    if (orders.filter((item) => item.oid === orderId)[0].detail) {
      setSelectedItemId(orderId);
    }

    fetchOrder(orderId).then((orderDetail) => {
      console.log('@@@ orderDetail', orderDetail);
      setSelectedItemId(orderId);
      setOrders(
        orders.map((item) => {
          if (item.oid === orderId) {
            return {
              ...item,
              detail: orderDetail,
            };
          }
          return item;
        })
      );
    });
  };

  return { orders, selectedItemId, selectOrderItem };
};

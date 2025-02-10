import { Cart } from '@/models/cart.model';
import { useEffect, useState } from 'react';
import { deleteCart, fetchCart } from '@/api/carts.api';

export const useCart = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const deleteCartItem = (id: number) => {
    deleteCart(id).then(() => {
      setCarts((prevCarts) => {
        const newCarts = prevCarts.filter((cart) => cart.id !== id);
        setIsEmpty(newCarts.length === 0);
        return newCarts;
      });
    });
  };

  useEffect(() => {
    fetchCart()
      .then((carts) => {
        setCarts(carts.result);
        setIsEmpty(carts.result.length === 0);
      })
      .catch((error) => {});
  }, []);

  return { carts, isEmpty, deleteCartItem };
};

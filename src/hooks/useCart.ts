// import { useEffect, useState } from 'react';
// import { Cart } from '../models/cart.model';
// import { fetchCart } from '../api/carts.api';

// export const useCart = () => {
//   const [carts, setCarts] = useState<Cart[]>([]);
//   const [isEmpty, setIsEmpty] = useState(true);

//   useEffect(() => {
//     fetchCart().then((carts) => {
//       setCarts(carts);
//       setIsEmpty(carts.length === 0);
//     });
//   }, []);
//   return { carts, isEmpty };
// };

import { useEffect, useState } from 'react';
import { Cart } from '../models/cart.model';
import { deleteCart, fetchCart } from '../api/carts.api';

export const useCart = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const deleteCartItem = (id: number) => {
    deleteCart(id).then(() => {
      setCarts(carts.filter((cart) => cart.id !== id));
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

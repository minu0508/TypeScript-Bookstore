import { useState } from 'react';
import { CartItem } from '../../components/atoms/Cart';
import { Title } from '../../components/atoms/Title';
import { useCart } from '../../hooks/useCart';
import { CartStyle } from './Cart.style';

export const Cart = () => {
  const { carts, deleteCartItem } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const handleCheckItem = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };
  const handleDeleteItem = (id: number) => {
    deleteCartItem(id);
  };

  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        <div className="content">
          {carts.map((item) => {
            return (
              <CartItem
                key={item.id}
                cart={item}
                checkedItems={checkedItems}
                onCheck={handleCheckItem}
                onDelete={handleDeleteItem}
              />
            );
          })}
        </div>
        <div className="summary">summary</div>
      </CartStyle>
    </>
  );
};

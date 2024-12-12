import { useMemo, useState } from 'react';
import { CartItem } from '../../components/molecules/CartItem';
import { Title } from '../../components/atoms/Title';
import { useCart } from '../../hooks/useCart';
import { CartStyle } from './Cart.style';
import { Empty } from '../../components/molecules/CartEmpty';
import { FaShoppingCart } from 'react-icons/fa';
import { CartTemplate } from '../../components/templates/CartTemplate';
import { CartSummary } from '../../components/atoms/CartSummary';

export const Cart = () => {
  const { carts, isEmpty, deleteCartItem } = useCart();
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
  const totalQuantity = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return Number(acc) + Number(cart.quantity);
      }
      console.log(acc);
      return acc;
    }, 0);
  }, [carts, checkedItems]);
  const totalPrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.price * cart.quantity;
      }
      return acc;
    }, 0);
  }, [carts, checkedItems]);

  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        <CartTemplate>
          {!isEmpty && (
            <>
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

              <div className="summary">
                <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
              </div>
            </>
          )}
          {isEmpty && (
            <Empty title="장바구니가 비었습니다." icon={<FaShoppingCart />} description={<>장바구니를 채워보세요.</>} />
          )}
        </CartTemplate>
      </CartStyle>
    </>
  );
};

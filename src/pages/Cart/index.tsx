import { Title } from '@/components/atoms/Title';
import { Empty } from '@/components/molecules/CartEmpty';
import { Button } from '@/components/atoms/Button';
import { useCart } from '@/hooks/useCart';
import { useAlert } from '@/hooks/useAlert';
import { CartItem } from '@/components/molecules/CartItem';
import { OrderSheet } from '@/models/order.model';
import { useNavigate } from 'react-router-dom';
import { CartSummary } from '@/components/atoms/CartSummary';
import { CartTemplate } from '@/components/templates/CartTemplate';
import { FaShoppingCart } from 'react-icons/fa';
import { useMemo, useState } from 'react';

export const Cart = () => {
  const { showAlert, showConfirm } = useAlert();
  const navigate = useNavigate();
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

  const handleOrder = () => {
    if (checkedItems.length === 0) {
      showAlert('주문할 상품을 선택해 주세요.');
      return;
    }
    const orderData: Omit<OrderSheet, 'delivery'> = {
      items: checkedItems,
      totalPrice,
      totalQuantity,
      firstBookTitle: carts[0].title,
    };

    showConfirm('주문 하시겠습니까?', () => {
      /** order라는 주소로 이동할 때, state도 같이 수신할 수 있게 한다. */
      navigate('/order', { state: orderData });
    });
  };

  console.log('@@@ carts: ', carts);
  return (
    <>
      <Title size="large">장바구니</Title>
      {!isEmpty && (
        <CartTemplate>
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
            <Button size="large" scheme="primary" onClick={handleOrder}>
              주문 하기
            </Button>
          </div>
        </CartTemplate>
      )}
      {isEmpty && (
        <Empty title="장바구니가 비었습니다." icon={<FaShoppingCart />} description={<>장바구니를 채워보세요.</>} />
      )}
    </>
  );
};

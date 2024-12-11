import { CartItem } from '../../components/atoms/Cart';
import { Title } from '../../components/atoms/Title';
import { useCart } from '../../hooks/useCart';
import { CartStyle } from './Cart.style';

export const Cart = () => {
  const { carts } = useCart();
  console.log('@@@ carts: ', carts);
  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        <div className="content">
          {carts.map((item) => {
            console.log('@@@ cart item: ', item);
            return <CartItem key={item.id} cart={item} />;
          })}
        </div>
        <div className="summary">summary</div>
      </CartStyle>
    </>
  );
};

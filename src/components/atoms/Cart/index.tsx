import { Cart } from '../../../models/cart.model';
import { formatNumber } from '../../../utils/format';
import { Button } from '../Button';
import { CheckIconButton } from '../CheckIconButton';
import { Title } from '../Title';
import * as S from './CartItem.style';

interface CartItemProps {
  cart: Cart;
}

export const CartItem = ({ cart }: CartItemProps) => {
  return (
    <S.CartItemStyle>
      <div className="info">
        <CheckIconButton />
        <div>
          <Title size="medium">{cart.title}</Title>
          <p className="summary">{cart.summary}</p>
          <p className="price">{formatNumber(cart.price)}원</p>
          <p className="quantity">{cart.quantity}권</p>
        </div>
      </div>
      <Button size="medium" scheme="normal">
        장바구니 삭제
      </Button>
    </S.CartItemStyle>
  );
};

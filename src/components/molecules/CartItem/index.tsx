import * as S from './CartItem.style';
import { Cart } from '@/models/cart.model';
import { Title } from '@/components/atoms/Title';
import { Button } from '@/components/atoms/Button';
import { useMemo } from 'react';
import { useAlert } from '@/hooks/useAlert';
import { formatNumber } from '@/utils/format';
import { CheckIconButton } from '@/components/atoms/CheckIconButton';

interface CartItemProps {
  cart: Cart;
  checkedItems: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

export const CartItem = ({ cart, checkedItems, onCheck, onDelete }: CartItemProps) => {
  const { showConfirm } = useAlert();
  /** checkedItems 목록에서 사용자가 있는지를 판단하는 것이 checked이다. */
  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);

  const handleCheck = () => {
    onCheck(cart.id);
  };

  const handleDelete = () => {
    showConfirm('정말 삭제하시겠습니까?', () => {
      onDelete(cart.id);
    });
  };

  return (
    <S.CartItemStyle>
      <div className="info">
        <div className="check">
          <CheckIconButton isChecked={isChecked} onCheck={handleCheck} />
        </div>
        <div>
          <Title size="medium">{cart.title}</Title>
          <p className="summary">{cart.summary}</p>
          <p className="price">{formatNumber(cart.price)}원</p>
          <p className="quantity">{cart.quantity}권</p>
          <p className="price">금액: {formatNumber(cart.price * cart.quantity)}원</p>
        </div>
      </div>
      <Button size="medium" scheme="normal" onClick={handleDelete}>
        장바구니 삭제
      </Button>
    </S.CartItemStyle>
  );
};

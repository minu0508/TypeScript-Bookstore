import * as S from './CartSummary.style';
import { formatNumber } from '@/utils/format';

interface CartSummaryProps {
  totalQuantity: number;
  totalPrice: number;
}

export const CartSummary = ({ totalQuantity, totalPrice }: CartSummaryProps) => {
  return (
    <S.CartSummaryStyle>
      <h1>주문 요약</h1>
      <dl>
        <dt>총 수량</dt>
        <dd>{totalQuantity} 권</dd>
      </dl>
      <dl>
        <dt>총 금액</dt>
        <dd>{formatNumber(totalPrice)} 원</dd>
      </dl>
    </S.CartSummaryStyle>
  );
};

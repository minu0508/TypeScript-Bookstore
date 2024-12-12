import { useState } from 'react';
import { BookDetail } from '../../../models/book.model';
import { Button } from '../../atoms/Button';
import { InputText } from '../../atoms/InputText';
import * as S from './AddToCart.style';
import { Link } from 'react-router-dom';
import { useBook } from '../../../hooks/useBook';

interface CartProps {
  book: BookDetail;
}

export const AddToCart = ({ book }: CartProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, cartAdded } = useBook(book.bid.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <S.AddToCartStyle $added={cartAdded}>
      <div>
        <InputText inputType="number" value={quantity} onChange={handleChange} />
        <Button size="medium" scheme="normal" onClick={handleIncrease}>
          +
        </Button>
        <Button size="medium" scheme="normal" onClick={handleDecrease}>
          -
        </Button>
      </div>
      <Button size="medium" scheme="primary" onClick={() => addToCart(quantity)}>
        장바구니 담기
      </Button>
      {cartAdded && (
        <div className="added">
          <p>장바구니에 추가되었습니다.</p>
          <Link to="/cart">장바구니로 이동</Link>
        </div>
      )}
    </S.AddToCartStyle>
  );
};

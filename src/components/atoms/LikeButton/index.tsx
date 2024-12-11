import { BookDetail } from '../../../models/book.model';
import * as S from './LikeButton.style';
import { FaHeart } from 'react-icons/fa';

interface LikeButtonProps {
  book: BookDetail;
  onClick: () => void;
}

export const LikeButton = ({ book, onClick }: LikeButtonProps) => {
  return (
    <S.LikeButtonStyle size="medium" scheme={book.likes ? 'like' : 'normal'} onClick={onClick}>
      <FaHeart />
      {book.likes}
    </S.LikeButtonStyle>
  );
};

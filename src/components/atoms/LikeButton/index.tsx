import { BookDetail } from '../../../models/book.model';
import * as S from './LikeButton.style';

interface LikeButtonProps {
  book: BookDetail;
  onClick: () => void;
}

export const LikeButton = ({ book, onClick }: LikeButtonProps) => {
  return (
    <S.LikeButtonStyle>
      <h1>LikeButton</h1>
    </S.LikeButtonStyle>
  );
};

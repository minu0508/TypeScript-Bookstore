import { useParams } from 'react-router-dom';
import * as S from './Book.style';
import { useBook } from '../../hooks/useBook';

export const BookDetail = () => {
  const { bookId } = useParams();
  const { book } = useBook(bookId);

  if (!book) return null;

  return <S.BookDetailStyle>{book.title}</S.BookDetailStyle>;
};

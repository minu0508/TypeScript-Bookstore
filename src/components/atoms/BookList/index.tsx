import { Book } from '../../../models/book.model';
import { BookItem } from '../BookItem';
import * as S from './BooksList.style';

interface BooksListProps {
  books: Book[];
}

export const BooksList = ({ books }: BooksListProps) => {
  return (
    <S.BookListStyle>
      {books?.map((item) => (
        <BookItem key={item.id} book={item} />
      ))}
    </S.BookListStyle>
  );
};

import { BooksEmpty } from '../../components/atoms/BookEmpty';
import { BooksFilter } from '../../components/atoms/BookFilter';
import { BooksList } from '../../components/atoms/BookList';
import { BooksViewSwitcher } from '../../components/atoms/BooksViewSwitcher';
import { Pagination } from '../../components/atoms/Pagination';
import { Title } from '../../components/atoms/Title';
import { useBooks } from '../../hooks/useBooks';
import * as S from './Book.style';

export const Books = () => {
  const { books, pagination, isEmpty } = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <S.BookStyle>
        <S.BookFillter>
          <BooksFilter />
          <BooksViewSwitcher />
        </S.BookFillter>
        {!isEmpty && <BooksList books={books} />}
        {isEmpty && <BooksEmpty />}
        {!isEmpty && <Pagination pagination={pagination} />}
      </S.BookStyle>
    </>
  );
};

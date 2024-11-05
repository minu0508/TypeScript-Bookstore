import { BooksEmpty } from '../../components/atoms/BookEmpty';
import { BooksFilter } from '../../components/atoms/BookFilter';
import { BooksList } from '../../components/atoms/BookList';
import { BooksViewSwitcher } from '../../components/atoms/BooksViewSwitcher';
import { Pagination } from '../../components/atoms/Pagination';
import { Title } from '../../components/atoms/Title';
import * as S from './Books.style';

export const Books = () => {
  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <S.BookStyle>
        <BooksFilter />
        <BooksViewSwitcher />
        <BooksList />
        <BooksEmpty />
        <Pagination />
      </S.BookStyle>
    </>
  );
};

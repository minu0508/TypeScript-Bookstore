import * as S from './Book.style';
import { Title } from '@/components/atoms/Title';
import { useBooks } from '@/hooks/useBooks';
import { BooksList } from '@/components/organisms/BookList';
import { BooksEmpty } from '@/components/atoms/BookEmpty';
import { Pagination } from '@/components/atoms/Pagination';
import { BooksFilter } from '@/components/organisms/BookFilter';
import { BooksViewSwitcher } from '@/components/molecules/BooksViewSwitcher';

export const Books = () => {
  const { books, pagination, isEmpty, isBooksLoading } = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <S.BookStyle>
        <S.BookFillter>
          <BooksFilter />
          <BooksViewSwitcher />
        </S.BookFillter>
        {!isEmpty && books && <BooksList books={books} />}
        {isEmpty && <BooksEmpty />}
        {!isEmpty && pagination && <Pagination pagination={pagination} />}
      </S.BookStyle>
    </>
  );
};

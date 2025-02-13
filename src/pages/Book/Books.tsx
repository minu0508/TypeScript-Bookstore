import * as S from './Book.style';
import { Title } from '@/components/atoms/Title';
import { useBooks } from '@/hooks/useBooks';
import { BooksList } from '@/components/organisms/BookList';
import { BooksEmpty } from '@/components/atoms/BookEmpty';
import { Pagination } from '@/components/atoms/Pagination';
import { BooksFilter } from '@/components/organisms/BookFilter';
import { BooksViewSwitcher } from '@/components/molecules/BooksViewSwitcher';
import { Loading } from '@/components/atoms/Loading';

export const Books = () => {
  const { books, pagination, isEmpty, isBooksLoading } = useBooks();

  if (isEmpty) {
    return <BooksEmpty />;
  }
  if (!books || !pagination || isBooksLoading) {
    return <Loading />;
  }

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <S.BookStyle>
        <S.BookFillter>
          <BooksFilter />
          <BooksViewSwitcher />
        </S.BookFillter>
        <BooksList books={books} />
        <Pagination pagination={pagination} />
      </S.BookStyle>
    </>
  );
};

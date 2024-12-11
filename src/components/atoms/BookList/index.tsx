import { useLocation } from 'react-router-dom';
import { Book } from '../../../models/book.model';
import { BookItem } from '../BookItem';
import * as S from './BooksList.style';
import { useEffect, useState } from 'react';
import { QUERYSTRING } from '../../../constants/querystring';
import { ViewMode } from '../BooksViewSwitcher';

interface BooksListProps {
  books: Book[];
}

export const BooksList = ({ books }: BooksListProps) => {
  const [view, setView] = useState<ViewMode>('grid');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get(QUERYSTRING.VIEW)) {
      setView(params.get(QUERYSTRING.VIEW) as ViewMode);
    }
  }, [location.search]);

  return (
    <S.BookListStyle view={view}>
      {books?.map((item) => (
        <BookItem key={item.bid} book={item} view={view} />
      ))}
    </S.BookListStyle>
  );
};

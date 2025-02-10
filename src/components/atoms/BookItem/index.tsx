import * as S from '@/components/atoms/BookItem/BooksItem.style';
import { Link } from 'react-router-dom';
import { Book } from '@/models/book.model';
import { FaHeart } from 'react-icons/fa';
import { ViewMode } from '@/components/molecules/BooksViewSwitcher';
import { getImgSrc } from '@/utils/image';
import { formatNumber } from '@/utils/format';

export interface BookItemProps {
  book: Book;
  view?: ViewMode;
}

export const BookItem = ({ book, view }: BookItemProps) => {
  return (
    <S.BookItemStyle view={view}>
      <Link to={`/book/${book.bid}`}>
        <div className="img">
          <img src={getImgSrc(book.imgNo)} alt={book.title} />
        </div>
        <div className="content">
          <h2 className="title">{book.title}</h2>
          <p className="summary">{book.summary}</p>
          <p className="author">{book.author}</p>
          <p className="price">{formatNumber(book.price)}원</p>
          <div className="likes">
            <FaHeart />
            <span>{book.likes}</span>
          </div>
        </div>
      </Link>
    </S.BookItemStyle>
  );
};

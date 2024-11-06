import { FaHeart } from 'react-icons/fa';
import { Book } from '../../../models/book.model';
import { formatNumber } from '../../../utils/format';
import { getImgSrc } from '../../../utils/image';
import * as S from './BooksItem.style';

interface BookItemProps {
  book: Book;
}

export const BookItem = ({ book }: BookItemProps) => {
  return (
    <S.BookItemStyle>
      <div className="img">
        <img src={getImgSrc(book.img)} alt={book.title} />
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
    </S.BookItemStyle>
  );
};

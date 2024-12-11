import { Link, useParams } from 'react-router-dom';
import * as S from './Book.style';
import { useBook } from '../../hooks/useBook';
import { getImgSrc } from '../../utils/image';
import { Title } from '../../components/atoms/Title';
import { BookDetail as IBookDetail } from '../../models/book.model';
import { formatDate, formatNumber } from '../../utils/format';
import { EllipsisBox } from '../../components/atoms/EllipsisBox';
import { LikeButton } from '../../components/atoms/LikeButton';
import { AddToCart } from '../../components/atoms/AddToCart';

const bookInfoList = [
  {
    label: '카테고리',
    key: 'categoryName',
    filter: (book: IBookDetail) => <Link to={`/books?category_id=${book.category_id}`}>{book.categoryName}</Link>,
  },
  {
    label: '포맷',
    key: 'form',
  },
  {
    label: '페이지',
    key: 'pages',
  },
  {
    label: 'ISBN',
    key: 'isbn',
  },
  {
    label: '출간일',
    key: 'pubDate',
    filter: (book: IBookDetail) => {
      return formatDate(book.pubDate);
    },
  },
  {
    label: '가격',
    key: 'price',
    filter: (book: IBookDetail) => {
      return `${formatNumber(book.price)} 원`;
    },
  },
];

export const BookDetail = () => {
  const { bookId } = useParams();
  const { book, likeToggle } = useBook(bookId);

  if (!book) return null;

  return (
    <S.BookDetailStyle>
      <header className="header">
        <div className="img">
          <img src={getImgSrc(book.imgNo)} alt={book.title} />
        </div>
        <div className="info">
          <Title size="large" color="text">
            {book.title}
          </Title>
          {bookInfoList.map((item) => (
            <dl>
              <dt>{item.label}</dt>
              <dd>{item.filter ? item.filter(book) : book[item.key as keyof IBookDetail]}</dd>
            </dl>
          ))}
          <p className="summary">{book.summary}</p>
          <div className="like">
            <LikeButton book={book} onClick={likeToggle} />
          </div>
          <div className="add-cart">
            <AddToCart book={book} />
          </div>
        </div>
      </header>
      <div className="content">
        <Title size="medium">상세 설명</Title>
        <EllipsisBox lineLimit={4}>{book.detail}</EllipsisBox>
        <Title size="medium">목차</Title>
        <p className="index">{book.contents}</p>
      </div>
    </S.BookDetailStyle>
  );
};

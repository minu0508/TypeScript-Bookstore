import { FaSmileWink } from 'react-icons/fa';
import * as S from './BooksEmpty.style';
import { Title } from '../Title';
import { Link } from 'react-router-dom';

export const BooksEmpty = () => {
  return (
    <S.BooksEmptyStyle>
      <div className="icon">
        <FaSmileWink />
      </div>
      <Title size="large" color="secondary">
        검색 결과가 없습니다.
      </Title>
      <p>
        <Link to={'/books'}>전체 검색 결과로 이동</Link>
      </p>
    </S.BooksEmptyStyle>
  );
};

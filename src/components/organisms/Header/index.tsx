import * as S from './Header.style';
import MainLogo from '../../../styles/assets/image/imgae_main_logo.jpg';
import { FaSignInAlt, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCategory } from '../../../hooks/useCategory';

export const Header = () => {
  const { category } = useCategory();

  return (
    <>
      <S.Header>
        <h1 className="logo">
          <Link to={'/'}>
            <img src={MainLogo} alt="Book Store" />
          </Link>
        </h1>
        <nav className="category">
          <ul>
            {category.map((item) => (
              <li key={item.id}>
                <Link to={item.id === null ? `/books` : `/books?category_id=${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="auth">
          <ul>
            <li>
              <a href="/login">
                <FaSignInAlt />
                로그인
              </a>
            </li>
            <li>
              <a href="/signup">
                <FaRegUser />
                회원가입
              </a>
            </li>
          </ul>
        </nav>
      </S.Header>
    </>
  );
};

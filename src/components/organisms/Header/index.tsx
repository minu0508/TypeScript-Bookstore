import { ThemeSwitcher } from '../../atoms/ThemeSwitcher';
import * as S from './Header.style';
import MainLogo from '../../../styles/assets/image/imgae_main_logo.jpg';
import { FaSignInAlt, FaRegUser } from 'react-icons/fa';

const CATEGORY = [
  {
    id: null,
    name: '전체',
  },
  {
    id: 0,
    name: '동화',
  },
  {
    id: 1,
    name: '소설',
  },
  {
    id: 2,
    name: '사회',
  },
];

export const Header = () => {
  return (
    <>
      <S.Header>
        <h1 className="logo">
          <img src={MainLogo} alt="Book Store" />
        </h1>
        <nav className="category">
          <ul>
            {CATEGORY.map((item) => (
              <li key={item.id}>
                <a href={item.id === null ? `/books` : `/books?category_id=${item.id}`}>{item.name}</a>
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
              <a href="/login">
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

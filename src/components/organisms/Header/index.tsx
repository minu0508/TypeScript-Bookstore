import * as S from './Header.style';
import MainLogo from '../../../styles/assets/image/imgae_main_logo.jpg';
import { FaSignInAlt, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCategory } from '../../../hooks/useCategory';
import { useAuthStore } from '../../../store/authStore';

export const Header = () => {
  const { category } = useCategory();
  const { isloggedIn, storeLogout } = useAuthStore();

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
                <Link to={item.id === null ? `/books` : `/books?category_id=${item.id}`}>{item.categoryName}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="auth">
          {isloggedIn && (
            <ul>
              <li>
                <Link to="/cart">장바구니</Link>
              </li>
              <li>
                <Link to="/orderlist">주문내역</Link>
              </li>
              <li>
                <button onClick={storeLogout}>로그아웃</button>
              </li>
            </ul>
          )}
          {!isloggedIn && (
            <ul>
              <li>
                <Link to="/login">
                  <FaSignInAlt />
                  로그인
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <FaRegUser />
                  회원가입
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </S.Header>
    </>
  );
};

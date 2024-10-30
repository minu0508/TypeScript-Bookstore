import { ThemeSwitcher } from '../../Header/ThemeSwitcher';
import * as S from './Header.style';

export const Header = () => {
  return (
    <>
      <S.Header>
        <header>
          <h1>Book Store</h1>
          <ThemeSwitcher />
        </header>
      </S.Header>
    </>
  );
};

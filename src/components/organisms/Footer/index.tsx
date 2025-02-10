import * as S from './Footer.style';
import MainLogo from '@/styles/assets/image/imgae_main_logo.jpg';

export const Footer = () => {
  return (
    <S.FooterStyle>
      <h1 className="logo">
        <img src={MainLogo} alt="Book Store" />
      </h1>
      <div className="copyright">
        <p>copyright(c), 2024, book store</p>
      </div>
    </S.FooterStyle>
  );
};

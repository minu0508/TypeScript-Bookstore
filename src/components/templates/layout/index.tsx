import { Footer } from '../../organisms/Footer';
import { Header } from '../../organisms/Header';
import * as S from './layout.style';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {/* 
        아래의 LayoutStyle의 CSS 속성을 보면, Header와 Footer와 동일한 것을 알 수 있다.
        이렇게 동일하여도 분리해서 사용하는 이유는, body에 해당하는 이 부분이 추후 디자인에 따라 화면 전체를 사용해야 되는
        상황이 생기기 때문에 이런 확장성을 고려했을 때 중복 코드가 생기더라도 분리하는 전략이 더 유리하다 볼 수 있다.
      */}
      <S.LayoutStyle>{children}</S.LayoutStyle>
      <Footer />
    </>
  );
};

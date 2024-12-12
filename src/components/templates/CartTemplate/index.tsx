import * as S from './CartTemplate.style';

interface CartTemplateProps {
  children: React.ReactNode;
}

export const CartTemplate = ({ children }: CartTemplateProps) => {
  return <S.CartTemplateStyle>{children}</S.CartTemplateStyle>;
};

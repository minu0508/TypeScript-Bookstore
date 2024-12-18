import * as S from './OrderListTemplate.style';

interface OrderListTemplateProps {
  children: React.ReactNode;
}

export const OrderListTemplate = ({ children }: OrderListTemplateProps) => {
  return <S.OrderListTemplateStyle>{children}</S.OrderListTemplateStyle>;
};

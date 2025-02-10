import * as S from './Button.style';
import { ButtonProps } from '@/common/types/Button.types';

export const Button = ({ children, size, scheme, disabled, isLoading, onClick }: ButtonProps) => {
  return (
    <S.ButtonStyle size={size} scheme={scheme} disabled={disabled} isLoading={isLoading} onClick={onClick}>
      {children}
    </S.ButtonStyle>
  );
};

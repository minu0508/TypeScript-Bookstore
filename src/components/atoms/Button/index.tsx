import { ButtonProps } from '../../../common/types/Button.types';
import * as S from './Button.style';

export const Button = ({ children, size, scheme, disabled, isLoading, onClick }: ButtonProps) => {
  return (
    <S.ButtonStyle size={size} scheme={scheme} disabled={disabled} isLoading={isLoading} onClick={onClick}>
      {children}
    </S.ButtonStyle>
  );
};

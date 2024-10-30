import React, { ForwardedRef } from 'react';
import * as S from './InputText.style';

interface Props {
  placeholder?: string;
}

export const InputText = React.forwardRef(({ placeholder }: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return <S.InputTextStyled placeholder={placeholder} ref={ref} />;
});

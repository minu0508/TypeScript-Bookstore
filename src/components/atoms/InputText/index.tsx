import React, { ForwardedRef } from 'react';
import * as S from './InputText.style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  inputType?: 'text' | 'email' | 'password' | 'number';
}

/**
 * 여기서 ...props의 역할은 Text 외에 prop을 더 받겠다는 의미이다.
 */
export const InputText = React.forwardRef(
  ({ placeholder, inputType, onChange, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return <S.InputTextStyled placeholder={placeholder} ref={ref} type={inputType} onChange={onChange} {...props} />;
  }
);

import { TtitleProps } from '../../../common/types/Title.types';
import * as S from './Title.style';

export const Title = ({ children, size, color }: TtitleProps) => {
  return (
    <S.TitleStyle size={size} color={color}>
      {children}
    </S.TitleStyle>
  );
};

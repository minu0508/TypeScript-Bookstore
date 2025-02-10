import styled from 'styled-components';
import { TtitleProps } from '@/common/types/Title.types';

export const TitleStyle = styled.h1<Omit<TtitleProps, 'children'>>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.primary)};
`;

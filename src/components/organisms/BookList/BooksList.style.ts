import styled from 'styled-components';
import { ViewMode } from '@/components/molecules/BooksViewSwitcher';

interface BooksListStyleProps {
  view: ViewMode;
}

export const BookListStyle = styled.div<BooksListStyleProps>`
  display: grid;
  grid-template-columns: ${({ view }) => (view === 'grid' ? 'repeat(4, 1fr);' : 'repeat(1, 1fr);')};
  gap: 24px;
`;

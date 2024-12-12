import styled from 'styled-components';

interface EllipsisBoxStyleProps {
  lineLimit: number;
  $expended: boolean;
}

export const EllipsisBoxStyle = styled.div<EllipsisBoxStyleProps>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ lineLimit, $expended }) => ($expended ? 'none' : lineLimit)};
    -webkit-box-orient: vertical;
    padding: 20px 0 0 0;
    margin: 0;
  }

  .toggle {
    display: flex;
    justify-content: end;

    svg {
      transform: ${({ $expended }) => ($expended ? 'rotate(180deg)' : 'rotate(0)')};
    }
  }
`;

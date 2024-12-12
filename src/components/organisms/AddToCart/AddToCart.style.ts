import styled from 'styled-components';

interface AddToCartStyleProps {
  $added: boolean;
}

export const AddToCartStyle = styled.div<AddToCartStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  .added {
    position: absolute;
    right: 0;
    bottom: -90px;
    background: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 8px 12px;
    opacity: ${({ $added }) => ($added ? '1' : '0')};
    transition: akk 0.5 p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }
`;

import styled from 'styled-components';

export const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 12px;

  p {
    padding: 0 0 8px 0;
    margin: 0;
  }
`;

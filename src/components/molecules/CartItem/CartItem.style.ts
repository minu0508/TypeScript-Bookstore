import styled from 'styled-components';

export const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 12px;

  .check {
    width: 40px;
    flex-shrink: 0;
  }

  .info {
    display: flex;
    align-items: start;
    flex: 1;

    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }
`;

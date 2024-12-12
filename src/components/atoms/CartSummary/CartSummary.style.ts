import styled from 'styled-components';

export const CartSummaryStyle = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 12px;
  width: 240px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
  dl {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    dd {
      font-weight: 700;
    }
  }
`;

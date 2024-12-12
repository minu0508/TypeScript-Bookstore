import styled from 'styled-components';

export const CartTemplateStyle = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 0 0 0;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .order-info {
    h1 {
      padding: 0 0 24px 0;
    }

    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 12px;
  }

  .delivery {
    fieldset {
      border: 0;
      margin: 0;
      padding: 0 0 12px 0;
      display: flex;
      justify-content: start;
      gap: 8px;
      flex-wrap: wrap;

      label {
        width: 80px;
        flex-shrink: 0;
      }

      .input {
        flex: 1;
        min-width: 200px;

        input {
          width: 100%;
          box-sizing: border-box;
        }
      }
    }
    .error-text {
      color: red;
      margin: 0;
      padding: 0 0 12px 0;
      text-align: right;
      font-size: 0.75rem;
      font-weight: bolder;
    }
  }
`;

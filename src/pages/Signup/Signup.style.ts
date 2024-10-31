import styled from 'styled-components';

export const SignupStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.width.small};
  margin: 80px auto;

  fieldset {
    border: 0;
    padding: 0 0 8px 0;
    margin: 0;

    .error-text {
      color: red;
    }
  }

  input {
    width: 100%;
    box-sizing: border-box;
  }

  button {
    width: 100%;
  }

  .info {
    text-align: center;
    padding: 16px 0 0 0;
  }
`;

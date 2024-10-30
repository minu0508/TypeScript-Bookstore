import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.background};

  h1 {
    color: ${({ theme }) => theme.color.primary};
  }
`;

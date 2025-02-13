import styled from 'styled-components';

export const LoadingStyle = styled.div`
  padding: 40px 0;
  text-align: center;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    width: 70px;
    height: 70px;
    fill: #ccc;
    animation: rotate 1s linear infinite;
  }
`;

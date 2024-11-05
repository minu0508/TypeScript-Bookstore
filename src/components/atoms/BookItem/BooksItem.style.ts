import styled from 'styled-components';

export const BookItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  .img {
    border-radius: ${({ theme }) => theme.borderRadius.default};
    overflow: hidden;

    img {
      max-width: 100%;
    }
  }

  .content {
    padding: 16px;
    position: relative;

    .title {
      font-size: 1.25ren;
      font-weight: 700;
      margin: 0 0 12px 0;
    }
    .summary {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
    }
    .author {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 1px 0;
    }
    .price {
      font-size: 1ren;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 1px 0;
      font-weight: 700;
    }
    .likes {
      // 내부에 있는 자식들의 너비만큼만 화면의 크기가 커지는 것
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.primary};
      margin: 0 0 4px 0;
      font-weight: 700;
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: ${({ theme }) => theme.borderRadius.default};
      padding: 4px 12px;
      position: absolute;
      bottom: 16px;
      right: 16px;

      svg {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;

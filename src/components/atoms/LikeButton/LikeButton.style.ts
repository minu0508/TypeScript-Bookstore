import styled from 'styled-components';
import { ButtonStyle } from '../Button/Button.style';

export const LikeButtonStyle = styled(ButtonStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    color: inherit;
    * {
      color: inherit;
    }
  }
`;

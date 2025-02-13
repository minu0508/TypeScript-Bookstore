import * as S from './Loading.style';
import { FaSpinner } from 'react-icons/fa';

export const Loading = () => {
  return (
    <S.LoadingStyle>
      <FaSpinner />
    </S.LoadingStyle>
  );
};

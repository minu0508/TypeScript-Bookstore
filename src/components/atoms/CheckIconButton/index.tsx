import * as S from './CheckIconButton.style';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

interface CheckIconButtonProps {
  isChecked: boolean;
  onCheck: () => void;
}

export const CheckIconButton = ({ isChecked, onCheck }: CheckIconButtonProps) => {
  return (
    <S.CheckIconButtonStyle onClick={onCheck}>
      {isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}
    </S.CheckIconButtonStyle>
  );
};

import { useState } from 'react';
import * as S from './EllipsisBox.style';
import { Button } from '../../atoms/Button';
import { FaAngleDown } from 'react-icons/fa';

interface EllipsisBoxProps {
  children: React.ReactNode;
  lineLimit: number;
}

export const EllipsisBox = ({ children, lineLimit }: EllipsisBoxProps) => {
  const [expended, setExpended] = useState(false);

  return (
    <S.EllipsisBoxStyle lineLimit={lineLimit} $expended={expended}>
      <p>{children}</p>
      <div className="toggle">
        <Button size="small" scheme="normal" onClick={() => setExpended(!expended)}>
          {expended ? '접기' : '펼치기'} <FaAngleDown />
        </Button>
      </div>
    </S.EllipsisBoxStyle>
  );
};

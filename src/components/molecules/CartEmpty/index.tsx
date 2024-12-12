import * as S from './CartEmpty.style';
import { Title } from '../../atoms/Title';

interface EmptyProps {
  icon?: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export const Empty = ({ icon, title, description }: EmptyProps) => {
  return (
    <S.EmptyStyle>
      {icon && <div className="icon">{icon}</div>}
      <Title size="large" color="secondary">
        {title}
      </Title>
      {description && <p>{description}</p>}
    </S.EmptyStyle>
  );
};

import { Button } from '../components/common/Button';
import { InputText } from '../components/common/InputText';
import { Title } from '../components/common/Title';

export const Home = () => {
  return (
    <>
      <Title size="medium" color="background">
        제목 테스트
      </Title>
      <Button size="large" scheme="normal">
        버튼 테스트
      </Button>
      <InputText placeholder="입력해주세요." />
      <div>Home Body</div>
    </>
  );
};

import * as S from '@/pages/Signup/Signup.style';
import { Link } from 'react-router-dom';
import { Title } from '@/components/atoms/Title';
import { Button } from '@/components/atoms/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';
import { InputText } from '@/components/atoms/InputText';

export interface SignupProps {
  userId: string;
  password: string;
  name: string;
}

export const Login = () => {
  const { userLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = async (data: SignupProps) => {
    userLogin(data);
  };

  return (
    <>
      <Title size="large">로그인</Title>
      <S.SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText placeholder="이메일" inputType="email" {...register('userId', { required: true })} />
            {errors.userId && <p className="error-text">이메일을 입력해주세요.</p>}
          </fieldset>
          <fieldset>
            <InputText placeholder="비밀번호" inputType="password" {...register('password', { required: true })} />
            {errors.password && <p className="error-text">비밀번호를 입력해주세요.</p>}
          </fieldset>
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              로그인
            </Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </S.SignupStyle>
    </>
  );
};

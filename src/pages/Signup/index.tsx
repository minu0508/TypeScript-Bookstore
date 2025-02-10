import * as S from '@/pages/Signup/Signup.style';
import { Link } from 'react-router-dom';
import { Title } from '@/components/atoms/Title';
import { Button } from '@/components/atoms/Button';
import { useAuth } from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { InputText } from '@/components/atoms/InputText';
import { SignupProps } from '@/pages/Login';

export const Signup = () => {
  const { userSignup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = async (data: SignupProps) => {
    userSignup(data);
  };

  return (
    <>
      <Title size="large">회원가입</Title>
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
            <InputText placeholder="이름" inputType="text" {...register('name', { required: true })} />
            {errors.password && <p className="error-text">비밀번호를 입력해주세요.</p>}
          </fieldset>
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              회원가입
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

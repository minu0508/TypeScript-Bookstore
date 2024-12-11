import { Title } from '../../components/atoms/Title';
import { InputText } from '../../components/atoms/InputText';
import { Button } from '../../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Signup.style';
import { useForm } from 'react-hook-form';
import { signup } from '../../api/auth.api';
import { useAlert } from '../../hooks/useAlert';

export interface SignupProps {
  userId: string;
  password: string;
  name: string;
}

export const Signup = () => {
  const navigate = useNavigate();
  const showAlert = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = async (data: SignupProps) => {
    try {
      await signup(data);
      showAlert('회원가입 성공');
      navigate('/login');
    } catch (error) {
      window.alert('회원가입 실패, 서버 확인해 주세요.');
    }
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

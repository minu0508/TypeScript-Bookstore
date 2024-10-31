import { Title } from '../../components/atoms/Title';
import { InputText } from '../../components/atoms/InputText';
import { Button } from '../../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import * as S from '../Signup/Signup.style';
import { useForm } from 'react-hook-form';
import { login } from '../../api/auth.api';
import { useAlert } from '../../hooks/useAlert';
import { useAuthStore } from '../../store/authStore';

export interface SignupProps {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const showAlert = useAlert();

  const { isloggedIn, storeLogin, storeLogout } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = async (data: SignupProps) => {
    login(data).then((res) => {
      // 상태 변화
      storeLogin(res.token);

      showAlert('로그인 성공');
      navigate('/');
    });
  };

  console.log('@@@ isloggedIn: ', isloggedIn);

  return (
    <>
      <Title size="large">로그인</Title>
      <S.SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText placeholder="이메일" inputType="email" {...register('email', { required: true })} />
            {errors.email && <p className="error-text">이메일을 입력해주세요.</p>}
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

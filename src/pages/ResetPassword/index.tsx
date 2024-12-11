import { Title } from '../../components/atoms/Title';
import { InputText } from '../../components/atoms/InputText';
import { Button } from '../../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import * as S from '../Signup/Signup.style';
import { useForm } from 'react-hook-form';
import { resetPassword, resetRequest } from '../../api/auth.api';
import { useAlert } from '../../hooks/useAlert';
import { useState } from 'react';

export interface SignupProps {
  userId: string;
  password: string;
  name: string;
}

export const ResetPassword = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [resetRequested, setResetRequested] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = async (data: SignupProps) => {
    if (resetRequested) {
      // 초기화 함수 호출
      resetPassword(data).then(() => {
        showAlert('비밀번호 초기화 성공');
        navigate('/login');
      });
    } else {
      // 요청
      resetRequest(data).then(() => {
        setResetRequested(true);
      });
    }
  };

  return (
    <>
      <Title size="large">비밀번호 초기화</Title>
      <S.SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText placeholder="이메일" inputType="email" {...register('userId', { required: true })} />
            {errors.userId && <p className="error-text">이메일을 입력해주세요.</p>}
          </fieldset>
          {resetRequested && (
            <fieldset>
              <InputText placeholder="비밀번호" inputType="password" {...register('password', { required: true })} />
              {errors.password && <p className="error-text">비밀번호를 입력해주세요.</p>}
            </fieldset>
          )}

          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              {resetRequested ? '비밀번호 초기화' : '초기화 요청'}
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

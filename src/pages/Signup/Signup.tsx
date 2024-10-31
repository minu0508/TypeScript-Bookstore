import { Title } from '../../components/atoms/Title';
import { InputText } from '../../components/atoms/InputText';
import { Button } from '../../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Signup.style';
import { useForm } from 'react-hook-form';
import { signup } from '../../api/auth.api';
import { useAlert } from '../../hooks/useAlert';

export interface SignupProps {
  email: string;
  password: string;
}

export const Signup = () => {
  const navigate = useNavigate();
  const showAlert = useAlert();

  /**
   * - register: Input의 어떠한 값을 유효성 검사, 값 추적, 폼 상태 관리, 입력 필드 등록의 기능을 한다.
   */
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

  console.log('@@@ errors: ', errors);
  return (
    <>
      <Title size="large">회원가입</Title>
      <S.SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            {/* 
              - register Object를 스프레드 문법으로 넣은 후 필드 명과 필수 여부를 기입한다.
                => 여기서 required가 입력 필수 여부를 의미한다.
            */}
            <InputText placeholder="아메일" inputType="email" {...register('email', { required: true })} />
            {errors.email && <p className="error-text">이메일을 입력해주세요.</p>}
          </fieldset>
          <fieldset>
            <InputText placeholder="비밀번호" inputType="password" {...register('password', { required: true })} />
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

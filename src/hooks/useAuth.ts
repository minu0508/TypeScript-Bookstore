import { useAlert } from './useAlert';
import { useState } from 'react';
import { SignupProps } from '@/pages/Login';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { login, resetPassword, resetRequest, signup } from '@/api/auth.api';

export const useAuth = () => {
  // STATE
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const [resetRequested, setResetRequested] = useState(false);
  const { storeLogin, storeLogout, isloggedIn } = useAuthStore();

  // METHOD
  const userLogin = (data: SignupProps) => {
    login(data).then(
      (res) => {
        // 상태 변화
        storeLogin(res.token);

        showAlert('로그인 성공');
        navigate('/');
      },
      (error) => {
        showAlert('로그인 실패');
      }
    );
  };

  const userSignup = (data: SignupProps) => {
    signup(data).then((res) => {
      showAlert('회원가입이 완료되었습니다.');
      navigate('/login');
    });
  };

  const userResetPassword = (data: SignupProps) => {
    resetPassword(data).then(() => {
      showAlert('비밀번호 초기화 성공');
      navigate('/login');
    });
  };

  const userResetRequest = (data: SignupProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  // RETURN
  return { userLogin, userSignup, userResetPassword, userResetRequest, resetRequested };
};

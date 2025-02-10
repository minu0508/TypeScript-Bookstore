import { SignupProps } from '@/pages/Signup';
import { requestHandler } from './http';

export const signup = async (userData: SignupProps) => {
  return await requestHandler<SignupProps>('post', `/users/signup`, userData);
};

export const resetRequest = async (data: SignupProps) => {
  return await requestHandler<SignupProps>('post', `/users/reset`, data);
};

export const resetPassword = async (data: SignupProps) => {
  return await requestHandler<SignupProps>('put', `/users/reset`, data);
};

export const login = async (data: SignupProps) => {
  return await requestHandler('post', `/users/login`, data);
};

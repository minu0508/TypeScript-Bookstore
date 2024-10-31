import axios, { AxiosRequestConfig } from 'axios';
import { getToken, removeToken } from '../store/authStore';

const BASE_URL = 'http://localhost:9999';
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      // false에 해당하는 경우일 때 string을 반환하는 이유는 null일 수도 있기 때문이다.
      //  => 여기서는 boolean으로 값을 사용하고 있는데, null이 반환되면 error 발생.
      Authorization: getToken() ? getToken() : '',
    },
    withCredentials: true,
    ...config,
  });

  console.log('@@@ data: ', axiosInstance);
  // Error에 대한 interceptors
  axiosInstance.interceptors.response.use(
    (response) => {
      return response; // Server의 응답을 직접 반환하겠다는 의미
    },
    (error) => {
      if (error.response.status === 401) {
        removeToken();
        window.location.href = '/login';
        return;
      }
      return Promise.reject(console.error()); // 취소를 하겠다는 의미
    }
  );

  return axiosInstance;
};

// 사용할 실제 모듈은 아래의 코드이다.
export const httpClient = createClient();

import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:9999';
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
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
      return Promise.reject(console.error()); // 취소를 하겠다는 의미
    }
  );

  return axiosInstance;
};

// 사용할 실제 모듈은 아래의 코드이다.
export const httpClient = createClient();

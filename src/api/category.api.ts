import { requestHandler } from './http';

export const fetchCategory = async () => {
  // category라고 하는 Server에서 정보를 얻어온 후 그 응답 중 data를 반환하는 것을 의미.
  return await requestHandler('get', './category');
};

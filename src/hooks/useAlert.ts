import { useCallback } from 'react';

export const useAlert = () => {
  // useCallback을 사용한 이유는 window.alert()를 띄우는 해당 함수가 필요 시에만 다시 생성하게 한 것이다.
  const showAlert = useCallback((message: string) => {
    window.alert(message);
  }, []);

  return showAlert;
};

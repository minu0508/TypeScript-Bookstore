import { create } from 'zustand';

interface StoreState {
  isloggedIn: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}

const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

const removeToken = () => {
  localStorage.removeItem('token');
};

export const useAuthStore = create<StoreState>((set) => ({
  // isloggedIn의 초기값을 의미
  isloggedIn: getToken() ? true : false,

  // storeLogin에서는 isloggedIn이 true가 된다는 것을 의미
  storeLogin: (token: string) => {
    set({ isloggedIn: true });
    setToken(token);
  },

  // storeLogout에서는 isloggedIn이 false가 된다는 것을 의미
  storeLogout: () => {
    set({ isloggedIn: false });
    removeToken();
  },
}));

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const AUTH_SIGNIN = '/auth/authenticate';
export const AUTH_SIGNUP = '/users/register';

export const KEY_AUTH_STORAGE = 'auth-store';

import api from '@/api';

interface IAuthState {
  email: string;
  password: string;
}

type AppState = {};

type Actions = {
  login: (
    authParam: IAuthState,
  ) => { data: { accessToken: string } } | undefined;
  register: (authParam: IAuthState) => { data: boolean } | undefined;
  logout: () => void;
};

type Store = AppState & Actions;

const initialState: AppState = {
  data: [],
  loading: false,
  error: '',
  isAuthenticated: false,
};

const useAuthStore = create<Store>()(
  persist(
    (set) => ({
      ...initialState,
      login: async ({ email, password }: IAuthState) => {
        try {
          set(() => ({ loading: true }));
          const response = await api.post(AUTH_SIGNIN, { email, password });

          set((state) => ({
            ...state,
            error: '',
            data: response.data,
            isAuthenticated: true,
          }));

          return { data: response.data };
        } catch (err) {
          set((state) => ({
            ...state,
            error: err.message,
          }));
        } finally {
          set((state) => ({
            ...state,
            loading: false,
          }));
        }
      },
      register: async ({ email, password }: IAuthState) => {
        try {
          set(() => ({ loading: true }));
          const response = await api.post(AUTH_SIGNUP, { email, password });

          set((state) => ({ ...state, error: '', data: response.data }));

          return { data: response.data };
        } catch (err) {
          set((state) => ({
            ...state,
            error: err.message,
          }));
        } finally {
          set((state) => ({
            ...state,
            loading: false,
          }));
        }
      },
      logout: () => {
        set(() => ({}));
        // sessionStorage.clear(); // or localStorage.clear();
        localStorage.removeItem(KEY_AUTH_STORAGE);
      },
    }),
    {
      name: KEY_AUTH_STORAGE,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;

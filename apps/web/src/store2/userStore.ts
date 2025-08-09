import { create, SetState } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const USER_GET = '/users';
export const USER_SIGNUP = '/users/register';

export const KEY_AUTH_STORAGE = 'auth-store';

import api from '@/api';

interface IUserState {
  filters: string;
  page: number;
  pageSize: number;
}

type AppState = {};

type Actions = {
  get: (userParam: IUserState) => { data: { accessToken: string } } | undefined;
  getOne: (id: string) => { data: any } | undefined;
  create: (authParam: IUserState) => { data: boolean } | undefined;
  update: (authParam: IUserState) => { data: boolean } | undefined;
  delete: (id: string) => { data: boolean } | undefined;
};

type Store = AppState & Actions;

const initialState: AppState = {
  data: [],
  loading: false,
  error: '',
};

function createActions(set: SetState<Store>) {
  return {
    get: async ({ filters = '', page = 1, pageSize = 10 }: IUserState): Promise<{data:any}> => {
      try {
        set(() => ({ loading: true }));
        const response = await api.get(
          `${USER_GET}${
            filters
              ? `?filters=${filters}&page=${page}&pageSize=${pageSize}`
              : `?page=${page}&pageSize=${pageSize}`
          }`,
        );

        set((state) => ({
          ...state,
          error: '',
          data: response.data,
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
    getOne: async (id: string) => {
      try {
        set(() => ({ loading: true }));
        const response = await api.get(`/${USER_GET}/${id}`);
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
    create: async (authParam: IUserState) => {
      try {
        set(() => ({ loading: true }));
        const response = await api.post(USER_SIGNUP, authParam);
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
    update: async ({ id, ...args }: IUserState) => {
      try {
        set(() => ({ loading: true }));
        const response = await api.put(
          `${USER_GET}/${id}`,
          args,
        );
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
    delete: async (id: string): Promise<{data:boolean}> => {
      try {
        set(() => ({ loading: true }));
        const response = await api.delete(`${USER_GET}/${id}`);
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
  } as unknown as Actions;
}

const useAuthStore = create<Store>()(
  persist(
    (set) => ({
      ...initialState,
      ...createActions(set),
    }),
    {
      partialize: (state) => {
        console.log('persist state', state);
      },
      //name: KEY_AUTH_STORAGE,
      //storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;

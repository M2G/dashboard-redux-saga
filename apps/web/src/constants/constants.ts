import ROUTER_PATH from './RouterPath';
import { KEY_AUTH_STORAGE } from '@/store2/authStore';

const state = JSON.parse(
  localStorage.getItem(KEY_AUTH_STORAGE)?.state as string || '{}',
);

const authData = state?.data?.accessToken;

// const token = authData ? JSON.parse(authData).auth_token : '';

const token = authData ?? '';

export default {
  GLOBAL_VAR: {
    token,
  },
  ROUTER_PATH,
};

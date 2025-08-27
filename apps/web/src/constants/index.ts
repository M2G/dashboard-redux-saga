import ROUTER_PATH from './RouterPath';
import { getAuthStorage } from '@/services/storage';

const state = JSON.parse(getAuthStorage() as string)?.state;

const authData = state?.data?.accessToken;

const token = authData || '';

export default {
  GLOBAL_VAR: {
    token,
  },
  ROUTER_PATH,
};

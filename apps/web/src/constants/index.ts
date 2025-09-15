import ROUTER_PATH from './constants';
import { getAccessTokenStorage } from '@/storage/storage';

const token = getAccessTokenStorage();

export default {
  GLOBAL_VAR: {
   token,
  },
  ROUTER_PATH,
};

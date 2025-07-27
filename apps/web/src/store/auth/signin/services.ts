import api from '@/api';

function signinService  (params: { email: string; password: string }) {
  return api.post('/auth/authenticate', params);
}

export default signinService;

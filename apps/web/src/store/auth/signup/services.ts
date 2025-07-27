import api from '@/api';

function signupUserService(params: { email: string; password: string; }) {
  return api.post('/auth/register', params);
}

export default signupUserService;

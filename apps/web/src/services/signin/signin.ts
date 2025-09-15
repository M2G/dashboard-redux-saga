import { AxiosResponse } from 'axios';
import api from '@/api';

function signinUserService(params): Promise<AxiosResponse<any, any>> {
  return api.post('/auth/authenticate', params);
}

export default signinUserService;

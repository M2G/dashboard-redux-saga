import api from '@/api';

function forgotPasswordService(params: any): Promise<any> {
  return api.post('/auth/forgot-password', params);
}

function recoverPasswordService(params: any): Promise<any> {
  return api.post('/auth/reset-password', params);
}

function userProfilService(id: string): Promise<any> {
  return api.get(`/users/${id}`);
}

function createUserProfilService(params: any): Promise<any> {
  return api.post(`/users`, params);
}

function updateUserProfilService({ id, ...params }: any): Promise<any> {
  return api.put(`/users/${id}`, params);
}

function getUsersService({ filters, page = 1, pageSize = 10 }): Promise<any> {
  return api.get(
    `/users${
      filters
        ? `?filters=${filters}&page=${page}&pageSize=${pageSize}`
        : `?page=${page}&pageSize=${pageSize}`
    }`,
  );
}

function deleteUsersService(id: string): Promise<any> {
  return api.delete(`/users/${id}`);
}

export {
  createUserProfilService,
  deleteUsersService,
  forgotPasswordService,
  getUsersService,
  recoverPasswordService,
  updateUserProfilService,
  userProfilService,
};

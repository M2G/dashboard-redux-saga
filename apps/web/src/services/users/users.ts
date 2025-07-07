import api from '@/api';

function forgotPasswordService(params: any): Promise<any> {
  return api.post('/users/forgot-password', params);
}

function recoverPasswordService(params: any): Promise<any> {
  return api.post('/users/reset-password', params);
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

function getUsersService({ filters, page, pageSize }): Promise<any> {
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
  forgotPasswordService,
  recoverPasswordService,
  getUsersService,
  createUserProfilService,
  userProfilService,
  updateUserProfilService,
  deleteUsersService,
};

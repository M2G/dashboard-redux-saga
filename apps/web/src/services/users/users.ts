import api from '@/api';

// --- Types de DTO (Data Transfer Object) ---
interface ForgotPasswordParams {
  email: string;
}

interface RecoverPasswordParams {
  token: string;
  newPassword: string;
}

interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateUserParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: string;
}

interface UpdateUserParams {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  password?: string;
}

interface PaginatedUsers {
  data: UserProfile[];
  page: number;
  pageSize: number;
  total: number;
}

// --- Services ---
function forgotPasswordService(params: ForgotPasswordParams): Promise<void> {
  return api.post('/users/forgot-password', params);
}

function recoverPasswordService(params: RecoverPasswordParams): Promise<void> {
  return api.post('/users/reset-password', params);
}

function userProfilService(id: string): Promise<UserProfile> {
  return api.get(`/users/${id}`);
}

function createUserProfilService(
  params: CreateUserParams,
): Promise<UserProfile> {
  return api.post(`/users`, params);
}

function updateUserProfilService({
  id,
  ...params
}: UpdateUserParams): Promise<UserProfile> {
  return api.put(`/users/${id}`, params);
}

function getUsersService({
  filters = '',
  page = 0,
  pageSize = 10,
}: {
  filters?: string;
  page?: number;
  pageSize?: number;
}): Promise<PaginatedUsers> {
  return api.get(
    `/users${
      filters
        ? `?filters=${filters}&page=${page}&pageSize=${pageSize}`
        : `?page=${page}&pageSize=${pageSize}`
    }`,
  );
}

function deleteUsersService(id: string): Promise<void> {
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

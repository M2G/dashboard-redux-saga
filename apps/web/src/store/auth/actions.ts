import { AuthActionTypes } from './types';

export function authCreateUserProfilAction(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_CREATE_USER_PROFIL_REQUEST,
  };
}

export function authUpdateUserProfilAction(data: any): {
  data: any;
  type: AuthActionTypes;
} {
  return {
    data,
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_REQUEST,
  };
}

export function authDeleteUserProfilAction({ id }: { id: number }): {
  id: number;
  type: AuthActionTypes;
} {
  return {
    id,
    type: AuthActionTypes.AUTH_DELETE_USER_PROFIL_REQUEST,
  };
}

export function authDeleteUserProfilSuccess(): { type: AuthActionTypes } {
  return {
    type: AuthActionTypes.AUTH_DELETE_USER_PROFIL_SUCCESS,
  };
}

export function authDeleteUserProfilError(errors): {
  errors: any;
  type: AuthActionTypes;
} {
  return {
    errors,
    type: AuthActionTypes.AUTH_DELETE_USER_PROFIL_ERROR,
  };
}

export function authGetUserProfilErrorAction(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_REQUEST,
  };
}

export function authGetUserProfilAction(args?: any) {
  return {
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_REQUEST,
    ...args,
  };
}

export function authGetUsersProfilAction(args?: any) {
  return {
    type: AuthActionTypes.AUTH_GET_USERS_PROFIL_REQUEST,
    ...args,
  };
}

export function authUpdatePasswordAction(data: any) {
  return {
    data,
    type: AuthActionTypes.AUTH_UPDATE_PASSWORD_REQUEST,
  };
}

export function authRecoverPasswordAction(data: any) {
  return {
    data,
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_REQUEST,
  };
}

export function authForgotPasswordAction(data: any) {
  return {
    data,
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_REQUEST,
  };
}

export function authForgotPasswordError(data: any) {
  return {
    data,
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_ERROR,
  };
}

export function authUpdateUserProfilSuccess() {
  return {
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_SUCCESS,
  };
}

export function authUpdateUserProfilError(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_UPDATE_USER_PROFIL_ERROR,
  };
}

export function authGetUsersProfilSuccess({ data, ...args }) {
  return {
    data,
    type: AuthActionTypes.AUTH_GET_USERS_PROFIL_SUCCESS,
    ...args,
  };
}

export function authGetUserProfilSuccess(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_SUCCESS,
  };
}

export function authGetUserProfilError(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_GET_USER_PROFIL_ERROR,
  };
}

export function authGetUsersProfilError(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_GET_USERS_PROFIL_ERROR,
  };
}

export function authUpdatePasswordSuccess(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS,
  };
}

export function authRecoverPasswordSuccess(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_SUCCESS,
  };
}

export function authRecoverPasswordError(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_RECOVER_PASSWORD_ERROR,
  };
}

export function authForgotPasswordSuccess(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_FORGOT_PASSWORD_SUCCESS,
  };
}

export function authRequestErrorAction(data) {
  return {
    data,
    type: AuthActionTypes.AUTH_REQUEST_ERROR,
  };
}

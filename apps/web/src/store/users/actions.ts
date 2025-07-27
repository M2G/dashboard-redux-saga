import { UserActionTypes } from './types';

export function authCreateUserProfilAction(data) {
  return {
    data,
    type: UserActionTypes.USERS_CREATE_USER_PROFIL_REQUEST,
  };
}

export function authUpdateUserProfilAction(data: any): {
  data: any;
  type: UserActionTypes;
} {
  return {
    data,
    type: UserActionTypes.USERS_UPDATE_USER_PROFIL_REQUEST,
  };
}

export function authDeleteUserProfilAction({ id }: { id: number }): {
  id: number;
  type: UserActionTypes;
} {
  return {
    id,
    type: UserActionTypes.USERS_DELETE_USER_PROFIL_REQUEST,
  };
}

export function authDeleteUserProfilSuccess(): { type: UserActionTypes } {
  return {
    type: UserActionTypes.USERS_DELETE_USER_PROFIL_SUCCESS,
  };
}

export function authDeleteUserProfilError(errors): {
  errors: any;
  type: UserActionTypes;
} {
  return {
    errors,
    type: UserActionTypes.USERS_DELETE_USER_PROFIL_ERROR,
  };
}

export function authGetUserProfilErrorAction(data) {
  return {
    data,
    type: UserActionTypes.USERS_GET_USER_PROFIL_REQUEST,
  };
}

export function authGetUserProfilAction(args?: any) {
  return {
    type: UserActionTypes.USERS_GET_USER_PROFIL_REQUEST,
    ...args,
  };
}

export function authGetUsersProfilAction(args?: any) {
  return {
    type: UserActionTypes.USERS_GET_USERS_PROFIL_REQUEST,
    ...args,
  };
}

export function authUpdatePasswordAction(data: any) {
  return {
    data,
    type: UserActionTypes.USERS_UPDATE_PASSWORD_REQUEST,
  };
}

export function authRecoverPasswordAction(data: any) {
  return {
    data,
    type: UserActionTypes.USERS_RECOVER_PASSWORD_REQUEST,
  };
}

export function authForgotPasswordAction(data: any) {
  return {
    data,
    type: UserActionTypes.USERS_FORGOT_PASSWORD_REQUEST,
  };
}

export function authForgotPasswordError(data: any) {
  return {
    data,
    type: UserActionTypes.USERS_FORGOT_PASSWORD_ERROR,
  };
}

export function authUpdateUserProfilSuccess() {
  return {
    type: UserActionTypes.USERS_UPDATE_USER_PROFIL_SUCCESS,
  };
}

export function authUpdateUserProfilError(data) {
  return {
    data,
    type: UserActionTypes.USERS_UPDATE_USER_PROFIL_ERROR,
  };
}

export function authGetUsersProfilSuccess({ data, ...args }) {
  return {
    data,
    type: UserActionTypes.USERS_GET_USERS_PROFIL_SUCCESS,
    ...args,
  };
}

export function authGetUserProfilSuccess(data) {
  return {
    data,
    type: UserActionTypes.USERS_GET_USER_PROFIL_SUCCESS,
  };
}

export function authGetUserProfilError(data) {
  return {
    data,
    type: UserActionTypes.USERS_GET_USER_PROFIL_ERROR,
  };
}

export function authGetUsersProfilError(data) {
  return {
    data,
    type: UserActionTypes.USERS_GET_USERS_PROFIL_ERROR,
  };
}

export function authUpdatePasswordSuccess(data) {
  return {
    data,
    type: UserActionTypes.USERS_UPDATE_PASSWORD_SUCCESS,
  };
}

export function authRecoverPasswordSuccess(data) {
  return {
    data,
    type: UserActionTypes.USERS_RECOVER_PASSWORD_SUCCESS,
  };
}

export function authRecoverPasswordError(data) {
  return {
    data,
    type: UserActionTypes.USERS_RECOVER_PASSWORD_ERROR,
  };
}

export function authForgotPasswordSuccess(data) {
  return {
    data,
    type: UserActionTypes.USERS_FORGOT_PASSWORD_SUCCESS,
  };
}

export function authRequestErrorAction(data) {
  return {
    data,
    type: UserActionTypes.USERS_REQUEST_ERROR,
  };
}

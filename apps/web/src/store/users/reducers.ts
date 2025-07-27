/* eslint-disable */
import { Reducer } from 'redux';
import { UserActionTypes, UserState } from './types';

// Type-safe initialState!
export const initialState: UserState = {
  data: [],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
  const { data, errors, type } = action || {};
  switch (type) {
    case UserActionTypes.USERS_GET_USER_PROFIL_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.USERS_GET_USERS_PROFIL_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.USERS_CREATE_USER_PROFIL_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.USERS_UPDATE_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.USERS_RECOVER_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.USERS_FORGOT_PASSWORD_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.USERS_DELETE_USER_PROFIL_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.USERS_UPDATE_USER_PROFIL_REQUEST:
      return { ...state, loading: true };

    case UserActionTypes.USERS_GET_USER_PROFIL_SUCCESS:
      return { ...state, loading: false, data };
    case UserActionTypes.USERS_GET_USERS_PROFIL_SUCCESS:
      return { ...state, loading: false, data };
    case UserActionTypes.USERS_CREATE_USER_PROFIL_SUCCESS:
      return { ...state, loading: false, data };
    case UserActionTypes.USERS_UPDATE_USER_PROFIL_SUCCESS:
      return { ...state, loading: false };
    case UserActionTypes.USERS_UPDATE_PASSWORD_SUCCESS:
      return { ...state, loading: false, data };
    case UserActionTypes.USERS_RECOVER_PASSWORD_SUCCESS:
      return { ...state, loading: false, data };
    case UserActionTypes.USERS_FORGOT_PASSWORD_SUCCESS:
      return { ...state, loading: false, data };
    case UserActionTypes.USERS_DELETE_USER_PROFIL_SUCCESS:
      return { ...state, loading: false, data };

    case UserActionTypes.USERS_DELETE_USER_PROFIL_ERROR:
      return { ...state, loading: false, errors };
    case UserActionTypes.USERS_GET_USER_PROFIL_ERROR:
      return { ...state, loading: false, errors: data };
    case UserActionTypes.USERS_GET_USERS_PROFIL_ERROR:
      return { ...state, loading: false, errors: data };
    case UserActionTypes.USERS_CREATE_USER_PROFIL_ERROR:
      return { ...state, loading: false, errors: data };
    case UserActionTypes.USERS_UPDATE_USER_PROFIL_ERROR:
      return { ...state, loading: false, errors: data };
    case UserActionTypes.USERS_UPDATE_PASSWORD_ERROR:
      return { ...state, loading: false, errors: data };
    case UserActionTypes.USERS_RECOVER_PASSWORD_ERROR:
      return { ...state, loading: false, errors: data };
    case UserActionTypes.USERS_FORGOT_PASSWORD_ERROR:
      return { ...state, loading: false, errors: data };
    case UserActionTypes.USERS_REQUEST_ERROR:
      return { ...state, loading: false, errors };

    default:
      return state;
  }
};

/*
 * Instead of using default export, we use named exports. That way we can group these exports
 * inside the `index.js` folder.
 */
export { reducer as userReducer };

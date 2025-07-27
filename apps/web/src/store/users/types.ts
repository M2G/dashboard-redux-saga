/* eslint-disable */
/*
 * Response object for GET /heroes
 * https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget
 */

export interface User extends ApiResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  created_at: string;
  modified_at?: string;
}

/*
 * This type is basically shorthand for `{ [key: string]: any }`. Feel free to replace `any` with
 * the expected return type of your API response.
 */
export type ApiResponse = Record<string, any>;

/*
 * Use `enum`s for better autocompletion of action type names. These will
 * be compiled away leaving only the final value in your compiled code.
 *
 * Define however naming conventions you'd like for your action types, but
 * personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
 * of Redux's `@@INIT` action.
 */

export enum UserActionTypes {
  USERS_GET_USER_PROFIL_REQUEST = '@@users/AUTH_GET_USER_PROFIL_REQUEST',
  USERS_GET_USERS_PROFIL_REQUEST = '@@users/AUTH_GET_USERS_PROFIL_REQUEST',
  USERS_CREATE_USER_PROFIL_REQUEST = '@@users/AUTH_CREATE_USER_PROFIL_REQUEST',
  USERS_UPDATE_USER_PROFIL_REQUEST = '@@users/AUTH_UPDATE_USER_PROFIL_REQUEST',
  USERS_UPDATE_PASSWORD_REQUEST = '@@users/AUTH_UPDATE_PASSWORD_REQUEST',
  USERS_RECOVER_PASSWORD_REQUEST = '@@users/AUTH_RECOVER_PASSWORD_REQUEST',
  USERS_FORGOT_PASSWORD_REQUEST = '@@users/AUTH_FORGOT_PASSWORD_REQUEST',
  USERS_DELETE_USER_PROFIL_REQUEST = '@@users/AUTH_DELETE_USER_PROFIL_REQUEST',

  USERS_GET_USER_PROFIL_SUCCESS = '@@users/AUTH_GET_USER_PROFIL_SUCCESS',
  USERS_GET_USERS_PROFIL_SUCCESS = '@@users/AUTH_GET_USERS_PROFIL_SUCCESS',
  USERS_CREATE_USER_PROFIL_SUCCESS = '@@users/AUTH_CREATE_USER_PROFIL_SUCCESS',
  USERS_DELETE_USER_PROFIL_SUCCESS = '@@users/AUTH_DELETE_USER_PROFIL_SUCCESS',
  USERS_UPDATE_USER_PROFIL_SUCCESS = '@@users/AUTH_UPDATE_USER_PROFIL_SUCCESS',
  USERS_UPDATE_PASSWORD_SUCCESS = '@@users/AUTH_UPDATE_PASSWORD_SUCCESS',
  USERS_RECOVER_PASSWORD_SUCCESS = '@@users/AUTH_RECOVER_PASSWORD_SUCCESS',
  USERS_FORGOT_PASSWORD_SUCCESS = '@@users/AUTH_FORGOT_PASSWORD_SUCCESS',

  USERS_DELETE_USER_PROFIL_ERROR = '@@users/AUTH_DELETE_USER_PROFIL_ERROR',
  USERS_GET_USER_PROFIL_ERROR = '@@users/AUTH_GET_USER_PROFIL_ERROR',
  USERS_CREATE_USER_PROFIL_ERROR = '@@users/AUTH_CREATE_USER_PROFIL_ERROR',
  USERS_GET_USERS_PROFIL_ERROR = '@@users/AUTH_GET_USERS_PROFIL_ERROR',
  USERS_UPDATE_USER_PROFIL_ERROR = '@@users/AUTH_UPDATE_USER_PROFIL_ERROR',
  USERS_UPDATE_PASSWORD_ERROR = '@@users/AUTH_UPDATE_PASSWORD_ERROR',
  USERS_RECOVER_PASSWORD_ERROR = '@@users/AUTH_RECOVER_PASSWORD_ERROR',
  USERS_FORGOT_PASSWORD_ERROR = '@@users/AUTH_FORGOT_PASSWORD_ERROR',
  USERS_REQUEST_ERROR = '@@users/AUTH_REQUEST_ERROR',
}

/*
 * Declare state types with `readonly` modifier to get compile time immutability.
 * https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
 */
export interface UserState {
  readonly loading: boolean;
  readonly data: User[];
  readonly errors?: string;
}

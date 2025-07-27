import { SigninActionTypes } from './types';

function signinUserPrepare(user: any, options: any) {
  return {
    options,
    type: SigninActionTypes.SIGNIN_USER_PREPARE,
    user,
  }
}

function signinUserAction(user: any) {
 return {
   type: SigninActionTypes.SIGNIN_USER_REQUEST,
   user,
 }
}

function signinUserSuccess(data) {
 console.log('signinUserSuccess', data);
  return {
   type: SigninActionTypes.SIGNIN_USER_SUCCESS,
    data,
   ...data,
 }
}

function signinUserError(errors: any) {
  return {
    errors,
    type: SigninActionTypes.SIGNIN_USER_ERROR,
  }
}

export {
  signinUserAction,
  signinUserSuccess,
  signinUserError,
  signinUserPrepare,
};

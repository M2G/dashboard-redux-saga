import { SignoutActionTypes } from './types';

function signoutUserAction(user) {
  return {
    type: SignoutActionTypes.SIGNOUT_USER_REQUEST,
    ...user,
  };
}

export default signoutUserAction;

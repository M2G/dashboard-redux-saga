import { all, fork } from 'redux-saga/effects';
import { combineReducers } from 'redux';

import { userReducer } from '@/store/users/reducers';
import { signinReducer } from '@/store/auth/signin/reducers';
import { signupReducer } from '@/store/auth/signup/reducers';
import { signoutReducer } from '@/store/auth/signout/reducers';
import { authGlobalReducer } from '../reducers';

import { authSaga } from '@/store/users/sagas';
import { signinSaga } from '@/store/auth/signin/sagas';
import { signupSaga } from '@/store/auth/signup/sagas';
import { signoutSaga } from '@/store/auth/signout/sagas';

import { UserState } from '@/store/users/types';
import { SigninState } from '@/store/auth/signin/types';
import { SignupState } from '@/store/auth/signup/types';
import { SignoutState } from '@/store/auth/signout/types';
import { AuthGlobalState } from '@/types';

// The top-level state object
export interface ApplicationState {
  signin: SigninState;
  signup: SignupState;
  signout: SignoutState;
  auth: AuthGlobalState;
  users: UserState;
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types

/*
 * Whenever an action is dispatched, Redux will update each top-level application state property
 * using the reducer with the matching name. It's important that the names match exactly, and that
 * the reducer acts on the corresponding ApplicationState property type.
 */
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types,@typescript-eslint/no-unused-vars-experimental
function rootReducer() {
  return combineReducers({
    auth_global: authGlobalReducer,
    signup: signupReducer,
    signin: signinReducer,
    signout: signoutReducer,
    users: userReducer,
  });
}

/*
 * Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
 * "generator function", which you can read about here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 */
function* rootSaga() {
  yield all([
    fork(signinSaga),
    fork(signupSaga),
    fork(signoutSaga),
    fork(authSaga),
  ]);
}

export { rootSaga, rootReducer, ApplicationState };

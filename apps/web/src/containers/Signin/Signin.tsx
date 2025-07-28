import { JSX, useCallback } from 'react';
import { useAuth } from '@/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { signinUserAction } from '@/store/auth/signin/actions';
import SigninForm from '@/components/SigninForm';
import { INITIAL_VALUES } from './constants';

function Signin(): JSX.Element {
  const dispatch = useDispatch();
  const { activateAuth } = useAuth();

  useSelector((state): void => {
    state?.signin?.data?.accessToken &&
     activateAuth({ accessToken: state.signin.data.accessToken });
  });

  const onSubmit = useCallback(
    (e: { email: string; password: string }): void => {
      dispatch(signinUserAction(e));
    },
    [dispatch],
  );

  return <SigninForm initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

export default Signin;

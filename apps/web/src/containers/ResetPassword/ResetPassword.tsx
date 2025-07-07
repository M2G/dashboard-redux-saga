import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { authRecoverPasswordAction } from "store/auth/actions";

import ResetPasswordView from './ResetPassword';
import { INITIAL_VALUES } from './constants';

function ResetPassword() {
  let { search } = useLocation();
  const dispatch = useDispatch();

  const onSubmit = useCallback((e: any) => {
    const searchParams = new URLSearchParams(search);
    if (searchParams.has("token")) {
      const token = searchParams.get("token");
      console.log('dispatch', { ...e, token });
      dispatch(authRecoverPasswordAction({ ...e, token }));
    }}, [dispatch]);

  return <ResetPasswordView initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

export default ResetPassword;

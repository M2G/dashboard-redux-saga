import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { authRecoverPasswordAction } from "@/store/users/actions";

import ResetPasswordForm from '@/components/ResetPasswordForm';
import { INITIAL_VALUES } from './constants';

function ResetPassword() {
  let { search } = useLocation();
  const dispatch = useDispatch();

  const onSubmit = useCallback((e: any) => {
    const searchParams = new URLSearchParams(search);
    if (searchParams.has("token")) {
      const token = searchParams.get("token");
      dispatch(authRecoverPasswordAction({ ...e, token }));
    }}, []);

  return <ResetPasswordForm initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

export default ResetPassword;

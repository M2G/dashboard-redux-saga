import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authForgotPasswordAction } from "@/store/users/actions";
import { INITIAL_VALUES } from './constants';
import ForgotPasswordView from './ForgotPassword';

function ForgotPassword() {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (e) => dispatch(authForgotPasswordAction(e)),
    [],
  );

  return <ForgotPasswordView initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

export default ForgotPassword;

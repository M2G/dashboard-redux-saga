import { useCallback } from 'react';
import { INITIAL_VALUES } from './constants';
import ForgotPasswordView from './ForgotPassword';
import { useUserStore } from '@/store2';

function ForgotPassword() {
  const { forgotPassword } = useUserStore((state) => state);
  const onSubmit = useCallback((e) => {
    forgotPassword(e);
  }, []);

  return (
    <ForgotPasswordView initialValues={INITIAL_VALUES} onSubmit={onSubmit} />
  );
}

export default ForgotPassword;

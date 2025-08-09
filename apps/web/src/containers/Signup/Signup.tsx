import { useCallback } from 'react';
import { INITIAL_VALUES } from './constants';
import SignupView from '@/components/SignupForm';
import { useAuthStore } from '@/store2';

function Signup() {
  const registerUser = useAuthStore((state) => state.register);
  const onSubmit = useCallback(async (e) => {
    registerUser(e);
  }, []);

  return <SignupView initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

export default Signup;

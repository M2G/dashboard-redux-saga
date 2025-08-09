import { JSX, useCallback } from 'react';
import { useAuth } from '@/AuthContext';
import SigninForm from '@/components/SigninForm';
import { INITIAL_VALUES } from './constants';
import { useAuthStore } from '@/store2';

function Signin(): JSX.Element {
  const login = useAuthStore((state) => state.login);
  const { activateAuth } = useAuth();

  const onSubmit = useCallback(
    async (e: { email: string; password: string }): Promise<void> => {
      const loginUser = await login(e);
      activateAuth({ accessToken: loginUser?.data?.accessToken });
    },
    [],
  );

  return <SigninForm initialValues={INITIAL_VALUES} onSubmit={onSubmit} />;
}

export default Signin;

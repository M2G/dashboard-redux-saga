import type { Context, JSX, ReactNode } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import {
  clearAccessTokenStorage,
  clearRefreshTokenStorage,
  clearUserStorage,
  getAccessTokenStorage,
  getUserStorage,
  setAccessTokenStorage,
  setRefreshTokenStorage,
  setUserStorage,
} from '@/storage/storage';
import { User } from '@/store/users/types';

type AuthContextType = {
  activateAuth: (token: {
    accessToken?: string;
    refreshToken?: string;
  }) => void;
  isAuth: User;
  removeAuth: () => void;
};

// @see https://twitter.com/gregberge_/status/1750111230554153450/photo/1
// keep context private
export const AuthContext: Context<AuthContextType | undefined> = createContext<
  AuthContextType | undefined
>(undefined);

// export a consumer and throw if default value
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

interface AuthContextProps {
  children: ReactNode;
}
// export a provider
function Provider({ children }: AuthContextProps): JSX.Element {
  const [isAuth, setIsAuth] = useState<boolean | null | string>(
    () =>  JSON.parse(getUserStorage() as string) || null,
  );

  const value = {
    activateAuth(auth?: { accessToken: string; refreshToken: string }) {
      const decodedToken =
        JSON.parse(atob(auth?.accessToken?.split('.')?.[1] as string)) || {};

      const user = {
        email: decodedToken.email,
        id: decodedToken.id,
      };

      setUserStorage(JSON.stringify(user));
      setAccessTokenStorage(auth?.accessToken as string);
      //setRefreshTokenStorage(auth.refreshToken);
      setIsAuth(JSON.stringify(user));
    },
    isAuth,
    removeAuth() {
      setIsAuth(false);
      setUserStorage(null);
      clearUserStorage();
      //clearRefreshTokenStorage();
      clearAccessTokenStorage();
    },
  };

  const authValue = useMemo(() => value, [value]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export default { Consumer: AuthContext.Consumer, Provider };

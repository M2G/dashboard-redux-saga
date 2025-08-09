import type { Context, JSX, ReactNode } from 'react';

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useLayoutEffect,
} from 'react';
import { jwtDecode } from 'jwt-decode';
import { KEY_AUTH_STORAGE } from '@/store2/authStore';

import {
  clearAccessTokenStorage,
  clearRefreshTokenStorage,
  clearUserStorage,
  getAccessTokenStorage,
  getUserStorage,
  setAccessTokenStorage,
  setRefreshTokenStorage,
  setUserStorage,
} from '@/services/storage';


type AuthContextType = {
  activateAuth: (token: {
    accessToken?: string;
    refreshToken?: string;
  }) => void;
  isAuth: boolean | null | string;
  removeAuth: () => void;
  userData: {
    email: string;
    id: number;
  } | null;
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
  const AUTH_STORAGE = localStorage.getItem(KEY_AUTH_STORAGE);
  const state = AUTH_STORAGE && JSON.parse(AUTH_STORAGE as string)?.state;

  console.log('state', state);

  console.log('getUserStorage()', getUserStorage());

  const [isAuth, setIsAuth] = useState<boolean | null | string>(
    () => state?.data?.accessToken,
  );

  const [userData, setUserData] = useState<boolean | null | string>(
    () => getUserStorage());

  const value = {
    activateAuth(auth?: { accessToken: string; refreshToken: string }) {
      console.log('activateAuth', auth);

      const decodedToken: {
        email: string;
        id: number;
      } = jwtDecode(auth?.accessToken as string) || {};

      const user = {
        email: decodedToken.email,
        id: decodedToken.id,
      };

      console.log('activateAuth user', user);

      setUserStorage(JSON.stringify(user));
      setUserData(JSON.stringify(user));
      //setAccessTokenStorage(auth.accessToken);
      //setRefreshTokenStorage(auth.refreshToken);
      setIsAuth(true);
    },
    isAuth,
    removeAuth() {
      setIsAuth(false);
      setUserStorage(null);
      clearUserStorage();
      //clearRefreshTokenStorage();
      //clearAccessTokenStorage();
    },
    userData: userData ? JSON.parse(userData as string) : null,
  };

  const authValue = useMemo(() => value, [value]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export default { Consumer: AuthContext.Consumer, Provider };

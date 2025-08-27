import type { Context, JSX, ReactNode } from 'react';
import {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  clearAccessTokenStorage,
  clearRefreshTokenStorage,
  clearUserStorage,
  getAccessTokenStorage,
  getUserStorage,
  setAccessTokenStorage,
  setRefreshTokenStorage,
  setUserStorage,
  getAuthStorage
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
  const [isAuth, setIsAuth] = useState<boolean | null | string>(
    () => !!getUserStorage(),
  );

  const value = {
    activateAuth(auth?: { accessToken: string; refreshToken: string }) {
      const decodedToken = JSON.parse(atob(auth?.accessToken?.split('.')?.[1] as string)) || {};

      const user = {
        email: decodedToken.email,
        id: decodedToken.id,
      };

      setUserStorage(JSON.stringify(user));
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
  };

  const authValue = useMemo(() => value, [value]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export default { Consumer: AuthContext.Consumer, Provider };

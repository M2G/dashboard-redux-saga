import type { JSX } from 'react';
import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router';

import { AuthContext } from '@/AuthContext';
import TopLineLoading from '@/components/Loading/TopLineLoading';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

/**
 * Top level application router
 *
 * @returns {Component}
 */

interface Auth {
  isAuth: boolean;
}

function Router(): JSX.Element {
  const { isAuth } = useContext(AuthContext) as Auth;

  return (
    <main>
      <Suspense fallback={<TopLineLoading />}>
        <Routes>
          {isAuth ? (
            <Route element={<PrivateRoutes />} path="/*" />
          ) : (
            <Route element={<PublicRoutes />} path="/*" />
          )}
        </Routes>
      </Suspense>
    </main>
  );
}

export default Router;

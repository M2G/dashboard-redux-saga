import type { JSX } from 'react';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import ROUTER_PATH from '@/constants/constants';

const Home = lazy(() => import('@/containers/Home'));
const Users = lazy(() => import('@/containers/Users2'));
const ChangePassword = lazy(() => import('@/containers/ChangePassword'));
const Profil = lazy(() => import('@/containers/Profil'));

function PrivateRoutes(): JSX.Element {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path={ROUTER_PATH.HOME} element={<Home />} />
        <Route path={ROUTER_PATH.USERS} element={<Users />} />
        <Route path={ROUTER_PATH.PROFIL} element={<Profil />} />
        <Route
          path={ROUTER_PATH.CHANGE_PASSWORD}
          element={<ChangePassword />}
        />
        <Route element={<Navigate replace to={ROUTER_PATH.HOME} />} path="*" />
      </Routes>
    </>
  );
}

export default PrivateRoutes;

import { useCallback, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '@/AuthContext';
import ProfilForm from '@/components/ProfilForm';
import { authGetUserProfilAction, authUpdateUserProfilAction } from '@/store/users/actions';
import TopLineLoading from '@/components/Loading';

function Profil(): JSX.Element | null {
  const { isAuth } = useContext(AuthContext);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authGetUserProfilAction({ id: isAuth?.id }));
  }, [isAuth?.id]);

  const { data, loading } = useSelector((state) => (state.users));

  const handleSubmit = useCallback(
    (data) => {
      dispatch(authUpdateUserProfilAction({ ...data, id: isAuth?.id }));
    },
    [isAuth?.id],
  );

  if (loading) return <TopLineLoading />;

  return <ProfilForm initialValues={data} onSubmit={handleSubmit} />;
}

export default Profil;

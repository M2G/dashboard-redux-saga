import { AuthContext } from '@/AuthContext';
import ProfilForm from '@/components/ProfilForm';
import { useCallback, useContext, useEffect } from 'react';
import { useUserStore } from '@/store2';
import TopLineLoading from '@/components/Loading/TopLineLoading';

function Profil(): JSX.Element | null {
  const { userData }: { userData: { id: number } } = useContext(AuthContext);
  const {
    data,
    loading,
    error,
    getOne,
    update
  } = useUserStore((state) => state);

  useEffect(() => {
    getOne(userData?.id);
  }, [userData?.id]);

  const handleSubmit = useCallback(
    (data) => {
      update({ ...data, id: userData?.id });
    },
    [userData?.id],
  );

  if (!data?.length && loading) return <TopLineLoading />;

  return <ProfilForm initialValues={{ ...data }} onSubmit={handleSubmit} />;
}

export default Profil;

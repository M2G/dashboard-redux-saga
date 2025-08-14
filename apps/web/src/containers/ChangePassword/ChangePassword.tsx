import { AuthContext } from '@/AuthContext';
import ChangePassordForm from '@/components/ChangePassordForm';
import { authUpdatePasswordAction } from '@/store/users/actions';
import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useUserStore } from '@/store2';


function ChangePassword(): JSX.Element {
  const {
    changePassword
  } = useUserStore((state) => state);
  // const dispatch = useDispatch();
  const {
    userData: { id },
  } = useContext(AuthContext);
  const handleSubmit = useCallback(
    async (d) => {
      changePassword({ id, ...d });
      // dispatch(authUpdatePasswordAction({ id, ...d }));
    },
    [id],
  );

  return <ChangePassordForm initialValues={{}} onSubmit={handleSubmit} />;
}

export default ChangePassword;

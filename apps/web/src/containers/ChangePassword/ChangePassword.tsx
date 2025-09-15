import { AuthContext } from '@/AuthContext';
import ChangePassordForm from '@/components/ChangePassordForm';
import { authUpdatePasswordAction } from '@/store/users/actions';
import { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { INITIAL_VALUES } from './constants';

function ChangePassword(): JSX.Element {
  const dispatch = useDispatch();
  const {
    userData: { id },
  } = useContext(AuthContext);
  const handleSubmit = useCallback(
    async (d) => {
      dispatch(authUpdatePasswordAction({ id, ...d }));
    },
    [id],
  );

  return <ChangePassordForm initialValues={INITIAL_VALUES} onSubmit={handleSubmit} />;
}

export default ChangePassword;

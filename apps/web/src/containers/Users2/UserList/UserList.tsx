import { useMemo, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { signupUserAction } from '@/store/auth/signup/actions';
import {
  authGetUsersProfilAction,
  authDeleteUserProfilAction,
  authUpdateUserProfilAction,
} from '@/store/users/actions';
import TableWrapper from '@/components/Core/Table/TableWrapper';
import {
  Sidebar as SidebarWrapper,
  Modal as ModalWrapper,
} from 'ui/components/organisms';
import TopLineLoading from '@/components/Loading/TopLineLoading';
import UserListItem from './UserListItem';
import UserEdit from '@/components/Users/UserEdit';
import UserNew from '@/components/Users/UserNew';

function UserList({ canEdit = false, canDelete = false }) {
  const { t } = useTranslation();
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  console.log('isOpenedModal', isOpenedModal);

  function selectors(state: { signup: any[]; users: any[] }) {
    return {
      signup: state?.signup,
      users: state?.users,
    };
  }

  const {
    users: usersSelector, // users data
    // signup
  } = useSelector(selectors);

  const dispatch = useDispatch();

  // const deleteUserAction = (id) => dispatch(authDeleteUserProfilAction(id));

  const users = usersSelector?.data || [];

  useEffect(() => {
    dispatch(authGetUsersProfilAction());
  }, []);

  /* const onDelete = useCallback((currentSource: any) => {
    setNewUser(false);
    setEditingUser(false);
    setDeletingUser(currentSource);
  }, []);
*/

  const onSubmit = useCallback((user: any) => {
    if (user?.password) {
      // create new user
      console.log('onSubmit create new user', user);
      // dispatch(signupUserAction(user));
      // dispatch(authGetUsersProfilAction());
      setIsOpenedSidebar(false);
      return;
    }

    //dispatch(authUpdateUserProfilAction(user));
    // update existing user
    console.log('onSubmit update existing user', user);

    //editUserAction(user);
    //authGetUsersProfil();
    //onClose();
    setIsOpenedSidebar(false);
    setIsOpenedModal(false);
  }, []);

  const onEditUser = useCallback((user: any) => {
    //editUserAction(user);
    //authGetUsersProfil();
    //onClose();
  }, []);

  const onDeleteUser = useCallback((user: any) => {
    // deleteUserAction(user._id);
    // authGetUsersProfil();
    // onClose();
  }, []);

  const rows = useMemo(
    () =>
      users?.map((user: any) =>
        UserListItem({
          user,
          onDelete: setIsOpenedModal,
          onEdit: setIsOpenedSidebar,
          canDelete,
          canEdit,
        }),
      ),
    [canDelete, canEdit, users?.length],
  );

  const header = useMemo(
    () => [
      { label: '', sortable: false },
      { label: t('field.firstName'), sortable: false },
      { label: t('field.lastName'), sortable: false },
      { label: t('field.email'), sortable: false },
      { label: t('field.createdAt'), sortable: true, type: 'date' },
      { label: t('field.updateAt'), sortable: true, type: 'date' },
    ],
    [t],
  );

  console.log('isOpened', isOpenedSidebar);

  if (!users?.length && users?.loading) return <TopLineLoading />;

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t('Welcome to React')}</h1>
            <button
              className="btn btn-primary my-2 text-white"
              type="submit"
              onClick={setIsOpenedSidebar}>
              Add user(s)
            </button>
          </div>
        </div>
      </section>

      {!users?.length && !users.loading && <div>No data</div>}

      <TableWrapper header={header} rows={rows} />

      <SidebarWrapper
        isOpened={isOpenedSidebar}
        setIsOpened={setIsOpenedSidebar}>
        {isOpenedSidebar?.id ? (
          <UserEdit initialValues={isOpenedSidebar} onSubmit={onSubmit} />
        ) : (
          <UserNew onSubmit={onSubmit} />
        )}
      </SidebarWrapper>

      <ModalWrapper
        hide={setIsOpenedModal}
        isShowing={isOpenedModal}
        onConfirm={onSubmit}
      />
    </>
  );
}

export default UserList;

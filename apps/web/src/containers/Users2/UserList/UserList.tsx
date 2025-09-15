import { useMemo, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  authGetUsersProfilAction,
  authDeleteUserProfilAction,
  authUpdateUserProfilAction,
  authCreateUserProfilAction,
} from '@/store/users/actions';

import TableWrapper from '@/components/Core/Table/TableWrapper';
import {
  Sidebar as SidebarWrapper,
  Modal as ModalWrapper,
} from 'ui/components/organisms';
import TopLineLoading from '@/components/Loading';
import UserListItem from './UserListItem';
import UserEdit from '@/components/Users/UserEdit';
import UserNew from '@/components/Users/UserNew';

function UserList({ canEdit = false, canDelete = false }): JSX.Element {
  const { t } = useTranslation();
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  function selectorUser(s) {
    return s.users;
  }

  const {
    data: users,
    loading
  } = useSelector(selectorUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authGetUsersProfilAction());
  }, []);

  const onSubmit = useCallback(
    async (user) => {
      if (user?.password) {
        // create new user
        dispatch(authCreateUserProfilAction(user));
        dispatch(authGetUsersProfilAction());
        setIsOpenedSidebar(false);
        return;
      }

      // update existing user
      dispatch(authUpdateUserProfilAction({ ...user, id: isOpenedSidebar.id }));
      setIsOpenedSidebar(false);
    },
    [isOpenedSidebar?.id],
  );

  const onSubmit2 = useCallback(() => {
    dispatch(authDeleteUserProfilAction(isOpenedSidebar.id));
    setIsOpenedModal(false);
  }, [isOpenedModal.id]);

  const rows = useMemo(
    () =>
      users?.map((user) =>
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

 if (loading) return <TopLineLoading />;

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">{t('Welcome to React')}</h1>
            <button
              className="btn btn-primary my-2 text-black"
              type="submit"
              onClick={setIsOpenedSidebar}>
              Add user(s)
            </button>
          </div>
        </div>
      </section>

      {!users?.length && !users?.loading && <div>No data</div>}

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
        onConfirm={onSubmit2}
      />
    </>
  );
}

export default UserList;

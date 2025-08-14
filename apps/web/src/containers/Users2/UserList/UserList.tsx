import { useMemo, useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TableWrapper from '@/components/Core/Table/TableWrapper';
import {
  Sidebar as SidebarWrapper,
  Modal as ModalWrapper,
} from 'ui/components/organisms';
import TopLineLoading from '@/components/Loading/TopLineLoading';
import UserListItem from './UserListItem';
import UserEdit from '@/components/Users/UserEdit';
import UserNew from '@/components/Users/UserNew';
import { useUserStore } from '@/store2';

function UserList({ canEdit = false, canDelete = false }): Element {
  const { t } = useTranslation();
  const {
    data,
    loading,
    error,
    get,
    create,
    update,
    delete: deleteUser,
  } = useUserStore((state) => state);
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const users = data?.results;

  useEffect(function (): void {
    get({ filters: '', page: 1, pageSize: 10 });
  }, []);

  const onSubmit = useCallback(
    async (user: any) => {
      if (user?.password) {
        // create new user
        create(user);
        get({ filters: '', page: 1, pageSize: 10 });
        setIsOpenedSidebar(false);
        return;
      }

      // update existing user
      update({ ...user, id: isOpenedSidebar.id });
      get({ filters: '', page: 1, pageSize: 10 });
      setIsOpenedSidebar(false);
    },
    [isOpenedSidebar?.id],
  );

  const onSubmit2 = useCallback(() => {
    deleteUser(isOpenedModal.id);
    get({ filters: '', page: 1, pageSize: 10 });
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

  if (!users?.length && users?.loading) return <TopLineLoading />;

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

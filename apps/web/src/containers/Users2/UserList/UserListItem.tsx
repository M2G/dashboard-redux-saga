import type { JSX } from 'react';
import type { ITableStaticCol } from '@/components/Core/Table/TableStaticCol';

import DateCell from '@/components/Core/Table/DateCell';
import TableStaticCol from '@/components/Core/Table/TableStaticCol';

import IconNames from 'ui/components/atoms/Icon/Icons.types';

export interface IUserListItem {
  canDelete: boolean | undefined;
  canEdit: boolean | undefined;
  id: string;
  label: string;
  onDelete: (user: any) => void;
  onEdit: (user: any) => void;
  user: any;
}

function UserListItem({
  canDelete,
  canEdit,
  label,
  onDelete,
  onEdit,
  user,
}: IUserListItem): (
  | {
      display: Date | string | undefined;
      value: Date | null | number | string | undefined;
    }
  | { display: JSX.Element }
)[] {
  const id = `user__row__${user.id}`;

  const actions = [];

  if (canEdit) {
    actions.push({
      action: (): void => {
        onEdit(user);
      },
      icon: IconNames.EDIT,
      id: `${id}__edit`,
      label: IconNames.EDIT,
    });
  }

  if (canDelete) {
    actions.push({
      action: (): void => {
        onDelete(user);
      },
      icon: IconNames.DELETE,
      id: `${id}__delete`,
      label: IconNames.DELETE,
    });
  }

  const tableStaticColProps: ITableStaticCol = {
    actions,
    id,
    label,
  };

  return [
    {
      display: <TableStaticCol {...tableStaticColProps} />,
    },
    {
      display: user?.first_name,
      value: user?.first_name,
    },
    {
      display: user?.last_name,
      value: user?.last_name,
    },
    {
      display: user?.email,
      value: user?.email,
    },
    {
      display: <DateCell date={user?.created_at} />,
      value: new Date(user?.created_at as number),
    },
    {
      display: <DateCell date={user?.modified_at} />,
      value: new Date(user?.modified_at as number),
    },
  ];
}

export default UserListItem;

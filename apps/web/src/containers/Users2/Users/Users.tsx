import type { JSX } from 'react';
import UserList from '@/containers/Users2/UserList';
import './index.scss';

function Users(): JSX.Element {
  return (
    <div className="o-zone">
      <div className="o-grid u-no-gutters">
        <div className="o-grid__row">
          <div className="o-col">
            <div className="o-cell--one">
              <UserList canDelete canEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;

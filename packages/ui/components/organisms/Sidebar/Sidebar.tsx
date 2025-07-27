import type { Dispatch, ReactNode, SetStateAction } from 'react';

import clsx from 'clsx';
import { Icon } from '../../atoms';
import IconNames from '../../atoms/Icon/Icons.types';

interface ISidebar {
  children: ReactNode;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  show: boolean;
}

function Sidebar({ children, setIsOpened, show }: ISidebar): JSX.Element {
  return (
    <div
      className={clsx(
        'bg-black-dark fixed left-0 top-0 z-[9999] h-full w-4/5 max-w-[300px] translate-x-[-100%] p-4 shadow-[0_8px_10px_-5px_rgb(0,0,0/20%),0_16px_24px_2px_rgb(0,0,0/14%),0_6px_30px_5px_rgb(0,0,0/12%)] transition-all duration-300 ease-in-out',
        show ? 'translate-x-[0]' : '',
      )}>
      <div className="relative flex flex-col">
        <div
          aria-hidden="true"
          className="absolute right-0 cursor-pointer"
          onClick={() => setIsOpened(false)}
          role="button"
          tabIndex={0}>
          <Icon
            as={IconNames.CROSS}
            className="_:stroke-white  _:h-5 _:w-10 _:min-h-6"
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
export default Sidebar;

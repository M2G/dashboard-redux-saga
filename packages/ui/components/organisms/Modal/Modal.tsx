import type { ReactNode, MouseEventHandler, MutableRefObject, ReactPortal } from 'react';

import Portal from '../Portal';

import { useEffect, useRef } from 'react';
import { Button, Icon } from '../../atoms';
import IconNames from '../../atoms/Icon/Icons.types';

interface IModal {
  children: any;
  hide: () => MouseEventHandler<HTMLButtonElement>;
  id?: string;
  isShowing: boolean;
  onConfirm: () => void;
}

function Modal({
  children,
  hide,
  id,
  isShowing,
  onConfirm,
}: IModal): ReactPortal {
  const ref: MutableRefObject<HTMLDivElement | null | undefined> = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e: Event): void => {
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
        hide();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [hide]);

  return (
    isShowing && (
      <Portal id={id}>
        <div className="fixed left-0 top-0 z-[100] h-screen w-screen bg-black/[.5]">
          <div
            className="fixed left-0 top-0 z-[101] flex h-full w-full items-center overflow-y-auto overflow-x-hidden outline-none">
            <div
              className="relative m-auto max-w-[400px] rounded-lg bg-[linear-gradient(to_top_right,rgba(39,39,42,1),rgba(24,24,27,1))] p-4 text-gray-900 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]"
              ref={ref}>
              <div className="relative flex items-center justify-between p-3 mb-4">
                <button
                  aria-label="Close"
                  className="absolute bottom-2 left-[calc(100%-20px)]"
                  data-bs-dismiss="modal"
                  onClick={() => hide()}
                  type="button">
                  <Icon
                    as={IconNames.CROSS}
                    className="_:stroke-white  _:h-5 _:w-10 _:min-h-6"
                  />
                </button>
              </div>
              <div className="mb-2 text-white">{children}</div>
              <div className="modal-footer border-top-0 flex justify-around">
                <Button
                  className="_:bg-white _:font-normal _:text-black"
                  onClick={() => onConfirm()}
                  type="button">
                  Confirmer
                </Button>
                <Button
                  className="_:bg-white _:font-normal _:text-black"
                  data-bs-dismiss="modal"
                  onClick={() => hide()}
                  type="button">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Portal>
    )
  ) as ReactPortal;
}

export default Modal;

import Modal from './Modal';

interface IModalWrapper {
  children: any;
  hide: any;
  id?: string | undefined;
  isShowing: any;
  onConfirm: () => void;
}

function ModalWrapper({
  children,
  hide,
  id,
  isShowing,
  onConfirm,
}: IModalWrapper) {
  return (
    <Modal
      hide={hide}
      id={id}
      isShowing={isShowing}
      onConfirm={onConfirm}>
      {children}
    </Modal>
  );
}

export default ModalWrapper;

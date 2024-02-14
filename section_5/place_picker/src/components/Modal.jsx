import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, onOpen, onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    const currentDialog = dialog.current;
    onOpen ? currentDialog.showModal() : currentDialog.close();
  }, [onOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {onOpen && children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;

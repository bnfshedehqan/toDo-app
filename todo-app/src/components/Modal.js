import React,{useRef} from "react";

function Modal({ children, showModal, setShowModal }) {
  const modalRef = useRef;
  const closeModal = (e) => {
    if (e.target == useRef.current) {
      setShowModal(false);
    }
  };

  return (
    showModal && (
      <div className="Modal" onClick={closeModal}>
        <div className="container">{children}</div>
      </div>
    )
  );
}

export default Modal;

import React from "react";

function Modal({ children, showModal }){
  const modalRef = useRef
  const closeModal = (e)=>{
    if(e.target == modalRef.current){}

  }



  return (
    <div className="Modal" onClick={closeModal}>
      <div className="container">{children}</div>
    </div>
  );
};

export default Modal;

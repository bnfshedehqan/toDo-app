import React, { useState } from "react";
import Modal from "./Modal";
const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          + New Todo
        </button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          Hello
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            hide
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddNewTodo;

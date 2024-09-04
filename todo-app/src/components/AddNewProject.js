import React, { useState } from "react";
import { Plus } from "react-bootstrap-icons";
import Modal from "./Modal";
import ProjectForm from "./ProjectForm";

const AddNewProject = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  function handleSubmit(e) {}
  return (
    <div className="AddNewProject">
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <Plus size={20} />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          heading="New Project"
          value={projectName}
          setShowModal={setShowModal}
          confirmButtonText="+ Add Project"
        />
      </Modal>
    </div>
  );
};

export default AddNewProject;

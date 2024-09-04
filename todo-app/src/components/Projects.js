import React, { useState } from "react";
import Project from "./Project";
import AddNewProject from "./AddNewProject";
import { CaretUp, Palette, PencilFill } from "react-bootstrap-icons";

const Projects = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false);
  const pencilColor = edit ? "#1EC94C" : "#ffffff";
  const projects = [
    { id: 1, name: "personal", numOfTodo: 0 },
    { id: 2, name: "work", numOfTodo: 1 },
    { id: 3, name: "other", numOfTodo: 2 },
  ];

  return (
    <div className="Projects">
      <div className="header">
        <div className="title">
          <Palette size="18" />
          <p>Projects</p>
        </div>
        <div className="btns">
          {showMenu && projects.length > 0 && (
            <span className="edit" onClick={() => setEdit((edit) => !edit)}>
              <PencilFill size={15} color={pencilColor}/>
            </span>
          )}
          <AddNewProject />
          <span className="arrow">
            <CaretUp size={20} />
          </span>
          <div className="items">
            {
              projects.map(project=>
                <Project 
                project={project}
                key={project.id}
                edit={edit}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

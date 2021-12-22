import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const { setOpenModal, openModal } = React.useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};

export { CreateTodoButton };

import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Un mensaje personalizado")}
    >
      +
    </button>
  );
};

export { CreateTodoButton };

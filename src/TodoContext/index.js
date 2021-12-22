import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: persistTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const filterTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const currentTodos = [...todos];
    const newTodo = { text, completed: false };
    currentTodos.push(newTodo);
    persistTodos(currentTodos);
  };

  const completeTodo = (text) => {
    const updateTodos = todos.map((todo) => {
      if (todo.text === text) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    persistTodos(updateTodos);
  };

  const deleteTodo = (text) => {
    const updateTodos = todos.filter((todo) => todo.text !== text);
    persistTodos(updateTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        filterTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

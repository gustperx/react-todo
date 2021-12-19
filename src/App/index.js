import React from "react";
import { AppUI } from "./AppUI";

/* const defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "Tomar el curso de intro a React", completed: true },
  { text: "Integrar servicio de traduccion", completed: false },
  { text: "Tomar un descanso", completed: false },
]; */

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const filterTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const persistTodos = (newTodos) => {
    const stringifyTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifyTodos);
    setTodos(newTodos);
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
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterTodos={filterTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

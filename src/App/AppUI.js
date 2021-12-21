import React from "react";
import { TodoContext } from "../TodoContext";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUI() {
  const { error, loading, filterTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <p>Hubo un error..</p>}
        {loading && <p>Estamos cargando, no desesperes..</p>}
        {!loading && !filterTodos.length && <p>!Crea tu primer TODO¡</p>}

        {filterTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };

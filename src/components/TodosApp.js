import { useReducer } from "react";
import AddTodo from "./AddTodo.js";
import TodoList from "./TodoList.js";
import todosReducer from "./todosReducer.js";

export default function TodosApp() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  function handleAddTodo(todoText) {
    dispatch({
      type: "added",
      id: nextId++,
      todoText: todoText,
    });
  }

  function handleChangeTodo(todo) {
    dispatch({
      type: "changed",
      todo: todo,
    });
  }

  function handleDeleteTodo(todoId) {
    dispatch({
      type: "deleted",
      id: todoId,
    });
  }

  return (
    <>
      <h1>Software Development Todos</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

let nextId = 3;
const initialTodos = [
  { id: 0, todoText: "Requirements gathering", done: true },
  { id: 1, todoText: "Requirements analysis", done: false },
  { id: 2, todoText: "System analysis", done: false },
];

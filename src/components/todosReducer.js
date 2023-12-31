export default function todosReducer(state, action) {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          id: action.id,
          todoText: action.todoText,
          done: false,
        },
      ];
    }
    case "changed": {
      return state.map((currentTodo) => {
        if (currentTodo.id === action.todo.id) {
          return action.todo;
        } else {
          return currentTodo;
        }
      });
    }
    case "deleted": {
      return state.filter((currentTodo) => currentTodo.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}


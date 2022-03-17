const initState = {
  1: {
    id: 1,
    text: 'Learn Redux',
    completed: false
  },

  2: {
    id: 2,
    text: 'Complete React course',
    completed: true,
  },

  3: {
    id: 3,
    text: 'Look for an internship',
    completed: false
  }
};

const generateId = (todos) => {
  const maxId = Object.keys(todos).reduce((maxId, todo) => Math.max(todos[todo].id, maxId), -1);
  return maxId + 1;
};


export const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todos/todoAdded':
      const id = generateId(state);
      return {
        ...state,
        [id]: {
          id: id,
          text: action.payload,
          completed: false
        }
      };

    case 'todos/todoCompleted':
      const todoId = action.payload;
      const todo = state[todoId];
      return {
        ...state,
        [todoId]: {
          ...todo,
          completed: !todo.completed
        }
      };

    case 'todos/todoDeleted': {
      const newTodos = { ...state };
      console.log(newTodos);
      delete newTodos[action.payload];
      return {
        ...newTodos
      };
    }

    case 'todos/todosCleard': {
      const newTodos = { ...state };
      Object.values(newTodos).forEach(todo => {
        if (todo.completed) {
          delete (newTodos[todo.id]);
        }
      });

      return {
        ...newTodos
      };
    }

    default:
      return state;
  }
};
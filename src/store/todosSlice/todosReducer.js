const initState = [
  {
    id: 1,
    text: 'Learn Redux',
    completed: false
  },
  {
    id: 2,
    text: 'Complete React course',
    completed: true,
  },
  {
    id: 3,
    text: 'Look for an internship',
    completed: false
  }
];

const generateId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};


export const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todos/todoAdded':
      return [
        ...state,
        {
          id: generateId(state),
          text: action.payload,
          completed: false
        }
      ];

    case 'todos/todoCompleted':
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        };
      });

    case 'todos/todoDeleted':
      return state.filter(todo => {
        return todo.id !== action.payload;
      }
      );

    case 'todos/todosCleard':
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
};
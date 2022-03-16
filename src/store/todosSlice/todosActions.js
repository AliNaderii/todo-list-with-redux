export const addTodo = (text) => {
  return {
    type: 'todos/todoAdded',
    payload: text
  };
};

export const completeTodo = (id) => {
  return {
    type: 'todos/todoCompleted',
    payload: id
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'todos/todoDeleted',
    payload: id
  };
};

export const clearCompleted = () => {
  return {
    type: 'todos/todosCleard'
  };
};
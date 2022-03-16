// TOOLS
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
// STYLES
import { StyledTodoList } from "../styles/TodoList.styled";
// COMPONENTS
import TodoListItem from "./TodoListItem";
import Filters from "./Filters";

export default function TodoList() {

  const selector = createSelector(
    state => state.todos,
    state => state.filters.status,
    (todos, status) => {
      if (status === 'all') {
        return todos;
      }
      else if (status === 'active') {
        return todos.filter(todo => !todo.completed);
      }
      else if (status === 'completed') {
        return todos.filter(todo => todo.completed);
      }
    }
  );
  const todos = useSelector(selector);

  return (
    <StyledTodoList>
      { todos && todos.map(todo => (
        <TodoListItem todo={ todo } key={ todo.id } />
      )) }
      <Filters />
    </StyledTodoList>
  );
}
// TOOLS
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// ACTION
import { completeTodo, deleteTodo } from '../store/todosSlice/todosActions';
import { showAll } from '../store/filtersSlice/filtersActions';
// STYLES && ICONS
import { StyledTodoListItem, CheckButton, TodoText, DeleteButton } from "../styles/TodoListItem.styled";
import Check from '../images/icon-check.svg';
import Cross from '../images/icon-cross.svg';

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(null);


  const handleClick = (id) => {
    dispatch(completeTodo(id));
    dispatch(showAll());
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <StyledTodoListItem
      onMouseEnter={ () => setShowButton(true) }
      onMouseLeave={ () => setShowButton(false) }>

      <CheckButton
        onClick={ () => handleClick(todo.id) }
        background={ todo.completed }
        aria-label='compelet todo'>
        {
          todo.completed
          &&
          <img src={ Check } alt='check icon' />
        }
      </CheckButton>

      <TodoText completed={ todo.completed }>
        { todo.text }
      </TodoText>

      {
        showButton
        &&
        <DeleteButton
          onClick={ () => handleDelete(todo.id) }
          aria-label='delete todo'>
          <img src={ Cross } alt="delete icon" />
        </DeleteButton>
      }

    </StyledTodoListItem >
  );
}
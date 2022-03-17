// TOOLS
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
// STYLES
import {
  StyledFilters, FilterButtonsContainer, Button
} from "../styles/Filters.styled";
// ACTIONS
import { showAll, showActive, showCompleted } from '../store/filtersSlice/filtersActions';
import { clearCompleted } from "../store/todosSlice/todosActions";

export default function Filters() {
  const [active, setActive] = useState('all');
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);

  const unfinishedTodos = Object.keys(todos).reduce(
    (acc, todo) => !todo.completed ? acc + 1 : acc, 0
  );

  const setToAll = () => {
    setActive('all');
    dispatch(showAll());
  };

  const setToActive = () => {
    setActive('active');
    dispatch(showActive());
  };

  const setToCompleted = () => {
    setActive('completed');
    dispatch(showCompleted());
  };

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  return (
    <StyledFilters>
      <p>{ unfinishedTodos } items left</p>

      <FilterButtonsContainer>
        <Button
          active={ active === 'all' }
          onClick={ setToAll }>
          All
        </Button>

        <Button
          active={ active === 'active' }
          onClick={ setToActive }>
          Active
        </Button>

        <Button
          active={ active === 'completed' }
          onClick={ setToCompleted }>
          Completed
        </Button>
      </FilterButtonsContainer>

      <Button onClick={ handleClear }>Clear Completed</Button>
    </StyledFilters>
  );
}
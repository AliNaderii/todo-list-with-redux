// TOOLS
import { useState } from "react";
import { useDispatch } from 'react-redux';
// STYLES
import { MeidaFilterButtons } from "../styles/FilterButtons.styled";
import { Button } from "../styles/Filters.styled";
// ACTIONS
import { showAll, showActive, showCompleted } from '../store/filtersSlice/filtersActions';

export default function FilterButtons() {
  const [active, setActive] = useState('all');
  const dispatch = useDispatch();

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

  return (
    <MeidaFilterButtons>
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
    </MeidaFilterButtons>
  );
}
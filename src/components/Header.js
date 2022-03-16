// STYLES
import { StyledHeader, StyledLogo, StyledForm } from "../styles/Header.styled";
import Moon from '../images/icon-moon.svg';
import Sun from '../images/icon-sun.svg';
// TOOLS
import { useState } from "react";
import { useDispatch } from 'react-redux';
// ACTIONS
import { addTodo } from '../store/todosSlice/todosActions';

export default function Header({ changeTheme, themeName }) {
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    const trimmed = userInput.trim();

    if (e.key === 'Enter' && trimmed) {
      e.preventDefault();
      dispatch(addTodo(trimmed));

      setUserInput('');
    }

  };

  return (
    <StyledHeader>
      {/* LOGO */ }
      <StyledLogo>
        <h1>TODO</h1>
        <button aria-label="change theme" onClick={ changeTheme }>
          <img src={ themeName === 'dark' ? Sun : Moon } alt="change them icon" />
        </button>
      </StyledLogo>
      {/* INPUT FORM */ }
      <StyledForm>
        <button disabled></button>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={ userInput }
          onChange={ handleChange }
          onKeyDown={ handleKeyDown }
        />
      </StyledForm>
    </StyledHeader>
  );
}
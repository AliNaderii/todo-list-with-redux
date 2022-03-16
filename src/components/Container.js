// STYLES
import { StyledContainer } from "../styles/Container.styled";
// COMPONENTS
import Header from "./Header";
import TodoList from './TodoList';
import FilterButtons from "./FilterButtons";

export default function Container(props) {
  return (
    <StyledContainer>
      {/* HEADER */ }
      <Header { ...props } />
      {/* TODOLIST */ }
      <TodoList />
      {/* THIS COMPONENT ONLY RENDERS WHEN WIDTH: 768PX */ }
      <FilterButtons />
    </StyledContainer>
  );
}
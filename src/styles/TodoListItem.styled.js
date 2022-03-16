import styled from "styled-components";

export const StyledTodoListItem = styled.div`
  height: 60px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const CheckButton = styled.button`
	border: 1px solid ${({ theme }) => theme.borderColor};
  width: 25px;
  height: 25px;
	border-radius: 50%;
  background-image: ${({ background, theme }) => background ? theme.gradient : 'unset'};

  &:hover {
    background:
    linear-gradient(${({ theme }) => theme.element}, ${({ theme }) => theme.element}) padding-box,
    ${({ theme }) => theme.gradient} border-box;
    border: 3px solid transparent;
  }
`;

export const TodoText = styled.p`
  margin-left: 20px;
  color: ${({ theme }) => theme.text};
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
  opacity: ${({ completed }) => completed ? '0.5' : 'none'};
`;

export const DeleteButton = styled.button`
  margin-left: auto;
`;
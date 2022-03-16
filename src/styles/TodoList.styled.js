import styled from "styled-components";

export const StyledTodoList = styled.section`
  background-color: ${({ theme }) => theme.element};
  border-radius: 5px;
  margin-top: 20px;

  div:last-child {
    border: none;
  }
`;
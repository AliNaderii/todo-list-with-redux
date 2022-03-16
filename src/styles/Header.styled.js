import styled from "styled-components";

export const StyledHeader = styled.header`
  padding-top: 60px;
`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #fff;
    letter-spacing: 12px;
    font-size: 30px;
  }
`;

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.element};
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-top: 50px;
  caret-color: ${({ theme }) => theme.activeButton};

  button {
	  border: 1px solid ${({ theme }) => theme.borderColor};
    opacity: 0.5;
    width: 25px;
    height: 25px;
	  border-radius: 50%;
    cursor: default;
  }

  input {
    border: unset;
    background-color: transparent;
    margin-left: 20px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    color: ${({ theme }) => theme.text};

    &:focus {
      outline: none;
    }
  }
`;
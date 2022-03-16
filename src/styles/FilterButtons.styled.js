import styled from "styled-components";

export const MeidaFilterButtons = styled.div`
  display: none;

  button {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-top: 20px;
    height: 50px;
    background-color: ${({ theme }) => theme.element};
    border-radius: 5px;
  }
`;
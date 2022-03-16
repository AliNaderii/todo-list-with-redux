import styled from 'styled-components';

export const StyledFilters = styled.section`
  height: 50px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  p {
    color: ${({ theme }) => theme.text};
  }
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  color: ${({ active, theme }) => active ? theme.activeButton : theme.secondaryText};

  font-weight: ${({ active }) => active ? '700' : '400'};

  &:hover {
    color: ${({ theme }) => theme.buttonHover}
  }
`;
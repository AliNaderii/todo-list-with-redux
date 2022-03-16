import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  background: ${({ theme }) => theme.name === 'dark' ?
    'url(/assets/bg-desktop-dark.jpg) no-repeat'
    :
    'url(/assets/bg-desktop-light.jpg) no-repeat'};
  background-size: 100% 300px;
  background-color: ${({ theme }) => theme.backgroundColor};

  @media (max-width: 768px) {
    background: ${({ theme }) => theme.name === 'dark' ?
    'url(/assets/bg-mobile-dark.jpg) no-repeat'
    :
    'url(/assets/bg-mobile-light.jpg) no-repeat'};
    background-size: 100% 250px;
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;
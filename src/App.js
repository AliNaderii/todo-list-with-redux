// TOOLS
import { useState } from "react";
// STYLED-COMPONENTS && THEME PROVIDER && GLOBAL STYLE
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './styles/GlobalStyles';
import { Wrapper } from './styles/Wrapper.styled';
// COMPONENTS
import Container from './components/Container';
// REDUX STORE PROVIDER && store
import { Provider } from 'react-redux';
import store from "./store/store";

const darkTheme = {
  name: 'dark',
  backgroundColor: 'hsl(235, 21%, 11%)',
  element: 'hsl(235, 24%, 19%)',
  text: 'hsl(234, 39%, 85%)',
  buttonHover: 'hsl(236, 33%, 92%)',
  borderColor: 'hsl(234, 11%, 52%)',
  secondaryText: 'hsl(233, 14%, 35%)',
  gradient: 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
  activeButton: 'hsl(220, 98%, 61%)'
};

const lightTheme = {
  name: 'light',
  backgroundColor: 'hsl(236, 33%, 92%)',
  element: 'hsl(0, 0%, 98%)',
  secondaryText: 'hsl(233, 11%, 84%)',
  borderColor: 'hsl(236, 9%, 61%)',
  text: 'hsl(235, 19%, 35%)',
  activeButton: 'hsl(220, 98%, 61%)',
  buttonHover: 'hsl(233, 14%, 35%)',
  gradient: 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
};

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const changeTheme = () => {
    setTheme(prevState => prevState === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Provider store={ store }>
        <Wrapper>
          <Container changeTheme={ changeTheme } themeName={ theme.name } />
        </Wrapper>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

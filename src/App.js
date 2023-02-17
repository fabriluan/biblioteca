import { ThemeProvider } from "styled-components";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import GlobalStyle from "./globalStyle";
import { ligthTheme } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={ligthTheme}>

      <GlobalStyle />

      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;

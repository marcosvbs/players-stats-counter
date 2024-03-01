import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "../src/styles/themes/default";
import { ThemeProvider } from "styled-components";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>hello world!</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}

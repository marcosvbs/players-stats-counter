import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "../src/styles/themes/default";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router/Router";
import { PlayerRankingContextProvider } from "./contexts/PlayerRankingContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PlayerRankingContextProvider>
          <Router />
        </PlayerRankingContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

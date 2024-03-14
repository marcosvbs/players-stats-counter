import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "../src/styles/themes/default";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router/Router";
import { PlayerRankingContextProvider } from "./contexts/PlayerRankingContext";
import { MatchStatusContextProvider } from "./contexts/MatchStatusContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PlayerRankingContextProvider>
          <MatchStatusContextProvider>
            <Router />
          </MatchStatusContextProvider>
        </PlayerRankingContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

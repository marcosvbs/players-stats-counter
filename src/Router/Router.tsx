import { Route, Routes } from "react-router-dom";
import { AddPlayers } from "../pages/AddPlayers";
import { MatchInProgress } from "../pages/MatchInProgress";
import { Home } from "../pages/Home";
import { FinishedMatch } from "../pages/FinishedMatch";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/add-players"} element={<AddPlayers />} />
      <Route path={"/match-in-progress"} element={<MatchInProgress />} />
      <Route path={"/finished-match"} element={<FinishedMatch />} />
    </Routes>
  );
}

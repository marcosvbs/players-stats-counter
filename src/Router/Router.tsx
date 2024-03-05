import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { AddPlayers } from "../pages/AddPlayers";
import { MatchInProgress } from "../pages/MatchInProgress";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/add-players"} element={<AddPlayers />} />
      <Route path={"/match-in-progress"} element={<MatchInProgress />} />
    </Routes>
  );
}

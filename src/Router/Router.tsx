import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { AddPlayers } from "../pages/AddPlayers";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/add-players"} element={<AddPlayers />} />
    </Routes>
  );
}

import { createContext } from "react";
import { Navigate } from "react-router-dom";

type MatchStatus = "inProgress" | "finished" | "";

interface MatchStatusContextType {
  getMatchStatus: () => string | null;
  updateMatchStatus: (newStatus: MatchStatus) => void;
  redirectBasedOnMatchStatus: () => JSX.Element | null;
  resetMatchStatus: () => void;
}

export const MatchStatusContext = createContext({} as MatchStatusContextType);

export function MatchStatusContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  function getMatchStatus() {
    return localStorage.getItem("matchStatus");
  }

  function updateMatchStatus(newStatus: MatchStatus) {
    localStorage.setItem("matchStatus", newStatus);
  }

  function redirectBasedOnMatchStatus() {
    switch (getMatchStatus()) {
      case "inProgress":
        return <Navigate to={"/match-in-progress"} replace />;

      case "finished":
        return <Navigate to={"/finished-match"} replace />;

      default:
        return null;
    }
  }

  function resetMatchStatus() {
    localStorage.removeItem("matchStatus");
  }

  return (
    <MatchStatusContext.Provider
      value={{
        getMatchStatus,
        updateMatchStatus,
        redirectBasedOnMatchStatus,
        resetMatchStatus,
      }}
    >
      {children}
    </MatchStatusContext.Provider>
  );
}

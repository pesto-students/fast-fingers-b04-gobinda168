import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = (props) => {
  const difficultyLevel = ["easy", "medium", "hard"];
  const [currentDifficulty, setCurrentDifficulty] = useState(
    localStorage.getItem("difficulty")
      ? JSON.parse(localStorage.getItem("difficulty"))
      : "easy"
  );
  const [currentUser, setCurrentUser] = useState({
    name: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).name
      : "",
    difficulty:
      currentDifficulty === "easy"
        ? 1
        : currentDifficulty === "medium"
        ? 1.5
        : 2,
  });
  const [userScores, setUserScores] = useState([]);
  return (
    <AppContext.Provider
      value={{
        difficultyLevel,
        currentDifficulty,
        setCurrentDifficulty,
        currentUser,
        setCurrentUser,
        userScores,
        setUserScores,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

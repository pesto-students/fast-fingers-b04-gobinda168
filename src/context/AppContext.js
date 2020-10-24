import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = (props) => {
  //difficulty level
  const difficultyLevel = ["easy", "medium", "hard"];

  //store the current difficulty level
  const [currentDifficulty, setCurrentDifficulty] = useState(
    localStorage.getItem("difficulty")
      ? JSON.parse(localStorage.getItem("difficulty"))
      : "easy"
  );

  //stores the difficulty value
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

  //store the userscores and maintain it in local storage
  const [userScores, setUserScores] = useState(
    JSON.parse(localStorage.getItem("scores")) || [0]
  );

  //store the highest score
  const [newHighScore, setNewHighScore] = useState(
    userScores.length === 1 ? 0 : userScores.sort((a, b) => b - a)[0]
  );

  //store the score for for the current game
  const [userCurrentScore, setUserCurrentScore] = useState(0);

  //State to control gameover
  const [gameOver, setGameOver] = useState(false);

  //timer states
  const [microSeconds, setMicroSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
        userCurrentScore,
        setUserCurrentScore,
        newHighScore,
        setNewHighScore,
        gameOver,
        setGameOver,
        microSeconds,
        setMicroSeconds,
        seconds,
        setSeconds,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

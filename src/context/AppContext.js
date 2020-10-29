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
    difficulty: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).difficulty
      : 1,
  });

  //store the userscores and maintain it in local storage
  const [userScores, setUserScores] = useState(
    JSON.parse(localStorage.getItem("scores")) || []
  );

  //store the score for for the current game
  const [userCurrentScore, setUserCurrentScore] = useState(0);

  //store the highest score
  const [newHighScore, setNewHighScore] = useState(
    (localStorage.getItem("highscore") &&
      JSON.parse(localStorage.getItem("highscore"))) ||
      0
  );

  //State to control gameover
  const [gameOver, setGameOver] = useState(false);

  //timer states
  const [microSeconds, setMicroSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //game timer
  const [gameTimer, setGameTimer] = useState(0);
  const [gameOverStatus, setGameOverStatus] = useState(false);

  //store the status of fetch
  const [fetchWord, setFetchWord] = useState(true);

  return (
    <AppContext.Provider
      value={{
        difficultyLevel,
        fetchWord,
        setFetchWord,
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
        gameTimer,
        setGameTimer,
        gameOverStatus,
        setGameOverStatus,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

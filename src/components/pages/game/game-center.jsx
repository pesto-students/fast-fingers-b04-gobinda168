import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import dictionary from "../../../data/dictionary.json";
import { GameOver } from "../Result/result";
import { GameCounter } from "./game-counter";
export const GameCenter = () => {
  //to store user's scores
  const {
    currentUser,
    setCurrentUser,
    gameOver,
    setMicroSeconds,
    setSeconds,
    gameTimer,
    userScores,
    setUserScores,
    gameOverStatus,
    setGameOverStatus,

    fetchWord,
    setFetchWord,
  } = useContext(AppContext);

  //store the randomly fetched word from the dictionary
  const [fetchedWord, setFetchedWord] = useState(null);

  //stores user input
  const [currentLetter, setCurrentLetter] = useState("");

  //calculate total time elapsed
  const [timer, setTimer] = useState(0);
  const [greetings, setGreetings] = useState("Ready");

  //get random word from the dictionary using Math.random()
  const getWord = () => {
    const newDictionary = dictionary.filter((word) => {
      if (currentUser.difficulty < 1.5) return word.length <= 4;
      if (currentUser.difficulty < 2)
        return word.length <= 8 && word.length >= 5;
      return word.length > 8;
    });
    const max = newDictionary.length;
    const randomWord = Math.floor(Math.random() * Math.floor(max));
    return newDictionary[randomWord].toUpperCase();
  };
  useEffect(() => {
    setTimeout(() => {
      setGreetings("Set");
    }, 2000);
    setTimeout(() => {
      setGreetings("GO");
    }, 3000);
    setTimeout(() => {
      setGreetings(null);
    }, 4000);
    return () => {};
  }, []);
  //to fetched the random word
  useEffect(() => {
    if (fetchWord) {
      setFetchedWord(getWord);
      setFetchWord(false);
    }
    if (
      currentLetter &&
      fetchedWord &&
      currentLetter.toLowerCase() === fetchedWord.toLowerCase()
    ) {
      setFetchWord(true);
      setCurrentLetter("");

      setCurrentUser({
        ...currentUser,
        difficulty: currentUser.difficulty + 0.01,
      });
      setSeconds(0);
      setMicroSeconds(0);
      setTimer(0);
    }
    // eslint-disable-next-line
  }, [fetchWord, currentLetter]);

  //display color based on input
  const color = (i, letter) => {
    if (currentLetter && currentLetter[i] === letter.toLowerCase())
      return "#54ba18";
    else if (
      currentLetter &&
      currentLetter[i] !== letter.toLowerCase() &&
      currentLetter.length - 1 >= i
    )
      return "#445298";
    return "white";
  };
  // store types word
  const handleWordInput = (e) => {
    setCurrentLetter(e.target.value);
  };

  useEffect(() => {
    //storing game scores
    if (gameOverStatus) {
      setUserScores([...userScores, gameTimer]);
      localStorage.setItem(
        "scores",
        JSON.stringify([...userScores, gameTimer])
      );
      setGameOverStatus(false);
    }
  }, [gameOverStatus, setGameOverStatus, userScores, gameTimer, setUserScores]);
  return (
    <div className="center">
      {!gameOver ? (
        greetings ? (
          <h1 style={{ color: "white", fontSize: "4vw" }} className="greetings">
            {greetings.toUpperCase()}
          </h1>
        ) : (
          <>
            <GameCounter
              word={fetchedWord}
              difficulty={currentUser.difficulty}
              timer={timer}
              setTimer={setTimer}
            />
            )
            <div className="game-word">
              {fetchedWord &&
                [...fetchedWord].map((letter, i) => (
                  <h1 style={{ color: color(i, letter) }} key={i}>
                    {letter}
                  </h1>
                ))}
            </div>
            <input
              ref={(input) => input && input.focus()}
              type="text"
              className="word-input"
              value={currentLetter}
              onChange={(e) => handleWordInput(e)}
            />
          </>
        )
      ) : (
        <GameOver />
      )}
    </div>
  );
};

import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import dictionary from "../../../data/dictionary.json";
export const GameCenter = () => {
  //timer states
  const [microSeconds, setMicroSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //store the status of fetch
  const [fetchWord, setFetchWord] = useState(true);

  //store the randomly fetched word from the dictionary
  const [fetchedWord, setFetchedWord] = useState(null);

  //stores user input
  const [currentLetter, setCurrentLetter] = useState(null);
  //   const [totalScore, setTotalScore] = useState(0);

  //to store user's scores
  const {
    userCurrentScore,
    setUserCurrentScore,
    userScores,
    setUserScores,
  } = useContext(AppContext);

  //get random word from the dictionary using Math.random()
  const getWord = () => {
    const max = dictionary.length;
    const randomWord = Math.floor(Math.random() * Math.floor(max));
    // console.log(dictionary.slice(0, 10));
    return dictionary[randomWord].toUpperCase();
  };

  //to control the timer
  useEffect(() => {
    let myInterval = setInterval(() => {
      setMicroSeconds(microSeconds + 1);
      if (microSeconds === 10) {
        setUserCurrentScore(userCurrentScore + microSeconds);
        setSeconds(seconds + 1);
        setMicroSeconds(0);
      }
    }, 100);
    return () => {
      clearInterval(myInterval);
    };
  });
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
      setCurrentLetter(null);
      setUserScores([...userScores, userCurrentScore]);
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

  return (
    <div className="center">
      <div style={style}>
        <div className="timer">{`${seconds}:${
          microSeconds < 10 ? "0" + microSeconds : microSeconds
        }`}</div>
      </div>
      <div className="game-word">
        {fetchedWord &&
          [...fetchedWord].map((letter, i) => (
            <h1 style={{ color: color(i, letter) }} key={i}>
              {letter}
            </h1>
          ))}
      </div>
      <input
        type="text"
        className="word-input"
        value={currentLetter || ""}
        onChange={(e) => handleWordInput(e)}
      />
    </div>
  );
};

const style = {
  width: "10vw",
  height: "20vh",
  border: "14px solid white",

  borderRadius: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
};

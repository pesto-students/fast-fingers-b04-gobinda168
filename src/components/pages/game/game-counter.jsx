import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const GameCounter = ({ word, difficulty, timer, setTimer }) => {
  //Set game over
  const {
    setGameOver,
    setUserCurrentScore,
    userCurrentScore,
    microSeconds,
    setMicroSeconds,
    seconds,
    setSeconds,
    userScores,
    setUserScores,
  } = useContext(AppContext);

  //set total time for a question
  const timeForAWord = word && Math.ceil((word.length / difficulty) * 10);

  //to control the timer
  useEffect(() => {
    let myInterval = setInterval(() => {
      setMicroSeconds(microSeconds + 1);
      setTimer(timer + 1);
      if (timeForAWord === timer) {
        setGameOver(true);
        setUserScores([...userScores, userCurrentScore]);
        localStorage.setItem(
          "scores",
          JSON.stringify([...userScores, userCurrentScore])
        );
      }
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
  return (
    <>
      <div style={style}>
        <div className="timer">{`${seconds}:${
          microSeconds < 10 ? "0" + microSeconds : microSeconds
        }`}</div>
      </div>
    </>
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

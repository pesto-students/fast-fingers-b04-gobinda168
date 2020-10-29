import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { Timer } from "../../common/Timer/Timer";
export const GameCounter = ({ word, difficulty, timer, setTimer }) => {
  //Set game over
  const {
    setGameOver,
    gameTimer,
    setGameTimer,
    microSeconds,
    setMicroSeconds,
    seconds,
    setSeconds,
    setGameOverStatus,
    fetchWord,
  } = useContext(AppContext);

  //set total time for a question
  const timeForAWord = word && Math.floor((word.length / difficulty) * 10);
  //to control the timer
  useEffect(() => {
    let myInterval = setInterval(() => {
      setMicroSeconds(microSeconds + 1);
      setTimer(timer + 1);

      //logic to execute after game is over
      if (timeForAWord < timer) {
        //ending game
        setGameOver(true);
        setGameOverStatus(true);
      }
      //updating game timer
      setGameTimer(gameTimer + 1);
      if (microSeconds === 10) {
        setSeconds(seconds + 1);
        setMicroSeconds(0);
      }
    }, 100);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {!fetchWord && <Timer timeForAWord={Math.ceil(timeForAWord / 10)} />}
    </div>
  );
};

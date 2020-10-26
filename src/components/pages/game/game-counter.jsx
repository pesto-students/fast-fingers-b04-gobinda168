import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { Timer } from "../../common/Timer/Timer";
// import ProgressBar from "../../common/ProgressBar/ProgressBar";
export const GameCounter = ({ word, difficulty, timer, setTimer }) => {
  //Set game over
  const {
    // gameOver,
    setGameOver,
    gameTimer,
    setGameTimer,
    microSeconds,
    setMicroSeconds,
    seconds,
    setSeconds,
    setGameOverStatus,
    progress,
    setProgress,
    pathCovered,
    setPathCovered,
    offset,
    setOffset,
    // newHighScore,
  } = useContext(AppContext);

  //set total time for a question
  const timeForAWord = word && Math.ceil((word.length / difficulty) * 10);
  //to control the timer
  useEffect(() => {
    console.log(timeForAWord);
    let myInterval = setInterval(() => {
      setMicroSeconds(microSeconds + 1);
      setTimer(timer + 1);
      console.log(Math.floor(timeForAWord));

      if (progress <= timeForAWord) setProgress(progress + 1);

      //logic to execute after game is over
      if (timeForAWord === timer) {
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
    <>
      {/* <div style={style}>
        <div className="timer">{`${seconds}:${
          microSeconds < 10 ? "0" + microSeconds : microSeconds
        }`}</div>
      </div> */}
      {/* <ProgressBar
        progress={progress}
        timeForAWord={timeForAWord}
        seconds={seconds}
        microSeconds={microSeconds}
        size={300}
        strokeWidth={30}
        circleOneStroke="#d9edfe"
        circleTwoStroke={"#ff5155"}
        pathCovered={pathCovered}
        setPathCovered={setPathCovered}
        offset={offset}
        setOffset={setOffset}
      /> */}
      <Timer timeInSec={timeForAWord / 10} />
    </>
  );
};
// const style = {
//   width: "10vw",
//   height: "20vh",
//   border: "14px solid white",

//   borderRadius: "100px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   color: "white",
// };

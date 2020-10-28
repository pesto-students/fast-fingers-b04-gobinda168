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
    fetchWord,
    // newHighScore,
  } = useContext(AppContext);

  //set total time for a question
  const timeForAWord = word && Math.floor((word.length / difficulty) * 10);
  //to control the timer
  useEffect(() => {
    let myInterval = setInterval(() => {
      setMicroSeconds(microSeconds + 1);
      setTimer(timer + 1);

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
      (
      {/* <ProgressBar
        progress={progress}
        timeForAWord={timeForAWord}
        seconds={seconds}
        microSeconds={microSeconds}
        size={200}
        strokeWidth={30}
        circleOneStroke="#d9edfe"
        circleTwoStroke={"#ff5155"}
        pathCovered={pathCovered}
        setPathCovered={setPathCovered}
        offset={offset}
        setOffset={setOffset}
      /> */}
      {!fetchWord && (
        <Timer
          timeForAWord={Math.ceil(timeForAWord / 10)}
          ms={microSeconds}
          gameOver={setGameOver}
          gameStatus={setGameOverStatus}
        />
      )}
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

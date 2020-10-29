import React, { useEffect, useState } from "react";
import { useRef } from "react";
// import { GameContext } from "../../contexts/context";
import "./Timer.css";

export const Timer = ({ timeForAWord, gameOver, gameStatus }) => {
  let [timeToBeShown, setTimeToBeShown] = useState(`${timeForAWord}`);
  const pathRef = useRef();
  const [circleDasharray, setCircleDasharray] = useState(`283`);
  // const [ms, setMs] = useState(0);
  useEffect(() => {
    startTimer();
    // return () => clearInterval(ms);
    // eslint-disable-next-line
  }, []);

  const TIME_LIMIT = timeForAWord;
  const FULL_DASH_ARRAY = 283;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let ms = 0;

  function formatTimeLeft(time, ms, gameTimer) {
    // const minutes = Math.floor(time);
    let seconds = time;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${seconds}:${ms < 10 ? "0" + ms : ms}`;
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      // The amount of time passed increments by one
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
      }
      ms += 1;

      if (ms >= 10) {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        ms = 0;
      }
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
      }

      // The time left label is updated
      setTimeToBeShown(formatTimeLeft(timeLeft, ms));
      setCircleDasharray(
        `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`
      );
    }, 100);
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  return (
    <div className="timerContainer">
      <div className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            />
            <path
              id="base-timer-path-remaining"
              strokeDasharray={circleDasharray}
              className="base-timer__path-remaining"
              ref={pathRef}
              d="
                  M 50, 50
                  m -45, 0
                  a 45,45 0 1,0 90,0
                  a 45,45 0 1,0 -90,0
                "
            ></path>
          </g>
        </svg>
        <span
          id="base-timer-label"
          className="base-timer__label"
          style={{ color: "white" }}
        >
          {timeToBeShown}
        </span>
      </div>
    </div>
  );
};

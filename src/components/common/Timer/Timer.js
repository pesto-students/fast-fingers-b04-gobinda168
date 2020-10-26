import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Timer.css";
export const Timer = ({ timeInSec = 5 }) => {
  const formatTimeLeft = (time) => {
    // The largest round integer less than or equal to the result of time divided being by 60.
    // const minutes = Math.floor(time / 60);

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;

    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    // The output in MM:SS format
    return `${seconds}`;
  };
  const TIME_LIMIT = timeInSec;
  //   let timeLeft = TIME_LIMIT;
  //   let timePassed = 0;
  const [timePassed, setTimePassed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  useEffect(() => {
    let timerInterval = setInterval(() => {
      if (TIME_LIMIT >= timePassed) {
        setTimePassed(timePassed + 1);
        setTimeLeft(TIME_LIMIT - timePassed);
      }
      const rawTimeFraction = timeLeft / TIME_LIMIT;

      setCircleDasharray(
        `${(
          (rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction)) *
          283
        ).toFixed(0)} 283`
      );
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, [timePassed, timeLeft, TIME_LIMIT]);
  const COLOR_CODES = {
    info: {
      color: "green",
    },
  };

  let remainingPathColor = COLOR_CODES.info.color;

  // Update the dasharray value as time passes, starting with 283
  const [circleDasharray, setCircleDasharray] = useState("");

  return (
    <div class="base-timer">
      <svg
        class="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class={`base-timer__path-remaining ${remainingPathColor}`}
            strokeDasharray={circleDasharray}
            d={`M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0`}
            style={{
              strokeWidth: "7px",

              /* Rounds the line endings to create a seamless circle */
              strokeLinecap: "round",

              /* Makes sure the animation starts at the top of the circle */
              transform: "rotate(90deg)",
              transformOrigin: "center",

              /* One second aligns with the speed of the countdown timer */
              transition: `1s linear all `,

              /* Allows the ring to change color when the color value updates */
              stroke: "green",
            }}
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label">
        {formatTimeLeft(timeLeft)}
      </span>
    </div>
  );
};

import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../../../context/AppContext";
import "./game.css";
export const Game = () => {
  const [microSeconds, setMicroSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      setMicroSeconds(microSeconds + 1);
      if (microSeconds === 10) {
        setSeconds(seconds + 1);
        setMicroSeconds(0);
      }
    }, 100);
    return () => {
      clearInterval(myInterval);
    };
  });

  const { currentUser, currentDifficulty } = useContext(AppContext);
  const [currentLetter, setCurrentLetter] = useState(null);
  return (
    <div className="game-page">
      <div className="text-color left">
        <div className="game-left-header">
          <div className="player-name">
            <img src="/assets/images/account.svg" alt="account" width="25vw" />
            <h3>{currentUser.name.toUpperCase()}</h3>
          </div>
          <div className="level">
            <img src="/assets/images/game.svg" alt="game" width="25vw" />
            <h3>LEVEL : {currentDifficulty.toUpperCase()}</h3>
          </div>
        </div>
        <div className="score-board">
          <div className="text-color title">SCORE BOARD</div>
          <div className="scores">
            <li>Game 1 : 1:14</li>
            <li>Game 1 : 1:14</li>
          </div>
        </div>
        <div className="stop">
          <div className="game-left-stop">
            <img src="/assets/images/close.svg" alt="close" />

            <h2>STOP GAME</h2>
          </div>
        </div>
      </div>
      <div className="text-color center">
        <div
          style={{
            width: "10vw",
            height: "20vh",
            border: "4px solid white",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {`${seconds}:${microSeconds}`}
        </div>
        <div className="game-word">
          {[..."WORD"].map((letter, i) => (
            <h1
              style={{
                color:
                  currentLetter && currentLetter[i] === letter.toLowerCase()
                    ? "white"
                    : currentLetter && currentLetter[i] !== letter.toLowerCase()
                    ? "red"
                    : "black",
              }}
            >
              {letter}
            </h1>
          ))}
        </div>
        {currentLetter}
        <input type="text" onChange={(e) => setCurrentLetter(e.target.value)} />
      </div>
      <div className="text-color right">
        <h3>FAST FINGERS</h3>
        <h4>Score: </h4>
      </div>
    </div>
  );
};

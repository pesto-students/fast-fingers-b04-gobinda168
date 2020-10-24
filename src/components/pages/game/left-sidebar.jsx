import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const GameLeft = ({ resultScreen = true }) => {
  const { currentUser, currentDifficulty } = useContext(AppContext);
  const stopGame = () => {};

  return (
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
      {resultScreen && (
        <div className="score-board">
          <div className="text-color title">SCORE BOARD</div>
          <div className="scores">
            <li>Game 1 : 1:14</li>
            <li>Game 1 : 1:14</li>
          </div>
        </div>
      )}
      <div className="stop" onClick={stopGame}>
        <div className="game-left-stop">
          {resultScreen && <img src="/assets/images/close.svg" alt="close" />}

          <h2>{resultScreen ? "STOP GAME" : "QUIT"}</h2>
        </div>
      </div>
    </div>
  );
};

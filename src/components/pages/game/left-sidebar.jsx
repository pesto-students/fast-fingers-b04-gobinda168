import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { mapDifficulty } from "../../common/map-difficulty";

export const GameLeft = () => {
  const { currentUser, gameOver, setGameOver } = useContext(AppContext);

  //stop the game
  const stopGame = () => {
    setGameOver(true);
  };

  return (
    <div className="text-color left">
      <div className="game-left-header">
        <div className="player-name">
          <img src="/assets/images/account.svg" alt="account" width="25vw" />
          <h3>{currentUser.name.toUpperCase()}</h3>
        </div>
        <div className="level">
          <img src="/assets/images/game.svg" alt="game" width="25vw" />
          <h3>LEVEL : {mapDifficulty(currentUser.difficulty).toUpperCase()}</h3>
        </div>
      </div>
      {!gameOver && (
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
          {!gameOver && <img src="/assets/images/close.svg" alt="close" />}

          <h2>{!gameOver ? "STOP GAME" : "QUIT"}</h2>
        </div>
      </div>
    </div>
  );
};

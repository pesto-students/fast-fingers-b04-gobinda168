import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { mapDifficulty } from "../../common/map-difficulty";
import { GameScoreBoard } from "./game-score-board";

export const GameLeft = () => {
  const {
    currentUser,
    gameOver,
    setGameOver,
    userScores,
    newHighScore,
    setGameOverStatus,
  } = useContext(AppContext);

  //stop the game
  const stopGame = () => {
    setGameOver(true);
    setGameOverStatus(true);
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
      <GameScoreBoard
        gameOver={gameOver}
        userScores={userScores}
        newHighScore={newHighScore}
      />
      <div
        className="stop"
        onClick={() => (gameOver ? window.location.assign("/") : stopGame())}
      >
        <div className="game-left-stop">
          {!gameOver && <img src="/assets/images/close.svg" alt="close" />}

          <h2>{!gameOver ? "STOP GAME" : "QUIT"}</h2>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const GameOver = () => {
  const { userScores, newHighScore, gameTimer, setNewHighScore } = useContext(
    AppContext
  );
  return (
    <div className="game-over" style={{ marginTop: "20vh" }}>
      <div className="text-color-white title">
        Score : Game {userScores.length}
      </div>
      <div className="text-color-white score">{`${
        gameTimer / 10 < 10
          ? "0" + Math.floor(gameTimer / 10)
          : Math.floor(gameTimer / 10)
      }:${gameTimer % 10 < 10 ? "0" + (gameTimer % 10) : gameTimer % 10}`}</div>
      <div className="text-color-white highscore">
        {gameTimer > newHighScore && "New High Score"}
      </div>
      <div
        className="play-again"
        onClick={() => {
          setNewHighScore(gameTimer > newHighScore ? gameTimer : newHighScore);
          localStorage.setItem(
            "highscore",
            JSON.stringify(gameTimer > newHighScore ? gameTimer : newHighScore)
          );
          window.location.reload();
        }}
      >
        <div className="game-center-reload">
          <img src="/assets/images/reload.svg" alt="close" />
          <h2>PLAY AGAIN</h2>
        </div>
      </div>
    </div>
  );
};

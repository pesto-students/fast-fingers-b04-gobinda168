import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const GameOver = () => {
  const { userScores, newHighScore, userCurrentScore } = useContext(AppContext);
  return (
    <div className="game-over">
      <div className="text-color-white title">
        Score Game {userScores.length}
      </div>
      <div className="text-color-white score">{`10:29`}</div>
      <div className="text-color-white highscore">
        {userCurrentScore > newHighScore && "New High Score"}
      </div>
      <div className="play-again" onClick={() => window.location.reload()}>
        <div className="game-center-reload">
          <img src="/assets/images/reload.svg" alt="close" />
          <h2>PLAY AGAIN</h2>
        </div>
      </div>
    </div>
  );
};

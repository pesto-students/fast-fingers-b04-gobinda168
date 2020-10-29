import React from "react";

export const GameScoreBoard = ({ gameOver, userScores, newHighScore }) => {
  
  return (
    <>
      {!gameOver && (
        <div className="score-board">
          <div className="text-color title">SCORE BOARD</div>
          <div className="scores">
            {userScores.map((score, key) => (
              <div key={key} className="score">
                <div style={{ fontSize: "1vw", paddingLeft: ".4vw" }} key={key}>
                  {newHighScore - 1 === score && "New Highscore"}
                </div>
                <li>
                  Game 1 :{" "}
                  {`${
                    score / 10 < 10
                      ? "0" + Math.floor(score / 10)
                      : Math.floor(score / 10)
                  }:${score % 10 < 10 ? "0" + (score % 10) : score % 10}`}
                </li>
              </div>
            ))}

            {/* <li>Game 1 : 1:14</li> */}
          </div>
        </div>
      )}
    </>
  );
};

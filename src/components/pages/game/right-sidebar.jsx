import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const RightSidebar = () => {
  const { gameTimer } = useContext(AppContext);
  return (
    <div className="text-color right">
      <h3>FAST FINGERS</h3>
      <h4>
        Score:
        {`${
          gameTimer / 10 < 10
            ? "0" + Math.floor(gameTimer / 10)
            : Math.floor(gameTimer / 10)
        }:${gameTimer % 10 < 10 ? "0" + (gameTimer % 10) : gameTimer % 10}`}
      </h4>
    </div>
  );
};

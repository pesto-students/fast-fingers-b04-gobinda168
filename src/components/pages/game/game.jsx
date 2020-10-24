import React from "react";
import { GameCenter } from "./game-center";
import "./game.scss";
import { GameLeft } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";
export const Game = () => {
  return (
    <div className="game-page">
      <GameLeft />
      <GameCenter />
      <RightSidebar />
    </div>
  );
};

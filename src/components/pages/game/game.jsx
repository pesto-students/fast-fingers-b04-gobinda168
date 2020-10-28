import React from "react";
import { GameCenter } from "./game-center";
import "./game.scss";
import { GameLeft } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";
export const Game = () => {
  return (
    <div className="game-page">
      <audio controls autoPlay style={{ display: "none" }}>
        <source src="/assets/music.mp3" type="audio/mpeg" />
      </audio>
      <GameLeft />
      <GameCenter />
      <RightSidebar />
    </div>
  );
};

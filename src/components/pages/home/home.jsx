import React from "react";
import "./home.css";
import { Dropdown } from "./dropdown/dropdown";
import { AppHeader } from "./header/header";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
// import { useState } from "react";
export const Home = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  return (
    <div className="App">
      <AppHeader />
      <input
        placeholder="TYPE YOUR NAME"
        className="input-field-name"
        onChange={(e) =>
          setCurrentUser({ ...currentUser, name: e.target.value })
        }
        value={currentUser.name}
      />

      <Dropdown />
      <Link to={currentUser.name && "/game"} className="">
        <div
          className="row start-game"
          onClick={() =>
            localStorage.setItem("user", JSON.stringify(currentUser))
          }
        >
          <img src="/assets/images/play.svg" alt="play button" />

          <h1 className="text-color start-game-text">START GAME</h1>
        </div>
      </Link>
    </div>
  );
};

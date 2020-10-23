import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg">
      <div className="App">
        <img
          src="/assets/images/icon-awesome-keyboard.svg"
          class="Icon-awesome-keyboard"
          alt="keyboard"
        ></img>
        <h1 className="text-color">Fast Fingers </h1>
        <div className="row">
          <div className="line"></div>
          <div className="text-color">the ultimate typing game</div>
          <div className="line"></div>
        </div>
        <input placeholder="TYPE YOUR NAME" className="input-field-name" />
        <select
          // placeholder="DIFFICULTY LEVEL"
          className="input-field-difficulty"
        >
          <option selected>DIFFICULTY LEVEL</option>
        </select>
        <div className="row start-game">
          <img src="/assets/images/play.svg" alt="play button" />
          <h1 className="text-color">START GAME</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

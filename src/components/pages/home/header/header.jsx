import React from "react";

export const AppHeader = () => {
  return (
    <>
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
    </>
  );
};

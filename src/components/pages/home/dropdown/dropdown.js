import React, { useContext, useState } from "react";
import { AppContext } from "../../../../context/AppContext";
import "./dropdown.css";
export const Dropdown = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const {
    difficultyLevel,
    setCurrentDifficulty,
    currentDifficulty,
  } = useContext(AppContext);

  const selectDifficulty = (difficulty) => {
    setDropdownVisibility(false);
    setCurrentDifficulty(difficulty);
    localStorage.setItem("difficulty", JSON.stringify(difficulty));
  };

  return (
    <div>
      <div
        className="input-field-difficulty"
        onClick={() => setDropdownVisibility(!dropdownVisibility)}
      >
        <div className="title">
          {currentDifficulty
            ? currentDifficulty.toUpperCase()
            : "DIFFICULTY LEVEL"}
        </div>
        <img
          src="/assets/images/arrow-dropdown.svg"
          width="18vw"
          alt="dropdown icon"
          style={{ transform: dropdownVisibility && "rotateX(180deg)" }}
        />
      </div>
      {dropdownVisibility && (
        <div className="dropdown-box">
          <div className="dropdown">
            {difficultyLevel.map((difficulty) => (
              <li onClick={() => selectDifficulty(difficulty)}>
                {difficulty.toUpperCase()}
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

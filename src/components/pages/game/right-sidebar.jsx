import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const RightSidebar = () => {
  const { userCurrentScore } = useContext(AppContext);
  //   const min = Math.floor(userCurrentScore / 600);

  const sec = Math.floor(userCurrentScore / 10);
  const min = Math.floor(sec / 60);
  return (
    <div className="text-color right">
      <h3>FAST FINGERS</h3>
      <h4>
        Score:
        {`${min}:${sec % 60}`}{" "}
      </h4>
    </div>
  );
};

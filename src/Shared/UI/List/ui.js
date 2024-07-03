import React from "react";
import "./style.css";

export const ListBox = (props) => {
  return (
    <div className="listBox">
      <p className="listBox__head">{props.num}</p>
      <p className="listBox__desc">
        {props.desc}
      </p>
    </div>
  );
};

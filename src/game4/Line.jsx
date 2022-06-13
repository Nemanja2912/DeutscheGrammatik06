import React from "react";
import Dropdown from "./Dropdown";

const Line = ({ options, done }) => {
  return (
    <div className={`line ${done && "line-done"}`}>
      {options.map((optionList) => (
        <Dropdown done={done} options={optionList} />
      ))}
    </div>
  );
};

export default Line;

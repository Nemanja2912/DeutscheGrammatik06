import React, { useState, useEffect, useRef } from "react";

import Arrow from "../assets/img/arrow_down_white.svg";

const Dropdown = ({ done, options }) => {
  const [open, setOpen] = useState(false);
  const [choose, setChoose] = useState(false);

  const listRef = useRef(null);

  useEffect(() => {}, []);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <div
        ref={listRef}
        className={`list ${done && "done"}`}
        style={{
          height: open ? listRef.current.scrollHeight : 37.4,
          zIndex: open ? 1000 : 1,
        }}
      >
        <p onClick={handleOpen} className="show">
          {choose ? choose : <img src={Arrow} alt="" />}
        </p>

        {!done &&
          options.map((option) => (
            <p
              onClick={() => {
                setChoose(option);
                setOpen(false);
              }}
            >
              {option}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;

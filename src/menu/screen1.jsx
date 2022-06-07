import React, { useState, useEffect } from "react";

const Screen1 = ({ movePos }) => {
  const [textNone, setTextNone] = useState(false);

  useEffect(() => {
    if (movePos === 1) {
      setTimeout(() => {
        setTextNone(true);
      }, 1000);
    }
  });

  return (
    <>
      <div
        className={`top ${movePos !== 0 ? "move" : ""} ${
          movePos === 2 ? "move2" : ""
        }`}
      >
        <p className={`title`}>Interaktive Grammatik</p>
        <p className="subtitle">Komposita</p>
      </div>
      {textNone ? (
        ""
      ) : (
        <p
          className={`text ${movePos !== 0 ? "hidden" : ""}`}
          style={{ textTransform: "uppercase" }}
        >
          Was ist ein Kompositum? Dafür gibt es eine Regel. <br />
          Du kannst die Regel in dieser Lektion lernen oder wiederholen..
        </p>
      )}
    </>
  );
};

export default Screen1;

import React, { useEffect, useState } from "react";

const CombineItem = ({ content, completed }) => {
  const [level, setLevel] = useState(-1);

  useEffect(() => {
    setLevel(0);

    setTimeout(() => {
      setLevel(1);

      setTimeout(() => {
        setLevel(2);

        setTimeout(() => {
          setLevel(3);
        }, 1000);
      }, 1000);
    }, 1000);
  }, []);

  return (
    <div className="combine-item">
      <div className="combine-words">
        <div className="word" style={{ opacity: level >= 0 ? 1 : 0 }}>
          {content.box1}
        </div>
        <div className="word" style={{ opacity: level >= 1 ? 1 : 0 }}>
          <span style={{ color: completed ? "#eb6501" : "#000" }}>
            {content.box2.split(" ")[0]}
          </span>{" "}
          {content.box2.split(" ")[1]}
        </div>
      </div>
      <div className="curly" style={{ opacity: level >= 2 ? 1 : 0 }}>
        {"}"}
      </div>
      <div
        className={`result ${completed ? "bold" : ""}`}
        style={{ opacity: level >= 3 ? 1 : 0 }}
      >
        {content.main}
      </div>
    </div>
  );
};

export default CombineItem;

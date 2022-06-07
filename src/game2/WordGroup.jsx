import React from "react";

const WordGroup = ({ item }) => {
  return (
    <div className="wrapper">
      <div className="main">{item.desc}</div>
      <div className="results">
        {item.results.map((texts) => (
          <div className="text">
            {texts.desc.map((text) => (
              <span>{text}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordGroup;

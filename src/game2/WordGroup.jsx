import React from "react";

const WordGroup = ({ item }) => {
  return (
    <div className="wrapper">
      <div className="main">{item.desc}</div>
      <div className="results">
        {item.results.map((texts, textsIndex) => (
          <div className="text" key={textsIndex}>
            {texts.desc.map((text, textIndex) => (
              <span key={textIndex}>{text}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordGroup;

import React, { useState, useRef } from "react";
import Indicator from "./../UI/Indicator";

const Buttons = ({ index, btns, hide, answers, setButtonCart, setAnswers }) => {
  const [indicator, setIndicator] = useState([]);
  const [ghostText, setGhostText] = useState("");
  const [opacity, setOpacity] = useState(0);

  const ghostRef = useRef(null);

  return (
    <>
      <div className={`buttons ${"buttons" + index}`}>
        {btns.map((buttons, btnIndex) => (
          <div
            key={btnIndex}
            className={`btn btn${btnIndex + 1} ${hide ? "hide" : ""} ${
              answers[btnIndex] === "red"
                ? "red-bg"
                : answers[btnIndex] === "green"
                ? "green-bg"
                : ""
            }`}
            onClick={(clickEvent) => {
              if (answers[btnIndex] === true) {
                setButtonCart((prev) => prev + 1);
                setAnswers((prev) => {
                  prev[index - 1][btnIndex] = "green";

                  setIndicator(["correct"]);

                  const element = clickEvent.target;

                  setGhostText(element.innerHTML);

                  ghostRef.current.style.left =
                    element.getBoundingClientRect().left + "px";
                  ghostRef.current.style.top =
                    element.getBoundingClientRect().top + "px";
                  ghostRef.current.style.transition = "0s";
                  setOpacity(1);

                  setTimeout(() => {
                    ghostRef.current.style.transition = "0.25s linear";
                    ghostRef.current.style.left = 650 + "px";
                    ghostRef.current.style.top = 625 + "px";
                    setOpacity(0);

                    setTimeout(() => {
                      ghostRef.current.style.transition = "0s";
                    }, 250);
                  }, 50);

                  return [...prev];
                });
              } else if (answers[btnIndex] === false) {
                setAnswers((prev) => {
                  prev[index - 1][btnIndex] = "red";

                  setIndicator(["wrong"]);

                  return [...prev];
                });
              }
            }}
          >
            {buttons}
          </div>
        ))}
      </div>
      <div className="buttons">
        <div
          className="ghost btn"
          ref={ghostRef}
          style={{ position: "absolute", opacity }}
        >
          {ghostText}
        </div>
      </div>

      <Indicator active={indicator} />
    </>
  );
};

export default Buttons;

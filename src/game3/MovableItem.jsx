import React, { useState } from "react";
import Indicator from "./../UI/Indicator";

const MovableItem = ({ text, trueRef, finish, setFinish, wordRef }) => {
  const [activeIndicator, setActiveIndicator] = useState([]);

  const handleMove = (initEvent) => {
    const element = initEvent.target;
    element.style.transition = "0s";
    element.style.zIndex = "1000";

    const initX = element.getBoundingClientRect().left;
    const initY = element.getBoundingClientRect().top;

    const mouseX = initEvent.clientX - initX;
    const mouseY = initEvent.clientY - initY;

    const moveElement = (moveEvent) => {
      element.style.left = moveEvent.clientX - initX - mouseX + "px";
      element.style.top = moveEvent.clientY - initY - mouseY + "px";
    };

    document.addEventListener("mousemove", moveElement);

    const endMove = (endEvent) => {
      document.removeEventListener("mousemove", moveElement);
      document.removeEventListener("mouseup", endMove);

      if (
        trueRef.current &&
        endEvent.clientX > trueRef.current.getBoundingClientRect().left &&
        endEvent.clientX < trueRef.current.getBoundingClientRect().right &&
        endEvent.clientY > trueRef.current.getBoundingClientRect().top &&
        endEvent.clientY < trueRef.current.getBoundingClientRect().bottom
      ) {
        element.style.transition = "0.3s";
        element.style.left =
          trueRef.current.getBoundingClientRect().left - initX + "px";
        element.style.top =
          trueRef.current.getBoundingClientRect().top - initY + "px";
        element.style.zIndex = "1";

        setFinish();

        setActiveIndicator(["correct"]);
      } else {
        element.style.zIndex = "1";
        element.style.transition = "0.3s";
        element.style.left = 0 + "px";
        element.style.top = 0 + "px";

        setActiveIndicator(["wrong"]);
      }
    };

    document.addEventListener("mouseup", endMove);
  };

  return (
    <>
      <div
        onMouseDown={handleMove}
        className={`word-box ${finish ? "finish" : ""}`}
        style={{ position: "relative", left: 0, top: 0 }}
        ref={wordRef}
      >
        {text}
      </div>

      <Indicator active={activeIndicator} />
    </>
  );
};

export default MovableItem;

import React, { useEffect, useState } from "react";
import Indicator from "../indicator/indicator";

const Movable = React.forwardRef(
  (
    {
      children,
      className,
      style,
      targetRef = false,
      transition = 0.25,
      customDrop = false,
      noreturn = false,
      onMove = () => {},
      onFinished = () => {},
      onFail = () => {},
    },
    ref
  ) => {
    const [pos, setPos] = useState([0, 0]);
    const [transitionSpeed, setTransitionSpeed] = useState(0);

    const [activeIndicator, setActiveIndicator] = useState();

    const handleMove = (initEvent) => {
      const element = initEvent.target;

      const elementX = element.getBoundingClientRect().left;
      const elementY = element.getBoundingClientRect().top;

      const cursorX = initEvent.clientX - elementX;
      const cursorY = initEvent.clientY - elementY;

      const styleX = parseFloat(element.style.left);
      const styleY = parseFloat(element.style.top);

      const moveElement = (moveEvent) => {
        const posX = moveEvent.clientX - elementX - cursorX + styleX + "px";
        const posY = moveEvent.clientY - elementY - cursorY + styleY + "px";

        onMove(posX, posY, element);
        setPos([posX, posY]);
      };

      const endMove = (endEvent) => {
        setTransitionSpeed(transition);

        setTimeout(() => {
          setTransitionSpeed(0);
        }, transition);

        if (!noreturn) {
          if (
            targetRef &&
            endEvent.clientX > targetRef.current.getBoundingClientRect().left &&
            endEvent.clientX <
              targetRef.current.getBoundingClientRect().right &&
            endEvent.clientY > targetRef.current.getBoundingClientRect().top &&
            endEvent.clientY < targetRef.current.getBoundingClientRect().bottom
          ) {
            let posX, posY;

            if (customDrop) {
              posX = customDrop[0] - elementX + styleX + "px";

              posY = customDrop[1] - elementY + styleY + "px";
            } else {
              posX =
                targetRef.current.getBoundingClientRect().left -
                elementX -
                styleX +
                "px";

              posY =
                targetRef.current.getBoundingClientRect().top -
                elementY -
                styleY +
                "px";
            }
            setPos([posX, posY]);
            setActiveIndicator("correct");

            onFinished();
          } else {
            onFail(element);
            setPos([0, 0]);
            setActiveIndicator("wrong");
          }
        }

        document.removeEventListener("mousemove", moveElement);
        document.removeEventListener("mouseup", endMove);
      };

      document.addEventListener("mousemove", moveElement);
      document.addEventListener("mouseup", endMove);
    };

    return (
      <>
        <div
          className={className}
          style={{
            ...style,
            position: "relative",
            left: pos[0],
            top: pos[1],
            cursor: "pointer",
            transition: `${transitionSpeed}s linear`,
          }}
          onMouseDown={handleMove}
          ref={ref}
        >
          {children}
        </div>
        <Indicator
          active={activeIndicator}
          setActiveIndicator={setActiveIndicator}
        />
      </>
    );
  }
);

export default Movable;

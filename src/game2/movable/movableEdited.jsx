import React, { useEffect, useState } from "react";
import Indicator from "./../../reusable/indicator/indicator";

const MovableEdited = React.forwardRef(
  (
    {
      children,
      className,
      style,
      targetRef = false,
      transition = 0.25,

      customDrop = false,
      noreturn = false,
      noRight = false,
      noTop = false,
      multipleRefs = [],
      multipleRefsDisabled = [],
      multipleCustomDrop = [],
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

        onMove(posX, posY, element, moveEvent);
        setPos([posX, posY]);
      };

      const endMove = (endEvent) => {
        setTransitionSpeed(transition);

        setTimeout(() => {
          setTransitionSpeed(0);
        }, transition);

        const checkDrop = (target, ref, customDrop) => {
          if (
            target &&
            endEvent.clientX > ref.getBoundingClientRect().left &&
            endEvent.clientX < ref.getBoundingClientRect().right &&
            endEvent.clientY > ref.getBoundingClientRect().top &&
            endEvent.clientY < ref.getBoundingClientRect().bottom
          ) {
            let posX, posY;

            if (customDrop) {
              posX = customDrop[0] - elementX + styleX + "px";

              posY = customDrop[1] - elementY + styleY + "px";
            } else {
              posX =
                ref.getBoundingClientRect().left - elementX - styleX + "px";

              posY = ref.getBoundingClientRect().top - elementY - styleY + "px";
            }
            setPos([posX, posY]);
            setActiveIndicator("correct");

            onFinished(endEvent, element);
          } else {
            onFail(element);

            setPos([0, 0]);

            setActiveIndicator("wrong");
          }
        };

        if (multipleRefs.length > 0) {
          let index = -1;

          for (let i = 0; i < multipleRefs.length; i++) {
            if (multipleRefsDisabled[i] === true) continue;

            if (
              multipleRefs[i].current &&
              endEvent.clientX >
                multipleRefs[i].current.getBoundingClientRect().left &&
              endEvent.clientX <
                multipleRefs[i].current.getBoundingClientRect().right &&
              endEvent.clientY >
                multipleRefs[i].current.getBoundingClientRect().top &&
              endEvent.clientY <
                multipleRefs[i].current.getBoundingClientRect().bottom
            ) {
              index = i;
              break;
            }
          }

          if (index === -1) {
            checkDrop(false);
          } else {
            let dropX;

            dropX =
              multipleCustomDrop[index]?.current?.getBoundingClientRect()
                ?.right -
              7.5 -
              element.children[0].getBoundingClientRect()?.width;

            if (noRight) {
              dropX =
                multipleCustomDrop[index]?.current?.getBoundingClientRect()
                  ?.left;
            }

            let top = element.getBoundingClientRect().height;

            if (noTop) {
              top = 0;
            }

            const dropY =
              multipleCustomDrop[index]?.current?.getBoundingClientRect()?.top -
              top;
            checkDrop(multipleRefs, multipleRefs[index]?.current, [
              dropX,
              dropY,
            ]);
          }
        } else {
          if (!noreturn) {
            checkDrop(targetRef, targetRef.current, customDrop);
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

export default MovableEdited;

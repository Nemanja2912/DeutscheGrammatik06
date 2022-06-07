import React, { useEffect, useState, createRef, useRef } from "react";
import Indicator from "./../UI/Indicator";

let position = [];

const PositionWords = ({
  uniqueID,
  words,
  answers,
  completed,
  help,
  setHelpFingerPosition,
}) => {
  const lineStyle = {
    display: "flex",
    marginLeft: 100,
  };

  const wordStyle = {
    backgroundColor: "#5AC8F5",
    fontSize: 18,
    color: "#fff",
    padding: "7.5px 10px",
    borderRadius: 7.5,
    cursor: "pointer",
    position: "relative",
    top: 0,
    left: 0,
  };

  const elementRefs = [useRef(null), useRef(null), useRef(null)];

  const [activeIndicator, setActiveIndicator] = useState([]);

  const swipePosition = (
    oldContainerIndex,
    containerIndex,
    disable,
    element,
    index,
    transition = 0.05
  ) => {
    disable = true;

    setTimeout(() => {
      disable = false;
    }, 250);

    if (oldContainerIndex < containerIndex) {
      const containerElement =
        elementRefs[position[containerIndex].wordIndex].current;

      containerElement.style.transition = `${transition}s linear`;

      containerElement.style.left =
        position[oldContainerIndex].left -
        containerElement.getBoundingClientRect().left +
        parseFloat(containerElement.style.left) +
        "px";

      position[oldContainerIndex] = {
        right:
          position[oldContainerIndex].left +
          containerElement.getBoundingClientRect().width,
        wordIndex: position[containerIndex].wordIndex,
        left: position[oldContainerIndex].left,
      };

      position[containerIndex] = {
        left:
          position[containerIndex].right -
          element.getBoundingClientRect().width,
        wordIndex: index,
        right: position[containerIndex].right,
      };
    } else if (oldContainerIndex > containerIndex) {
      const containerElement =
        elementRefs[position[containerIndex].wordIndex].current;

      containerElement.style.transition = `${transition}s linear`;

      containerElement.style.left =
        position[oldContainerIndex].right -
        containerElement.getBoundingClientRect().width -
        containerElement.getBoundingClientRect().left +
        parseFloat(containerElement.style.left) +
        "px";

      position[oldContainerIndex] = {
        left:
          position[oldContainerIndex].right -
          containerElement.getBoundingClientRect().width,
        wordIndex: position[containerIndex].wordIndex,
        right: position[oldContainerIndex].right,
      };

      position[containerIndex] = {
        right:
          position[containerIndex].left + element.getBoundingClientRect().width,
        wordIndex: index,
        left: position[containerIndex].left,
      };
    }
  };

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < elementRefs.length; i++) {
        position[i] = {
          left: elementRefs[i].current.getBoundingClientRect().left,
          right: elementRefs[i].current.getBoundingClientRect().right,
          wordIndex: i,
        };
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (help) {
      for (let i = 0; i < position.length; i++) {
        if (position[i].wordIndex !== answers[i]) {
          const oldContainerIndex = position.findIndex((el) => {
            return answers[i] === el.wordIndex;
          });

          let disable;

          const containerIndex = i;

          const element =
            elementRefs[position[oldContainerIndex].wordIndex].current;
          const index = answers[i];

          const elementX = element.getBoundingClientRect().left;
          const styleX = parseFloat(element.style.left);

          setHelpFingerPosition([
            element.getBoundingClientRect().left +
              element.getBoundingClientRect().width / 2,
            element.getBoundingClientRect().top +
              element.getBoundingClientRect().height / 2,
          ]);

          setTimeout(() => {
            element.style.transition = "1s linear";
            element.style.left =
              position[containerIndex].left - elementX + styleX + "px";
            element.style.top = 0 + "px";

            setHelpFingerPosition([
              position[containerIndex].left +
                element.getBoundingClientRect().width / 2,
              element.getBoundingClientRect().top +
                element.getBoundingClientRect().height / 2,
            ]);

            setTimeout(() => {
              setHelpFingerPosition("init");
            }, 1250);

            if (Math.abs(containerIndex - oldContainerIndex) !== 1) {
              if (oldContainerIndex < containerIndex) {
                for (let i = oldContainerIndex; i < containerIndex; i++) {
                  swipePosition(i, i + 1, disable, element, index, 1);
                }
              } else {
                for (let i = oldContainerIndex; i > containerIndex; i--) {
                  swipePosition(i, i - 1, disable, element, index, 1);
                }
              }
            } else {
              swipePosition(
                oldContainerIndex,
                containerIndex,
                disable,
                element,
                index,
                1
              );
            }
          }, 1250);

          break;
        }
      }

      setTimeout(() => {
        let isDone = true;

        for (let i = 0; i < position.length; i++) {
          if (position[i].wordIndex !== answers[i]) {
            isDone = false;
            break;
          }
        }

        if (isDone) {
          setActiveIndicator(["correct"]);
          completed();
        }
      }, 2250);
    }
  }, [help]);

  const handleMove = (initEvent, index) => {
    const element = initEvent.target;

    element.style.transition = "0s linear";

    const elementX = element.getBoundingClientRect().left;
    const elementY = element.getBoundingClientRect().top;

    const cursorX = initEvent.clientX - elementX;
    const cursorY = initEvent.clientY - elementY;

    const styleX = parseFloat(element.style.left);
    const styleY = parseFloat(element.style.top);

    element.style.zIndex = "1000";

    let disable = false;

    const moveElement = (moveEvent) => {
      element.style.left =
        moveEvent.clientX - elementX - cursorX + styleX + "px";
      element.style.top =
        moveEvent.clientY - elementY - cursorY + styleY + "px";

      if (disable) return;

      const oldContainerIndex = position.findIndex((el) => {
        return index === el.wordIndex;
      });

      let containerIndex = position.findIndex((el, elIndex) => {
        return (
          ((moveEvent.clientX >= el.left &&
            moveEvent.clientX <= el.left + 7.5 &&
            oldContainerIndex > elIndex) ||
            (moveEvent.clientX >= el.left + 7.5 &&
              moveEvent.clientX <= el.right &&
              elIndex > oldContainerIndex)) &&
          index !== el.wordIndex
        );
      });

      if (moveEvent.clientX <= position[0].left) {
        containerIndex = 0;
      }

      if (moveEvent.clientX >= position[position.length - 1].right) {
        containerIndex = position.length - 1;
      }

      if (containerIndex !== oldContainerIndex && containerIndex !== -1) {
        if (Math.abs(containerIndex - oldContainerIndex) !== 1) {
          if (oldContainerIndex < containerIndex) {
            for (let i = oldContainerIndex; i < containerIndex; i++) {
              swipePosition(i, i + 1, disable, element, index);
            }
          } else {
            for (let i = oldContainerIndex; i > containerIndex; i--) {
              swipePosition(i, i - 1, disable, element, index);
            }
          }

          return;
        }

        swipePosition(
          oldContainerIndex,
          containerIndex,
          disable,
          element,
          index
        );
      }
    };

    const endMove = (endEvent) => {
      element.style.zIndex = "1";

      const elIndex = position.findIndex((el) => {
        return index === el.wordIndex;
      });

      element.style.transition = "0.2s linear";
      element.style.left = position[elIndex].left - elementX + styleX + "px";
      element.style.top = 0 + "px";

      let isDone = true;

      for (let i = 0; i < position.length; i++) {
        if (position[i].wordIndex !== answers[i]) {
          isDone = false;
          break;
        }
      }

      if (isDone) {
        completed();
        setActiveIndicator(["correct"]);
      }

      document.removeEventListener("mousemove", moveElement);
      document.removeEventListener("mouseup", endMove);
    };

    document.addEventListener("mousemove", moveElement);
    document.addEventListener("mouseup", endMove);
  };

  return (
    <>
      <div className="line position--words" style={lineStyle}>
        {words.map((item, index) => (
          <div
            className={`word element${uniqueID}`}
            onMouseDown={(e) => handleMove(e, index)}
            style={wordStyle}
            ref={elementRefs[index]}
          >
            {item}
          </div>
        ))}
      </div>

      <Indicator active={activeIndicator} />
    </>
  );
};

export default PositionWords;

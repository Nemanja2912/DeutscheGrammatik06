import Movable from "./../reusable/movable/movable";
import React, { createRef, useEffect, useRef, useState } from "react";

import FileImage from "../assets/img/SVG/file.svg";

const MessageBox = ({
  drop,
  lineRef,
  item,
  primary,
  onFinish,
  active,
  onComplete,
  disable,
  mapped,
}) => {
  const elementRef = [
    [useRef(null), useRef(null)],
    [useRef(null), useRef(null)],
  ];
  const followRef = [
    [useRef(null), useRef(null)],
    [useRef(null), useRef(null)],
  ];

  const [lineDoneCount, setLineDoneCount] = useState(0);

  const onFinished = (index, elementIndex) => {
    const followElement = followRef[index][elementIndex].current;
    const element = elementRef[index][elementIndex].current;

    const elementX = followElement.getBoundingClientRect().left;
    const elementY = followElement.getBoundingClientRect().top;

    const styleX = parseFloat(followElement.style.left);
    const styleY = parseFloat(followElement.style.top);

    element.style.transition =
      "all 0.5s linear, opacity 0.5s linear 0.1s, background-color 0s";
    element.style.backgroundColor = "";
    element.style.pointerEvents = "none";

    element.style.zIndex = "1";

    followElement.style.transition =
      "all 0.5s linear, opacity 0.5s linear 0.1s";
    followElement.style.pointerEvents = "none";

    followElement.style.left =
      lineRef?.current?.getBoundingClientRect().left - elementX + styleX + "px";
    followElement.style.top =
      lineRef?.current?.getBoundingClientRect().top - elementY + styleY + "px";

    const child = document.createElement("p");
    child.innerHTML = followElement.innerHTML + " " + element.innerHTML;

    followElement.style.opacity = 0;
    element.style.opacity = 0;

    if (!child.innerHTML.includes("Sebastian")) {
      child.style.textTransform = "lowercase";
    }

    setTimeout(() => {
      child.style.opacity = 1;
    }, 150);

    lineRef.current.appendChild(child);

    setTimeout(() => {
      followElement.style.transition = "0s";

      setLineDoneCount((prev) => ++prev);
    }, 250);
  };

  useEffect(() => {
    if (!active) return;

    let counter = 0;

    for (let i = 0; i < item?.element?.length; i++) {
      for (let j = 0; j < item?.element[i]?.length; j++) {
        counter++;
      }
    }

    if (lineDoneCount >= counter) {
      onFinish();
    } else if (lineDoneCount > 0) {
      onComplete();
    }
  }, [lineDoneCount]);

  const handleMove = (x, y, index, elementIndex) => {
    const followElement = followRef[index][elementIndex].current;

    const element = elementRef[index][elementIndex].current;

    element.style.zIndex = "1000";
    element.style.backgroundColor = "#dddddd";

    followElement.style.left = x;
    followElement.style.top = y;
  };

  const handleFail = (index, elementIndex) => {
    const followElement = followRef[index][elementIndex].current;

    const element = elementRef[index][elementIndex].current;

    element.style.zIndex = "1";

    element.style.backgroundColor = "";

    followElement.style.transition = "0.5s linear";
    followElement.style.left = 0 + "px";
    followElement.style.top = 0 + "px";

    setTimeout(() => {
      followElement.style.transition = "0s";
    }, 250);
  };

  const handleSingleMove = (element) => {
    element.style.zIndex = "1000";
    element.style.backgroundColor = "#dddddd";
  };

  const handleSingleFail = (element) => {
    element.style.zIndex = "1";
    element.style.backgroundColor = "";
  };

  return (
    <div
      className="message"
      style={{
        marginLeft: primary ? 0 : 40,
        height: 50 * item?.line?.length,
        backgroundColor: primary ? "#ededed" : "#D6D9DB",
      }}
    >
      <div
        className="name"
        style={{ backgroundColor: primary ? "#5ac8f5" : "#A0C814" }}
      >
        {primary ? "Jonas" : "Deutschfan"}
      </div>
      <div className="body">
        <div className="fake">
          {item?.line?.map((text, index) => (
            <div key={index}>
              {text?.map((word, wordIndex) => (
                <p className="move-word" key={wordIndex}>
                  {word}
                </p>
              ))}
            </div>
          ))}
        </div>

        {!disable && (
          <div>
            {item?.line?.map((text, index) => (
              <div className="real" key={index}>
                {text?.map((word, wordIndex) => {
                  if (item?.element[index].includes(wordIndex)) {
                    const elementIndex = item?.element[index]?.findIndex(
                      (el) => el === wordIndex
                    );

                    return (
                      <Movable
                        transition={0.5}
                        className="move-word"
                        key={wordIndex}
                        targetRef={drop}
                        onFinished={() => onFinished(index, elementIndex)}
                        onMove={(x, y) => handleMove(x, y, index, elementIndex)}
                        onFail={() => handleFail(index, elementIndex)}
                        customDrop={[
                          lineRef?.current?.getBoundingClientRect().left +
                            followRef[index][
                              elementIndex
                            ].current?.getBoundingClientRect().width,
                          lineRef?.current?.getBoundingClientRect().top,
                        ]}
                        ref={elementRef[index][elementIndex]}
                      >
                        {word}
                      </Movable>
                    );
                  } else if (item?.following[index].includes(wordIndex)) {
                    const elementIndex = item?.following[index]?.findIndex(
                      (el) => el === wordIndex
                    );

                    return (
                      <Movable
                        transition={0.5}
                        className="move-word"
                        key={wordIndex}
                        ref={followRef[index][elementIndex]}
                        onMove={(x, y, element) => handleSingleMove(element)}
                        onFail={(element) => handleSingleFail(element)}
                      >
                        {word}
                      </Movable>
                    );
                  } else {
                    return (
                      <Movable
                        transition={0.5}
                        className="move-word"
                        key={wordIndex}
                        onMove={(x, y, element) => handleSingleMove(element)}
                        onFail={(element) => handleSingleFail(element)}
                      >
                        {word}
                      </Movable>
                    );
                  }
                })}

                {mapped && (
                  <div className="map">
                    <img src={FileImage} alt="" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {disable && (
          <div className="real">
            {item?.line?.map((text, index) => (
              <React.Fragment key={index}>
                {text?.map((word, wordIndex) => (
                  <p className="move-word" key={wordIndex}>
                    {word}
                  </p>
                ))}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;

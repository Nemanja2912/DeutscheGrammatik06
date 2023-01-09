import Movable from "./../reusable/movable/movable";
import React, { createRef, useEffect, useRef, useState } from "react";

import FileImage from "../assets/img/SVG/file.svg";

import Map from "../assets/img/map.jpg";
import ReactDOM from "react-dom";

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

  const [mapOpen, setMapOpen] = useState(false);

  const [lineDoneCount, setLineDoneCount] = useState(0);

  const onFinished = (index, elementIndex) => {
    const followElement = followRef[index][elementIndex].current;
    const element = elementRef[index][elementIndex].current;

    const elementX = followElement.getBoundingClientRect().left;
    const elementY = followElement.getBoundingClientRect().top;

    const styleX = parseFloat(followElement.style.left);
    const styleY = parseFloat(followElement.style.top);

    element.style.transition =
      "all 0.25s linear, opacity 0.25s linear, background-color 0s";
    element.style.backgroundColor = "";
    element.style.pointerEvents = "none";

    element.style.zIndex = "1";

    followElement.style.transition = "all 0.25s linear, opacity 0.25s linear";
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
    }, 0);

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

    element.children[0].style.opacity = 1;
    followElement.children[0].style.opacity = 1;
  };

  const handleFail = (index, elementIndex) => {
    const followElement = followRef[index][elementIndex].current;

    const element = elementRef[index][elementIndex].current;

    element.style.zIndex = "1";

    element.style.backgroundColor = "";

    followElement.style.transition = "0.25s linear";
    followElement.style.left = 0 + "px";
    followElement.style.top = 0 + "px";

    setTimeout(() => {
      followElement.style.transition = "0s";
    }, 250);

    element.children[0].style.opacity = 0;
    element.children[0].style.transition = "500ms";
    followElement.children[0].style.opacity = 0;
    followElement.children[0].style.transition = "500ms";

    setTimeout(() => {
      element.children[0].style.transition = "0s";
      followElement.children[0].style.transition = "0s";
    }, 500);
  };

  const handleSingleMove = (element) => {
    element.style.zIndex = "1000";
    element.style.backgroundColor = "#dddddd";

    element.children[0].style.opacity = 1;
  };

  const handleSingleFail = (element) => {
    element.style.zIndex = "1";
    element.style.backgroundColor = "";

    element.children[0].style.opacity = 0;
    element.children[0].style.transition = "500ms";

    setTimeout(() => {
      element.children[0].style.transition = "0s";
    }, 500);
  };

  return (
    <>
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
                          transition={0.25}
                          className="move-word"
                          key={wordIndex}
                          targetRef={drop}
                          onFinished={() => onFinished(index, elementIndex)}
                          onMove={(x, y) =>
                            handleMove(x, y, index, elementIndex)
                          }
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
                          <span style={{ opacity: 0, pointerEvents: "none" }}>
                            {word}
                          </span>
                        </Movable>
                      );
                    } else if (item?.following[index].includes(wordIndex)) {
                      const elementIndex = item?.following[index]?.findIndex(
                        (el) => el === wordIndex
                      );

                      return (
                        <Movable
                          transition={0.25}
                          className="move-word"
                          key={wordIndex}
                          ref={followRef[index][elementIndex]}
                          onMove={(x, y, element) => handleSingleMove(element)}
                          onFail={(element) => handleSingleFail(element)}
                        >
                          <span style={{ opacity: 0, pointerEvents: "none" }}>
                            {word}
                          </span>
                        </Movable>
                      );
                    } else {
                      return (
                        <Movable
                          transition={0.25}
                          className="move-word"
                          key={wordIndex}
                          onMove={(x, y, element) => handleSingleMove(element)}
                          onFail={(element) => handleSingleFail(element)}
                        >
                          <span style={{ opacity: 0, pointerEvents: "none" }}>
                            {word}
                          </span>
                        </Movable>
                      );
                    }
                  })}

                  {mapped && (
                    <>
                      <div className="map">
                        <img
                          src={FileImage}
                          alt=""
                          onClick={() => setMapOpen(true)}
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {mapped &&
        ReactDOM.createPortal(
          <div
            className="map-overlay"
            style={{
              opacity: mapOpen ? 1 : 0,
              pointerEvents: mapOpen ? "initial" : "none",
            }}
          >
            <div className="image-box">
              <img src={Map} alt="" />
              <div className="close-box" onClick={() => setMapOpen(false)}>
                <svg
                  viewBox="0 0 266 438"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M258.476 235.971L64.1319 430.314C54.7589 439.687 39.5629 439.687 30.1909 430.314L7.5239 407.647C-1.8331 398.29 -1.8511 383.125 7.4839 373.746L161.505 219L7.4839 64.255C-1.8511 54.876 -1.8331 39.711 7.5239 30.354L30.1909 7.68701C39.5639 -1.68599 54.7599 -1.68599 64.1319 7.68701L258.475 202.03C267.848 211.402 267.848 226.598 258.476 235.971Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>,
          document.querySelector("#map")
        )}
    </>
  );
};

export default MessageBox;

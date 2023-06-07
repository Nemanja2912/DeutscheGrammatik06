import React, { useState, useEffect } from "react";

const Screen2 = ({ movePos, changePos, item, changeItem, navButtonRef }) => {
  const [opacity, setOpacity] = useState(true);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setOpacity(true);
  }, [movePos]);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 1000);
  }, [display]);

  return (
    <>
      <div
        className={`next ${movePos === 1 ? "nextShow" : ""} ${
          movePos === 2 ? "nextShow2" : ""
        }${movePos === 3 ? "nextShow3" : ""}
        ${movePos === 2 || movePos === 3 ? "nextAnimation" : ""}`}
      >
        {display && (
          <>
            <div
              className={`titles ${movePos === 2 ? "titles-small" : ""} ${
                movePos === 3 ? "titles-full" : ""
              }`}
            >
              <div
                onClick={() => {
                  if (item === 0) return;
                  setDisplay(false);
                  changePos(1);
                  setTimeout(() => {
                    setOpacity(false);
                    changeItem(0);
                  }, 1000);
                }}
                className={`title ${item === 0 ? "active" : ""} ${
                  movePos === 2 ? "titleReduce" : ""
                } `}
                style={{
                  transition: opacity ? "1s" : "0s",
                  transform:
                    movePos === 3
                      ? `translateY(0%)`
                      : `translateY(-${100 * item}%)`,
                }}
              >
                1. Verben aus dem Chat
              </div>

              <div
                className={`title ${item === 1 ? "active" : ""} ${
                  movePos === 2 ? "titleReduce" : ""
                }`}
                style={{
                  transition: opacity ? "1s" : "0s",
                  transform:
                    movePos === 3
                      ? `translateY(0%)`
                      : `translateY(-${100 * item}%)`,
                }}
                onClick={() => {
                  if (item === 1) return;
                  setDisplay(false);
                  changePos(1);
                  setTimeout(() => {
                    setOpacity(false);
                    changeItem(1);
                  }, 1000);
                }}
                ref={navButtonRef[1]}
              >
                2. Präsens bilden
              </div>
              <div
                className={`title ${item === 2 ? "active" : ""} ${
                  movePos === 2 ? "titleReduce" : ""
                }`}
                style={{
                  transition: opacity ? "1s" : "0s",
                  transform:
                    movePos === 3
                      ? `translateY(0%)`
                      : `translateY(-${100 * item}%)`,
                }}
                onClick={() => {
                  if (item === 2) return;
                  setDisplay(false);
                  changePos(1);
                  setTimeout(() => {
                    setOpacity(false);
                    changeItem(2);
                  }, 1000);
                }}
                ref={navButtonRef[2]}
              >
                3. Regel formulieren
              </div>
              <div
                className={`title ${item === 3 ? "active" : ""} ${
                  movePos === 2 ? "titleReduce" : ""
                }`}
                style={{
                  transition: opacity ? "1s" : "0s",
                  transform:
                    movePos === 3
                      ? `translateY(0%)`
                      : `translateY(-${100 * item}%)`,
                }}
                onClick={() => {
                  if (item === 3) return;
                  setDisplay(false);
                  changePos(1);
                  setTimeout(() => {
                    setOpacity(false);
                    changeItem(3);
                  }, 1000);
                }}
                ref={navButtonRef[3]}
              >
                4. Übung 1
              </div>
              <div
                className={`title ${item === 4 ? "active" : ""} ${
                  movePos === 2 ? "titleReduce" : ""
                }`}
                style={{
                  transition: opacity ? "1s" : "0s",
                  transform:
                    movePos === 3
                      ? `translateY(0%)`
                      : `translateY(-${100 * item}%)`,
                }}
                onClick={() => {
                  if (item === 4) return;
                  setDisplay(false);
                  changePos(1);
                  setTimeout(() => {
                    setOpacity(false);
                    changeItem(4);
                  }, 1000);
                }}
                ref={navButtonRef[4]}
              >
                5. Übung 2
              </div>
            </div>
            <div
              className="subtitle"
              style={{
                opacity: movePos === 2 || movePos === 3 ? "0" : "1",
                transition: "0.5s",
              }}
            >
              {item === 0
                ? "Verben finden"
                : item === 1
                ? "Wie bildet man das Präsens?"
                : item === 2
                ? "Wie heißt die Regel?"
                : item === 3
                ? "Was weisst du?"
                : "Was kannst du?"}
            </div>
            <p
              style={{
                opacity: movePos === 2 || movePos === 3 ? "0" : "1",
                transition: "0.5s",
              }}
            >
              {item === 0
                ? "Du arbeitest mit einem Chat. In diesem Chat gibt es viele Verben."
                : item === 1
                ? "Du arbeitest weiter mit den Verben aus dem Chat."
                : item === 2
                ? "Wie bildet man das Präsens?"
                : item === 3
                ? "In dieser Übung klickst du die passenden Verbformen an."
                : "In dieser Übung arbeitest du mit vielen Sätzen."}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Screen2;

import React, { useState, useRef, useEffect, createRef } from "react";
import Indicator from "../UI/Indicator";

import Ball from "./../UI/Ball";

const balls = [
  {
    word: "lauft",
    type: [4],
  },

  {
    word: "nimmt",
    type: [2],
  },

  {
    word: "fährst",
    type: [1],
  },

  {
    word: "lesen",
    type: [3, 5],
  },

  {
    word: "arbeitet",
    type: [2, 4],
  },

  {
    word: "gehe",
    type: [0],
  },

  {
    word: "schreibt",
    type: [2, 4],
  },

  {
    word: "esst",
    type: [4],
  },

  {
    word: "isst",
    type: [1, 2],
  },

  {
    word: "schlafen",
    type: [3, 5],
  },

  {
    word: "läuft",
    type: [2],
  },

  {
    word: "kommt",
    type: [2, 4],
  },

  {
    word: "fliegst",
    type: [1],
  },

  {
    word: "nehme",
    type: [0],
  },
];

const subject = [
  {
    word: "ihr",
    type: 4,
  },
  {
    word: "mein Freund",
    type: 2,
  },
  {
    word: "du",
    type: 1,
  },
  {
    word: "die Nachbarn",
    type: 3,
  },
  {
    word: "ich",
    type: 0,
  },
  {
    word: "wir",
    type: 3,
  },
  {
    word: "Studenten",
    type: 5,
  },
  {
    word: "ein Kind",
    type: 2,
  },
  {
    word: "seine Frau",
    type: 2,
  },
  {
    word: "er",
    type: 2,
  },
  {
    word: "die Eltern",
    type: 5,
  },
];

const activeList = [];

for (let i = 0; i < balls.length; i++) {
  activeList.push("neutral");
}

let time;

let timeout;

const Group2 = () => {
  const [active, setActive] = useState([...activeList]);
  const [boxLevel, setBoxLevel] = useState(0);
  const [disable, setDisable] = useState(true);

  const [animationName, setAnimationName] = useState("none");
  const [animationDuration, setAnimationDuration] = useState(8000);

  const [subjectIndex, setSubjectIndex] = useState(0);
  const [boxList, setBoxList] = useState([...subject]);

  const [activeIndicator, setActiveIndicator] = useState(false);

  const resetAnimation = () => {
    setAnimationName("none");
  };

  useEffect(() => {
    setTimeout(() => {
      setBoxLevel(1);

      setTimeout(() => {
        setDisable(false);
        activeAnimation();
      }, 500);
    }, 500);
  }, []);

  const activeAnimation = () => {
    const speed = 8000;
    time = +new Date();

    setAnimationName("");

    setAnimationDuration(speed);

    timeout = setTimeout(() => {
      console.log("bbn");

      handleCheck(-1, true);
    }, speed);
  };

  const handleCheck = (index, auto = false) => {
    setDisable(true);

    clearTimeout(timeout);

    const ballActiveList = [...active];

    if (!auto && balls[index].type.includes(boxList[subjectIndex].type)) {
      ballActiveList[index] = "correct";

      setActiveIndicator(["correct"]);

      const newTime = +new Date();
      let speed = newTime - time + 200;

      setAnimationDuration(speed);
    } else {
      setActiveIndicator(["wrong"]);
      setDisable(false);

      if (!auto) return;
    }

    setTimeout(() => {
      setActiveIndicator(false);
    }, 1250);

    if (!auto) {
      setActive([...ballActiveList]);
    }

    setTimeout(() => {
      for (let i = 0; i < ballActiveList.length; i++) {
        if (ballActiveList[i] === "correct") {
          ballActiveList[i] = "hide";
        }
      }

      if (!auto) {
        setActive([...ballActiveList]);
      }

      setTimeout(() => {
        const subjectList = [];

        for (let i = 0; i < ballActiveList.length; i++) {
          if (ballActiveList[i] === "fail") {
            ballActiveList[i] = "neutral";
          }
        }

        let indexInNewList = subjectIndex;

        for (let i = 0; i < boxList.length; i++) {
          for (let j = 0; j < ballActiveList.length; j++) {
            if (ballActiveList[j] === "hide") continue;

            if (balls[j].type.includes(boxList[i].type)) {
              subjectList.push(boxList[i]);

              break;
            }
          }
        }

        if (!auto) {
          setActive([...ballActiveList]);
        }

        setBoxLevel(2);

        setTimeout(() => {
          const index =
            indexInNewList >= subjectList.length - 1 ? 0 : indexInNewList + 1;

          if (auto) {
            setSubjectIndex((prev) => prev + 1);
          } else {
            setSubjectIndex(index);
          }

          if (!auto) {
            setBoxList([...subjectList]);
          }

          setBoxLevel(3);

          setTimeout(() => {
            setBoxLevel(0);
            setTimeout(() => {
              setBoxLevel(1);

              setTimeout(() => {
                if (boxList.length > 0) {
                  console.log("wtf", boxList);

                  activeAnimation();
                  setDisable(false);
                }
              }, 500);
            }, 500);
          }, 50);
        }, 500);
      }, 500);
    }, 500);
  };

  const handleIteration = () => {
    resetAnimation();
  };

  return (
    <>
      <div className="balls">
        {balls.map((item, index) => {
          return (
            <Ball
              style={{
                pointerEvents: disable ? "none" : "initial",
                transform: active[index] === "hide" ? "scale(0)" : "scale(1)",
                transition: "0.1s linear",
              }}
              onClick={() => handleCheck(index)}
              key={index}
              color={active[index] === "correct" ? "#A0C814" : "#cfd3d5"}
            >
              {item?.word}
            </Ball>
          );
        })}
      </div>

      {boxList.length && (
        <div
          onAnimationIterationCapture={handleIteration}
          className="hourglass"
          style={{
            animationName,
            animationDuration: animationDuration + "ms",
          }}
        >
          <div
            className="before"
            style={{
              animationName,
              animationDuration: animationDuration + "ms",
            }}
          ></div>
          <div
            className="after"
            style={{
              animationName,
              animationDuration: animationDuration + "ms",
            }}
          ></div>
        </div>
      )}

      {boxList.length > 0 && (
        <div
          className="box"
          style={{
            marginTop: 0,
            transform:
              boxLevel === 0 || boxLevel === 3
                ? "translateX(100vw)"
                : boxLevel === 2
                ? "translateX(-100vw)"
                : "translateX(0vw)",
            transition: boxLevel === 3 ? "0s linear" : "0.25s linear",
          }}
        >
          {boxList[subjectIndex]?.word}
        </div>
      )}

      <Indicator active={activeIndicator} />
    </>
  );
};

export default Group2;

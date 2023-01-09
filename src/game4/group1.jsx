import React, { useState, useRef, useEffect, createRef } from "react";

import Ball from "./../UI/Ball";
import StatusBar from "../UI/StatusBar";

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

const Group1 = ({ setPart }) => {
  const [active, setActive] = useState([...activeList]);
  const [checkButton, setCheckButton] = useState(false);
  const [boxLevel, setBoxLevel] = useState(0);
  const [disable, setDisable] = useState(true);

  const [subjectIndex, setSubjectIndex] = useState(0);
  const [boxList, setBoxList] = useState([...subject]);

  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>
      Welche Verbformen passen zum Wort unten? <br />
      Klicke die Verben an.
    </>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  useEffect(() => {
    let isActive = false;

    for (let i = 0; i < active.length; i++) {
      if (active[i] === "active") {
        isActive = true;
        break;
      }
    }

    setCheckButton(isActive);
  }, [active]);

  const handleClickBall = (index) => {
    setActive((prev) => {
      if (prev[index] === "neutral") {
        prev[index] = "active";
      } else {
        prev[index] = "neutral";
      }

      return [...prev];
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setBoxLevel(1);

      setTimeout(() => {
        setDisable(false);
      }, 500);
    }, 500);
  }, []);

  const handleCheck = () => {
    setDisable(true);

    const ballActiveList = [...active];

    for (let i = 0; i < active.length; i++) {
      if (active[i] === "active") {
        let ballStatus = "fail";

        if (balls[i].type.includes(boxList[subjectIndex].type)) {
          ballStatus = "correct";
        }

        ballActiveList[i] = ballStatus;
      }
    }

    setActive([...ballActiveList]);

    setTimeout(() => {
      for (let i = 0; i < ballActiveList.length; i++) {
        if (ballActiveList[i] === "correct") {
          ballActiveList[i] = "hide";
        }
      }

      setActive([...ballActiveList]);

      setTimeout(() => {
        const subjectList = [];

        for (let i = 0; i < ballActiveList.length; i++) {
          if (ballActiveList[i] === "fail") {
            ballActiveList[i] = "neutral";
          }
        }

        let indexInNewList = 0;

        for (let i = 0; i < boxList.length; i++) {
          if (subjectIndex === i) {
            indexInNewList = i;
          }
          for (let j = 0; j < ballActiveList.length; j++) {
            if (ballActiveList[j] === "hide") continue;

            if (balls[j].type.includes(boxList[i].type)) {
              subjectList.push(boxList[i]);

              break;
            }
          }
        }

        setActive([...ballActiveList]);

        setBoxLevel(2);

        setTimeout(() => {
          const index =
            indexInNewList >= subjectList.length - 1 ? 0 : indexInNewList + 1;
          setBoxList([...subjectList]);
          setSubjectIndex(index);

          if (subjectList.length === 0) {
            return setPart();
          }

          setBoxLevel(3);

          setTimeout(() => {
            setBoxLevel(0);
            setTimeout(() => {
              setBoxLevel(1);

              setTimeout(() => {
                setDisable(false);

                setPreventHelp(false);
              }, 500);
            }, 500);
          }, 10);
        }, 500);
      }, 1000);
    }, 500);
  };

  useEffect(() => {
    if (helpOverlay) {
      let isCheck = false;
      let index;

      setPreventHelp(true);

      for (let i = 0; i < active.length; i++) {
        if (active[i] === "active") {
          isCheck = true;
          index = i;
          break;
        }
      }

      if (isCheck) {
        const button = document.querySelector(".button-show");

        setHelpFingerPosition([
          button.getBoundingClientRect().left +
            button.getBoundingClientRect().width / 2 -
            10,
          button.getBoundingClientRect().top +
            button.getBoundingClientRect().height / 2 -
            10,
        ]);

        setTimeout(() => {
          handleCheck();

          setHelpFingerPosition("init");
        }, 1250);
      } else {
        for (let i = 0; i < active.length; i++) {
          if (
            active[i] === "neutral" &&
            balls[i].type.includes(boxList[subjectIndex].type)
          ) {
            index = i;
            break;
          }
        }
        const element = document.querySelectorAll(".ball")[index];

        setHelpFingerPosition([
          element.getBoundingClientRect().left +
            element.getBoundingClientRect().width / 2 -
            10,
          element.getBoundingClientRect().top +
            element.getBoundingClientRect().height / 2 -
            10,
        ]);

        setTimeout(() => {
          handleClickBall(index);

          setTimeout(() => {
            setHelpFingerPosition("init");
            setPreventHelp(false);
          }, 150);
        }, 1250);
      }
    }
  }, [helpOverlay, subjectIndex]);

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
              onClick={() => handleClickBall(index)}
              key={index}
              color={
                active[index] === "active"
                  ? "#5AC8F5"
                  : active[index] === "fail"
                  ? "#EB6401"
                  : active[index] === "correct"
                  ? "#A0C814"
                  : "#cfd3d5"
              }
            >
              {item?.word}
            </Ball>
          );
        })}
      </div>
      {boxList.length > 0 && (
        <div
          className="box"
          style={{
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
      {checkButton && (
        <div
          className="wrapper"
          style={{
            width: 1000,
            position: "absolute",
            top: 0,
            bottom: 50,
          }}
        >
          <div
            className="button-show"
            style={{ margin: "auto", left: 0, right: 0 }}
            onClick={handleCheck}
          >
            PRÜFEN
          </div>
        </div>
      )}
      <StatusBar
        infoText={infoText}
        infoOverlay={infoOverlay}
        setInfoOverlay={setInfoOverlay}
        setHelpOverlay={setHelpOverlay}
        preventHelp={preventHelp}
        helpFingerPosition={helpFingerPosition}
        infoTitle={infoTitle}
      />
    </>
  );
};

export default Group1;

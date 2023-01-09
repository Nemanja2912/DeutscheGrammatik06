import React, { useState, useRef, useEffect, useReducer } from "react";
import Indicator from "../UI/Indicator";

import Ball from "./../UI/Ball";
import { createAnimation, moveIn, moveOut } from "./animation";
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

let flip, fill;

const initialState = {
  disable: true,
  subjectIndex: 0,
  active: [...activeList],
  boxList: [...subject],
  isDone: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setDisable":
      return { ...state, disable: action.payload };
    case "setActive":
      return {
        ...state,
        active: [...action.payload],
      };

    case "increaseSubjectIndex":
      const boxList = [];

      for (let i = 0; i < state.boxList.length; i++) {
        for (let j = 0; j < state.active.length; j++) {
          if (state.active[j] === "correct") continue;

          if (balls[j].type.includes(state.boxList[i].type)) {
            boxList.push(state.boxList[i]);
            break;
          }
        }
      }

      let isDone = false;

      if (boxList.length === 0) {
        isDone = true;
      }

      const subjectIndex =
        state.subjectIndex >= boxList.length - 1 ? 0 : state.subjectIndex + 1;

      return {
        ...state,
        subjectIndex,
        boxList,
        isDone,
      };

    default:
      throw new Error();
  }
}

const Group2 = ({ setPart }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>
      Welche Verbform passt zum Wort unten? <br />
      Klicke ein Verb an. <br />
      Diese Aufgabe hat ein Zeitlimit. <br />
      Du hast nur fünf Sekunden Zeit pro Verb!
    </>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  const [activeIndicator, setActiveIndicator] = useState(false);

  const hourglassRef = useRef(null);
  const beforeRef = useRef(null);

  const boxRef = useRef(null);

  const fastForward = () => {
    flip.playbackRate = 12;
    fill.playbackRate = 12;
  };

  const startAnimation = () => {
    flip.playbackRate = 1;
    fill.playbackRate = 1;

    flip.play();
    fill.play();
  };

  useEffect(() => {
    setTimeout(() => {
      moveIn(boxRef.current);

      setTimeout(() => {
        dispatch({ type: "setDisable", payload: false });

        startAnimation();
      }, 500);
    }, 500);
  }, []);

  const handleCheck = (index) => {
    dispatch({ type: "setDisable", payload: true });

    const ballActiveList = [...state.active];

    if (balls[index].type.includes(state.boxList[state.subjectIndex].type)) {
      ballActiveList[index] = "correct";

      setActiveIndicator(["correct"]);
    } else {
      setActiveIndicator(["wrong"]);

      dispatch({ type: "setDisable", payload: false });

      return null;
    }

    fastForward();

    dispatch({ type: "setActive", payload: [...ballActiveList] });
  };

  useEffect(() => {
    const hourglass = hourglassRef.current;
    const before = beforeRef.current;

    [flip, fill] = createAnimation(hourglass, before, flip, fill);

    flip.onfinish = () => {
      dispatch({ type: "setDisable", payload: true });

      const boxOut = moveOut(boxRef.current);

      boxOut.onfinish = () => {
        const boxIn = moveIn(boxRef.current);

        dispatch({ type: "increaseSubjectIndex" });

        boxIn.onfinish = () => {
          startAnimation();

          dispatch({ type: "setDisable", payload: false });
        };
      };
    };
  }, []);

  useEffect(() => {
    if (state.isDone) {
      setPart();
    }
  }, [state.isDone, setPart]);

  useEffect(() => {
    if (helpOverlay) {
      let index;

      setPreventHelp(true);

      for (let i = 0; i < state.active.length; i++) {
        if (
          state.active[i] !== "correct" &&
          balls[i].type.includes(state.boxList[state.subjectIndex].type)
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
        handleCheck(index);

        setTimeout(() => {
          setHelpFingerPosition("init");

          setTimeout(() => {
            setPreventHelp(false);
          }, 2000);
        }, 150);
      }, 1250);
    }
  }, [helpOverlay]);

  return (
    <>
      <div className="balls">
        {balls.map((item, index) => {
          return (
            <Ball
              style={{
                pointerEvents: state.disable ? "none" : "initial",
                transform:
                  state.active[index] === "correct" ? "scale(0)" : "scale(1)",
                transition: "0.1s linear 0.5s",
              }}
              onClick={() => handleCheck(index)}
              key={index}
              color={state.active[index] === "correct" ? "#A0C814" : "#cfd3d5"}
            >
              {item?.word}
            </Ball>
          );
        })}
      </div>

      {state.boxList.length && (
        <div className="hourglass" ref={hourglassRef}>
          <div ref={beforeRef} className="before"></div>
        </div>
      )}

      {state.boxList.length > 0 && (
        <div
          ref={boxRef}
          className="box"
          style={{
            marginTop: 0,
          }}
        >
          {state.boxList[state.subjectIndex]?.word}
        </div>
      )}

      <Indicator active={activeIndicator} />

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

export default Group2;

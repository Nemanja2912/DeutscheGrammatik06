import React, { useState, useEffect, useRef, createRef } from "react";

import "../css/game3.css";
import Box1 from "./box1";
import Screen2 from "./screen2";
import StatusBar from "./../UI/StatusBar";
import Box2 from "./box2";

const Game3 = ({ nextLesson }) => {
  const [part, setPart] = useState(0);

  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>Zieh die Elemente und formuliere die Regel.</>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  useEffect(() => {
    if (part === 1) {
      setTimeout(() => {
        setInfoText(
          <>
            Was ist ein Verbstamm?
            <br />
            Zieh die Infinitive in die Lücken.
          </>
        );

        setPart(2);

        setInfoOverlay(true);
      }, 500);
    }
  }, [part]);

  const handleTask = () => {
    setInfoText(
      <>
        Zieh die passende Endung
        <br />
        zum Verbstamm in die Lücke.
      </>
    );

    setInfoOverlay(true);
  };

  return (
    <>
      <div className="game3">
        <div
          style={{
            transform: part > 0 ? "translateX(-100vw)" : "translateX(0vw)",
            pointerEvents: part > 0 ? "none" : "",
            transition: "0.5s linear",
            position: "absolute",
            left: 0,
            width: 1000,
          }}
        >
          <Box1 setNextPart={() => setPart(1)} />
        </div>
        <div
          style={{
            opacity: part > 1 ? 1 : 0,
            pointerEvents: part > 1 ? "" : "none",
            transition: "0.5s linear",
            position: "relative",
            transform: part > 3 ? "translateY(-140px)" : "translateY(0px)",
          }}
        >
          <Screen2 setNextPart={() => setPart(3)} handleTask={handleTask} />
        </div>

        <div
          style={{
            opacity: part > 3 ? 1 : 0,
            pointerEvents: part > 3 ? "" : "none",
            transition: "0.5s linear 0.5s",
            position: "absolute",
            left: 0,

            top: 400,
            width: 1000,
          }}
        >
          <Box2 hide={part <= 3} setNextPart={() => setPart(5)} />
        </div>
      </div>

      {(part === 3 || part === 5) && (
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
            onClick={() => {
              if (part === 3) {
                setPart(4);
              } else if (part === 5) {
                nextLesson();
              }
            }}
          >
            WEITER
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

export default Game3;

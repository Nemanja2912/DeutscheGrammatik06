import React, { useState, useRef, useEffect, createRef } from "react";

import "../css/game4.css";
import StatusBar from "./../UI/StatusBar";
import Dropdown from "./Dropdown";

const Game4 = ({ nextLesson }) => {
  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>
      Welche Frage passt?
      <br />
      Klicke sie an.
    </>
  );
  const [infoOverlay, setInfoOverlay] = useState(false);

  const [endButton, setEndButton] = useState(false);

  return (
    <>
      <div className="game4">
        <Dropdown />
      </div>
      <StatusBar
        infoText={infoText}
        infoOverlay={infoOverlay}
        setInfoOverlay={setInfoOverlay}
        setHelpOverlay={setHelpOverlay}
        preventHelp={preventHelp}
        helpFingerPosition={helpFingerPosition}
        infoTitle={infoTitle}
      />
      {endButton && (
        <div
          className="wrapper"
          style={{ width: 1000, position: "absolute", top: 0, bottom: 30 }}
        >
          <div
            className="button-show"
            style={{ margin: "auto", left: 0, right: 0 }}
            onClick={nextLesson}
          >
            WEITER
          </div>
        </div>
      )}
    </>
  );
};

export default Game4;

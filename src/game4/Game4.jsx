import { useEffect, useState } from "react";
import "../css/game4.css";
import StatusBar from "../UI/StatusBar";

import Group1 from "./group1";
import Group2 from "./group2";
import Static from "./static";

const Game4 = () => {
  const [part, setPart] = useState(0);

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

  const handleInfo = () => {
    setPart(1);

    setInfoText(
      <>
        Welche Verbform passt zum Wort unten? <br />
        Klicke ein Verb an.
        <br />
        Diese Aufgabe hat ein Zeitlimit.
        <br />
        Du hast nur fünf Sekunden Zeit pro Verb!
      </>
    );

    setInfoOverlay(true);
  };

  return (
    <>
      <div className="game4">
        <div>{part === 0 && <Group1 setPart={handleInfo} />}</div>
        <div>{part === 1 && <Group2 setPart={() => setPart(2)} />}</div>
        <div>
          <div
            style={{
              pointerEvents: part === 2 ? "initial" : "none",
              opacity: part === 2 ? 1 : 0,
              transition: "0.5s linear 1s",
            }}
          >
            <Static />
          </div>
        </div>
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
    </>
  );
};

export default Game4;

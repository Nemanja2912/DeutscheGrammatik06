import { useEffect, useState } from "react";
import "../css/game4.css";
import StatusBar from "../UI/StatusBar";

import Group1 from "./group1";
import Group2 from "./group2";

const Game4 = () => {
  const [part, setPart] = useState(1);

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
  const [infoOverlay, setInfoOverlay] = useState(false);

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
        <div>{part === 1 && <Group2 />}</div>
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

import "../css/game5.css";
import Group from "./group.jsx";

import Image1 from "../assets/img/a5/1.jpg";
import Image2 from "../assets/img/a5/2.jpg";
import Image3 from "../assets/img/a5/3.jpg";
import Image4 from "../assets/img/a5/4.jpg";
import Image5 from "../assets/img/a5/5.jpg";
import Image6 from "../assets/img/a5/6.jpg";
import Image7 from "../assets/img/a5/7.jpg";
import Image8 from "../assets/img/a5/8.jpg";
import { useState } from "react";
import StatusBar from "../UI/StatusBar";

const list = [
  {
    image: Image1,
    text: ["Meine Schwester", "noch in die Schule."],
    guess: "geht",
    boxWord: "gehen",
  },
  {
    image: Image2,
    text: ["In Deutschland", "viele Leute Medizin."],
    guess: "studieren",
    boxWord: "studieren",
  },
  {
    image: Image3,
    text: ["Jonas", "jedes Wochenende im Café."],
    guess: "frühstückt",
    boxWord: "frühstücken",
  },
  {
    image: Image4,
    text: ["Du", "oft am Abend."],
    guess: "arbeitest",
    boxWord: "arbeiten",
  },
  {
    image: Image5,
    text: ["In eurem Beruf", "ihr viele Leute."],
    guess: "trefft",
    boxWord: "treffen",
  },
  {
    image: Image6,
    text: ["In der Freizeit", "wir gern."],
    guess: "lesen",
    boxWord: "lesen",
  },
  {
    image: Image7,
    text: ["Jeden Tag", "ich sehr viele E-Mails."],
    guess: "schreibe",
    boxWord: "schreiben",
  },
  {
    image: Image8,
    text: ["Michael", "gern Fahrrad."],
    guess: "fährt",
    boxWord: "fahren",
  },
];

const Game5 = () => {
  const [groupIndex, setGroupIndex] = useState(0);

  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>
      Wie heißt das Präsens?
      <br />
      Schreib die richtige Form.
    </>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  return (
    <>
      <div className="game5">
        {list.map(
          (item, index) =>
            groupIndex >= index && (
              <Group
                index={index}
                key={index}
                style={{
                  position: "absolute",
                  transform:
                    groupIndex > index
                      ? "translateX(-100vw)"
                      : "translateX(0vw)",
                  transition: "1s ",
                }}
                item={item}
                groupIndex={groupIndex}
                setGroupIndex={() => setGroupIndex((prev) => prev + 1)}
              />
            )
        )}
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

export default Game5;

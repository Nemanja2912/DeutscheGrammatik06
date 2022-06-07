import React, { useState, useEffect } from "react";

import "../css/game5.css";
import ChatBoxes from "./ChatBoxes";
import StatusBar from "./../UI/StatusBar";

const obj = [
  {
    message1: {
      line1: "Hallo! Dein Profil bei „Zus@mmen“ finde ich sehr interessant.",
      line2: "Lernst du auch gern Sprachen?",
    },
    message2: {
      line1:
        "Ja, total gern! Ich spreche drei Sprachen: Spanisch, Englisch und Deutsch.",
      line2: "Lernst du auch Fremdsprachen?",
    },
    words: ["du", "auch gern Sprachen", "lernst"],
    answers: [2, 0, 1],
  },
  {
    message1: {
      line1: "Ja! Seit 3 Jahren lerne ich Deutsch.",
      line2: "Du findest Deutsch auch so schwer?",
    },
    message2: {
      line1: "Oh jaaa! Ich verstehe dich gut :) Wo lernst du Deutsch?",
    },
    words: ["Deutsch auch so schwer", "findest", "du"],
    answers: [1, 2, 0],
  },
  {
    message1: {
      line1: "In einem Sprachkurs und auch zu Hause.",
      line2: "Hast du Freunde in Deutschland?",
    },
    message2: {
      line1: "Ja, ich habe eine Tandem-Partnerin.",
    },
    words: ["Freunde in Deutschland", "hast", "du"],
    answers: [1, 2, 0],
  },
  {
    message1: {
      line1: "Oh, das ist sehr interessant.",
      line2: "Wo wohnt sie?",
    },
    message2: {
      line1: "In München.",
    },
    words: ["wo", "sie", "wohnt"],
    answers: [0, 2, 1],
  },
  {
    message1: {
      line1: "und ...",
      line2: "Was macht sie dort?",
    },
    message2: {
      line1:
        "Sie studiert Sprachen und Musik. Ich möchte sie in Deutschland besuchen.",
    },
    words: ["sie dort", "was", "macht"],
    answers: [1, 2, 0],
  },
  {
    message1: {
      line1: "Ich möchte auch einen Tandem-Partner finden.",
      line2: "Wie suche ich einen?",
    },
    message2: {
      line1: "Ich kann dir alles erzählen. Bei einem Kaffee ;)",
    },
    words: ["ich einen", "suche", "wie"],
    answers: [2, 1, 0],
  },
  {
    message1: {
      line1: "Sehr gern!",
      line2: "Hast du am Wochenende Zeit?",
    },
    message2: {
      line1: "Ja, am Samstag habe ich viel Zeit.",
    },
    words: ["am Wochenende Zeit", "hast", "du"],
    answers: [1, 2, 0],
  },
  {
    message1: {
      line1: "Super!",
      line2: "Wann treffen wir uns?",
    },
    message2: {
      line1: "Super! Bis dann!",
    },
    words: ["wir uns", "wann", "treffen"],
    answers: [1, 2, 0],
  },
];

const Game5 = ({ nextLesson }) => {
  const [level, setLevel] = useState(0);
  const [transformIndex, setTransformIndex] = useState(0);

  const [position, lsetPosition] = useState([]);

  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>Lies den Chat und bilde Fragen.</>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  const [help, setHelp] = useState(obj.map(() => false));

  const [endButton, setEndButton] = useState(false);

  useEffect(() => {
    if (level > 1) {
      setTransformIndex(level - 1);
    }

    if (level >= 8) {
      setEndButton(true);
    }
  }, [level]);

  useEffect(() => {
    if (!helpOverlay) return;

    setHelp((prev) => {
      prev[level] = true;
      return [...prev];
    });

    setTimeout(() => {
      setHelp((prev) => {
        prev[level] = false;
        return [...prev];
      });
    }, 1000);

    setHelpFingerPosition([0, 0]);
  }, [helpOverlay]);

  useEffect(() => {
    if (endButton) {
      if (!infoOverlay) {
        setInfoText(<>Lies den Chat und bilde Fragen.</>);
        setInfoTitle("AUFGABE");
      }
    }
  }, [infoOverlay]);

  return (
    <>
      <div className="game5">
        {transformIndex > 0 && <div className="shaddow"></div>}
        {obj.map((item, index) => {
          return (
            <div
              style={{
                transform: `translateY(-${100 * transformIndex}px)`,
                transition: "0.5s linear",
              }}
            >
              {level >= index && (
                <div className="chat-wrapper">
                  <ChatBoxes
                    index={index}
                    setLevel={() => {
                      setLevel((prev) => prev + 1);
                    }}
                    message1={item.message1}
                    message2={item.message2}
                    words={item.words}
                    answers={item.answers}
                    help={help[index]}
                    setHelpFingerPosition={setHelpFingerPosition}
                    preventHelp={() => {
                      setPreventHelp(true);

                      setTimeout(() => {
                        if (level > 6) {
                          return;
                        }
                        setPreventHelp(false);
                      }, 6000);
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
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
            onClick={() => {
              setInfoTitle("ENDE");
              setInfoText(
                <>
                  Das war die letzte Aufgabe.
                  <br /> Du kannst im Menü eine andere Aufgabe auswählen <br />
                  und sie wiederholen.
                </>
              );

              setInfoOverlay(true);
            }}
          >
            ENDE
          </div>
        </div>
      )}
    </>
  );
};

export default Game5;

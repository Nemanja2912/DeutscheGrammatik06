import React, { useState, useEffect, useRef, createRef } from "react";
import CombineItem from "./CombineItem";

import "../css/game3.css";
import InteractiveBox from "./InteractiveBox";
import StatusBar from "./../UI/StatusBar";
import Indicator from "./../UI/Indicator";

const content = [
  {
    box1: "der Kaffee",
    box2: "die Maschine",
    main: (
      <>
        <span>die</span> Kaffee<span>maschine</span>
      </>
    ),
  },
  {
    box1: "die Bücher",
    box2: "der Schrank",
    main: (
      <>
        <span>der</span> Bücher<span>schrank</span>
      </>
    ),
  },
  {
    box1: "wohnen",
    box2: "das Zimmer",
    main: (
      <>
        <span>das</span> Wohn<span>zimmer</span>
      </>
    ),
  },
];

const interactive = [
  {
    children: "Ein Kompositum hat 2 Teile.",
    lines: [
      {
        pre: "Nomen +",
        post: "= Kompositum",
      },
      {
        pre: "",
        post: "+Nomen = Kompositum",
      },
    ],
    words: ["Nomen", "Verb"],
  },
  {
    children: "Welcher Artikel ist richtig?",
    lines: [
      {
        pre: "Das zeigt das",
        post: "Wort.",
      },
    ],
    words: ["zweite", "erste"],
  },
];

let firstTime = true;

const Game3 = ({ nextLesson }) => {
  const [level, setLevel] = useState(-1);

  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    "Sieh dir die Beispiele an und formuliere die Regel."
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  const [activeIndicator, setActiveIndicator] = useState([]);

  useEffect(() => {
    if (!firstTime || infoOverlay) return;
    firstTime = false;

    setLevel(0);

    setTimeout(() => {
      setLevel(1);

      setTimeout(() => {
        setLevel(2);

        setTimeout(() => {
          setLevel(3);

          setTimeout(() => {
            setLevel(4);
          }, 1000);
        }, 4500);
      }, 4000);
    }, 4000);
  }, [infoOverlay]);

  useEffect(() => {
    if (level === 4 || level === 5) {
      setPreventHelp(false);
    } else {
      setPreventHelp(true);
    }
  }, [level]);

  useEffect(() => {
    if (!helpOverlay) return;

    let index = 0;
    let containerIndex = 1;
    if (level === 4) {
      containerIndex = 0;
      for (let i = 0; i < finished1.length; i++) {
        if (!finished1[i]) {
          index = i;
          break;
        }
      }
    }

    setHelpFingerPosition([
      wordRefs[containerIndex][index].current.getBoundingClientRect().left +
        wordRefs[containerIndex][index].current.getBoundingClientRect().width /
          2,
      wordRefs[containerIndex][index].current.getBoundingClientRect().top +
        wordRefs[containerIndex][index].current.getBoundingClientRect().height /
          2,
    ]);

    wordRefs[containerIndex][index].current.style.transition = "1s linear";
    wordRefs[containerIndex][index].current.style.zIndex = "1000";

    setTimeout(() => {
      setHelpFingerPosition([
        boxRefs[containerIndex][index].current.getBoundingClientRect().left +
          boxRefs[containerIndex][index].current.getBoundingClientRect().width /
            2,
        boxRefs[containerIndex][index].current.getBoundingClientRect().top +
          boxRefs[containerIndex][index].current.getBoundingClientRect()
            .height /
            2,
      ]);

      wordRefs[containerIndex][index].current.style.left =
        boxRefs[containerIndex][index].current.getBoundingClientRect().left -
        wordRefs[containerIndex][index].current.getBoundingClientRect().left +
        "px";
      wordRefs[containerIndex][index].current.style.top =
        boxRefs[containerIndex][index].current.getBoundingClientRect().top -
        wordRefs[containerIndex][index].current.getBoundingClientRect().top +
        "px";

      wordRefs[containerIndex][index].current.style.zIndex = "1";
      setTimeout(() => {
        setHelpFingerPosition("init");

        setActiveIndicator(["correct"]);

        if (level === 4) {
          setFinished1((prev) => {
            prev[index] = true;

            return [...prev];
          });
        }

        if (level === 5) {
          setFinished2((prev) => {
            prev[index] = true;

            return [...prev];
          });
        }
      }, 1250);
    }, 1250);
    // }
  }, [helpOverlay]);

  const wordRefs = [[useRef(null), useRef(null)], [useRef(null)]];

  const [finished1, setFinished1] = useState(
    interactive[0].lines.map(() => false)
  );
  const [finished2, setFinished2] = useState(
    interactive[1].lines.map(() => false)
  );

  const boxRefs = [[useRef(null), useRef(null)], [useRef(null)]];

  return (
    <>
      <div className="game3">
        <div className="combine-wrapper">
          {content.map((content, index) => (
            <>
              {level >= index && (
                <CombineItem content={content} completed={level >= 6} />
              )}
            </>
          ))}
        </div>
        {
          <p className="desc" style={{ opacity: level >= 3 ? 1 : 0 }}>
            Diese Wörter sind Komposita.
          </p>
        }

        <div className="interactive-wrapper">
          <div
            style={{
              opacity: level >= 4 ? 1 : 0,
              transition: "0.3s linear",
            }}
          >
            <InteractiveBox
              content={interactive[0]}
              nextLevel={() => {
                setLevel((prev) => prev + 1);
              }}
              wordRefs={wordRefs[0]}
              finished={finished1}
              setFinished={setFinished1}
              boxRefs={boxRefs[0]}
            >
              <p>{interactive[0].children}</p>
            </InteractiveBox>
          </div>

          <div
            style={{
              opacity: level >= 5 ? 1 : 0,
              transition: "0.3s linear",
            }}
          >
            <InteractiveBox
              content={interactive[1]}
              boxRefs={boxRefs[1]}
              details={false}
              nextLevel={() => {
                setLevel((prev) => prev + 1);
              }}
              wordRefs={wordRefs[1]}
              finished={finished2}
              setFinished={setFinished2}
            >
              <p>{interactive[1].children}</p>
            </InteractiveBox>
          </div>
        </div>
      </div>

      {level >= 6 && (
        <div
          className="wrapper"
          style={{
            width: 1000,
            position: "absolute",
            top: 0,
            bottom: 30,
          }}
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

      <StatusBar
        infoText={infoText}
        infoOverlay={infoOverlay}
        setInfoOverlay={setInfoOverlay}
        setHelpOverlay={setHelpOverlay}
        preventHelp={preventHelp}
        helpFingerPosition={helpFingerPosition}
        infoTitle={infoTitle}
      />

      <Indicator active={activeIndicator} />
    </>
  );
};

export default Game3;

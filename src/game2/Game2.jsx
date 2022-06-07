import React, { useEffect, useState, useRef } from "react";

import "../css/game2.css";
import Item from "./Item";

import Image1a from "../assets/img/a2/m04.jpg";
import Image1b from "../assets/img/a2/m03.jpg";
import Image1a1 from "../assets/img/a2/spuelen.jpg";
import Image1b1 from "../assets/img/a2/kaffee.jpg";
import Image1a2 from "../assets/img/a2/maschine.jpg";

import Image2a from "../assets/img/a2/m02.jpg";
import Image2b from "../assets/img/a2/m00.jpg";
import Image2c from "../assets/img/a2/m01.jpg";
import Image2a1 from "../assets/img/a2/geschirr.jpg";
import Image2b1 from "../assets/img/a2/buecher.jpg";
import Image2c1 from "../assets/img/a2/kleider.jpg";
import Image2a2 from "../assets/img/a2/schrank.jpg";

import Image3a from "../assets/img/a2/wohnzimmer.jpg";
import Image3b from "../assets/img/a2/schlafzimmer.jpg";
import Image3c from "../assets/img/a2/arbeitszimmer.jpg";
import Image3a1 from "../assets/img/a2/wohnen.jpg";
import Image3b1 from "../assets/img/a2/schlafen.jpg";
import Image3c1 from "../assets/img/a2/arbeiten.jpg";
import Image3a2 from "../assets/img/a2/zimmer.jpg";

import StatusBar from "./../UI/StatusBar";
import WordGroup from "./WordGroup";

const content = [
  [
    {
      image: Image1a,
      desc: "die Spülmaschine",
      results: [
        {
          image: Image1a1,
          desc: ["spülen"],
        },
        {
          image: Image1a2,
          desc: ["die", " Maschine"],
        },
      ],
    },
    {
      image: Image1b,
      desc: "die Kaffeemaschine",
      results: [
        {
          image: Image1b1,
          desc: ["der Kaffe"],
        },
        {
          image: Image1a2,
          desc: ["die", " Maschine"],
        },
      ],
    },
  ],
  [
    {
      image: Image2a,
      desc: "der Geschirrschrank",
      results: [
        {
          image: Image2a1,
          desc: ["das Geschirr"],
        },
        {
          image: Image2a2,
          desc: ["der", " Schrank"],
        },
      ],
    },
    {
      image: Image2b,
      desc: "der Bücherschrank",
      results: [
        {
          image: Image2b1,
          desc: ["die Bücher"],
        },
        {
          image: Image2a2,
          desc: ["der", " Schrank"],
        },
      ],
    },
    {
      image: Image2c,
      desc: "der Kleiderschrank",
      results: [
        {
          image: Image2c1,
          desc: ["die Kleider"],
        },
        {
          image: Image2a2,
          desc: ["der", " Schrank"],
        },
      ],
    },
  ],
  [
    {
      image: Image3a,
      desc: "das Wohnzimmer",
      results: [
        {
          image: Image3a1,
          desc: ["wohnen"],
        },
        {
          image: Image3a2,
          desc: ["das", " Zimmer"],
        },
      ],
    },
    {
      image: Image3b,
      desc: "das Schlafzimmer",
      results: [
        {
          image: Image3b1,
          desc: ["schlafen"],
        },
        {
          image: Image3a2,
          desc: ["das", " Zimmer"],
        },
      ],
    },
    {
      image: Image3c,
      desc: "das Arbeitszimmer",
      results: [
        {
          image: Image3c1,
          desc: ["arbeiten"],
        },
        {
          image: Image3a2,
          desc: ["das", " Zimmer"],
        },
      ],
    },
  ],
];

let initX, initY, mouseX, mouseY;

const transitionSpeed = 0.1;

const Game2 = ({ nextLesson }) => {
  const [scissorsActive, setScissorsActive] = useState(false);
  const [scissorsPos, setScissorsPos] = useState([0, 0]);
  const [transition, setTransition] = useState([transitionSpeed]);

  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    "Teile die Wörter mit einer Schere."
  );
  const [infoOverlay, setInfoOverlay] = useState(true);
  const [level, setLevel] = useState(-1);

  const scissorsRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const [finished, setFinished] = useState([
    [false, false],
    [false, false, false],
    [false, false, false],
  ]);

  const groupRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (!infoOverlay && level === -1) {
      setLevel(0);

      initX =
        scissorsRef.current.getBoundingClientRect().left +
        scissorsRef.current.getBoundingClientRect().width / 2;

      initY = scissorsRef.current.getBoundingClientRect().top + 15;
    }

    if (level < 0) return;

    let disable = false;

    const moveEvent = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (disable) return;
      disable = true;

      if (helpOverlay) return;
      setScissorsPos([e.clientX - initX, e.clientY - initY]);

      setTimeout(() => {
        disable = false;
      }, transitionSpeed * 1000 + 10);
    };

    document.addEventListener("mousemove", moveEvent);

    return () => {
      document.removeEventListener("mousemove", moveEvent);
    };
  }, [infoOverlay, level, helpOverlay]);

  useEffect(() => {
    if (level < 0 || level > 2) return;

    let isDone = true;

    for (let i = 0; i < finished[level].length; i++) {
      if (!finished[level][i]) {
        isDone = false;
        break;
      }
    }

    if (isDone) {
      setShowButton(true);
      setPreventHelp(true);
    }
  }, [finished, level]);

  const handleButton = () => {
    if (level === 3) {
      nextLesson();
    } else {
      setLevel((prev) => {
        const nextLevel = prev + 1;
        if (nextLevel <= 2) {
          setPreventHelp(false);
        }

        return nextLevel;
      });

      setShowButton(false);
    }
  };

  useEffect(() => {
    if (!helpOverlay) return;

    let index;

    for (let i = 0; i < finished[level].length; i++) {
      if (!finished[level][i]) {
        index = i;
        break;
      }
    }
    const element =
      groupRefs[level].current.children[index].children[0].children[1];

    setHelpFingerPosition([
      element.getBoundingClientRect().left +
        element.getBoundingClientRect().width / 2,
      element.getBoundingClientRect().top +
        element.getBoundingClientRect().height / 2,
    ]);

    setTransition(1);

    setScissorsPos((prev) => {
      return [
        element.getBoundingClientRect().left +
          element.getBoundingClientRect().width / 2 -
          initX,
        element.getBoundingClientRect().top +
          element.getBoundingClientRect().height / 2 -
          initY,
      ];
    });

    setTimeout(() => {
      element.click();
      setTransition(transitionSpeed);

      setTimeout(() => {
        setHelpFingerPosition("init");
        setScissorsPos([mouseX - initX, mouseY - initY]);
        console.log(mouseX, "init");
      }, 550);
    }, 1250);
  }, [helpOverlay]);

  useEffect(() => {
    if (level === 3) {
      setShowButton(true);
    }
  }, [level]);

  return (
    <>
      <div className="game2">
        {content.map((group, groupIndex) => (
          <div
            ref={groupRefs[groupIndex]}
            className={`item-group ${groupIndex === level && "show-group"}`}
          >
            {group.map((item, itemIndex) => (
              <Item
                item={item}
                activeScissors={setScissorsActive}
                finished={finished[groupIndex][itemIndex]}
                setFinished={() => {
                  setFinished((prev) => {
                    prev[groupIndex][itemIndex] = true;

                    return [...prev];
                  });
                }}
              />
            ))}
          </div>
        ))}

        {
          <div
            className="group-wrapper"
            style={{
              left: level > 2 ? 0 : "-100vw",
            }}
          >
            {content.map((group) => (
              <div className="line">
                {group.map((item) => (
                  <p>
                    <WordGroup item={item} />
                  </p>
                ))}
              </div>
            ))}
          </div>
        }
        <div
          className={`scissors-container ${
            scissorsActive && "active-scissors"
          }`}
          style={{
            left: scissorsPos[0],
            top: scissorsPos[1],
            opacity: scissorsPos[0] === 0 || showButton || level > 2 ? 0 : 1,
            transition: `${transition}s linear`,
          }}
        >
          <div className="scissors" ref={scissorsRef}>
            <div className="half">
              <div className="blade"></div>
              <div className="handle"></div>
            </div>

            <div className="half">
              <div className="blade"></div>
              <div className="handle"></div>
            </div>

            <div className="joint"></div>
          </div>
        </div>
      </div>

      {showButton && (
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
            onClick={handleButton}
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

export default Game2;

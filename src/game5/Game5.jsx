import React, { useState, useRef, useEffect } from "react";

import "../css/game5.css";
import MovableItem from "../UI/MovableItem";
import StatusBar from "./../UI/StatusBar";

const Game5 = ({ nextLesson }) => {
  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>Bilde Komposita. Welches Wort passt zum Bild?</>
  );
  const [infoOverlay, setInfoOverlay] = useState(false);

  const [endButton, setEndButton] = useState(false);

  const [boxPos, setBoxPos] = useState([0, 0]);
  const boxRefs = [useRef(null), useRef(null)];
  const dropRefs = [useRef(null), useRef(null)];

  const [finished, setFinished] = useState([false]);
  const [level, setLevel] = useState(0);

  const [answer, setAnswer] = useState([[0, 1]]);

  const [interactiveWords, setInteractiveWords] = useState([
    "der Plan",
    "die Reise",
    "das Auto",
  ]);

  const [step, setStep] = useState(0);

  const interactiveRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (step === 1) {
      setBoxPos([
        dropRefs[answer[level][0]].current.getBoundingClientRect().left,
        dropRefs[answer[level][0]].current.getBoundingClientRect().top,
      ]);

      setTimeout(() => {
        setStep(2);
        setBoxPos([
          500 -
            dropRefs[answer[level][0]].current.getBoundingClientRect().width /
              2,
          dropRefs[answer[level][0]].current.getBoundingClientRect().top,
        ]);

        setTimeout(() => {
          setStep(3);
        }, 750);
      }, 750);
    }
  }, [step]);

  const handleAnswer = (clickEvent) => {
    setStep(4);

    let firstIndex = 0;
    let secondIndex = 1;

    if (answer[level][0] === 1) {
      firstIndex = 1;
      secondIndex = 0;
    }

    const cloneBox = document.querySelector(`.clone-box${level}`);
    const pref1 = cloneBox.children[firstIndex].children[0];
    const pref2 = cloneBox.children[secondIndex].children[0];
    const word1 = cloneBox.children[firstIndex].children[1];
    const word2 = cloneBox.children[secondIndex].children[1];
    const background = cloneBox.children[2];

    const cloneBoxLeft = cloneBox.getBoundingClientRect().left;
    const cloneBoxWidth = cloneBox.getBoundingClientRect().width;

    background.style.width = "150px";
    background.style.left = "75px";

    pref1.style.opacity = "0";

    const combineWidth =
      word1.getBoundingClientRect().width + word2.getBoundingClientRect().width;

    const moveWidth = word1.getBoundingClientRect().width - combineWidth / 2;

    pref2.style.top = "-15px";
    pref2.style.left =
      cloneBoxLeft +
      cloneBoxWidth / 2 -
      pref2.getBoundingClientRect().left -
      pref2.getBoundingClientRect().width / 2 +
      "px";

    word1.style.top = "15px";
    word1.style.left =
      cloneBoxLeft +
      cloneBoxWidth / 2 -
      word1.getBoundingClientRect().right +
      moveWidth +
      2.5 +
      "px";

    word2.style.textTransform = "lowercase";
    word2.style.top = "15px";
    word2.style.left =
      cloneBoxLeft +
      cloneBoxWidth / 2 -
      word2.getBoundingClientRect().left +
      moveWidth -
      2.5 +
      "px";
  };

  return (
    <>
      <div className="game5">
        <div className="image">
          <img
            src="https://bmg-moebel.de/wp-content/uploads/2020/05/OE-Set-5-lichtgrau-anthrazit.jpg"
            alt=""
          />
        </div>
        <div className="drop-zones">
          <div
            className="drop"
            ref={dropRefs[0]}
            style={{
              opacity: step >= 1 ? 0 : 1,
              pointerEvents: step >= 1 ? "none" : "initial",
              transition: answer[level][0] === 0 ? "0s linear" : "0.5s linear",
            }}
          >
            <div className="blank" ref={boxRefs[0]}>
              <p>?</p>
            </div>
            <div className="word-box">
              <span>das</span>
              <span>Buro</span>
            </div>
          </div>
          <div
            className="drop"
            ref={dropRefs[1]}
            style={{
              opacity: step >= 1 ? 0 : 1,
              pointerEvents: step >= 1 ? "none" : "initial",
              transition: answer[level][0] === 1 ? "0s linear" : "0.5s linear",
            }}
          >
            <div className="word-box">
              <span>die</span>
              <span>Mobel</span>
            </div>
            <div className="blank" ref={boxRefs[1]}>
              <p>?</p>
            </div>
          </div>
        </div>
        <div className="interactive-word">
          {interactiveWords.map((word, index) => (
            <div
              style={{
                position: "relative",
                top: step >= 1 && answer[level][1] !== index ? "100vh" : 0,
                opacity: step >= 1 && answer[level][1] === index ? 0 : 1,
                transition: "0.5s linear  ",
              }}
            >
              <MovableItem
                wordRef={interactiveRefs[index]}
                trueRef={
                  answer[level][1] === index && boxRefs[answer[level][0]]
                }
                text={
                  <>
                    <span>{word.split(" ")[0]}</span>
                    <span>{word.split(" ")[1]}</span>
                  </>
                }
                setFinish={() => {
                  setFinished([true]);

                  setTimeout(() => {
                    setStep(1);
                  }, 500);
                }}
                finish={
                  answer[level][1] === index && finished[answer[level][0]]
                }
              />
            </div>
          ))}
        </div>

        <div
          className="clone-boxes clone-box0"
          style={{
            left: boxPos[0],
            top: boxPos[1],
            opacity: step >= 1 ? 1 : 0,
            transition: step >= 2 ? "0.5s linear" : "0s linear",
          }}
        >
          <div className={`box  ${answer[level][0] === 1 ? "box-swipe" : ""}`}>
            <span
              className={`${step === 3 ? "choose" : ""}`}
              onClick={() => {
                if (answer[level][0] === 1) {
                  handleAnswer();
                }
              }}
            >
              die
            </span>
            <span>Reise</span>
          </div>
          <div className="box">
            <span
              className={`${step === 3 ? "choose" : ""}`}
              onClick={() => {
                if (answer[level][0] === 0) {
                  handleAnswer();
                }
              }}
            >
              das
            </span>
            <span>Buro</span>
          </div>
          <div className="background"></div>
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

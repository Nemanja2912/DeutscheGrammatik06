import React, { useState, useRef, useEffect } from "react";

import "../css/game5.css";
import MovableItem from "../UI/MovableItem";
import StatusBar from "../UI/StatusBar";
import Group from "./Group";
import Tape from "./Tape";

const Screen = ({
  next,
  answer,
  interactiveWords,
  dropWords,
  tapeWords,
  images,
  index,
}) => {
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

  const [finished, setFinished] = useState([false, false, false, false, false]);
  const [level, setLevel] = useState(0);
  const [nextStep, setNextStep] = useState(false);
  const [finalAnimation, setFinalAnimation] = useState(false);

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
    if (step === 4) return;

    setStep(4);

    let firstIndex = 0;
    let secondIndex = 1;

    if (answer[level][0] === 1) {
      firstIndex = 1;
      secondIndex = 0;
    }

    const cloneBox = document.querySelector(`.clone-boxes`);
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

    setTimeout(() => {
      setStep(5);

      setTimeout(() => {
        setStep(6);

        setTimeout(() => {
          if (level < 5) {
            setStep(0);
            setLevel((prev) => prev + 1);
          } else {
            setNextStep(true);
            if (index === 1) setEndButton(true);
          }

          setBoxPos([0, 0]);
        }, 750);
      }, 750);
    }, 750);
  };

  useEffect(() => {
    if ((step !== 0 && step !== 3) || level > 5) {
      setPreventHelp(true);
    } else {
      setTimeout(() => {
        setPreventHelp(false);
      }, 1000);
    }

    if (level === 0 && step === 3 && index === 0) {
      setInfoOverlay(true);
    }

    if (step >= 1 && step <= 3) {
      setInfoText(<>Wähle den richtigen Artikel.</>);
    } else {
      setInfoText(<>Bilde Komposita. Welches Wort passt zum Bild?</>);
    }
  }, [level, step]);

  useEffect(() => {
    if (finalAnimation) {
      setTimeout(() => {
        setNextStep(false);
      }, 500);
    }
  }, [finalAnimation]);

  useEffect(() => {
    if (!helpOverlay) return;

    if (step === 0) {
      const interactiveElement = interactiveRefs[answer[level][1]].current;

      setHelpFingerPosition([
        interactiveElement.getBoundingClientRect().left +
          interactiveElement.getBoundingClientRect().width / 2,
        interactiveElement.getBoundingClientRect().top +
          interactiveElement.getBoundingClientRect().height / 2,
      ]);

      setTimeout(() => {
        const boxElement = boxRefs[answer[level][0]].current;

        interactiveElement.style.zIndex = 1000000;
        interactiveElement.style.transition = "1s linear";

        interactiveElement.style.left =
          boxElement.getBoundingClientRect().left -
          interactiveElement.getBoundingClientRect().left +
          "px";
        interactiveElement.style.top =
          boxElement.getBoundingClientRect().top -
          interactiveElement.getBoundingClientRect().top +
          "px";

        setHelpFingerPosition([
          boxElement.getBoundingClientRect().left +
            boxElement.getBoundingClientRect().width / 2,
          boxElement.getBoundingClientRect().top +
            boxElement.getBoundingClientRect().height / 2,
        ]);
        setTimeout(() => {
          setHelpFingerPosition("init");

          setStep(1);
        }, 1250);
      }, 1250);
    } else if (step === 3) {
      const chooseBox = document.querySelector(".choose-box");

      setHelpFingerPosition([
        chooseBox.getBoundingClientRect().left +
          chooseBox.getBoundingClientRect().width / 2,
        chooseBox.getBoundingClientRect().top +
          chooseBox.getBoundingClientRect().height / 2,
      ]);

      setTimeout(() => {
        chooseBox.click();

        setHelpFingerPosition("init");
      }, 1250);
    }
  }, [helpOverlay]);

  return (
    <>
      <div className="game5">
        {answer.map(
          (data, index) =>
            level === index && (
              <Group
                dropRefs={dropRefs}
                step={step}
                answer={answer}
                level={level}
                boxRefs={boxRefs}
                interactiveWords={interactiveWords}
                interactiveRefs={interactiveRefs}
                setStep={setStep}
                finished={finished[index]}
                dropWords={dropWords}
                images={images}
                setFinished={() => {
                  setFinished((prev) => {
                    prev[index] = [true];

                    return [...prev];
                  });
                }}
                handleAnswer={handleAnswer}
                boxPos={boxPos}
              />
            )
        )}
      </div>

      {
        <Tape
          move={step >= 5}
          index={level}
          tapeWords={tapeWords}
          level={level}
          finalAnimation={finalAnimation}
        />
      }

      <div id="line" className="game5line"></div>

      <StatusBar
        infoText={infoText}
        infoOverlay={infoOverlay}
        setInfoOverlay={setInfoOverlay}
        setHelpOverlay={setHelpOverlay}
        preventHelp={preventHelp}
        helpFingerPosition={helpFingerPosition}
        infoTitle={infoTitle}
      />

      {nextStep && index === 0 && (
        <div
          className="wrapper"
          style={{
            width: 1000,
            position: "absolute",
            top: 530,
            zIndex: 1001,
          }}
        >
          <div
            className="button-show"
            style={{ margin: "auto", left: 0, right: 0 }}
            onClick={() => {
              if (index === 1) return;

              setFinalAnimation(true);

              setTimeout(() => {
                next();
              }, 2000);
            }}
          >
            WEITER
          </div>
        </div>
      )}

      {endButton && index === 1 && (
        <div
          className="wrapper"
          style={{ width: 1000, position: "absolute", top: 530, zIndex: 1001 }}
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

export default Screen;

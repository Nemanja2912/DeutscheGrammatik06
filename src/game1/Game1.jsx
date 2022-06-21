import React, { useState, useEffect, useRef, createRef } from "react";

import "../css/game1.css";
import "../css/style.css";
import StatusBar from "./../UI/StatusBar";
import NavigateButton from "./NavigateButton";
import Stickman from "./Stickman";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const navBtns = ["Wohnzimmer", "Küche", "Schlafzimmer", "Arbeitszimmer"];

const Game1 = ({ nextLesson }) => {
  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>
      Lies den Prospekt. Welche Wörter bestehen aus zwei <br /> Wörtern? Klicke
      diese Wörter an und kaufe sie.
    </>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  const [endButton, setEndButton] = useState(false);

  const [screen2, setScreen2] = useState(false);

  const [buttonCart, setButtonCart] = useState(0);
  const [button, changeButton] = useState(-1);
  const [hide, setHide] = useState(false);

  const [answers, setAnswers] = useState([
    [true, false, true, false],
    [true, false, true, true, false, true],
    [true, true, false, false],
    [false, true, true, false],
  ]);

  const [groupFinished, setGroupFinished] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (buttonCart > 9) {
      setPreventHelp(true);
      setTimeout(() => {
        setScreen2(true);

        setTimeout(() => {
          setEndButton(true);
        }, 1250);
      }, 2500);
    }
  }, [buttonCart]);

  useEffect(() => {
    return () => {
      window.location.hash = "";
    };
  }, []);

  useEffect(() => {
    for (let i = 0; i < answers.length; i++) {
      let isDone = true;
      for (let j = 0; j < answers[i].length; j++) {
        if (answers[i][j] === true) {
          isDone = false;
          break;
        }
      }

      if (isDone) {
        setGroupFinished((prev) => {
          prev[i] = true;

          return [...prev];
        });
      }
    }
  }, [answers]);

  useEffect(() => {
    if (!helpOverlay) return;

    const navButtons = Array.from(document.querySelectorAll(".nav-wrapper"));

    if (button === undefined) {
      setHelpFingerPosition([
        navButtons[0].getBoundingClientRect().left +
          navButtons[0].getBoundingClientRect().width / 2,
        navButtons[0].getBoundingClientRect().top +
          navButtons[0].getBoundingClientRect().height / 2,
      ]);

      setTimeout(() => {
        navButtons[0].click();
      }, 1250);
    } else {
      const index = (button - 2) / 2;

      if (groupFinished[index] || groupFinished[index] === undefined) {
        let nextIndex;

        for (let i = 0; i < groupFinished.length; i++) {
          if (!groupFinished[i]) {
            nextIndex = i;

            break;
          }
        }

        setHelpFingerPosition([
          navButtons[nextIndex].getBoundingClientRect().left +
            navButtons[nextIndex].getBoundingClientRect().width / 2,
          navButtons[nextIndex].getBoundingClientRect().top +
            navButtons[nextIndex].getBoundingClientRect().height / 2,
        ]);

        setTimeout(() => {
          navButtons[nextIndex].click();
        }, 1250);
      } else {
        let buttonIndex;

        for (let i = 0; i < answers[index].length; i++) {
          if (answers[index][i] === true) {
            buttonIndex = i;
            break;
          }
        }

        const buttonGroup = document.querySelector(`.buttons${index + 1}`);

        const btns = Array.from(buttonGroup.querySelectorAll(".btn"));

        setHelpFingerPosition([
          btns[buttonIndex].getBoundingClientRect().left +
            btns[buttonIndex].getBoundingClientRect().width / 2,
          btns[buttonIndex].getBoundingClientRect().top +
            btns[buttonIndex].getBoundingClientRect().height / 2,
        ]);

        setTimeout(() => {
          btns[buttonIndex].click();
        }, 1250);
      }
    }

    setTimeout(() => {
      setHelpFingerPosition("init");
    }, 1250);
  }, [helpOverlay]);

  return (
    <>
      <div className="game1">
        <div
          style={{
            opacity: screen2 ? 0 : 1,
            transition: "0.25s linear",
            pointerEvents: screen2 ? "none" : "initial",
          }}
        >
          <Screen1
            buttonCart={buttonCart}
            setButtonCart={setButtonCart}
            screen2={screen2}
            changeButton={changeButton}
            setHide={setHide}
            button={button}
            hide={hide}
            answers={answers}
            setAnswers={setAnswers}
          />
        </div>

        {screen2 && <Screen2 />}

        {buttonCart > 9 && !screen2 && <Stickman />}

        <div
          className="nav-group"
          style={{
            opacity: screen2 ? 0 : 1,
            transition: "0.25s linear",
            pointerEvents: screen2 ? "none" : "initial",
          }}
        >
          {navBtns.map((text) => (
            <div className="nav-wrapper">
              <NavigateButton text={text} />
            </div>
          ))}
        </div>
      </div>

      {endButton && (
        <div
          className="wrapper"
          style={{
            width: 1000,
            position: "absolute",
            top: 650,
          }}
        >
          <div
            className="button-show"
            style={{ margin: "auto", right: 0 }}
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
    </>
  );
};

export default Game1;

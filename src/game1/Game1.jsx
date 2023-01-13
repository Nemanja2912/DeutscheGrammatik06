import React, { useState, useEffect, useRef, createRef } from "react";

import "../css/game1.css";
import "../css/style.css";
import Button from "./button";
import MessageBox from "./messageBox";
import StatusBar from "./../UI/StatusBar";

const messages = [
  {
    line: [["Hallo", "Deutschfan!", "Wie", "geht", "es", "dir?"]],
    element: [[3]],
    following: [[4]],
  },
  {
    line: [["Super!"]],
    following: [[0]],
    element: [[]],
    disabled: true,
  },
  {
    line: [
      ["Arbeitest", "du", "heute", "oder", "hast", "du", "Zeit?"],
      ["Wir", "machen", "einen", "Ausflug", "nach", "Marburg"],
    ],
    element: [[0, 4], [1]],
    following: [[1, 5], [0]],
    optionLevel: 1,
  },
];

const rest1 = [
  {
    line: [["Wie", "fahrt", "ihr", "nach", "Marburg?"]],
    element: [[1]],
    following: [[0]],
    optionLevel: 2,
  },
];

const rest2 = [
  {
    line: [
      ["Gut", "Dann", "kommt", "ihr", "gegen", "12:30", "nach", "Marburg,"],
    ],
    element: [[2]],
    following: [[3]],
  },
  {
    line: [["Wer", "kommt", "noch?"]],
    element: [[1]],
    following: [[0]],
  },
  {
    line: [
      ["Sebastian und Ulrike", "warten", "in", "Marburg"],
      ["auf", "uns.", "Sie", "fahren", "mit", "dem", "Auto."],
    ],
    element: [[1], [3]],
    following: [[0], [2]],
  },
  {
    line: [
      ["Kennst", "du", "Marburg", "oder", "brauchst", "du", "eine"],
      ["Karte"],
    ],
    element: [[0, 4], []],
    following: [[1, 5], []],
  },
  {
    line: [["Karte", ":-)"]],
    following: [[0]],
    element: [[]],
    disabled: true,
  },
  {
    line: [["Alles", "klar!", "Ich", "schicke", "dir", "eine"]],
    element: [[3]],
    following: [[2]],
    map: true,
  },
  {
    line: [["Danke"]],
    following: [[]],
    element: [[]],
    disabled: true,
  },
  {
    line: [
      ["Auf", "der", "Karte", "siehst", "du", "ein", "Schloss.", "Da"],
      ["gehen", "wir", "hin."],
    ],
    element: [[3], [0]],
    following: [[4], [1]],
    optionLevel: 3,
  },
];

const messagesOption1 = [
  [
    {
      line: [
        ["Toll!", "Ich", "habe", "Zeit.", "Ich", "komme", "mit", "meiner"],
        ["Cousine."],
      ],
      element: [[2, 5], []],
      following: [[1, 4], []],
    },
  ],
  [
    {
      line: [["Heute", "habe", "ich", "leider", "keine", "Zeit"]],
      element: [[1]],
      following: [[2]],
    },
    {
      line: [["OK!", "Dann", "machen", "wir", "den Ausflug", "morgen"]],
      element: [[2]],
      following: [[3]],
    },
    {
      line: [["Ich", "komme", "dann", "mit", "meiner Cousine"]],
      element: [[1]],
      following: [[0]],
    },
  ],
];

const messagesOption2 = [
  [
    {
      line: [["Wir", "fahren", "mit", "dem", "Zug", "um", "12:07."]],
      element: [[1]],
      following: [[0]],
    },
  ],
  [
    {
      line: [["Wir", "nehmen", "ein", "Taxi", "um", "12:15"]],
      element: [[1]],
      following: [[0]],
    },
  ],
];

const messagesOption3 = [
  [
    {
      line: [["Auf", "dem", "Weg", "liegt", "noch", "eine Bäckerei", ":-)"]],
      element: [[3]],
      following: [[5]],
    },
    {
      line: [["Ein Stück Kuchen", "schmeckt", "immer", "gut"]],
      element: [[1]],
      following: [[0]],
      last: true,
    },
  ],
  [
    {
      line: [["Auf", "dem", "Weg", "liegt", "noch", "eine Eisdiele", ":-)"]],
      element: [[3]],
      following: [[5]],
      last: true,
    },
  ],
];

let lineCount = [];

for (let i = 0; i < 20; i++) {
  lineCount.push("");
}

const Game1 = ({ nextLesson }) => {
  const boxRef = useRef(null);

  const [messageList, setMessageList] = useState([...messages]);

  const [step, setStep] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [buttonLevel, setButtonLevel] = useState(false);
  const [translate, setTranslate] = useState(0);
  const [lineTranslate, setLineTranslate] = useState(0);
  const [lineHeight, setLineHeight] = useState(120);
  const [wait, setWait] = useState(false);

  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>
      Klicke die Verben an und <br />
      zieh sie in den blauen Kasten rechts.
    </>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  const [endButton, setEndButton] = useState(false);
  const [finish, setFinish] = useState(false);

  const lineRefs = useRef(lineCount.map(() => createRef()));

  useEffect(() => {
    if (finish) {
      return setEndButton(true);
    }

    if (messageList[step]?.disabled) {
      const time = step >= 10 ? 3000 : 1500;

      return setTimeout(() => {
        setStep((prev) => (prev += 1));
      }, time);
    }

    if (messageList[step]?.last) {
      setFinish(true);
    }

    if (messageList[step - 1]?.optionLevel) {
      return setButtonLevel(messageList[step - 1].optionLevel);
    }

    handleStepChange();
  }, [step]);

  const handleStepChange = () => {
    if (step < 6) return;

    setWait(true);
    setTimeout(() => {
      setTranslate((step - 5) * -60);
      handleChangeLine();

      setTimeout(() => {
        setWait(false);
      }, 1500);
    }, 500);
  };

  const handleOptions = (option, level) => {
    handleStepChange();

    setButtonLevel("hide");

    setTimeout(() => {
      if (level === 0) {
        setMessageList((prev) => {
          return [...prev, ...messagesOption1[option], ...rest1];
        });
      } else if (level === 1) {
        setMessageList((prev) => {
          return [...prev, ...messagesOption2[option], ...rest2];
        });
      } else if (level === 2) {
        setMessageList((prev) => {
          return [...prev, ...messagesOption3[option]];
        });
      }

      setTimeout(() => {
        setButtonLevel(false);
      }, 150);
    }, 750);
  };

  const handleChangeLine = () => {
    if (lineIndex === lineCount.length - 1) return;
    setLineIndex((prev) => prev + 1);
  };

  const handleComplete = () => {
    if (finish) return;

    setLineHeight((prev) => prev + 30);

    handleChangeLine();
  };

  const handleFinish = () => {
    if (messageList[step + 1]?.disabled) {
      setPreventHelp(true);

      setTimeout(() => {
        setPreventHelp(false);
      }, 2000);
    }

    if (lineIndex > 7 && !messageList[step]?.disabled && !finish) {
      setPreventHelp(true);

      setTimeout(() => {
        setLineTranslate((prev) => {
          const result = prev - 30;

          return result;
        });

        setTimeout(() => {
          setPreventHelp(false);
        }, 1000);
      }, 1500);
    }

    setStep((prev) => (prev += 1));

    if (!finish) {
      setLineHeight((prev) => prev + 30);
    }

    if (step < 5) {
      handleChangeLine();
    }
  };

  useEffect(() => {
    if (messageList[step]?.disabled) return;

    if (helpOverlay) {
      if (buttonLevel) {
        const optionsList = Array.from(document.querySelectorAll(".options"));
        const button = optionsList[buttonLevel - 1]?.children[0];

        setHelpFingerPosition([
          button?.getBoundingClientRect().left +
            button?.getBoundingClientRect().width / 2 -
            5,
          button?.getBoundingClientRect().top +
            button?.getBoundingClientRect().height / 2 -
            5,
        ]);

        setTimeout(() => {
          button?.click();

          setTimeout(() => {
            setHelpFingerPosition("init");
          }, 500);
        }, 1250);

        return;
      }

      const boxLine = lineRefs.current[lineIndex].current;

      const messageBox = document.querySelectorAll(".line")[step];

      let element = null,
        followElement;

      const elementArr = messageList[step].element;

      let isDone = false;

      for (let i = 0; i < elementArr.length; i++) {
        const elementList = elementArr[i];

        for (let j = 0; j < elementList.length; j++) {
          const tempElement =
            messageBox.children[0].children[1].children[1].children[i].children[
              elementList[j]
            ];

          if (parseFloat(tempElement.style.left) === 0) {
            isDone = false;
          }

          if (parseFloat(tempElement.style.left) === 0 && element === null) {
            element = tempElement;

            followElement =
              messageBox.children[0].children[1].children[1].children[i]
                .children[messageList[step].following[i][j]];

            isDone = true;
          }
        }
      }

      setHelpFingerPosition([
        element.getBoundingClientRect().left +
          element.getBoundingClientRect().width / 2 -
          10,
        element.getBoundingClientRect().top +
          element.getBoundingClientRect().height / 2,
      ]);

      setTimeout(() => {
        const elementX = element.getBoundingClientRect().left;
        const elementY = element.getBoundingClientRect().top;

        element.children[0].style.opacity = 1;
        element.style.transition = "1s linear";

        element.style.left =
          boxLine.getBoundingClientRect().left + 50 - elementX + "px";

        element.style.top =
          boxLine.getBoundingClientRect().top - elementY + "px";

        const followElementX = followElement.getBoundingClientRect().left;
        const followElementY = followElement.getBoundingClientRect().top;

        followElement.children[0].style.opacity = 1;
        followElement.style.transition = "1s linear";

        followElement.style.left =
          boxLine.getBoundingClientRect().left +
          (followElementX - elementX) -
          followElementX +
          50 +
          "px";

        followElement.style.top =
          boxLine.getBoundingClientRect().top - followElementY + "px";

        setHelpFingerPosition([
          boxLine.getBoundingClientRect().left +
            element.getBoundingClientRect().width / 2 +
            40,
          boxLine.getBoundingClientRect().top +
            element.getBoundingClientRect().height / 2,
        ]);

        setTimeout(() => {
          const followElementX = followElement.getBoundingClientRect().left;
          const followElementY = followElement.getBoundingClientRect().top;

          const followingStyleX = parseFloat(followElement.style.left);
          const followingStyleY = parseFloat(followElement.style.top);

          const elementX = element.getBoundingClientRect().left;
          const elementY = element.getBoundingClientRect().top;

          const elementStyleX = parseFloat(followElement.style.left);
          const elementStyleY = parseFloat(followElement.style.top);

          element.style.opacity = 0;
          element.style.transition =
            "all 0.5s linear, opacity 0.5s linear, background-color 0s";
          element.style.pointerEvents = "none";

          element.style.zIndex = "1";

          followElement.style.transition = "0.5s linear";
          followElement.style.pointerEvents = "none";

          followElement.style.left =
            boxLine.getBoundingClientRect().left -
            followElementX +
            followingStyleX +
            "px";

          followElement.style.top =
            boxLine.getBoundingClientRect().top -
            followElementY +
            followingStyleY +
            "px";

          element.style.left =
            boxLine.getBoundingClientRect().left -
            elementX +
            followElement.getBoundingClientRect().width +
            elementStyleX +
            "px";

          element.style.top =
            boxLine.getBoundingClientRect().top -
            elementY +
            elementStyleY +
            "px";

          const child = document.createElement("p");
          child.innerHTML = followElement.innerHTML + " " + element.innerHTML;

          followElement.style.opacity = 0;
          element.style.opacity = 0;

          if (
            !child.innerHTML.includes("Sebastian") &&
            !child.innerHTML.includes("Bäckerei") &&
            !child.innerHTML.includes("Stück")
          ) {
            child.style.textTransform = "lowercase";
          }

          if (child.innerHTML.includes("Stück")) {
            child.innerHTML = "ein Stück Kuchen schmeckt";
          }

          setTimeout(() => {
            child.style.opacity = 1;
          }, 0);

          boxLine.appendChild(child);

          setTimeout(() => {
            if (isDone) {
              handleFinish();
            } else {
              handleComplete();
            }

            setTimeout(() => {
              setHelpFingerPosition("init");
            }, 1250);
          }, 100);
        }, 1250);
      }, 1250);
    }
  }, [helpOverlay]);

  return (
    <>
      <div className="game1">
        <div className="shadow" style={{ opacity: step >= 6 ? 1 : 0 }}></div>
        <div
          className="message-box"
          style={{
            transform: `translateY(${translate}px)`,
            transition: "1s linear",
          }}
        >
          {messageList.map((item, index) => (
            <div
              className="line"
              key={index}
              style={{
                opacity:
                  step >= index &&
                  (!buttonLevel || step !== index) &&
                  (!wait || step !== index)
                    ? 1
                    : 0,
                pointerEvents:
                  step === index &&
                  (!buttonLevel || step !== index) &&
                  (!wait || step !== index) &&
                  !wait
                    ? "initial"
                    : "none",

                transition: "0.5s linear",
              }}
            >
              <MessageBox
                active={step === index}
                item={item}
                primary={index % 2 === 0}
                disable={messageList[index]?.disabled}
                drop={boxRef}
                mapped={item.map}
                translate={translate}
                lineRef={lineRefs?.current[lineIndex]}
                onFinish={handleFinish}
                onComplete={handleComplete}
              />
            </div>
          ))}

          <div
            className="options1 options"
            style={{
              opacity: buttonLevel === 1 && buttonLevel !== "hide" ? 1 : 0,
              pointerEvents:
                buttonLevel === 1 && buttonLevel !== "hide"
                  ? "initial"
                  : "none",

              transition: "0.5s linear",
            }}
          >
            <Button onClick={(e) => handleOptions(0, 0)}>
              Toll! Ich habe Zeit.
            </Button>
            <Button onClick={(e) => handleOptions(1, 0)}>
              Heute habe ich leider keine Zeit.
            </Button>
          </div>

          <div
            className="options2 options"
            style={{
              opacity: buttonLevel === 2 && buttonLevel !== "hide" ? 1 : 0,
              pointerEvents:
                buttonLevel === 2 && buttonLevel !== "hide"
                  ? "initial"
                  : "none",

              transition: "0.5s linear",
            }}
          >
            <Button onClick={(e) => handleOptions(0, 1)}>
              Wir fahren mit dem Zug.
            </Button>
            <Button onClick={(e) => handleOptions(1, 1)}>
              Wir nehmen ein Taxi.
            </Button>
          </div>

          <div
            className="options3 options"
            style={{
              opacity: buttonLevel === 3 && buttonLevel !== "hide" ? 1 : 0,
              pointerEvents:
                buttonLevel === 3 && buttonLevel !== "hide"
                  ? "initial"
                  : "none",

              transition: "0.5s linear",
            }}
          >
            <Button onClick={(e) => handleOptions(0, 2)}>
              Auf dem Weg liegt eine Bäckerei.
            </Button>
            <Button onClick={(e) => handleOptions(1, 2)}>
              Auf dem Weg liegt eine Eisdiele.
            </Button>
          </div>
        </div>

        <div
          className="box"
          ref={boxRef}
          style={{
            height: lineHeight,
            transform: `translateY(${lineTranslate}px)`,
            transition: "1s linear",
          }}
        >
          {lineCount.map((item, index) => (
            <div
              style={{}}
              className="line"
              key={index}
              ref={lineRefs.current[index]}
            ></div>
          ))}
        </div>
      </div>

      {endButton && (
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
    </>
  );
};

export default Game1;

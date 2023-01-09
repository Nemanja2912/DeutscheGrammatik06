import React, { useEffect, useState, useRef } from "react";

import Movable from "../reusable/movable/movable";
import StatusBar from "../UI/StatusBar";

const labels = ["Ich", "Wir", "Du", "Ihr", "Er/Sie/Es", "Sie"];

const results = [
  ["", "", ""],
  ["", "", ""],
  ["", "", "", "", ""],
  ["", ""],
  ["", "", "", ""],
  ["", ""],
];

const words = [
  {
    box: 4,
    word: (
      <>
        es geh<span>t</span>
      </>
    ),
    auto: true,
  },
  {
    box: 2,
    word: (
      <>
        du ha<span>st</span>
      </>
    ),
    auto: true,
  },
  {
    box: 1,
    word: (
      <>
        wir mach<span>en</span>
      </>
    ),
    auto: true,
  },
  {
    box: 2,
    word: (
      <>
        du arbeite<span>st</span>
      </>
    ),
    auto: true,
  },
  {
    box: 0,
    word: (
      <>
        ich hab<span>e</span>
      </>
    ),
    auto: true,
  },
  {
    box: 0,
    word: (
      <>
        ich komm<span>e</span>
      </>
    ),
    auto: true,
  },
  {
    box: 5,
    word: (
      <>
        Sebastian und Ulrike wart<span>en</span>
      </>
    ),
    auto: true,
  },
  {
    box: 3,
    word: (
      <>
        ihr fahr<span>t</span>
      </>
    ),
    auto: true,
  },
  {
    box: 4,
    word: (
      <>
        wer komm<span>t</span>
      </>
    ),
    auto: true,
  },
  {
    box: 1,
    word: (
      <>
        wir fahr<span>en</span>
      </>
    ),
    auto: true,
  },
  {
    box: 5,
    word: (
      <>
        sie fahr<span>en</span>
      </>
    ),
  },
  {
    box: 2,
    word: (
      <>
        du brauch<span>st</span>
      </>
    ),
    auto: true,
  },
  {
    box: 3,
    word: (
      <>
        ihr komm<span>t</span>
      </>
    ),
  },
  {
    box: 2,
    word: (
      <>
        du sieh<span>st</span>
      </>
    ),
    auto: true,
  },
  {
    box: 1,
    word: (
      <>
        wir geh<span>en</span>
      </>
    ),
  },
  {
    box: 2,
    word: (
      <>
        du kenn<span>st</span>
      </>
    ),
  },
  {
    box: 0,
    word: (
      <>
        ich schick<span>e</span>
      </>
    ),
  },
  {
    box: 4,
    word: (
      <>
        eine Bäckerei lieg<span>t</span>
      </>
    ),
    auto: true,
  },
  {
    box: 4,
    word: (
      <>
        ein Stück Kuchen schmeck<span>t</span>
      </>
    ),
  },
];

const Screen1 = ({ setIsDone, isDone, buttonLevel, step, setStep }) => {
  const [lineDoneIndex, setLineDoneIndex] = useState([0, 0, 0, 0, 0, 0]);

  const [disableMove, setDisableMove] = useState(true);

  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(true);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(<>Zieh die Paare in die Tabelle.</>);
  const [infoOverlay, setInfoOverlay] = useState(true);

  const boxRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const lineRefs = [
    [useRef(null), useRef(null), useRef(null)],
    [useRef(null), useRef(null), useRef(null)],
    [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)],
    [useRef(null), useRef(null)],
    [useRef(null), useRef(null), useRef(null), useRef(null)],
    [useRef(null), useRef(null)],
  ];

  const wordRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    if (helpOverlay) {
      const lineIndex = [...lineDoneIndex];
      const isDoneList = [...isDone];

      let index = -1;

      for (let i = 0; i < isDone.length; i++) {
        if (!isDone[i]) {
          index = i;
          break;
        }
      }

      const timeout = 1250;

      const element = wordRefs[index].current;

      const elementX = element.getBoundingClientRect().left;
      const elementY = element.getBoundingClientRect().top;

      const styleX = parseFloat(element.style.left);
      const styleY = parseFloat(element.style.top);

      setHelpFingerPosition([
        element.getBoundingClientRect().left +
          element.getBoundingClientRect().width / 2 -
          5,
        element.getBoundingClientRect().top +
          element.getBoundingClientRect().height / 2,
      ]);

      setTimeout(() => {
        element.style.transition = `1000ms linear`;

        element.style.background = "transparent";
        element.classList.add("finish");

        const targetRefX =
          lineRefs[words[index].box][
            lineIndex[words[index].box]
          ]?.current?.getBoundingClientRect()?.right;

        const targetRefY =
          lineRefs[words[index].box][
            lineIndex[words[index].box]
          ]?.current?.getBoundingClientRect()?.top;

        element.style.left =
          targetRefX -
          elementX +
          styleX -
          element.getBoundingClientRect()?.width +
          "px";

        element.style.top = targetRefY - elementY + styleY + "px";

        setHelpFingerPosition([
          targetRefX - element.getBoundingClientRect().width / 2 - 5,
          targetRefY + element.getBoundingClientRect().height / 2,
        ]);

        lineIndex[words[index].box] += 1;
        isDoneList[index] = true;

        setTimeout(() => {
          setHelpFingerPosition("init");
        }, timeout);

        setDisableMove(false);

        setLineDoneIndex([...lineIndex]);
        setIsDone([...isDoneList]);
      }, timeout);
    }
  }, [helpOverlay]);

  const handleFinished = (index, boxIndex) => {
    const element = wordRefs[index].current;

    element.style.background = "transparent";
    element.classList.add("finish");

    setLineDoneIndex((prev) => {
      const lineList = [...prev];
      lineList[boxIndex] += 1;

      return [...lineList];
    });

    setIsDone((prev) => {
      const arr = [...prev];
      arr[index] = true;

      return [...arr];
    });
  };

  useEffect(() => {
    setTimeout(() => {
      handleStartMove();
    }, 250);
  }, []);

  const handleStartMove = () => {
    if (!disableMove) return;

    let counter = 0;

    const lineIndex = [...lineDoneIndex];
    const isDoneList = [...isDone];

    const timer = 250;

    for (let i = 0; i < wordRefs.length; i++) {
      const timeout = counter * timer;

      if (words[i].auto) {
        const element = wordRefs[i].current;

        const elementX = element.getBoundingClientRect().left;
        const elementY = element.getBoundingClientRect().top;

        const styleX = parseFloat(element.style.left);
        const styleY = parseFloat(element.style.top);
        setTimeout(() => {
          element.style.transition = `${timer}ms linear`;

          element.style.background = "transparent";
          element.classList.add("finish");

          element.style.left =
            lineRefs[words[i].box][
              lineIndex[words[i].box]
            ]?.current?.getBoundingClientRect()?.right -
            elementX +
            styleX -
            element.getBoundingClientRect()?.width +
            "px";

          element.style.top =
            lineRefs[words[i].box][
              lineIndex[words[i].box]
            ]?.current?.getBoundingClientRect()?.top -
            elementY +
            styleY +
            "px";

          lineIndex[words[i].box] += 1;
          isDoneList[i] = true;
        }, timeout);

        counter++;
      }

      if (i === wordRefs.length - 1) {
        setTimeout(() => {
          setDisableMove(false);

          setLineDoneIndex([...lineIndex]);
          setIsDone([...isDoneList]);

          setPreventHelp(false);
        }, timeout);
      }
    }
  };

  useEffect(() => {
    if (buttonLevel === 1 && step === 0) {
      setPreventHelp(true);
    }
  }, [buttonLevel, step]);

  return (
    <>
      <div className="words">
        {words.map((item, index) => {
          return (
            <Movable
              style={{
                pointerEvents: disableMove || isDone[index] ? "none" : "",
                backgroundColor: isDone[index]
                  ? "transparent"
                  : disableMove
                  ? " #D6D9DB"
                  : " #5ac8f5",
              }}
              ref={wordRefs[index]}
              targetRef={boxRefs[item.box]}
              onFinished={() => handleFinished(index, item.box)}
              key={index}
              customDrop={[
                lineRefs[item.box][
                  lineDoneIndex[item.box]
                ]?.current?.getBoundingClientRect()?.right -
                  wordRefs[index]?.current?.getBoundingClientRect()?.width,
                lineRefs[item.box][
                  lineDoneIndex[item.box]
                ]?.current?.getBoundingClientRect()?.top,
              ]}
            >
              {item.word}
            </Movable>
          );
        })}
      </div>
      <div className="drop-box">
        {labels.map((label, index) => (
          <div ref={boxRefs[index]} className="box" key={index}>
            <div className="label">{label}</div>

            <div className="lines">
              {results[index].map((r, rIndex) => (
                <div
                  className="line"
                  ref={lineRefs[index][rIndex]}
                  key={rIndex}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {buttonLevel === 1 && step === 0 && (
        <div
          className="button-show"
          style={{
            margin: "auto",
            left: 0,
            right: 0,
          }}
          onClick={() => setStep(1)}
        >
          WEITER
        </div>
      )}

      {step === 0 && (
        <StatusBar
          infoText={infoText}
          infoOverlay={infoOverlay}
          setInfoOverlay={setInfoOverlay}
          setHelpOverlay={setHelpOverlay}
          preventHelp={preventHelp}
          helpFingerPosition={helpFingerPosition}
          infoTitle={infoTitle}
        />
      )}
    </>
  );
};

export default Screen1;

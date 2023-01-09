import { useEffect, useRef, useState } from "react";
import MovableEdited from "./movable/movableEdited";
import StatusBar from "../UI/StatusBar";

const labels = ["Ich", "Wir", "Du", "Ihr", "Er/Sie/Es", "Sie"];

const rest = ["e", "en", "st", "t", "t", "en"];

const words = [
  <>
    <span>mach</span>
    <span>en</span>
  </>,
  <>
    <span>arbeit</span>
    <span>en</span>
  </>,
  <>
    <span>geh</span>
    <span>en</span>
  </>,
];

const Screen2 = ({ step, setStep }) => {
  const [isDone, setIsDone] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [disable, setDisable] = useState(false);

  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>
      Wie bildet man das Präsens? <br />
      Zieh den Infinitiv in die Lücke zwischen <br />
      dem Pronomen und der Endung.{" "}
    </>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  const [showButton, setShowButton] = useState(false);

  const [isFirstTime, setIsFirstTime] = useState(true);

  const [wordDone, setWordDone] = useState([
    [false, false, false],
    [false, false, false],
  ]);

  const boxRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const lineRefs = [useRef(null), useRef(null)];

  const dropRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const restRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    let finish = true;
    for (let i = 0; i < isDone.length; i++) {
      if (!isDone[i]) {
        finish = false;
        break;
      }
    }

    if (finish) {
      setTimeout(() => {
        setShowButton(true);

        setTimeout(() => {
          setPreventHelp(true);
        }, 2000);
      }, 500);
    }
  }, [isDone]);

  const tagRefs = [useRef(null), useRef(null)];

  const handleMove = (element) => {
    element.style.zIndex = 11;
  };

  const handleFail = (element, index, lineIndex) => {
    element.style.zIndex = 10;
    lineRefs[lineIndex].current.children[index].style.zIndex = 9;
  };

  const handleFinish = (event, element, elementIndex, boxIndex) => {
    let index = -1;
    setDisable(true);

    setPreventHelp(true);

    for (let i = 0; i < boxRefs.length; i++) {
      if (isDone[i] === true) continue;

      if (
        (event.clientX > boxRefs[i].current.getBoundingClientRect().left &&
          event.clientX < boxRefs[i].current.getBoundingClientRect().right &&
          event.clientY > boxRefs[i].current.getBoundingClientRect().top &&
          event.clientY < boxRefs[i].current.getBoundingClientRect().bottom) ||
        i === boxIndex
      ) {
        index = i;
        setIsDone((prev) => {
          let list = [...prev];
          list[i] = true;

          return [...list];
        });
        break;
      }
    }

    setTimeout(() => {
      element.children[1].style.transition = "0.5s linear";
      element.children[1].style.background = "#1268B1";

      let timer = 1000;

      if (isFirstTime) {
        tagRefs[0].current.style.opacity = 1;
        tagRefs[1].current.style.opacity = 1;

        const tag1 = tagRefs[0].current;
        const tag2 = tagRefs[1].current;

        const tag1X = tag1.getBoundingClientRect().right;
        const tag1Y = tag1.getBoundingClientRect().top;
        const tag2X = tag2.getBoundingClientRect().left;
        const tag2Y = tag2.getBoundingClientRect().top;

        tag1.style.left =
          element.getBoundingClientRect().left - tag1X - 25 + "px";
        tag1.style.top = element.getBoundingClientRect().top - tag1Y + "px";

        tag2.style.left =
          element.getBoundingClientRect().right - tag2X + 25 + "px";
        tag2.style.top = element.getBoundingClientRect().top - tag2Y + "px";

        setIsFirstTime(false);

        timer = 2000;
      }

      setTimeout(() => {
        element.children[0].style.transition = "0.5s linear";
        element.children[0].style.top = 38 + "px";

        tagRefs[0].current.style.opacity = 0;
        tagRefs[1].current.style.opacity = 0;

        element.children[1].style.top = -20 + "px";
        element.children[1].style.opacity = 0;

        dropRefs[index].current.style.opacity = 0;

        element.style.background = "transparent";

        let insert = false;
        let timer2 = 500;
        let p;

        if ((index === 2 || index === 3 || index === 4) && elementIndex === 1) {
          const letterDiv = document.querySelector("#letter");

          p = document.createElement("p");
          p.innerHTML = "e";

          letterDiv.appendChild(p);

          const pX = p.getBoundingClientRect().left;
          const pY = p.getBoundingClientRect().top;

          p.style.left =
            element.children[0].getBoundingClientRect().right - pX + "px";
          p.style.top =
            element.children[0].getBoundingClientRect().top - pY + "px";

          insert = true;

          timer2 = 1000;
        }

        setTimeout(() => {
          setTimeout(() => {
            setDisable(false);

            setPreventHelp(false);
          }, 250);

          if (insert) {
            p.style.opacity = 1;
            p.style.transition = "0.25s linear";
            p.style.top = parseFloat(p.style.top) + 39 + "px";
            return;
          }

          const restElement = restRefs[index].current;

          const restX = restElement.getBoundingClientRect().left;

          restRefs[index].current.style.left =
            element.children[0].getBoundingClientRect().right - restX + "px";
        }, timer2);
      }, timer);
    }, 500);
  };

  useEffect(() => {
    if (helpOverlay) {
      let elementIndex = -1;
      let boxIndex = -1;

      loop1: for (let i = 0; i < wordDone.length; i++) {
        for (let j = 0; j < wordDone[i].length; j++) {
          elementIndex++;

          if (!wordDone[i][j]) {
            setWordDone((prev) => {
              prev[i][j] = true;

              return [...prev];
            });
            break loop1;
          }
        }
      }

      for (let i = 0; i < isDone.length; i++) {
        if (!isDone[i]) {
          boxIndex = i;
          break;
        }
      }

      if (elementIndex === -1 || boxIndex === -1) return;

      const element = document.querySelectorAll(".element-move")[elementIndex];

      setHelpFingerPosition([
        element.getBoundingClientRect().left +
          element.getBoundingClientRect().width / 2 -
          5,
        element.getBoundingClientRect().top +
          element.getBoundingClientRect().height / 2,
      ]);

      setTimeout(() => {
        const dropX =
          dropRefs[boxIndex]?.current?.getBoundingClientRect()?.right -
          7.5 -
          element.children[0].getBoundingClientRect()?.width;

        let top = element.getBoundingClientRect().height;

        const dropY =
          dropRefs[boxIndex]?.current?.getBoundingClientRect()?.top - top;

        element.style.transition = "1s linear";

        element.style.left =
          dropX - element.getBoundingClientRect().left + "px";

        element.style.top = dropY - element.getBoundingClientRect().top + "px";

        setHelpFingerPosition([
          dropX + element.getBoundingClientRect().width / 2 - 5,
          dropY + element.getBoundingClientRect().height / 2,
        ]);

        setTimeout(() => {
          element.style.transition = "0s linear";

          setHelpFingerPosition("init");

          handleFinish(true, element, elementIndex, boxIndex);
        }, 1250);
      }, 1250);
    }
  }, [helpOverlay]);

  return (
    <>
      <div className="screen2">
        <div className="words2">
          <div className="line1" ref={lineRefs[0]}>
            {words.map((word, index) => (
              <MovableEdited
                className="element-move"
                key={index}
                style={{
                  pointerEvents: wordDone[0][index] || disable ? "none" : "",
                  backgroundColor: "#5ac8f5",
                }}
                onMove={(x, y, element, event) => handleMove(element, event)}
                onFail={(element) => handleFail(element, index, 1)}
                multipleRefs={boxRefs}
                multipleRefsDisabled={isDone}
                onFinished={(event, element) => {
                  handleFinish(event, element, index);

                  setWordDone((prev) => {
                    let list = [...prev];
                    list[0][index] = true;

                    return [...list];
                  });
                }}
                multipleCustomDrop={dropRefs}
              >
                {word}
              </MovableEdited>
            ))}
          </div>
          <div className="line2" ref={lineRefs[1]}>
            {words.map((word, index) => (
              <MovableEdited
                className="element-move"
                key={index}
                style={{
                  pointerEvents: wordDone[1][index] || disable ? "none" : "",
                  backgroundColor: "#5ac8f5",
                }}
                onMove={(x, y, element, event) => handleMove(element, event)}
                onFail={(element) => handleFail(element, index, 0)}
                multipleRefs={boxRefs}
                multipleRefsDisabled={isDone}
                onFinished={(event, element) => {
                  handleFinish(event, element, index);
                  setWordDone((prev) => {
                    let list = [...prev];
                    list[1][index] = true;

                    return [...list];
                  });
                }}
                multipleCustomDrop={dropRefs}
              >
                {word}
              </MovableEdited>
            ))}
          </div>
        </div>

        <div className="drop-box">
          {labels.map((label, index) => (
            <div ref={boxRefs[index]} className="box" key={index}>
              <div className="label">{label}</div>

              <div className="drop" ref={dropRefs[index]}></div>

              <div className="rest" ref={restRefs[index]}>
                {rest[index]}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tag tag1" ref={tagRefs[0]}>
        <p>Verbstamm</p>
      </div>
      <div className="tag tag2" ref={tagRefs[1]}>
        <p>Endung</p>
      </div>

      <div id="letter"></div>

      {showButton && (
        <div
          className="button-show"
          style={{
            margin: "auto",
            left: 0,
            right: 0,
            bottom: 50,
          }}
          onClick={() => setStep(2)}
        >
          WEITER
        </div>
      )}

      {step === 1 && (
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

export default Screen2;

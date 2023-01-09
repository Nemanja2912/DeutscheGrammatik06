import { useEffect, useRef, useState } from "react";
import MovableEdited from "./../game2/movable/movableEdited";
import Movable from "./../reusable/movable/movable";
import StatusBar from "./../UI/StatusBar";
import moveFunc from "./../reusable/movable/moveFunc";

const labels = ["Ich", "Wir", "Du", "Ihr", "Er/Sie/Es", "Sie"];

const suffixOrder = ["e", "en", "st", "t", "t", "en"];

const words = [
  <>
    <span>fahr</span>
    <span>en</span>
  </>,
  <>
    <span>lern</span>
    <span>en</span>
  </>,
];

const lastPart = [
  {
    word: "en",
    box: [1, 5],
  },
  {
    word: "e",
    box: [0],
  },
  {
    word: "t",
    box: [3, 4],
  },
  {
    word: "t",
    box: [3, 4],
  },
  {
    word: "st",
    box: [2],
  },
  {
    word: "en",
    box: [1, 5],
  },
];

const Screen2 = ({ part, setNextPart }) => {
  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>
      Was ist ein Verbstamm?
      <br />
      Zieh die Infinitive in die Lücken.
    </>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  const [isDone, setIsDone] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]);
  const [disable, setDisable] = useState(false);

  const [part2, setPart2] = useState(false);

  const blankRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [boxDisable, setBoxDisable] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [isDropDone, setIsDropDone] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [boxLevel, setBoxLevel] = useState(0);

  const [wordDone, setWordDone] = useState([false, false]);

  const labelRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

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

  const handleMove = (element) => {
    element.style.zIndex = 11;
  };

  const handleFail = (element, index, lineIndex) => {
    element.style.zIndex = 10;

    if (lineRefs[lineIndex]?.current?.children[index])
      lineRefs[lineIndex].current.children[index].style.zIndex = 9;
  };

  const handleFinish = (event, element, elementIndex, autoBoxIndex) => {
    setPreventHelp(true);
    let index = -1;
    setDisable(true);

    for (let i = 0; i < boxRefs.length; i++) {
      //   if (isDone[elementIndex][i] === true) continue;

      if (
        (boxRefs[i].current &&
          event.clientX > boxRefs[i].current.getBoundingClientRect().left &&
          event.clientX < boxRefs[i].current.getBoundingClientRect().right &&
          event.clientY > boxRefs[i].current.getBoundingClientRect().top &&
          event.clientY < boxRefs[i].current.getBoundingClientRect().bottom) ||
        autoBoxIndex === i
      ) {
        index = i;

        setIsDone((prev) => {
          let list = [...prev];
          list[elementIndex][i] = true;

          return [...list];
        });
        break;
      }
    }

    element.children[0].setAttribute("letter", suffixOrder[index]);

    setTimeout(() => {
      element.children[1].style.transition = "0.5s linear";
      element.children[1].style.background = "#1268B1";

      let timer = 1000;

      setTimeout(() => {
        element.children[0].style.transition = "0.5s linear";
        element.children[0].style.top = 35.5 + "px";

        element.children[1].style.top = -20 + "px";
        element.children[1].style.opacity = 0;

        console.log(dropRefs, index);

        dropRefs[index].current.style.opacity = 0;

        let timer2 = 1000;

        const cloneParrent = document.querySelector("#clone");

        for (let i = 0; i < dropRefs.length; i++) {
          if (i === index) continue;

          if (boxLevel === 1) {
            dropRefs[i].current.style.opacity = 0;
          }

          const cloneEl = element.cloneNode(true);
          cloneEl.style.top = 0 + "px";
          cloneEl.style.left = 0 + "px";
          cloneEl.children[0].style.top =
            dropRefs[i].current.getBoundingClientRect().top -
            cloneParrent.getBoundingClientRect().top +
            3.5 +
            "px";

          console.log(
            dropRefs[i].current.getBoundingClientRect().top,
            cloneParrent.getBoundingClientRect().top
          );

          cloneEl.children[0].style.left =
            dropRefs[i].current.getBoundingClientRect().left + 25 + "px";

          cloneEl.children[0].style.opacity = 0;
          cloneEl.children[0].style.transition = "0.5s linear";

          cloneEl.children[0].setAttribute("letter", suffixOrder[i]);

          if (element.innerHTML.includes("fahr") && (i === 2 || i === 4)) {
            const span2 = document.createElement("span");
            span2.innerHTML = "ä";

            cloneEl.children[0].innerHTML = "f";
            cloneEl.children[0].appendChild(span2);
            cloneEl.children[0].innerHTML += "hr";
          }

          cloneParrent.appendChild(cloneEl);

          setTimeout(() => {
            element.children[0].style.background = "transparent";
            cloneEl.children[0].style.opacity = 1;

            if (
              element.innerHTML.includes("fahr") &&
              (index === 2 || index === 4)
            ) {
              const span2 = document.createElement("span");
              span2.innerHTML = "ä";

              element.children[0].innerHTML = "f";
              element.children[0].appendChild(span2);
              element.children[0].innerHTML += "hr";
            }

            setTimeout(() => {
              if (boxLevel === 0) {
                cloneEl.children[0].style.top =
                  parseFloat(cloneEl.children[0].style.top) + 42 + "px";
              }
            }, 1250);
          }, 500);
        }

        setTimeout(() => {
          setTimeout(() => {
            if (boxLevel === 0) {
              element.children[0].style.top = 80 + "px";
            }

            if (boxLevel === 1) {
              setPart2(true);

              handleTask();
            }

            setTimeout(() => {
              setBoxLevel((prev) => prev + 1);

              if (boxLevel < 1) {
                dropRefs[index].current.style.opacity = 1;
              }

              setTimeout(() => {
                setDisable(false);

                setPreventHelp(false);
              }, 500);
            }, 500);
          }, 750);
        }, timer2);
      }, timer);
    }, 500);
  };

  const handleDropFinished = (event, element, index, autoBoxIndex) => {
    for (let i = 0; i < boxRefs.length; i++) {
      if (
        (boxRefs[i].current &&
          event.clientX > boxRefs[i].current.getBoundingClientRect().left &&
          event.clientX < boxRefs[i].current.getBoundingClientRect().right &&
          event.clientY > boxRefs[i].current.getBoundingClientRect().top &&
          event.clientY < boxRefs[i].current.getBoundingClientRect().bottom) ||
        autoBoxIndex === i
      ) {
        setIsDropDone((prev) => {
          let list = [...prev];
          list[i] = true;

          return [...list];
        });

        break;
      }
    }

    setPreventHelp(false);
    setBoxDisable((prev) => {
      let list = [...prev];
      list[index] = true;

      return [...list];
    });

    element.style.backgroundColor = "#A0C814";
  };

  useEffect(() => {
    let finish = true;

    for (let i = 0; i < boxDisable.length; i++) {
      if (!boxDisable[i]) {
        finish = false;

        break;
      }
    }

    if (finish) {
      setTimeout(() => {
        setPart2(false);

        setTimeout(() => {
          const cloneList = Array.from(
            document.querySelector("#clone").children
          );

          for (let i = 0; i < cloneList.length; i++) {
            const span = document.createElement("span");
            span.innerHTML = cloneList[i].children[0].getAttribute("letter");
            span.style.weight = "bold";
            span.style.color = "white";

            cloneList[i].children[0].appendChild(span);
          }

          const mainElements = Array.from(lineRefs[0].current.children);

          for (let i = 0; i < mainElements.length; i++) {
            const span = document.createElement("span");
            span.innerHTML = mainElements[i].children[0].getAttribute("letter");
            span.style.weight = "bold";
            span.style.color = "white";
            span.style.backgroundColor = "transparent";

            mainElements[i].children[0].appendChild(span);
          }
        }, 1000);
      }, 500);
    }
  }, [boxDisable]);

  useEffect(() => {
    let finish = true;

    for (let i = 0; i < isDropDone.length; i++) {
      if (!isDropDone[i]) {
        finish = false;
        break;
      }
    }

    if (finish) {
      setPreventHelp(true);
      setNextPart();
    }
  }, [isDropDone]);

  const handleTask = () => {
    setInfoText(
      <>
        Zieh die passende Endung
        <br />
        zum Verbstamm in die Lücke.
      </>
    );

    setInfoOverlay(true);
  };

  useEffect(() => {
    if (helpOverlay) {
      if (!part2) {
        const elementIndex = wordDone[0] ? 1 : 0;

        const element = document.querySelectorAll(".move-word")[elementIndex];

        setPreventHelp(true);

        setHelpFingerPosition([
          element.getBoundingClientRect().left +
            element.getBoundingClientRect().width / 2,
          element.getBoundingClientRect().top +
            element.getBoundingClientRect().height / 2,
        ]);

        setTimeout(() => {
          let dropX;

          dropX =
            dropRefs[0]?.current?.getBoundingClientRect()?.right -
            7.5 -
            element.children[0].getBoundingClientRect()?.width;

          const dropY =
            dropRefs[0]?.current?.getBoundingClientRect()?.top -
            element.getBoundingClientRect().height;

          element.style.transition = "1000ms linear";

          element.style.left =
            dropX - element.getBoundingClientRect().left + "px";

          element.style.top =
            dropY - element.getBoundingClientRect().top + "px";

          setHelpFingerPosition([
            dropX + element.getBoundingClientRect().width / 2,
            dropY + element.getBoundingClientRect().height / 2,
          ]);

          setTimeout(() => {
            handleFinish(true, element, elementIndex, 0);

            setHelpFingerPosition("init");

            setWordDone((prev) => {
              prev[elementIndex] = true;

              return [...prev];
            });
          }, 1250);
        }, 1250);
      } else {
        let elementIndex, boxIndex;

        for (let i = 0; i < boxDisable.length; i++) {
          if (!boxDisable[i]) {
            elementIndex = i;
            break;
          }
        }

        for (let i = 0; i < isDropDone.length; i++) {
          if (lastPart[elementIndex].box.includes(i)) {
            if (!isDropDone[i]) {
              boxIndex = i;

              break;
            }
          }
        }

        const element = document.querySelectorAll(".move-suffix")[elementIndex];

        setPreventHelp(true);

        setHelpFingerPosition([
          element.getBoundingClientRect().left +
            element.getBoundingClientRect().width / 2 -
            10,
          element.getBoundingClientRect().top +
            element.getBoundingClientRect().height / 2,
        ]);

        setTimeout(() => {
          moveFunc(element, blankRefs[boxIndex].current, 1000);

          setHelpFingerPosition([
            blankRefs[boxIndex].current.getBoundingClientRect().left +
              element.getBoundingClientRect().width / 2 -
              10,
            blankRefs[boxIndex].current.getBoundingClientRect().top +
              element.getBoundingClientRect().height / 2,
          ]);

          setTimeout(() => {
            handleDropFinished(true, element, elementIndex, boxIndex);

            element.style.transition = "0s";

            setHelpFingerPosition("init");
            setWordDone((prev) => {
              prev[elementIndex] = true;
              return [...prev];
            });
          }, 1250);
        }, 1250);
      }
    }
  }, [helpOverlay]);

  return (
    <>
      <div className="screen2 screen3">
        <div
          className="last"
          style={{
            opacity: part2 ? 1 : 0,
            pointerEvents: part2 ? "initial" : "none",
            transition: "0.5s linear",
          }}
        >
          {lastPart.map((item, index) => {
            const customMultiple = boxRefs.filter(
              (el, index) => !isDropDone[index] && item.box.includes(index)
            );

            const customDrop = blankRefs.filter(
              (el, index) => !isDropDone[index] && item.box.includes(index)
            );

            return (
              <MovableEdited
                className="move-suffix"
                style={{
                  pointerEvents:
                    boxDisable[index] || !part2 ? "none" : "initial",
                }}
                key={index}
                multipleRefs={customMultiple}
                multipleCustomDrop={customDrop}
                noRight={true}
                noTop={true}
                onFinished={(event, element) =>
                  handleDropFinished(event, element, index)
                }
              >
                <span>{item.word}</span>
              </MovableEdited>
            );
          })}
        </div>

        <div className="words2">
          <div className="line1" ref={lineRefs[0]}>
            {words.map((word, index) => (
              <MovableEdited
                className="move-word"
                key={index}
                style={{
                  pointerEvents: wordDone[index] || disable ? "none" : "",
                }}
                onMove={(x, y, element, event) => handleMove(element, event)}
                onFail={(element) => handleFail(element, index, 1)}
                multipleRefs={boxRefs}
                multipleCustomDrop={dropRefs}
                multipleRefsDisabled={isDone[index]}
                onFinished={(event, element) => {
                  handleFinish(event, element, index);

                  setWordDone((prev) => {
                    let list = [...prev];
                    list[index] = true;

                    return [...list];
                  });
                }}
              >
                {word}
              </MovableEdited>
            ))}
          </div>
        </div>

        <div className="drop-box">
          {labels.map((label, index) => {
            return (
              <div ref={boxRefs[index]} className="box" key={index}>
                <div className="label" ref={labelRef[index]}>
                  {label}
                </div>
                <div className="drop" ref={dropRefs[index]}></div>
                <div className="rest"></div>

                <div
                  className="blank"
                  style={{
                    opacity: part2 ? 1 : 0,
                    pointerEvents: part2 ? "initial" : "none",
                    transition: "0.5s linear",
                  }}
                  ref={blankRefs[index]}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="clone"></div>

      {part > 1 && part <= 3 && (
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

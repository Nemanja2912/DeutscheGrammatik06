import { useEffect, useRef, useState } from "react";
import MovableEdited from "./movable/movableEdited";

const labels = ["Ich", "Wir", "Du", "Ihr", "Er/Sie/Es", "Sie"];

const rest = ["e", "en", "st", "t", "t", "en"];

const words = [
  <>
    <span>fahr</span>
    <span>en</span>
  </>,
  <>
    <span>les</span>
    <span>en</span>
  </>,
  <>
    <span>nehm</span>
    <span>en</span>
  </>,
];

const finishWord = [
  <>
    <span>
      f<span>ä</span>hr
    </span>
    <span>en</span>
  </>,
  <>
    <span>
      l<span>ie</span>
    </span>
    <span>en</span>
  </>,
  <>
    <span>
      n<span>imm</span>
    </span>
    <span>en</span>
  </>,
];

const midList = [
  ["nehme", "fahre", "lese"],
  ["nehmen", "fahren", "lesen"],
  [],
  ["nehmt", "fahrt", "lest"],
  [],
  ["nehmen", "fahren", "lesen"],
];

const Screen3 = ({ setEndButton }) => {
  const [isDone, setIsDone] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ]);
  const [disable, setDisable] = useState(false);

  const [boxLevel, setBoxLevel] = useState(["", "", 0, "", 0, ""]);

  const [wordChnage, setWordChange] = useState([
    [false, false, false],
    [false, false, false],
  ]);

  const [wordDone, setWordDone] = useState([
    [false, false, false],
    [false, false, false],
  ]);

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

  useEffect(() => {
    let finish = true;

    for (let i = 0; i < wordDone.length; i++) {
      for (let j = 0; j < wordDone[i].length; j++) {
        if (!wordDone[i][j]) {
          finish = false;
          break;
        }
      }
    }

    if (finish) {
      setEndButton(true);
    }
  }, [wordDone]);

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

  const handleMove = (element) => {
    element.style.zIndex = 11;
  };

  const handleFail = (element, index, lineIndex) => {
    element.style.zIndex = 10;
    lineRefs[lineIndex].current.children[index].style.zIndex = 9;
  };

  const handleFinish = (event, element, elementIndex, lineIndex) => {
    let index = -1;
    setDisable(true);

    console.log(isDone[elementIndex]);

    for (let i = 0; i < boxRefs.length; i++) {
      if (isDone[elementIndex][i] === true) continue;

      if (
        boxRefs[i].current &&
        event.clientX > boxRefs[i].current.getBoundingClientRect().left &&
        event.clientX < boxRefs[i].current.getBoundingClientRect().right &&
        event.clientY > boxRefs[i].current.getBoundingClientRect().top &&
        event.clientY < boxRefs[i].current.getBoundingClientRect().bottom
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

    setTimeout(() => {
      element.children[1].style.transition = "0.5s linear";
      element.children[1].style.background = "#1268B1";

      let timer = 1000;

      setTimeout(() => {
        element.children[0].style.transition = "0.5s linear";
        element.children[0].style.top = 38 + "px";

        element.children[1].style.top = -20 + "px";
        element.children[1].style.opacity = 0;

        dropRefs[index].current.style.opacity = 0;

        element.style.background = "transparent";

        let timer2 = 500;

        setTimeout(() => {
          setWordChange((prev) => {
            let list = [...prev];
            list[lineIndex][elementIndex] = true;

            return [...list];
          });

          setTimeout(() => {
            const restElement =
              restRefs[index].current.children[boxLevel[index]];

            const restX = restElement.getBoundingClientRect().left;

            restElement.style.left =
              element.children[0].getBoundingClientRect().right - restX + "px";

            setTimeout(() => {
              if (boxLevel[index] === 0) {
                element.children[0].style.top = 80 + "px";
                restElement.style.top = 42 + "px";
              }

              setTimeout(() => {
                if (boxLevel[index] === 1) {
                  labelRef[index].current.style.top = -45 + "px";
                  dropRefs[index].current.style.top = -45 + "px";
                  restRefs[index].current.children[2].style.top = -45 + "px";
                }

                setBoxLevel((prev) => {
                  const list = [...prev];
                  list[index] += 1;

                  return [...list];
                });

                if (boxLevel[index] < 2) {
                  dropRefs[index].current.style.opacity = 1;
                }

                setTimeout(() => {
                  setDisable(false);
                }, 500);
              }, 500);
            }, 750);
          }, 500);
        }, timer2);
      }, timer);
    }, 500);
  };

  return (
    <>
      <div className="screen2 screen3">
        <div className="words2">
          <div className="line1" ref={lineRefs[0]}>
            {words.map((word, index) => (
              <MovableEdited
                key={index}
                style={{
                  pointerEvents: wordDone[0][index] || disable ? "none" : "",
                  backgroundColor: "#5ac8f5",
                }}
                onMove={(x, y, element, event) => handleMove(element, event)}
                onFail={(element) => handleFail(element, index, 1)}
                multipleRefs={boxRefs}
                multipleRefsDisabled={isDone[index]}
                onFinished={(event, element) => {
                  handleFinish(event, element, index, 0);

                  setWordDone((prev) => {
                    let list = [...prev];
                    list[0][index] = true;

                    return [...list];
                  });
                }}
                multipleCustomDrop={dropRefs}
              >
                {wordChnage[0][index] ? finishWord[index] : word}
              </MovableEdited>
            ))}
          </div>
          <div className="line2" ref={lineRefs[1]}>
            {words.map((word, index) => (
              <MovableEdited
                key={index}
                style={{
                  pointerEvents: wordDone[1][index] || disable ? "none" : "",
                  backgroundColor: "#5ac8f5",
                }}
                onMove={(x, y, element, event) => handleMove(element, event)}
                onFail={(element) => handleFail(element, index, 0)}
                multipleRefs={boxRefs}
                multipleRefsDisabled={isDone[index]}
                onFinished={(event, element) => {
                  handleFinish(event, element, index, 1);

                  setWordDone((prev) => {
                    let list = [...prev];
                    list[1][index] = true;

                    return [...list];
                  });
                }}
                multipleCustomDrop={dropRefs}
              >
                {wordChnage[1][index] ? finishWord[index] : word}
              </MovableEdited>
            ))}
          </div>
        </div>

        <div className="drop-box">
          {labels.map((label, index) => {
            if (index === 2 || index === 4) {
              return (
                <div ref={boxRefs[index]} className="box" key={index}>
                  <div className="label" ref={labelRef[index]}>
                    {label}
                  </div>
                  <div className="drop" ref={dropRefs[index]}></div>
                  <div className="rest" ref={restRefs[index]}>
                    <p>{rest[index]}</p>
                    <p style={{ opacity: boxLevel[index] > 0 ? 1 : 0 }}>
                      {rest[index]}
                    </p>
                    <p style={{ opacity: boxLevel[index] > 1 ? 1 : 0 }}>
                      {rest[index]}
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="box" key={index}>
                  <div className="label">{label}</div>
                  <div className="list">
                    {midList[index].map((word, index) => (
                      <p key={index}>{word}</p>
                    ))}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div id="letter"></div>
    </>
  );
};

export default Screen3;

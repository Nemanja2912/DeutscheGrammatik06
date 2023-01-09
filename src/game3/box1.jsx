import StatusBar from "../UI/StatusBar";
import Movable from "../reusable/movable/movable";
import { useEffect, useRef, useState } from "react";
import moveFunc from "../reusable/movable/moveFunc";

const move = [
  { word: "Subjekt", box: 2 },
  { word: "Endung", box: 1 },
  { word: "Verbstamm", box: 0 },
];

const Box1 = ({ part, setNextPart }) => {
  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>Zieh die Elemente und formuliere die Regel.</>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  const lineRefs = [useRef(null), useRef(null), useRef(null)];
  const [isFinish, setIsFinish] = useState(false);

  const [isDone, setIsDone] = useState([false, false, false]);

  const handleFinish = (index, element) => {
    element.style.zIndex = 9;

    setIsDone((prev) => {
      let list = [...prev];
      list[index] = true;

      return [...list];
    });
  };

  const handleMove = (element) => {
    element.style.zIndex = 10;
  };

  const handleFail = (element) => {
    element.style.zIndex = 9;
  };

  useEffect(() => {
    let finish = true;

    for (let i = 0; i < isDone.length; i++) {
      if (!isDone[i]) {
        finish = false;
        break;
      }
    }

    if (finish) {
      setIsFinish(true);

      setTimeout(() => {
        setNextPart();
      }, 500);
    }
  }, [isDone]);

  useEffect(() => {
    if (helpOverlay) {
      let boxIndex = -1;

      for (let i = 0; i < isDone.length; i++)
        if (!isDone[i]) {
          boxIndex = i;
          break;
        }

      const element = document.querySelectorAll(".move-box")[boxIndex];

      element.style.zIndex = "100";

      setHelpFingerPosition([
        element.getBoundingClientRect().left +
          element.getBoundingClientRect().width / 2,
        element.getBoundingClientRect().top +
          element.getBoundingClientRect().height / 2,
      ]);

      setTimeout(() => {
        moveFunc(element, lineRefs[move[boxIndex].box].current, 1000);

        setHelpFingerPosition([
          lineRefs[move[boxIndex].box].current.getBoundingClientRect().left +
            element.getBoundingClientRect().width / 2,
          lineRefs[move[boxIndex].box].current.getBoundingClientRect().top +
            element.getBoundingClientRect().height / 2,
        ]);

        setTimeout(() => {
          element.style.transition = "0s";
          handleFinish(boxIndex, element);

          setTimeout(() => {
            setHelpFingerPosition("init");
          }, 250);
        }, 1250);
      }, 1250);
    }
  }, [helpOverlay]);

  return (
    <>
      <div className="box1" style={{ height: isFinish ? 150 : 200 }}>
        <div className="body">
          <div className="box-line">
            Das Präsens bildet man mit dem{" "}
            <div className="box-blank" ref={lineRefs[0]}></div>
          </div>
          <div className="box-line">
            und einer <div className="box-blank" ref={lineRefs[1]}></div>.
          </div>
          <div className="box-line">
            Die richtige Endung zeigt das{" "}
            <div className="box-blank" ref={lineRefs[2]}></div>.
          </div>
        </div>
        <div className="box-words">
          {move.map((item, index) => (
            <div
              style={{ pointerEvents: isDone[index] ? "none" : "initial" }}
              key={index}
            >
              <Movable
                className="move-box"
                style={{
                  backgroundColor: isDone[index] ? "#A0C814" : "#5ac8f5",
                }}
                onMove={(x, y, element) => handleMove(element)}
                onFail={(element) => handleFail(element)}
                targetRef={lineRefs[item.box]}
                onFinished={(event, element) => handleFinish(index, element)}
              >
                {item.word}
              </Movable>
            </div>
          ))}
        </div>
      </div>

      {part === 0 && (
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

export default Box1;

import Movable from "../reusable/movable/movable";
import { useEffect, useRef, useState } from "react";

const move = [
  { word: "Subjekt", box: 2 },
  { word: "Endung", box: 1 },
  { word: "Verbstamm", box: 0 },
];

const Box1 = ({ setNextPart }) => {
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

  return (
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
              style={{ backgroundColor: isDone[index] ? "#A0C814" : "#5ac8f5" }}
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
  );
};

export default Box1;

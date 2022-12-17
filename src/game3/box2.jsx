import Movable from "../reusable/movable/movable";
import { useEffect, useRef, useState } from "react";

const move = [
  { word: "i/ie", box: 2 },
  { word: "2. und 3. Person", box: 0 },
  { word: "ä/äu", box: 1 },
];

const Box2 = ({ setNextPart, hide }) => {
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
    <div className="box2" style={{ height: isFinish ? 200 : 255 }}>
      <div className="body">
        <div className="box-line">
          Einige unregelmäßige Verben (fahren, sprechen) bekommen einen anderen
        </div>
        <div className="box-line" style={{ marginTop: 10 }}>
          Vokal im Verbstamm. Das passiert in der
          <div className="box-blank" ref={lineRefs[0]}></div>
          Singular.
        </div>
        <div className="box-line" style={{ marginTop: 10 }}>
          a/au wird zu <div className="box-blank" ref={lineRefs[1]}></div>.
        </div>
        <div className="box-line" style={{ marginTop: 10 }}>
          e wird zu
          <div className="box-blank" ref={lineRefs[2]}></div>.
        </div>
      </div>
      <div className="box-words">
        {move.map((item, index) => (
          <div
            style={{
              pointerEvents: hide || isDone[index] ? "none" : "initial",
            }}
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

export default Box2;

import React, { useRef, useState, useEffect } from "react";
import DetailsBox from "../UI/DetailsBox";
import InteractiveLine from "./InteractiveLine";
import MovableItem from "../UI/MovableItem";

const InteractiveBox = ({
  content,
  children,
  nextLevel,
  wordRefs,
  finished,
  setFinished,
  boxRefs,
  details = true,
}) => {
  const wrapperRef = useRef(null);

  const [completed, setCompleted] = useState(false);

  const detailRef = useRef(null);

  const [detailsText, setDetailsText] = useState(
    <>
      Richtig! Hier ist ein <br /> Beispiel: <br />
      das Wohnzimmer
    </>
  );
  const [detailsShow, setDetailsShow] = useState(false);

  useEffect(() => {
    let isDone = true;

    for (let i = 0; i < finished.length; i++) {
      if (!finished[i]) {
        isDone = false;
        break;
      }
    }

    if (isDone) {
      setCompleted(true);

      setTimeout(() => {
        nextLevel();
      }, 500);
      wrapperRef.current.style.maxHeight =
        wrapperRef.current.getBoundingClientRect().height - 35 + "px";
    }
  }, [finished]);

  const handleFinish = (index) => {
    setFinished((prev) => {
      prev[index] = true;

      return [...prev];
    });

    if (!details || detailsShow) return;

    if (index === 0) {
      setDetailsText(
        <>
          Richtig! Hier ist ein <br /> Beispiel: <br />
          das Wohnzimmer
        </>
      );
    } else {
      setDetailsText(
        <>
          Richtig! Hier ist ein <br /> Beispiel: <br />
          das Wohnzimmer
        </>
      );
    }

    setTimeout(() => {
      setDetailsShow(true);

      setTimeout(() => {
        setDetailsShow(false);
      }, 2000);
    }, 500);

    detailRef.current.style.left =
      boxRefs[index].current.getBoundingClientRect().left -
      detailRef.current.getBoundingClientRect().width / 2 +
      boxRefs[index].current.getBoundingClientRect().width / 2 +
      "px";
    detailRef.current.style.top =
      boxRefs[index].current.getBoundingClientRect().top -
      detailRef.current.getBoundingClientRect().height -
      25 +
      "px";
  };

  return (
    <>
      <div className="interactive-box" ref={wrapperRef}>
        {children}

        {content.lines.map((line, index) => (
          <InteractiveLine
            blankRef={boxRefs[index]}
            pre={line.pre}
            post={line.post}
          />
        ))}

        <div className="boxes">
          {content.words.map((word, index) => {
            return (
              <>
                {!(!(index < content.lines.length) && completed) && (
                  <MovableItem
                    text={word}
                    wordRef={wordRefs[index]}
                    trueRef={boxRefs[index]}
                    finish={finished[index]}
                    setFinish={() => handleFinish(index)}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
      <div
        className="details-wrapper"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "max-content",
          opacity: detailsShow ? 1 : 0,
          transition: "0.5s linear",
          pointerEvents: "none",
        }}
        ref={detailRef}
      >
        {<DetailsBox width="max-content">{detailsText}</DetailsBox>}
      </div>
    </>
  );
};

export default InteractiveBox;

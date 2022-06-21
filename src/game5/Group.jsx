import React from "react";
import MovableItem from "../UI/MovableItem";

const Group = ({
  dropRefs,
  step,
  answer,
  level,
  boxRefs,
  interactiveWords,
  interactiveRefs,
  setStep,
  finished,
  setFinished,
  handleAnswer,
  boxPos,
  dropWords,
  images,
}) => {
  return (
    <>
      <div className="image">
        <img
          className={step < 5 && "move-animation"}
          src={images[level]}
          alt=""
          style={{
            left: step === 6 ? -500 : 400,
          }}
        />
      </div>
      <div className={`drop-zones ${step < 5 && "move-animation"}`}>
        <div
          className="drop"
          ref={dropRefs[0]}
          style={{
            opacity: step >= 1 ? 0 : 1,
            left:
              level === 0
                ? 90
                : (step >= 2 && answer[level][0] !== 0) || step >= 5
                ? -1000
                : 0,
            pointerEvents: step >= 1 ? "none" : "initial",
            transition:
              answer[level][0] === 0 && step !== 0
                ? "0s linear"
                : "0.5s linear",
          }}
        >
          <div className="blank" ref={boxRefs[0]}>
            <p>?</p>
          </div>
          <div className="word-box">
            <span>{dropWords[level][0].split(" ")[0]}</span>
            <span>{dropWords[level][0].split(" ")[1]}</span>
          </div>
        </div>
        <div
          className="drop"
          ref={dropRefs[1]}
          style={{
            opacity: step >= 1 ? 0 : 1,
            left:
              level === 0
                ? -85
                : (step >= 2 && answer[level][0] !== 1) || step >= 5
                ? -1000
                : 0,
            pointerEvents: step >= 1 ? "none" : "initial",
            transition:
              answer[level][0] === 1 && step !== 0
                ? "0s linear"
                : "0.5s linear",
          }}
        >
          <div className="word-box">
            <span>{dropWords[level][1].split(" ")[0]}</span>
            <span>{dropWords[level][1].split(" ")[1]}</span>
          </div>
          <div className="blank" ref={boxRefs[1]}>
            <p>?</p>
          </div>
        </div>
      </div>
      <div className={`interactive-word ${step < 5 && "move-animation"}`}>
        {interactiveWords[level].map((word, index) => (
          <div
            style={{
              position: "relative",
              top: step >= 1 && answer[level][1] !== index ? "100vh" : 0,
              opacity: step >= 1 && answer[level][1] === index ? 0 : 1,
              transition: "0.5s linear",
            }}
          >
            <MovableItem
              wordRef={interactiveRefs[index]}
              trueRef={answer[level][1] === index && boxRefs[answer[level][0]]}
              text={
                <>
                  <span>{word.split(" ")[0]}</span>
                  <span>{word.split(" ")[1]}</span>
                </>
              }
              setFinish={() => {
                setFinished();

                setTimeout(() => {
                  setStep(1);
                }, 500);
              }}
              finish={answer[level][1] === index && finished}
            />
          </div>
        ))}
      </div>

      <div
        className="clone-boxes clone-box0"
        style={{
          left: boxPos[0],
          top: boxPos[1],
          opacity: step >= 1 && step < 5 ? 1 : 0,
          transition: step >= 2 && step < 5 ? "0.5s linear" : "0s linear",
        }}
      >
        <div className={`box  ${answer[level][0] === 1 ? "box-swipe" : ""}`}>
          <span
            className={`${answer[level][0] === 1 ? "choose-box" : ""} ${
              step === 3 ? "choose" : ""
            }`}
            onClick={() => {
              if (answer[level][0] === 1) {
                handleAnswer();
              }
            }}
          >
            {interactiveWords[level][answer[level][1]].split(" ")[0]}
          </span>
          <span>{interactiveWords[level][answer[level][1]].split(" ")[1]}</span>
        </div>
        <div className="box">
          <span
            className={`${answer[level][0] === 0 ? "choose-box" : ""} ${
              step === 3 ? "choose" : ""
            }`}
            onClick={() => {
              if (answer[level][0] === 0) {
                handleAnswer();
              }
            }}
          >
            {dropWords[level][answer[level][0]].split(" ")[0]}
          </span>
          <span>{dropWords[level][answer[level][0]].split(" ")[1]}</span>
        </div>
        <div className="background"></div>
      </div>
    </>
  );
};

export default Group;

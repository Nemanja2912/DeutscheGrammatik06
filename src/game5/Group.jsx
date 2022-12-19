import { useState } from "react";
import GuessWord from "../UI/GuessWord";

const Group = ({ item, setGroupIndex, groupIndex, index, style }) => {
  const [disable, setDisable] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const handleSuccess = () => {
    setDisable(true);
  };

  const returnKeyboardStatus = (status) => {
    setKeyboardStatus(status);
  };

  const handleNext = () => {
    setGroupIndex();
  };

  return (
    <>
      <div style={{ ...style }}>
        <div
          className="group"
          style={{
            transform:
              !keyboardStatus || disable
                ? "translateY(0px)"
                : "translateY(-215px)",
            animationName: index === 0 ? "none" : "opacity",
            opacity: index === 0 ? 1 : 0,
          }}
        >
          <img
            src={item?.image}
            className={`${disable ? "show-img" : "blur-img"}`}
            alt=""
          />

          <div className="box">{item?.boxWord}</div>

          <div className="line">
            <p>{item?.text[0]}</p>
            <div
              className="wrapper"
              style={{ backgroundColor: disable ? "#A0C814" : "#5ac8f5" }}
            >
              <GuessWord
                word={item?.guess}
                // getWordBack={getWordBack}
                returnKeyboardStatus={returnKeyboardStatus}
                keyboardStatus={keyboardStatus}
                success={handleSuccess}
                disable={disable}
                customDisable={false}
              />
            </div>
            <p>{item?.text[1]}</p>
          </div>
        </div>
      </div>
      {disable && groupIndex === index && (
        <div
          className="wrapper"
          style={{
            width: 1000,
            position: "absolute",
            top: 0,
            bottom: 50,
          }}
        >
          <div
            className="button-show"
            style={{ margin: "auto", left: 0, right: 0 }}
            onClick={handleNext}
          >
            WEITER
          </div>
        </div>
      )}
    </>
  );
};

export default Group;

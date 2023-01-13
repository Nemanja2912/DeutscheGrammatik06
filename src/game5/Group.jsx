import { useEffect, useState } from "react";
import GuessWord from "../UI/GuessWord";

const Group = ({
  item,
  setGroupIndex,
  groupIndex,
  index,
  style,
  last,
  keyboardGlobal,
  setKeyboardGlobal,
}) => {
  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("disable");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>
      Wie heißt das Präsens?
      <br />
      Schreib die richtige Form.
    </>
  );
  const [infoOverlay, setInfoOverlay] = useState(index === 0);

  const [firstTime, setFirstTime] = useState(true);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleSuccess = () => {
    setDisable(true);
  };

  const returnKeyboardStatus = (status) => {
    setKeyboardStatus(status);

    setKeyboardGlobal(status);
  };

  const handleNext = () => {
    if (last) {
      setInfoText(
        <>
          Das war die letzte Aufgabe.
          <br /> Du kannst im Menü eine andere Aufgabe auswählen und sie
          wiederholen.
        </>
      );

      setInfoTitle("ENDE");

      setInfoOverlay(true);
    } else {
      setGroupIndex();
    }
  };

  useEffect(() => {
    if (firstTime && !infoOverlay && keyboardGlobal) {
      setFirstTime(false);

      setTimeout(
        () => {
          setKeyboardStatus(true);
        },
        index === 0 ? 0 : 750
      );
    }
  }, [firstTime, infoOverlay]);

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
                returnKeyboardStatus={returnKeyboardStatus}
                keyboardStatus={keyboardStatus}
                success={handleSuccess}
                disable={disable}
                customDisable={false}
                infoText={infoText}
                infoOverlay={infoOverlay}
                setInfoOverlay={setInfoOverlay}
                helpOverlay={helpOverlay}
                setHelpOverlay={setHelpOverlay}
                preventHelp={preventHelp}
                helpFingerPosition={helpFingerPosition}
                infoTitle={infoTitle}
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
            {last ? "ENDE" : "WEITER"}
          </div>
        </div>
      )}
    </>
  );
};

export default Group;

import React, { useState, useRef, useEffect, createRef } from "react";

import "../css/game4.css";
import StatusBar from "./../UI/StatusBar";
import Line from "./Line";

import Image1 from "../assets/img/a4/suppe.png";
import Image2 from "../assets/img/a4/kuchen.png";
import Image3 from "../assets/img/a4/eis.png";

const answer = [
  ["die", "Internet", "seite"],
  ["die", "Gemüse", "suppe"],
  ["der", "Obst", "kuchen"],
  ["das", "Vanille", "eis"],
  ["der", "Koch", "kurs"],
  ["das", "Wochen", "ende"],
];

const Game4 = ({ nextLesson }) => {
  const [helpOverlay, setHelpOverlay] = useState(false);
  const [helpFingerPosition, setHelpFingerPosition] = useState("init");
  const [preventHelp, setPreventHelp] = useState(false);
  const [infoTitle, setInfoTitle] = useState();
  const [infoText, setInfoText] = useState(
    <>
      Welche Frage passt?
      <br />
      Klicke sie an.
    </>
  );
  const [infoOverlay, setInfoOverlay] = useState(true);

  const [endButton, setEndButton] = useState(true);
  const [btnText, setBtnText] = useState("Prüfen");

  const [finished, setFinished] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const btnRef = useRef(null);

  const [options, setOptions] = useState([
    ["der", "die", "das"],
    ["Koch", "Gemüse", "Obst", "Wochen", "Internet", "Vanille"],
    ["ende", "kuchen", "suppe", "eis", "kurs", "seite"],
  ]);

  const handleCheck = () => {
    const lines = document.querySelectorAll(".line");

    for (let i = 0; i < finished.length; i++) {
      if (!finished[i]) {
        let isDone = true;
        for (let j = 0; j < lines[i].children.length; j++) {
          if (
            lines[i].children[j].children[0].children[0].innerHTML !==
            answer[i][j]
          ) {
            isDone = false;
            break;
          }
        }

        if (isDone) {
          setFinished((prev) => {
            prev[i] = true;

            return [...prev];
          });

          setOptions((prev) => {
            prev[1] = [...prev[1].filter((item) => item !== answer[i][1])];
            prev[2] = [...prev[2].filter((item) => item !== answer[i][2])];

            return [...prev];
          });
        }
      }
    }
  };

  useEffect(() => {
    let isDone = true;

    for (let i = 0; i < finished.length; i++) {
      if (!finished[i]) {
        isDone = false;
        break;
      }
    }

    if (isDone) {
      setPreventHelp(true);
      setBtnText("Weiter");
    }
  }, [finished]);

  useEffect(() => {
    if (!helpOverlay) return;

    const lines = document.querySelectorAll(".line");
    let index = 0;

    for (let i = 0; i < finished.length; i++) {
      if (!finished[i]) {
        index = i;
        break;
      }
    }

    let lineSet = true;

    for (let j = 0; j < lines[index].children.length; j++) {
      const list = lines[index].children[j].children[0].children;
      const element = list[0];

      if (element.innerHTML !== answer[index][j]) {
        lineSet = false;
        setHelpFingerPosition([
          element.getBoundingClientRect().left +
            element.getBoundingClientRect().width / 2 -
            10,
          element.getBoundingClientRect().top +
            element.getBoundingClientRect().height / 2,
        ]);

        setTimeout(() => {
          element.click();

          let answerIndex = 0;

          for (let k = 0; k < list.length; k++) {
            if (list[k].innerHTML === answer[index][j]) {
              answerIndex = k;
              break;
            }
          }

          setTimeout(() => {
            setHelpFingerPosition([
              list[answerIndex].getBoundingClientRect().left +
                list[answerIndex].getBoundingClientRect().width / 2 -
                10,
              list[answerIndex].getBoundingClientRect().top +
                list[answerIndex].getBoundingClientRect().height / 2,
            ]);

            setTimeout(() => {
              list[answerIndex].click();

              setTimeout(() => {
                setHelpFingerPosition("init");
              }, 250);
            }, 1250);
          }, 250);
        }, 1250);

        break;
      }
    }

    if (lineSet) {
      setHelpFingerPosition([
        btnRef.current.getBoundingClientRect().left +
          btnRef.current.getBoundingClientRect().width / 2 -
          10,
        btnRef.current.getBoundingClientRect().top +
          btnRef.current.getBoundingClientRect().height / 2,
      ]);

      setTimeout(() => {
        btnRef.current.click();

        setTimeout(() => {
          setHelpFingerPosition("init");
        }, 250);
      }, 1250);
    }
  }, [helpOverlay]);

  return (
    <>
      <div className="game4">
        <div className="wrapper">
          <Line options={options} done={finished[0]} />
          <p>www.lecker essen.de </p>
        </div>
        <p style={{ marginBottom: 15 }}>hat das Essen für jeden Geschmack!</p>
        <h3>
          <b>Heute</b> <b>im</b> <b>Angebot:</b>
        </h3>
        <div className="wrapper">
          <p className="dash">-</p>
          <Line options={options} done={finished[1]} />
          <p>mit Kartoffeln und Karotten</p>
          <div className="image">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="wrapper">
          <p className="dash">-</p>
          <Line options={options} done={finished[2]} />
          <p>mit Äpfeln und Sahne</p>
          <div className="image">
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="wrapper" style={{ marginBottom: 15 }}>
          <p className="dash">-</p>
          <Line options={options} done={finished[3]} />
          <p>in der Waffel</p>
          <div className="image">
            <img src={Image3} alt="" />
          </div>
        </div>

        <h3>
          <b>Lernen</b> <b>Sie</b> <b>auch</b> <b>kochen?</b>
        </h3>

        <div className="wrapper">
          <p className="dash"> Dann ist </p>
          <Line options={options} done={finished[4]} />
          <p>„geschnitten-gekocht-gegessen“</p>
        </div>

        <p style={{ marginBottom: 15 }}> genau richtig für Sie!</p>

        <div className="wrapper">
          <p className="dash">Der nächste Termin ist</p>
          <Line options={options} done={finished[5]} />
          <p>nach den Ferien!</p>
        </div>

        <p>Kommen Sie vorbei!</p>
      </div>
      <StatusBar
        infoText={infoText}
        infoOverlay={infoOverlay}
        setInfoOverlay={setInfoOverlay}
        setHelpOverlay={setHelpOverlay}
        preventHelp={preventHelp}
        helpFingerPosition={helpFingerPosition}
        infoTitle={infoTitle}
      />
      {endButton && (
        <div
          className="wrapper"
          style={{ width: 1000, position: "absolute", bottom: 30 }}
        >
          <div
            className="button-show"
            style={{ margin: "auto", left: 0, right: 0 }}
            onClick={() => {
              if (btnText === "Weiter") {
                nextLesson();
              } else {
                handleCheck();
              }
            }}
            ref={btnRef}
          >
            {btnText}
          </div>
        </div>
      )}
    </>
  );
};

export default Game4;

import React, { useEffect } from "react";

const Tape = ({ move, index, tapeWords, level, finalAnimation }) => {
  useEffect(() => {
    if (move) {
      const boxes = Array.from(document.querySelectorAll(".move-box"));

      let side;

      for (let i = 0; i < level; i++) {
        if (
          tapeWords[level][1][0].toLowerCase() ===
          tapeWords[i][1][1].toLowerCase()
        ) {
          side = "right";

          boxes[level].children[1].children[0].classList.add("blury");
          boxes[i].children[1].children[1].classList.add("blury");

          setTimeout(() => {
            boxes[level].children[1].children[0].classList.remove("blury");
            boxes[i].children[1].children[1].classList.remove("blury");
          }, 1000);

          break;
        } else if (
          tapeWords[level][1][1].toLowerCase() ===
          tapeWords[i][1][0].toLowerCase()
        ) {
          side = "left";

          boxes[level].children[1].children[1].classList.add("blury");
          boxes[i].children[1].children[0].classList.add("blury");

          setTimeout(() => {
            boxes[level].children[1].children[1].classList.remove("blury");
            boxes[i].children[1].children[0].classList.remove("blury");
          }, 1000);

          break;
        }
      }

      if (!side) {
        boxes[0].dataset.position = 0;
      }

      if (side === "right") {
        boxes[level].dataset.position = level;

        boxes[level].style.left = 425 + 75 * level + "px";
      }

      if (side === "left") {
        for (let i = 0; i <= level; i++) {
          if (isNaN(+boxes[i].dataset.position)) {
            boxes[i].dataset.position = 0;
          } else {
            boxes[i].dataset.position = +boxes[i].dataset.position + 1;
          }
        }

        boxes[level].style.left = 425 - 75 * level + "px";
      }

      for (let i = 0; i < level; i++) {
        if (side === "left") {
          boxes[i].style.left =
            boxes[i].getBoundingClientRect().left + 75 + "px";
        } else {
          boxes[i].style.left =
            boxes[i].getBoundingClientRect().left - 75 + "px";
        }
      }
    }
  }, [move, level]);

  useEffect(() => {
    if (!finalAnimation) return;

    const boxes = Array.from(document.querySelectorAll(".move-box"));

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.transition = "1s linear";

      boxes[i].style.left =
        boxes[i].getBoundingClientRect().left + window.innerWidth + "px";
    }
  }, [finalAnimation]);

  return (
    <div className="tape">
      <div className="boxes">
        {tapeWords.map((words, wordsIndex) => (
          <div
            className="box move-box"
            style={{
              top:
                (move && index === wordsIndex) || index > wordsIndex
                  ? 574
                  : 339,
              opacity:
                (move && index === wordsIndex) || index > wordsIndex ? 1 : 0,
            }}
          >
            <p>{words[0]}</p>
            <p>
              <span>{words[1][0]}</span>
              <span>{words[1][1]}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tape;
